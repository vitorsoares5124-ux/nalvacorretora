-- ==============================================================================
-- SCHEMA SUPABASE: RA IMÓVEIS (Roberto Andrade)
-- Tabelas: imoveis, imoveis_imagens, leads
-- Storage: bucket 'imoveis' com RLS
-- Políticas de Segurança (RLS) e Seeds de Demonstração (is_demo = true)
-- ==============================================================================

-- 1. Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Criação de Tipos ENUM para consistência de dados
DO $$ BEGIN
    CREATE TYPE imovel_finalidade AS ENUM ('venda', 'aluguel', 'temporada');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE imovel_status AS ENUM ('disponivel', 'indisponivel', 'reservado', 'vendido', 'alugado');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 3. Tabela 'imoveis'
CREATE TABLE IF NOT EXISTS public.imoveis (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo VARCHAR(50) UNIQUE NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    finalidade imovel_finalidade NOT NULL DEFAULT 'venda',
    tipo VARCHAR(100) NOT NULL, -- Casa, Apartamento, Cobertura, Terreno, Comercial, etc.
    status imovel_status NOT NULL DEFAULT 'disponivel',
    preco NUMERIC(14, 2) NOT NULL,
    preco_condominio NUMERIC(10, 2) DEFAULT 0,
    preco_iptu NUMERIC(10, 2) DEFAULT 0,
    aceita_financiamento BOOLEAN DEFAULT true,
    quartos INTEGER DEFAULT 0,
    suites INTEGER DEFAULT 0,
    banheiros INTEGER DEFAULT 0,
    vagas INTEGER DEFAULT 0,
    area_util NUMERIC(10, 2) DEFAULT 0,
    area_total NUMERIC(10, 2) DEFAULT 0,
    cidade VARCHAR(120) NOT NULL,
    bairro VARCHAR(120) NOT NULL,
    uf VARCHAR(2) NOT NULL DEFAULT 'SP',
    cep VARCHAR(10),
    rua VARCHAR(255),
    numero VARCHAR(50),
    latitude NUMERIC(10, 7),
    longitude NUMERIC(10, 7),
    caracteristicas JSONB DEFAULT '[]'::jsonb, -- Array de tags: ["Piscina", "Varanda Gourmet", "Segurança 24h"]
    destaque BOOLEAN DEFAULT false,
    is_demo BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Garantir coluna 'is_demo' para bancos já existentes
ALTER TABLE public.imoveis ADD COLUMN IF NOT EXISTS is_demo BOOLEAN DEFAULT false;

-- 4. Trigger para atualizar 'updated_at' automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS tr_imoveis_updated_at ON public.imoveis;
CREATE TRIGGER tr_imoveis_updated_at
    BEFORE UPDATE ON public.imoveis
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 5. Tabela 'imoveis_imagens'
CREATE TABLE IF NOT EXISTS public.imoveis_imagens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    imovel_id UUID NOT NULL REFERENCES public.imoveis(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    ordem INTEGER NOT NULL DEFAULT 0,
    capa BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 6. Tabela 'leads'
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    imovel_id UUID REFERENCES public.imoveis(id) ON DELETE SET NULL,
    nome VARCHAR(255) DEFAULT 'Interessado via WhatsApp',
    telefone VARCHAR(50) DEFAULT 'Pendente WhatsApp',
    mensagem TEXT,
    origem VARCHAR(100) DEFAULT 'site_vitrine',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Garantir que 'nome' e 'telefone' possam ser opcionais no registro rápido de lead
ALTER TABLE public.leads ALTER COLUMN nome DROP NOT NULL;
ALTER TABLE public.leads ALTER COLUMN telefone DROP NOT NULL;

-- 7. Índices para performance em buscas e vitrine
CREATE INDEX IF NOT EXISTS idx_imoveis_status ON public.imoveis(status);
CREATE INDEX IF NOT EXISTS idx_imoveis_destaque ON public.imoveis(destaque);
CREATE INDEX IF NOT EXISTS idx_imoveis_finalidade ON public.imoveis(finalidade);
CREATE INDEX IF NOT EXISTS idx_imoveis_cidade_bairro ON public.imoveis(cidade, bairro);
CREATE INDEX IF NOT EXISTS idx_imoveis_preco ON public.imoveis(preco);
CREATE INDEX IF NOT EXISTS idx_imoveis_is_demo ON public.imoveis(is_demo);
CREATE INDEX IF NOT EXISTS idx_imoveis_imagens_imovel_id ON public.imoveis_imagens(imovel_id);
CREATE INDEX IF NOT EXISTS idx_leads_imovel_id ON public.leads(imovel_id);

-- ==============================================================================
-- 8. ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.imoveis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.imoveis_imagens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Limpar policies existentes para garantir idempotência
DROP POLICY IF EXISTS "Leitura pública de imóveis disponíveis" ON public.imoveis;
DROP POLICY IF EXISTS "Acesso total a imóveis para usuários autenticados" ON public.imoveis;
DROP POLICY IF EXISTS "Leitura pública de imagens de imóveis disponíveis" ON public.imoveis_imagens;
DROP POLICY IF EXISTS "Acesso total a imagens para usuários autenticados" ON public.imoveis_imagens;
DROP POLICY IF EXISTS "Visitantes podem enviar leads" ON public.leads;
DROP POLICY IF EXISTS "Apenas corretores autenticados visualizam leads" ON public.leads;

-- POLICIES: imoveis
-- Leitura pública: apenas imóveis com status 'disponivel'
CREATE POLICY "Leitura pública de imóveis disponíveis"
    ON public.imoveis
    FOR SELECT
    USING (status = 'disponivel');

-- Gestão completa (INSERT, UPDATE, DELETE): apenas usuários autenticados
CREATE POLICY "Acesso total a imóveis para usuários autenticados"
    ON public.imoveis
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- POLICIES: imoveis_imagens
-- Leitura pública: imagens vinculadas a imóveis com status 'disponivel'
CREATE POLICY "Leitura pública de imagens de imóveis disponíveis"
    ON public.imoveis_imagens
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.imoveis i
            WHERE i.id = imoveis_imagens.imovel_id
            AND i.status = 'disponivel'
        )
    );

