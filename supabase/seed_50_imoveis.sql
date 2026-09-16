-- Seed com 50 imóveis ilustrativos de alto padrão
-- Execute este script no Supabase SQL Editor para popular a base em nuvem instantaneamente!

DO $$
BEGIN

    -- Imóvel 1: Cobertura Duplex Skyline com Vista Panorâmica
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000001',
        'Cobertura Duplex Skyline com Vista Panorâmica',
        'Espetacular cobertura duplex finamente decorada, com pé-direito duplo, automação residencial completa, piscina aquecida privativa e vista 360° da cidade. Acabamentos em mármore travertino e marcenaria de grife.',
        'venda', 'Cobertura', 'disponivel',
        3850000, 3200, 1450, true,
        4, 4, 6, 4, 380, 450,
        'São Paulo', 'Jardins', 'SP', '01401-000', 'Alameda Lorena', '1500', -23.567, -46.665,
        '["Piscina Privativa","Pé-direito Duplo","Varanda Gourmet","Automação","Elevador Privativo"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 1
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000001', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000001', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000001', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 2: Residência Arquitetônica em Condomínio Fechado
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000002',
        'Residência Arquitetônica em Condomínio Fechado',
        'Projeto assinado por arquiteto renomado com integração total de ambientes, living com lareira ecológica, espaço gourmet completo integrado à piscina com borda infinita e jardim paisagístico deslumbrante.',
        'venda', 'Casa em Condomínio', 'disponivel',
        5900000, 2800, 1800, true,
        5, 5, 7, 6, 620, 950,
        'Campinas', 'Gramado', 'SP', '13092-000', 'Avenida das Palmeiras', '45', -22.894, -47.025,
        '["Borda Infinita","Jardim Paisagístico","Segurança Armada","Espaço Gourmet","Lareira"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 2
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000002', 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000002', 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000002', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 3: Apartamento Contemporâneo com Living Integrado
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000003',
        'Apartamento Contemporâneo com Living Integrado',
        'Apartamento de alto padrão com acabamentos nobres em mármore e madeira freijó, ampla varanda gourmet com churrasqueira a carvão e condomínio com infraestrutura completa de resort internacional.',
        'venda', 'Apartamento', 'disponivel',
        2200000, 1600, 750, true,
        3, 3, 4, 3, 195, 260,
        'São Paulo', 'Itaim Bibi', 'SP', '04530-000', 'Rua Tabapuã', '800', -23.585, -46.678,
        '["Varanda Gourmet","Acabamento em Mármore","Lazer Completo","3 Vagas"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 3
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 4: Mansão Minimalista com Vista para o Vale
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000004',
        'Mansão Minimalista com Vista para o Vale',
        'Design de vanguarda com linhas retas, esquadrias do chão ao teto, piscina aquecida com deck molhado e iluminação cênica. Ideal para quem busca privacidade absoluta e alto requinte.',
        'aluguel', 'Casa em Condomínio', 'disponivel',
        28000, 3500, 1200, true,
        4, 4, 6, 4, 510, 800,
        'Barueri', 'Alphaville', 'SP', '06472-000', 'Alameda dos Bosques', '120', -23.491, -46.852,
        '["Piscina Aquecida","Segurança 24h","Varanda Gourmet","Home Cinema"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 4
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 5: Penthouse Exclusiva na Praça Pereira Coutinho
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000005',
        'Penthouse Exclusiva na Praça Pereira Coutinho',
        'Localização mais nobre de São Paulo em frente à praça. Três pavimentos interligados por elevador privativo panorâmico, adega climatizada para 800 rótulos e solarium privativo.',
        'venda', 'Cobertura', 'disponivel',
        18500000, 8900, 3800, true,
        5, 5, 8, 7, 680, 890,
        'São Paulo', 'Vila Nova Conceição', 'SP', '04508-010', 'Praça Pereira Coutinho', '88', -23.591, -46.671,
        '["Piscina Privativa","Adega Climatizada","Elevador Panorâmico","Vista Parque","Segurança Blindada"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 5
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000005', 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000005', 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000005', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 6: Mansão Moderna na Fazenda Boa Vista
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000006',
        'Mansão Moderna na Fazenda Boa Vista',
        'Projeto integrado à natureza com vista panorâmica para o campo de golfe. Suíte master com closet duplo e banheiros Sr. e Sra., spa privativo com sauna seca e úmida.',
        'venda', 'Casa em Condomínio', 'disponivel',
        24000000, 5500, 2800, true,
        6, 6, 9, 8, 980, 2500,
        'Porto Feliz', 'Fazenda Boa Vista', 'SP', '18540-000', 'Alameda das Araucárias', '15', -23.21, -47.53,
        '["Campo de Golfe","Spa Privativo","Sauna","Borda Infinita","Heliponto Próximo"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 6
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000006', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000006', 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000006', 'https://images.unsplash.com/photo-1600607687979-247fb4591ff1?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 7: Apartamento Garden Suspenso no Jardim Europa
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000007',
        'Apartamento Garden Suspenso no Jardim Europa',
        'Sensação de viver em uma casa térrea com a segurança de um edifício blindado. Jardim privativo com irrigação automatizada, piscina privativa e churrasqueira de alta performance.',
        'venda', 'Apartamento', 'disponivel',
        8200000, 4100, 2100, true,
        4, 4, 5, 5, 420, 580,
        'São Paulo', 'Jardim Europa', 'SP', '01445-001', 'Rua Groenlândia', '710', -23.578, -46.681,
        '["Jardim Privativo","Piscina Privativa","Varanda Gourmet","Automação Completa"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 7
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000007', 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000007', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000007', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 8: Villa Tropical Beira-Mar em Juquehy
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000008',
        'Villa Tropical Beira-Mar em Juquehy',
        'Pé na areia com acesso privativo à praia. Deck amplo em madeira de lei com espreguiçadeiras, piscina com hidro integrada e suítes com vista panorâmica para o oceano.',
        'temporada', 'Casa', 'disponivel',
        8500, 0, 0, true,
        5, 5, 6, 4, 450, 700,
        'São Sebastião', 'Juquehy', 'SP', '11600-000', 'Avenida Mãe Bernarda', '320', -23.766, -45.733,
        '["Pé na Areia","Vista Mar","Piscina com Hidro","Deck de Madeira","Serviço de Praia"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 8
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000008', 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000008', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000008', 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 9: Residência Neoclássica no Residencial Tamboré
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000009',
        'Residência Neoclássica no Residencial Tamboré',
        'Imponente mansão neoclássica com colunata nobre, mármore Crema Marfil, living para 4 ambientes com pé-direito de 7 metros e quadra de beach tennis privativa.',
        'venda', 'Casa em Condomínio', 'disponivel',
        11900000, 3800, 1950, true,
        5, 5, 8, 6, 780, 1200,
        'Santana de Parnaíba', 'Tamboré', 'SP', '06543-000', 'Avenida Tamboré', '850', -23.475, -46.839,
        '["Quadra Beach Tennis","Pé-direito Duplo","Adega Subterrânea","Piscina Aquecida"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 9
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000009', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000009', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000009', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 10: Apartamento de Grife em Pinheiros com Vista Parque
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000010',
        'Apartamento de Grife em Pinheiros com Vista Parque',
        'Edifício icônico com arquitetura premiada. Ambientes fluidos, caixilhos piso-teto que maximizam a luminosidade natural e cozinha gourmet integrada.',
        'venda', 'Apartamento', 'disponivel',
        3100000, 1900, 820, true,
        3, 3, 4, 3, 210, 290,
        'São Paulo', 'Pinheiros', 'SP', '05415-000', 'Rua dos Pinheiros', '1120', -23.565, -46.689,
        '["Arquitetura Premiada","Vista Panorâmica","Piscina Aquecida","Academia Moderna"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 10
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000010', 'https://images.unsplash.com/photo-1502005229762-ee152f90e5f2?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000010', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000010', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 11: Mansão Contemporânea na Quinta da Baroneza
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000011',
        'Mansão Contemporânea na Quinta da Baroneza',
        'Terreno exclusivo com bosque privativo e vista permanente. Residência com 6 suítes avarandadas, adega para 1.200 garrafas, quadra de tênis de saibro e casa de caseiro independente.',
        'venda', 'Casa em Condomínio', 'disponivel',
        29500000, 6200, 3400, true,
        6, 6, 10, 10, 1250, 3800,
        'Bragança Paulista', 'Quinta da Baroneza', 'SP', '12900-000', 'Alameda dos Barões', '42', -22.95, -46.54,
        '["Quadra de Tênis","Bosque Privativo","Adega de Luxo","Heliponto","Casa de Hóspedes"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 11
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000011', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000011', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000011', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 12: Studio Penthouse Executivo no Itaim Bibi
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000012',
        'Studio Penthouse Executivo no Itaim Bibi',
        'Ideal para executivos e investidores de alta rentabilidade. Totalmente mobiliado e decorado pela Armani/Casa, serviços pay-per-use e rooftop com piscina de borda infinita.',
        'aluguel', 'Apartamento', 'disponivel',
        16000, 1800, 650, true,
        1, 1, 2, 2, 95, 130,
        'São Paulo', 'Itaim Bibi', 'SP', '04532-001', 'Rua Joaquim Floriano', '460', -23.583, -46.674,
        '["Mobiliado Armani","Rooftop com Piscina","Serviços Pay-per-use","Valet 24h"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 12
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000012', 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000012', 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000012', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 13: Cobertura Triplex com Heliponto Privativo no Morumbi
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000013',
        'Cobertura Triplex com Heliponto Privativo no Morumbi',
        'Uma das maiores coberturas da América Latina. Possui 1.500m² úteis, elevador privativo codificado, heliponto homologado e piscina aquecida no 3º piso com vista monumental.',
        'venda', 'Cobertura', 'disponivel',
        42000000, 15000, 6500, true,
        7, 7, 12, 12, 1500, 2100,
        'São Paulo', 'Morumbi', 'SP', '05650-000', 'Rua São Paulo Antigo', '300', -23.605, -46.712,
        '["Heliponto Homologado","Piscina Aquecida","Segurança Bunker","12 Vagas","Elevador Codificado"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 13
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000013', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000013', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000013', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 14: Residência de Vidro em Meio à Mata no Terras de São José
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000014',
        'Residência de Vidro em Meio à Mata no Terras de São José',
        'Total integração arquitetônica com a mata atlântica nativa. Paredes envidraçadas retráteis, lareira suspensa, adega climatizada e pomar produtivo.',
        'venda', 'Casa em Condomínio', 'disponivel',
        7800000, 2600, 1400, true,
        5, 5, 7, 6, 670, 2200,
        'Itu', 'Terras de São José', 'SP', '13300-000', 'Alameda das Paineiras', '89', -23.26, -47.3,
        '["Mata Nativa","Lareira Suspensa","Adega Climatizada","Condomínio com Golfe"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 14
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000014', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000014', 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000014', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 15: Apartamento Clássico Reformado em Higienópolis
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000015',
        'Apartamento Clássico Reformado em Higienópolis',
        'Planta generosa com janelões do piso ao teto, piso original em parquet restaurado, ar-condicionado central em todos os cômodos e cozinha gourmet com ilha central em Silestone.',
        'venda', 'Apartamento', 'disponivel',
        4500000, 3100, 1350, true,
        4, 3, 5, 3, 330, 420,
        'São Paulo', 'Higienópolis', 'SP', '01238-000', 'Rua Alagoas', '520', -23.546, -46.657,
        '["Parquet Restaurado","Janelões Clássicos","Ar Central","Cozinha com Ilha"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 15
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000015', 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000015', 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000015', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 16: Casa de Praia de Alto Padrão em Riviera de São Lourenço
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000016',
        'Casa de Praia de Alto Padrão em Riviera de São Lourenço',
        'Módulo 2, a apenas 50 metros da praia. Casa nova com acabamento primoroso, piscina aquecida com prainha, sauna úmida com passagem direta para a água e espaço gourmet climatizado.',
        'venda', 'Casa em Condomínio', 'disponivel',
        9800000, 1800, 1200, true,
        6, 6, 8, 4, 580, 750,
        'Bertioga', 'Riviera de São Lourenço', 'SP', '11250-000', 'Largo dos Coqueiros', '18', -23.792, -46.015,
        '["Sauna com Passagem","Piscina Aquecida","50m da Praia","Espaço Gourmet Climatizado"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 16
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000016', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000016', 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000016', 'https://images.unsplash.com/photo-1600607687979-247fb4591ff1?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 17: Apartamento Frente Mar em Balneário Camboriú
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000017',
        'Apartamento Frente Mar em Balneário Camboriú',
        'Andar alto com vista espetacular de toda a orla. Edifício com heliponto, piscina aquecida de 25m, academia assinada e serviço de conciergerie 24 horas.',
        'venda', 'Apartamento', 'disponivel',
        14500000, 3900, 2100, true,
        4, 4, 6, 5, 390, 510,
        'Balneário Camboriú', 'Centro', 'SC', '88330-000', 'Avenida Atlântica', '2100', -26.992, -48.635,
        '["Frente Mar","Heliponto","Piscina 25m","Concierge 24h","Automação"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 17
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000017', 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000017', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000017', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 18: Residência Contemporânea no Alto de Pinheiros
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000018',
        'Residência Contemporânea no Alto de Pinheiros',
        'Rua tranquila e arborizada com segurança armada 24h. Arquitetura moderna com estrutura metálica aparente, muita luz natural, jardim com piscina e espaço wellness privativo.',
        'venda', 'Casa', 'disponivel',
        8700000, 0, 2400, true,
        4, 4, 6, 5, 520, 780,
        'São Paulo', 'Alto de Pinheiros', 'SP', '05460-000', 'Rua Arquiteto Jaime Fonseca', '140', -23.548, -46.708,
        '["Espaço Wellness","Segurança Armada","Jardim Paisagístico","Piscina Privativa"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 18
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000018', 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000018', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000018', 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 19: Apartamento Duplex Mobiliado no Moema Pássaros
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000019',
        'Apartamento Duplex Mobiliado no Moema Pássaros',
        'Fora da rota de aviões. Pé-direito duplo no living, terraço gourmet com churrasqueira e fechamento em vidro retrátil, armários Ornare e automação de iluminação e som.',
        'aluguel', 'Apartamento', 'disponivel',
        22000, 2400, 950, true,
        3, 3, 5, 3, 235, 310,
        'São Paulo', 'Moema', 'SP', '04515-030', 'Rua Canário', '720', -23.602, -46.668,
        '["Pé-direito Duplo","Mobiliado Ornare","Fora da Rota","Varanda Gourmet"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 19
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000019', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000019', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000019', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 20: Mansão Suspensa com Vista para o Parque Ibirapuera
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000020',
        'Mansão Suspensa com Vista para o Parque Ibirapuera',
        'Edifício exclusivo com apenas uma unidade por andar. Living com 120m², adega walk-in climatizada, suíte master com dois banheiros e dois closets com marcenaria italiana.',
        'venda', 'Apartamento', 'disponivel',
        16800000, 7200, 3400, true,
        4, 4, 7, 6, 560, 750,
        'São Paulo', 'Vila Nova Conceição', 'SP', '04505-001', 'Avenida República do Líbano', '990', -23.593, -46.663,
        '["Vista Ibirapuera","Adega Walk-in","Marcenaria Italiana","Depósito Privativo"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 20
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000020', 'https://images.unsplash.com/photo-1502005229762-ee152f90e5f2?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000020', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000020', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 21: Mansão Suspensa com Espaço Gourmet e Vista Livre
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000021',
        'Mansão Suspensa com Espaço Gourmet e Vista Livre',
        'Imóvel exclusivo de altíssimo padrão localizado em Itaim Bibi, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Terreno em Condomínio', 'disponivel',
        12100000, 3200, 1600, true,
        3, 2, 4, 3, 480, 648,
        'São Paulo', 'Itaim Bibi', 'SP', '01000-000', 'Avenida das Américas', '240', -23.5785, -46.6782,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 21
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000021', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000021', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000021', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 22: Casa Térrea Contemporânea com Piscina Aquecida
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000022',
        'Casa Térrea Contemporânea com Piscina Aquecida',
        'Imóvel exclusivo de altíssimo padrão localizado em Vila Nova Conceição, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'aluguel', 'Apartamento', 'disponivel',
        30000, 3300, 1650, true,
        4, 3, 5, 4, 495, 668,
        'São Paulo', 'Vila Nova Conceição', 'SP', '01000-000', 'Avenida das Américas', '247', -23.5899, -46.6783,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 22
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000022', 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000022', 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000022', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 23: Cobertura Duplex com Solarium e Spa Privativo
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000023',
        'Cobertura Duplex com Solarium e Spa Privativo',
        'Imóvel exclusivo de altíssimo padrão localizado em Moema, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'temporada', 'Casa em Condomínio', 'disponivel',
        7900, 0, 0, true,
        5, 4, 6, 5, 510, 689,
        'São Paulo', 'Moema', 'SP', '01000-000', 'Avenida das Américas', '254', -23.6078, -46.6731,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 23
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000023', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000023', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000023', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 24: Apartamento de Luxo com Vista Eterna para o Verde
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000024',
        'Apartamento de Luxo com Vista Eterna para o Verde',
        'Imóvel exclusivo de altíssimo padrão localizado em Pinheiros, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Cobertura', 'disponivel',
        13550000, 3450, 1750, true,
        6, 5, 7, 6, 525, 709,
        'São Paulo', 'Pinheiros', 'SP', '01000-000', 'Avenida das Américas', '261', -23.571, -46.6873,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 24
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000024', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000024', 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000024', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 25: Residência Minimalista com Acabamentos em Concreto e Madeira
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000025',
        'Residência Minimalista com Acabamentos em Concreto e Madeira',
        'Imóvel exclusivo de altíssimo padrão localizado em Higienópolis, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Mansão', 'disponivel',
        14000000, 3550, 1800, true,
        3, 2, 4, 7, 540, 729,
        'São Paulo', 'Higienópolis', 'SP', '01000-000', 'Avenida das Américas', '268', -23.5558, -46.6551,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 25
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000025', 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000025', 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000025', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 26: Penthouse Linear com Piscina de Vidro e Sauna
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000026',
        'Penthouse Linear com Piscina de Vidro e Sauna',
        'Imóvel exclusivo de altíssimo padrão localizado em Morumbi, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Casa', 'disponivel',
        14500000, 3650, 1850, true,
        4, 3, 5, 3, 555, 749,
        'São Paulo', 'Morumbi', 'SP', '01000-000', 'Avenida das Américas', '275', -23.5996, -46.7202,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 26
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000026', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000026', 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000026', 'https://images.unsplash.com/photo-1600607687979-247fb4591ff1?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 27: Mansão com Quadra Poliesportiva e Adega Climatizada
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000027',
        'Mansão com Quadra Poliesportiva e Adega Climatizada',
        'Imóvel exclusivo de altíssimo padrão localizado em Alto de Pinheiros, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Apartamento Garden', 'disponivel',
        15000000, 3750, 1900, true,
        5, 4, 6, 4, 570, 770,
        'São Paulo', 'Alto de Pinheiros', 'SP', '01000-000', 'Avenida das Américas', '282', -23.5553, -46.7154,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 27
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000027', 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000027', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000027', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 28: Apartamento Boutique com Automação Residencial
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000028',
        'Apartamento Boutique com Automação Residencial',
        'Imóvel exclusivo de altíssimo padrão localizado em Alphaville, Barueri. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Terreno em Condomínio', 'disponivel',
        15450000, 3850, 1950, true,
        6, 5, 7, 5, 585, 790,
        'Barueri', 'Alphaville', 'SP', '01000-000', 'Avenida das Américas', '289', -23.4886, -46.8475,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 28
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000028', 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000028', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000028', 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 29: Villa Mediterrânea com Paisagismo e Pomar
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000029',
        'Villa Mediterrânea com Paisagismo e Pomar',
        'Imóvel exclusivo de altíssimo padrão localizado em Tamboré, Santana de Parnaíba. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'aluguel', 'Apartamento', 'disponivel',
        36000, 3900, 2000, true,
        3, 2, 4, 6, 600, 810,
        'Santana de Parnaíba', 'Tamboré', 'SP', '01000-000', 'Avenida das Américas', '296', -23.4801, -46.8318,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 29
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000029', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000029', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000029', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 30: Casa de Campo com Haras Privativo e Casa de Hóspedes
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000030',
        'Casa de Campo com Haras Privativo e Casa de Hóspedes',
        'Imóvel exclusivo de altíssimo padrão localizado em Gramado, Campinas. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Casa em Condomínio', 'disponivel',
        16400000, 4000, 2050, true,
        4, 3, 5, 7, 615, 830,
        'Campinas', 'Gramado', 'SP', '01000-000', 'Avenida das Américas', '303', -22.9029, -47.0252,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 30
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000030', 'https://images.unsplash.com/photo-1502005229762-ee152f90e5f2?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000030', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000030', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 31: Cobertura Triplex com Lareira e Terraço Panorâmico
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000031',
        'Cobertura Triplex com Lareira e Terraço Panorâmico',
        'Imóvel exclusivo de altíssimo padrão localizado em Cambuí, Campinas. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Cobertura', 'disponivel',
        16900000, 4100, 2100, true,
        5, 4, 6, 3, 630, 851,
        'Campinas', 'Cambuí', 'SP', '01000-000', 'Avenida das Américas', '310', -22.9058, -47.0613,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 31
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000031', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000031', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000031', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 32: Apartamento Garden com Piscina Privativa e Lounge
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000032',
        'Apartamento Garden com Piscina Privativa e Lounge',
        'Imóvel exclusivo de altíssimo padrão localizado em Fazenda Boa Vista, Porto Feliz. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Mansão', 'disponivel',
        17400000, 4200, 2150, true,
        6, 5, 7, 4, 645, 871,
        'Porto Feliz', 'Fazenda Boa Vista', 'SP', '01000-000', 'Avenida das Américas', '317', -23.2191, -47.5294,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 32
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000032', 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000032', 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000032', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 33: Mansão Clássica com Mármore Travertino e Cinema
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000033',
        'Mansão Clássica com Mármore Travertino e Cinema',
        'Imóvel exclusivo de altíssimo padrão localizado em Terras de São José, Itu. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Casa', 'disponivel',
        17850000, 4300, 2200, true,
        3, 2, 4, 5, 660, 891,
        'Itu', 'Terras de São José', 'SP', '01000-000', 'Avenida das Américas', '324', -23.257, -47.3035,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 33
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000033', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000033', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000033', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 34: Residência com Energia Fotovoltaica e Automação Crestron
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000034',
        'Residência com Energia Fotovoltaica e Automação Crestron',
        'Imóvel exclusivo de altíssimo padrão localizado em Quinta da Baroneza, Bragança Paulista. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'temporada', 'Apartamento Garden', 'disponivel',
        10100, 0, 0, true,
        4, 3, 5, 6, 675, 911,
        'Bragança Paulista', 'Quinta da Baroneza', 'SP', '01000-000', 'Avenida das Américas', '331', -22.9463, -47.5377,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 34
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000034', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000034', 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000034', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 35: Casa de Vidro com Vista para o Vale das Palmeiras
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000035',
        'Casa de Vidro com Vista para o Vale das Palmeiras',
        'Imóvel exclusivo de altíssimo padrão localizado em Jardim Acapulco, Guarujá. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Terreno em Condomínio', 'disponivel',
        18800000, 4450, 2300, true,
        5, 4, 6, 7, 690, 932,
        'Guarujá', 'Jardim Acapulco', 'SP', '01000-000', 'Avenida das Américas', '338', -23.9629, -46.2184,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 35
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000035', 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000035', 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000035', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 36: Apartamento Alto Padrão Reformado por Arquiteto Renomado
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000036',
        'Apartamento Alto Padrão Reformado por Arquiteto Renomado',
        'Imóvel exclusivo de altíssimo padrão localizado em Juquehy, São Sebastião. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'aluguel', 'Apartamento', 'disponivel',
        42000, 4550, 2350, true,
        6, 5, 7, 3, 705, 952,
        'São Sebastião', 'Juquehy', 'SP', '01000-000', 'Avenida das Américas', '345', -23.7627, -45.7291,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 36
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000036', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000036', 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000036', 'https://images.unsplash.com/photo-1600607687979-247fb4591ff1?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 37: Residência com Spa de Hidromassagem e Espaço Gourmet
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000037',
        'Residência com Spa de Hidromassagem e Espaço Gourmet',
        'Imóvel exclusivo de altíssimo padrão localizado em Riviera de São Lourenço, Bertioga. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Casa em Condomínio', 'disponivel',
        19800000, 4650, 2400, true,
        3, 2, 4, 4, 720, 972,
        'Bertioga', 'Riviera de São Lourenço', 'SP', '01000-000', 'Avenida das Américas', '352', -23.7831, -46.0144,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 37
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000037', 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000037', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000037', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 38: Cobertura Penthouse com Lounge Bar e Forno de Pizza
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000038',
        'Cobertura Penthouse com Lounge Bar e Forno de Pizza',
        'Imóvel exclusivo de altíssimo padrão localizado em Trancoso, Porto Seguro. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Cobertura', 'disponivel',
        20250000, 4750, 2450, true,
        4, 3, 5, 5, 735, 992,
        'Porto Seguro', 'Trancoso', 'BA', '01000-000', 'Avenida das Américas', '359', -16.5832, -39.0955,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 38
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000038', 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000038', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000038', 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 39: Mansão em Condomínio Fechado com Segurança Armada 24h
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000039',
        'Mansão em Condomínio Fechado com Segurança Armada 24h',
        'Imóvel exclusivo de altíssimo padrão localizado em Jardins, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Mansão', 'disponivel',
        20750000, 4800, 2500, true,
        5, 4, 6, 6, 750, 1013,
        'São Paulo', 'Jardins', 'SP', '01000-000', 'Avenida das Américas', '366', -23.5627, -46.6553,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 39
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000039', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000039', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000039', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 40: Apartamento de Altíssimo Padrão com Elevador Panorâmico
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000040',
        'Apartamento de Altíssimo Padrão com Elevador Panorâmico',
        'Imóvel exclusivo de altíssimo padrão localizado em Itaim Bibi, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Casa', 'disponivel',
        21200000, 4900, 2550, true,
        6, 5, 7, 7, 765, 1033,
        'São Paulo', 'Itaim Bibi', 'SP', '01000-000', 'Avenida das Américas', '373', -23.5914, -46.6684,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 40
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000040', 'https://images.unsplash.com/photo-1502005229762-ee152f90e5f2?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000040', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000040', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 41: Casa Contemporânea com Pé-direito Duplo e Lareira Ecológica
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000041',
        'Casa Contemporânea com Pé-direito Duplo e Lareira Ecológica',
        'Imóvel exclusivo de altíssimo padrão localizado em Vila Nova Conceição, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Apartamento Garden', 'disponivel',
        21700000, 5000, 2600, true,
        3, 2, 4, 3, 780, 1053,
        'São Paulo', 'Vila Nova Conceição', 'SP', '01000-000', 'Avenida das Américas', '380', -23.5965, -46.6727,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 41
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000041', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000041', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000041', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 42: Residência com Quadra de Tênis Oficial e Piscina Semi-Olímpica
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000042',
        'Residência com Quadra de Tênis Oficial e Piscina Semi-Olímpica',
        'Imóvel exclusivo de altíssimo padrão localizado em Moema, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Terreno em Condomínio', 'disponivel',
        22200000, 5100, 2650, true,
        4, 3, 5, 4, 795, 1073,
        'São Paulo', 'Moema', 'SP', '01000-000', 'Avenida das Américas', '387', -23.5999, -46.6686,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 42
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000042', 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000042', 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000042', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 43: Cobertura Duplex com Terraço Gourmet e Vista 360 Graus
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000043',
        'Cobertura Duplex com Terraço Gourmet e Vista 360 Graus',
        'Imóvel exclusivo de altíssimo padrão localizado em Pinheiros, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'aluguel', 'Apartamento', 'disponivel',
        47500, 5200, 2700, true,
        5, 4, 6, 5, 810, 1094,
        'São Paulo', 'Pinheiros', 'SP', '01000-000', 'Avenida das Américas', '394', -23.5707, -46.6973,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 43
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000043', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000043', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000043', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 44: Mansão com Borda Infinita e Vista para o Lago
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000044',
        'Mansão com Borda Infinita e Vista para o Lago',
        'Imóvel exclusivo de altíssimo padrão localizado em Higienópolis, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Casa em Condomínio', 'disponivel',
        23150000, 5250, 2750, true,
        6, 5, 7, 6, 825, 1114,
        'São Paulo', 'Higienópolis', 'SP', '01000-000', 'Avenida das Américas', '401', -23.5472, -46.648,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 44
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000044', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000044', 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000044', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 45: Apartamento Design Mobiliado com Marcenaria de Alfaiataria
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000045',
        'Apartamento Design Mobiliado com Marcenaria de Alfaiataria',
        'Imóvel exclusivo de altíssimo padrão localizado em Morumbi, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'temporada', 'Cobertura', 'disponivel',
        12300, 0, 0, true,
        3, 2, 4, 7, 840, 1134,
        'São Paulo', 'Morumbi', 'SP', '01000-000', 'Avenida das Américas', '408', -23.5975, -46.7133,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 45
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000045', 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000045', 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000045', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 46: Casa de Alto Luxo com Heliponto Privativo e Adega Subterrânea
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000046',
        'Casa de Alto Luxo com Heliponto Privativo e Adega Subterrânea',
        'Imóvel exclusivo de altíssimo padrão localizado em Alto de Pinheiros, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Mansão', 'disponivel',
        24100000, 5450, 2850, true,
        4, 3, 5, 3, 855, 1154,
        'São Paulo', 'Alto de Pinheiros', 'SP', '01000-000', 'Avenida das Américas', '415', -23.5568, -46.7043,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        true, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 46
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000046', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000046', 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000046', 'https://images.unsplash.com/photo-1600607687979-247fb4591ff1?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 47: Cobertura Linear com Piscina Aquecida e Solarium
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000047',
        'Cobertura Linear com Piscina Aquecida e Solarium',
        'Imóvel exclusivo de altíssimo padrão localizado em Alphaville, Barueri. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Casa', 'disponivel',
        24600000, 5550, 2900, true,
        5, 4, 6, 4, 870, 1175,
        'Barueri', 'Alphaville', 'SP', '01000-000', 'Avenida das Américas', '422', -23.4943, -46.8506,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 47
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000047', 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000047', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000047', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 48: Residência Sustentável com Sistema de Reuso de Água e Solar
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000048',
        'Residência Sustentável com Sistema de Reuso de Água e Solar',
        'Imóvel exclusivo de altíssimo padrão localizado em Tamboré, Santana de Parnaíba. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Apartamento Garden', 'disponivel',
        25050000, 5650, 2950, true,
        6, 5, 7, 5, 885, 1195,
        'Santana de Parnaíba', 'Tamboré', 'SP', '01000-000', 'Avenida das Américas', '429', -23.4769, -46.8414,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 48
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000048', 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000048', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000048', 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 49: Apartamento Garden com Quintal Privativo e Varanda Gourmet
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000049',
        'Apartamento Garden com Quintal Privativo e Varanda Gourmet',
        'Imóvel exclusivo de altíssimo padrão localizado em Gramado, Campinas. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'venda', 'Terreno em Condomínio', 'disponivel',
        25550000, 5700, 3000, true,
        3, 2, 4, 6, 900, 1215,
        'Campinas', 'Gramado', 'SP', '01000-000', 'Avenida das Américas', '436', -22.898, -47.0199,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 49
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000049', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000049', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000049', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

    -- Imóvel 50: Mansão Futurista com Domótica Total e Home Theater 4K
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000050',
        'Mansão Futurista com Domótica Total e Home Theater 4K',
        'Imóvel exclusivo de altíssimo padrão localizado em Cambuí, Campinas. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.',
        'aluguel', 'Apartamento', 'disponivel',
        53500, 5800, 3050, true,
        4, 3, 5, 7, 915, 1235,
        'Campinas', 'Cambuí', 'SP', '01000-000', 'Avenida das Américas', '443', -22.8959, -47.0495,
        '["Varanda Gourmet","Piscina Privativa","Automação","Segurança 24h","Pé-direito Duplo"]'::jsonb,
        false, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel 50
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('00000000-0000-0000-0000-000000000050', 'https://images.unsplash.com/photo-1502005229762-ee152f90e5f2?auto=format&fit=crop&w=1600&q=80', 1, true),
        ('00000000-0000-0000-0000-000000000050', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80', 2, false),
        ('00000000-0000-0000-0000-000000000050', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80', 3, false)
    ON CONFLICT DO NOTHING;

END $$;
