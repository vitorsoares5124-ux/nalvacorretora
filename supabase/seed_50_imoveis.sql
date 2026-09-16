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

    -- Imóvel 21: Cobertura Duplex com Terraço Gourmet no Jardim Paulistano
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000021',
        'Cobertura Duplex com Terraço Gourmet no Jardim Paulistano',
        'Cobertura duplex em rua arborizada do Jardim Paulistano, com terraço gourmet integrado, churrasqueira a carvão, ofurô aquecido e vista aberta para o skyline. Living com pé-direito duplo, marcenaria sob medida e automação de cortinas e iluminação.',
        'venda', 'Cobertura', 'disponivel',
        5400000, 2900, 1600, true,
        4, 4, 5, 4, 320, 420,
        'São Paulo', 'Jardim Paulistano', 'SP', '01455-000', 'Rua Doutor Melo Alves', '640', -23.576, -46.678,
        '["Terraço Gourmet","Ofurô Aquecido","Pé-direito Duplo","Automação","Vista Skyline"]'::jsonb,
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

    -- Imóvel 22: Casa Térrea Contemporânea no Granja Viana
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000022',
        'Casa Térrea Contemporânea no Granja Viana',
        'Residência térrea de linhas retas em condomínio consolidado, com jardim paisagístico, piscina aquecida com deck e espaço gourmet coberto. Suíte master com closet e banheiro com banheira de imersão.',
        'venda', 'Casa em Condomínio', 'disponivel',
        4300000, 1900, 980, true,
        4, 3, 5, 4, 360, 600,
        'Cotia', 'Granja Viana', 'SP', '06709-015', 'Rua das Acácias', '210', -23.596, -46.842,
        '["Piscina Aquecida","Jardim Paisagístico","Espaço Gourmet","Segurança 24h","Suíte Master com Closet"]'::jsonb,
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

    -- Imóvel 23: Apartamento Alto Padrão na Vila Olímpia
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000023',
        'Apartamento Alto Padrão na Vila Olímpia',
        'Unidade de esquina com planta flexível, living ampliado em porcelanato e varanda gourmet com churrasqueira. Prédio com rooftop, piscina aquecida, academia e coworking, a passos do Parque do Povo.',
        'venda', 'Apartamento', 'disponivel',
        2750000, 1750, 780, true,
        3, 3, 4, 3, 180, 240,
        'São Paulo', 'Vila Olímpia', 'SP', '04551-000', 'Rua Fiandeiras', '420', -23.595, -46.687,
        '["Varanda Gourmet","Rooftop com Piscina","Academia","Coworking","3 Vagas"]'::jsonb,
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

    -- Imóvel 24: Casa de Campo com Lago Particular no Vale Verde
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000024',
        'Casa de Campo com Lago Particular no Vale Verde',
        'Terreno com paisagismo maduro e lago com carpas, pomar e quadra de beach tennis. Casa com varandas em todas as suítes, lareira e cozinha gourmet integrada ao salão de vidro.',
        'venda', 'Casa em Condomínio', 'disponivel',
        6800000, 2200, 1250, true,
        5, 5, 6, 6, 540, 1800,
        'Valinhos', 'Vale Verde', 'SP', '13278-000', 'Alameda dos Ipês', '77', -22.97, -46.995,
        '["Lago Particular","Lareira","Quadra Beach Tennis","Pomar","Piscina Aquecida"]'::jsonb,
        true, true
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

    -- Imóvel 25: Cobertura Frente Mar no Jardim Acapulco
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000025',
        'Cobertura Frente Mar no Jardim Acapulco',
        'Última unidade com vista frontal para o oceano, em condomínio pé na areia com acesso privativo à praia. Living com esquadrias panorâmicas, terraço com piscina privativa e serviço de praia.',
        'venda', 'Cobertura', 'disponivel',
        9800000, 3400, 2100, true,
        4, 4, 6, 4, 410, 530,
        'Guarujá', 'Jardim Acapulco', 'SP', '11442-000', 'Avenida Miguel Estefno', '1390', -23.97, -46.22,
        '["Frente Mar","Piscina Privativa","Vista Oceano","Serviço de Praia","Pé na Areia"]'::jsonb,
        true, true
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

    -- Imóvel 26: Apartamento Amplo no Coração do Cambuí
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000026',
        'Apartamento Amplo no Coração do Cambuí',
        'Planta de 210m² com quatro dormitórios, dois deles suítes, e três vagas cobertas. Condomínio com piscina, salão de festas e quadra, em rua tranquila do Cambuí, próximo a restaurantes e academias.',
        'aluguel', 'Apartamento', 'disponivel',
        14500, 2100, 890, true,
        4, 2, 4, 3, 210, 285,
        'Campinas', 'Cambuí', 'SP', '13025-050', 'Rua Doutor Sampaio Ferraz', '530', -22.899, -47.052,
        '["Piscina","Quadra","Salão de Festas","3 Vagas Cobertas","Próximo ao Comércio"]'::jsonb,
        false, true
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

    -- Imóvel 27: Residência Moderna no Ecoville
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000027',
        'Residência Moderna no Ecoville',
        'Projeto de linhas contemporâneas com fachada ventilada e amplos panos de vidro, em região nobre de Curitiba. Espaço gourmet com forno a lenha, adega climatizada e jardim de inverno.',
        'venda', 'Casa em Condomínio', 'disponivel',
        6900000, 1600, 1400, true,
        5, 5, 7, 5, 520, 780,
        'Curitiba', 'Ecoville', 'PR', '82305-000', 'Rua Doutor Ovande do Amaral', '300', -25.43, -49.31,
        '["Fachada Ventilada","Forno a Lenha","Adega Climatizada","Jardim de Inverno","Segurança 24h"]'::jsonb,
        true, true
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

    -- Imóvel 28: Apartamento Vista Mar na Barra Sul
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000028',
        'Apartamento Vista Mar na Barra Sul',
        'Andar alto com vista permanente para o mar de Balneário Camboriú, acabamento em porcelanato e marcenaria planejada. Edifício com piscina aquecida, academia e concierge, a poucos metros da orla.',
        'aluguel', 'Apartamento', 'disponivel',
        25000, 2800, 1100, true,
        3, 3, 4, 3, 235, 310,
        'Balneário Camboriú', 'Barra Sul', 'SC', '88330-694', 'Avenida Atlântica', '3450', -27, -48.63,
        '["Vista Mar","Piscina Aquecida","Academia","Concierge","Próximo à Orla"]'::jsonb,
        true, true
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

    -- Imóvel 29: Cobertura Panorâmica no Leblon
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000029',
        'Cobertura Panorâmica no Leblon',
        'Cobertura duplex com vista para o Morro Dois Irmãos e o mar do Leblon, terraço com piscina de borda infinita e espaço gourmet. Living com pé-direito duplo e esquadrias acústicas de alto desempenho.',
        'venda', 'Cobertura', 'disponivel',
        21500000, 6800, 4200, true,
        4, 4, 7, 5, 480, 640,
        'Rio de Janeiro', 'Leblon', 'RJ', '22440-032', 'Rua Dias Ferreira', '560', -22.985, -43.223,
        '["Vista Mar","Borda Infinita","Pé-direito Duplo","Vista Morro Dois Irmãos","5 Vagas"]'::jsonb,
        true, true
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

    -- Imóvel 30: Casa de Praia em Geribá
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000030',
        'Casa de Praia em Geribá',
        'Casa de temporada em condomínio fechado a 400m da Praia de Geribá, com piscina com raia, espaço gourmet e cinco suítes. Estrutura completa para locação por temporada, com lavanderia e área de serviço independente.',
        'temporada', 'Casa', 'disponivel',
        9500, 0, 0, true,
        5, 5, 6, 4, 380, 620,
        'Armação dos Búzios', 'Geribá', 'RJ', '28950-000', 'Rua das Gaivotas', '88', -22.77, -41.9,
        '["Piscina com Raia","Espaço Gourmet","Condomínio Fechado","400m da Praia","5 Suítes"]'::jsonb,
        true, true
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

    -- Imóvel 31: Apartamento de Frente para a Praia de Ipanema
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000031',
        'Apartamento de Frente para a Praia de Ipanema',
        'Imóvel de frente para a orla de Ipanema, com varanda contínua e vista desobstruída para o mar e o Arpoador. Reforma recente com marcenaria planejada, piso em madeira e ar-condicionado em todos os ambientes.',
        'venda', 'Apartamento', 'disponivel',
        12800000, 4300, 3200, true,
        4, 4, 5, 2, 290, 360,
        'Rio de Janeiro', 'Ipanema', 'RJ', '22010-000', 'Avenida Vieira Souto', '480', -22.984, -43.204,
        '["Frente Mar","Vista Arpoador","Reforma Recente","Varanda Contínua","Ar-condicionado Central"]'::jsonb,
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

    -- Imóvel 32: Casa em Condomínio Helvetia
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000032',
        'Casa em Condomínio Helvetia',
        'Residência no Condomínio Helvetia, o mais tradicional de Indaiatuba, com bosque nativo preservado e infraestrutura de clube. Casa com living de dois ambientes, varanda gourmet e piscina aquecida.',
        'venda', 'Casa em Condomínio', 'disponivel',
        4600000, 1700, 1050, true,
        4, 4, 6, 5, 420, 850,
        'Indaiatuba', 'Helvetia', 'SP', '13330-000', 'Alameda das Hortênsias', '360', -23.07, -47.2,
        '["Piscina Aquecida","Bosque Nativo","Clube Completo","Varanda Gourmet","Segurança 24h"]'::jsonb,
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

    -- Imóvel 33: Cobertura Duplex em Lourdes
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000033',
        'Cobertura Duplex em Lourdes',
        'Cobertura duplex em bairro nobre de Belo Horizonte, com terraço panorâmico e vista para a Serra do Curral. Living integrado, adega climatizada e três vagas cobertas, a poucos minutos da Savassi.',
        'venda', 'Cobertura', 'disponivel',
        4900000, 2400, 1500, true,
        4, 4, 6, 3, 340, 450,
        'Belo Horizonte', 'Lourdes', 'MG', '30180-050', 'Rua da Bahia', '2100', -19.93, -43.945,
        '["Vista Serra do Curral","Terraço Panorâmico","Adega Climatizada","3 Vagas","Próximo à Savassi"]'::jsonb,
        true, true
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

    -- Imóvel 34: Apartamento de Luxo no Bela Vista
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000034',
        'Apartamento de Luxo no Bela Vista',
        'Unidade de altíssimo padrão em região valorizada de Porto Alegre, com living com lareira a gás, cozinha gourmet com ilha e varanda com churrasqueira. Entrega com acabamentos premium.',
        'venda', 'Apartamento', 'disponivel',
        3900000, 1900, 920, true,
        3, 3, 4, 3, 215, 280,
        'Porto Alegre', 'Bela Vista', 'RS', '90450-190', 'Rua Ramiro Barcelos', '1500', -30.04, -51.19,
        '["Lareira a Gás","Cozinha com Ilha","Varanda com Churrasqueira","Acabamentos Premium","3 Vagas"]'::jsonb,
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

    -- Imóvel 35: Casa em Jurerê Internacional
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000035',
        'Casa em Jurerê Internacional',
        'Residência a 250m da praia de Jurerê Internacional, em bairro com segurança própria e infraestrutura completa. Piscina com deck em madeira, espaço gourmet e suíte master com varanda e vista.',
        'venda', 'Casa em Condomínio', 'disponivel',
        11500000, 2600, 2400, true,
        5, 5, 7, 5, 560, 900,
        'Florianópolis', 'Jurerê Internacional', 'SC', '88053-510', 'Rua Jurerê', '540', -27.44, -48.5,
        '["250m da Praia","Piscina com Deck","Segurança Própria","Suíte Master com Varanda","Espaço Gourmet"]'::jsonb,
        true, true
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

    -- Imóvel 36: Cobertura Frente Mar no Gonzaga
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000036',
        'Cobertura Frente Mar no Gonzaga',
        'Cobertura em edifício clássico de frente para a orla do Gonzaga, com living de três ambientes e vista para o canal do porto. Terraço com churrasqueira e quatro vagas cobertas.',
        'venda', 'Cobertura', 'disponivel',
        3600000, 2700, 1500, true,
        4, 3, 5, 4, 360, 470,
        'Santos', 'Gonzaga', 'SP', '11065-010', 'Avenida Presidente Wilson', '900', -23.97, -46.332,
        '["Frente Mar","Terraço com Churrasqueira","Living 3 Ambientes","Vista do Canal","4 Vagas"]'::jsonb,
        false, true
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

    -- Imóvel 37: Apartamento no Jardim Canadá
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000037',
        'Apartamento no Jardim Canadá',
        'Apartamento novo em um dos melhores bairros de Ribeirão Preto, com varanda gourmet, cozinha integrada e depósito privativo. Condomínio com piscina aquecida, academia e brinquedoteca.',
        'venda', 'Apartamento', 'disponivel',
        1850000, 950, 520, true,
        3, 3, 4, 3, 145, 200,
        'Ribeirão Preto', 'Jardim Canadá', 'SP', '14024-350', 'Avenida Wladimir Meirelles Ferreira', '1850', -21.22, -47.83,
        '["Varanda Gourmet","Piscina Aquecida","Academia","Brinquedoteca","Depósito Privativo"]'::jsonb,
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

    -- Imóvel 38: Casa em Condomínio Reserva da Serra
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000038',
        'Casa em Condomínio Reserva da Serra',
        'Casa nova em condomínio de Vinhedo com clube, trilhas e lago. Integração total entre living, cozinha e área externa, com piscina aquecida, spa e espaço pet.',
        'venda', 'Casa em Condomínio', 'disponivel',
        5200000, 1500, 900, true,
        4, 4, 6, 5, 395, 620,
        'Vinhedo', 'Reserva da Serra', 'SP', '13280-000', 'Rua das Hortênsias', '150', -23.03, -46.97,
        '["Piscina Aquecida","Spa","Clube com Lago","Espaço Pet","Trilhas"]'::jsonb,
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

    -- Imóvel 39: Mansão em Terras de São José II
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000039',
        'Mansão em Terras de São José II',
        'Mansão de arquitetura clássica atualizada em um dos condomínios mais exclusivos do interior paulista, com terreno amplo e paisagismo assinado. Adega subterrânea, home theater e casa de hóspedes.',
        'venda', 'Casa em Condomínio', 'disponivel',
        18900000, 4800, 2900, true,
        6, 6, 9, 8, 980, 2600,
        'Itu', 'Terras de São José II', 'SP', '13309-000', 'Alameda das Figueiras', '23', -23.29, -47.32,
        '["Adega Subterrânea","Home Theater","Casa de Hóspedes","Paisagismo Assinado","8 Vagas"]'::jsonb,
        true, true
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

    -- Imóvel 40: Cobertura no Brooklin
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000040',
        'Cobertura no Brooklin',
        'Cobertura duplex com terraço de 120m², piscina privativa e vista para o parque. Living com pé-direito duplo, automação completa e cozinha gourmet integrada à varanda.',
        'venda', 'Cobertura', 'disponivel',
        7300000, 3300, 1900, true,
        4, 4, 6, 5, 430, 560,
        'São Paulo', 'Brooklin', 'SP', '04578-000', 'Rua Flórida', '1180', -23.61, -46.7,
        '["Piscina Privativa","Terraço 120m²","Pé-direito Duplo","Automação Completa","Vista Parque"]'::jsonb,
        true, true
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

    -- Imóvel 41: Apartamento nos Pioneiros
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000041',
        'Apartamento nos Pioneiros',
        'Apartamento em Balneário Camboriú com vista para o mar entre os edifícios, a duas quadras da praia central. Varanda gourmet integrada, planta com três suítes e duas vagas cobertas.',
        'venda', 'Apartamento', 'disponivel',
        2650000, 1500, 780, true,
        3, 3, 4, 2, 160, 210,
        'Balneário Camboriú', 'Pioneiros', 'SC', '88331-090', 'Terceira Avenida', '780', -26.99, -48.635,
        '["Vista Mar","Varanda Gourmet","3 Suítes","2 Vagas Cobertas","Duas Quadras da Praia"]'::jsonb,
        false, true
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

    -- Imóvel 42: Casa de Montanha em Capivari
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000042',
        'Casa de Montanha em Capivari',
        'Casa de montanha em Campos do Jordão com lareira de pedra, mezanino e vista para o vale. Ampla área de convivência, spa com ofurô e aquecimento central, a poucos minutos do centro de Capivari.',
        'venda', 'Casa', 'disponivel',
        5900000, 0, 1600, true,
        5, 4, 6, 4, 420, 1200,
        'Campos do Jordão', 'Capivari', 'SP', '12460-000', 'Rua Doutor Adhemar de Barros', '280', -22.74, -45.59,
        '["Lareira de Pedra","Ofurô","Aquecimento Central","Vista Vale","Mezanino"]'::jsonb,
        true, true
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

    -- Imóvel 43: Apartamento Mobiliado no Centro de Florianópolis
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000043',
        'Apartamento Mobiliado no Centro de Florianópolis',
        'Apartamento totalmente mobiliado e decorado, pronto para morar, a poucos minutos da Avenida Beira-Mar Norte. Prédio com academia, piscina e portaria 24h, ideal para executivos.',
        'aluguel', 'Apartamento', 'disponivel',
        12000, 1400, 600, true,
        3, 2, 3, 2, 130, 175,
        'Florianópolis', 'Centro', 'SC', '88015-200', 'Rua Felipe Schmidt', '600', -27.595, -48.552,
        '["Mobiliado e Decorado","Academia","Piscina","Portaria 24h","Próximo à Beira-Mar"]'::jsonb,
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

    -- Imóvel 44: Cobertura no Setor Bueno
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000044',
        'Cobertura no Setor Bueno',
        'Cobertura duplex no Setor Bueno, em Goiânia, com terraço gourmet, piscina com prainha e vista para o parque. Living com pé-direito duplo, quatro suítes e automação de iluminação.',
        'venda', 'Cobertura', 'disponivel',
        4100000, 2200, 1150, true,
        4, 4, 6, 4, 380, 500,
        'Goiânia', 'Setor Bueno', 'GO', '74230-030', 'Avenida T-9', '2200', -16.7, -49.28,
        '["Terraço Gourmet","Piscina com Prainha","Pé-direito Duplo","4 Suítes","Vista Parque"]'::jsonb,
        true, true
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

    -- Imóvel 45: Casa em Condomínio no Lago Sul
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000045',
        'Casa em Condomínio no Lago Sul',
        'Casa em condomínio fechado do Lago Sul, com terreno amplo e projeto voltado para o convívio. Piscina aquecida, quadra de esportes e suíte master com closet e banheiro duplo, a minutos do Lago Paranoá.',
        'venda', 'Casa em Condomínio', 'disponivel',
        8900000, 2800, 2200, true,
        5, 5, 7, 6, 560, 1100,
        'Brasília', 'Lago Sul', 'DF', '71635-000', 'SHIS QI 11', '12', -15.83, -47.88,
        '["Piscina Aquecida","Quadra de Esportes","Suíte Master com Closet","Condomínio Fechado","Próximo ao Lago"]'::jsonb,
        true, true
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

    -- Imóvel 46: Apartamento Reformado na Asa Sul
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000046',
        'Apartamento Reformado na Asa Sul',
        'Apartamento reformado na Asa Sul, em quadra residencial tranquila, com varanda e ampla área social. Localização privilegiada, próxima ao Eixo Monumental, shoppings e restaurantes.',
        'venda', 'Apartamento', 'disponivel',
        1950000, 900, 550, true,
        3, 2, 3, 2, 135, 180,
        'Brasília', 'Asa Sul', 'DF', '70390-000', 'SQS 308', 'B', -15.81, -47.9,
        '["Reformado","Varanda","Quadra Residencial","Próximo ao Eixo","2 Vagas"]'::jsonb,
        false, true
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

    -- Imóvel 47: Casa em Condomínio em Alphaville Campinas
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000047',
        'Casa em Condomínio em Alphaville Campinas',
        'Residência em condomínio fechado de Alphaville Campinas, com projeto contemporâneo, piscina aquecida e espaço gourmet. Segurança 24h e infraestrutura completa de esportes e lazer.',
        'venda', 'Casa em Condomínio', 'disponivel',
        5500000, 1900, 1300, true,
        4, 4, 6, 5, 430, 680,
        'Campinas', 'Alphaville', 'SP', '13098-325', 'Avenida Alphaville', '620', -22.95, -47.1,
        '["Piscina Aquecida","Espaço Gourmet","Segurança 24h","Projeto Contemporâneo","5 Vagas"]'::jsonb,
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

    -- Imóvel 48: Cobertura no Batel
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000048',
        'Cobertura no Batel',
        'Cobertura no Batel, em Curitiba, com terraço panorâmico, spa com hidromassagem e vista para o parque Barigui. Ambientes integrados, adega climatizada e quatro vagas cobertas.',
        'venda', 'Cobertura', 'disponivel',
        4600000, 2500, 1350, true,
        4, 4, 5, 4, 330, 440,
        'Curitiba', 'Batel', 'PR', '80420-000', 'Avenida do Batel', '1350', -25.44, -49.29,
        '["Terraço Panorâmico","Spa com Hidromassagem","Adega Climatizada","Vista Barigui","4 Vagas Cobertas"]'::jsonb,
        true, true
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

    -- Imóvel 49: Apartamento em Icaraí com Vista para a Baía
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000049',
        'Apartamento em Icaraí com Vista para a Baía',
        'Apartamento de frente para a Baía de Guanabara, em Icaraí, com living integrado e varanda panorâmica. Prédio reformado com salão de festas, academia e duas vagas demarcadas.',
        'venda', 'Apartamento', 'disponivel',
        2400000, 1300, 760, true,
        3, 3, 4, 2, 175, 230,
        'Niterói', 'Icaraí', 'RJ', '24220-031', 'Rua Gavião Peixoto', '310', -22.903, -43.105,
        '["Vista Baía de Guanabara","Varanda Panorâmica","Academia","Salão de Festas","2 Vagas"]'::jsonb,
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

    -- Imóvel 50: Casa de Alto Luxo em Alphaville Barueri
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '00000000-0000-0000-0000-000000000050',
        'Casa de Alto Luxo em Alphaville Barueri',
        'Mansão contemporânea no coração de Alphaville Barueri, com 1.200m² de área construída, piscina aquecida com borda infinita, spa, home theater e espaço gourmet com forno a lenha. Acabamentos importados.',
        'venda', 'Casa em Condomínio', 'disponivel',
        24500000, 5200, 3800, true,
        6, 6, 10, 8, 1200, 2000,
        'Barueri', 'Alphaville', 'SP', '06454-000', 'Alameda Rio Negro', '1500', -23.5, -46.85,
        '["Borda Infinita","Spa","Home Theater","Forno a Lenha","Acabamentos Importados"]'::jsonb,
        true, true
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