-- Gestão de imagens: apenas autenticados
CREATE POLICY "Acesso total a imagens para usuários autenticados"
    ON public.imoveis_imagens
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- POLICIES: leads
-- Inserção pública: qualquer visitante pode registrar interesse
CREATE POLICY "Visitantes podem enviar leads"
    ON public.leads
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Visualização de leads: restrito a usuários autenticados (admin / corretores)
CREATE POLICY "Apenas corretores autenticados visualizam leads"
    ON public.leads
    FOR SELECT
    TO authenticated
    USING (true);

-- ==============================================================================
-- 9. SUPABASE STORAGE: BUCKET 'imoveis' & POLICIES
-- ==============================================================================

-- Criação do bucket público caso não exista
INSERT INTO storage.buckets (id, name, public)
VALUES ('imoveis', 'imoveis', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Limpar policies de storage anteriores
DROP POLICY IF EXISTS "Leitura pública de imagens no bucket imoveis" ON storage.objects;
DROP POLICY IF EXISTS "Upload restrito a autenticados no bucket imoveis" ON storage.objects;
DROP POLICY IF EXISTS "Update restrito a autenticados no bucket imoveis" ON storage.objects;
DROP POLICY IF EXISTS "Delete restrito a autenticados no bucket imoveis" ON storage.objects;

-- Leitura pública do bucket 'imoveis'
CREATE POLICY "Leitura pública de imagens no bucket imoveis"
    ON storage.objects
    FOR SELECT
    USING (bucket_id = 'imoveis');

-- Upload / Atualização / Exclusão restrito a corretores autenticados
CREATE POLICY "Upload restrito a autenticados no bucket imoveis"
    ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'imoveis');

CREATE POLICY "Update restrito a autenticados no bucket imoveis"
    ON storage.objects
    FOR UPDATE
    TO authenticated
    USING (bucket_id = 'imoveis')
    WITH CHECK (bucket_id = 'imoveis');

CREATE POLICY "Delete restrito a autenticados no bucket imoveis"
    ON storage.objects
    FOR DELETE
    TO authenticated
    USING (bucket_id = 'imoveis');

-- ==============================================================================
-- 10. SEEDS DE DEMONSTRAÇÃO (is_demo = true, códigos limpos)
-- Para exclusão futura no admin ou SQL:
-- DELETE FROM public.imoveis WHERE is_demo = true;
-- ==============================================================================

DO $$
DECLARE
    id_imovel_1 UUID := 'a1111111-1111-1111-1111-111111111111';
    id_imovel_2 UUID := 'a2222222-2222-2222-2222-222222222222';
    id_imovel_3 UUID := 'a3333333-3333-3333-3333-333333333333';
BEGIN
    -- Imóvel 1: Cobertura Duplex de Luxo
    INSERT INTO public.imoveis (
        id, codigo, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        id_imovel_1,
        'RAI-101',
        'Cobertura Duplex Skyline com Vista Panorâmica',
        'Espetacular cobertura duplex finamente decorada, com pé-direito duplo, automação residencial completa, piscina aquecida privativa e vista 360° da cidade.',
        'venda', 'Cobertura', 'disponivel',
        3850000.00, 3200.00, 1450.00, true,
        4, 4, 6, 4, 380.00, 450.00,
        'São Paulo', 'Jardins', 'SP', '01401-000', 'Alameda Lorena', '1500', -23.5670000, -46.6650000,
        '["Piscina Privativa", "Pé-direito Duplo", "Varanda Gourmet", "Automação", "Elevador Privativo"]'::jsonb,
        true, true
    ) ON CONFLICT (codigo) DO UPDATE SET titulo = EXCLUDED.titulo, is_demo = true;

    -- Imagens Imóvel 1
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        (id_imovel_1, 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80', 1, true),
        (id_imovel_1, 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80', 2, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 2: Mansão Contemporânea
    INSERT INTO public.imoveis (
        id, codigo, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        id_imovel_2,
        'RAI-102',
        'Residência Arquitetônica em Condomínio Fechado',
        'Projeto assinado com integração total de ambientes, living com lareira, espaço gourmet completo integrado à piscina com borda infinita e jardim paisagístico.',
        'venda', 'Casa em Condomínio', 'disponivel',
        5900000.00, 2800.00, 1800.00, true,
        5, 5, 7, 6, 620.00, 950.00,
        'Campinas', 'Gramado', 'SP', '13092-000', 'Avenida das Palmeiras', '45', -22.8940000, -47.0250000,
        '["Borda Infinita", "Jardim Paisagístico", "Segurança Armada", "Espaço Gourmet", "Lareira"]'::jsonb,
        true, true
    ) ON CONFLICT (codigo) DO UPDATE SET titulo = EXCLUDED.titulo, is_demo = true;

    -- Imagens Imóvel 2
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        (id_imovel_2, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', 1, true),
        (id_imovel_2, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', 2, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 3: Apartamento Alto Padrão
    INSERT INTO public.imoveis (
        id, codigo, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        id_imovel_3,
        'RAI-103',
        'Apartamento Contemporâneo com Living Integrado',
        'Apartamento de alto padrão com acabamentos nobres em mármore e madeira, ampla varanda gourmet com churrasqueira e condomínio com infraestrutura de resort.',
        'venda', 'Apartamento', 'disponivel',
        2200000.00, 1600.00, 750.00, true,
        3, 3, 4, 3, 195.00, 260.00,
        'São Paulo', 'Itaim Bibi', 'SP', '04530-000', 'Rua Tabapuã', '800', -23.5850000, -46.6780000,
        '["Varanda Gourmet", "Acabamento em Mármore", "Lazer Completo", "3 Vagas"]'::jsonb,
        true, true
    ) ON CONFLICT (codigo) DO UPDATE SET titulo = EXCLUDED.titulo, is_demo = true;

    -- Imagens Imóvel 3
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        (id_imovel_3, 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80', 1, true),
        (id_imovel_3, 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80', 2, false)
    ON CONFLICT DO NOTHING;

END $$;
