import type { Imovel } from "./supabase/types";

export const DEMO_IMOVEIS: Imovel[] = [
  {
    "id": "00000000-0000-0000-0000-000000000001",
    "titulo": "Cobertura Duplex Skyline com Vista Panorâmica",
    "descricao": "Espetacular cobertura duplex finamente decorada, com pé-direito duplo, automação residencial completa, piscina aquecida privativa e vista 360° da cidade. Acabamentos em mármore travertino e marcenaria de grife.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 3850000,
    "preco_condominio": 3200,
    "preco_iptu": 1450,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 6,
    "vagas": 4,
    "area_util": 380,
    "area_total": 450,
    "cidade": "São Paulo",
    "bairro": "Jardins",
    "uf": "SP",
    "cep": "01401-000",
    "rua": "Alameda Lorena",
    "numero": "1500",
    "latitude": -23.567,
    "longitude": -46.665,
    "caracteristicas": [
      "Piscina Privativa",
      "Pé-direito Duplo",
      "Varanda Gourmet",
      "Automação",
      "Elevador Privativo"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-22T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-1-1",
        "imovel_id": "00000000-0000-0000-0000-000000000001",
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-1-2",
        "imovel_id": "00000000-0000-0000-0000-000000000001",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-1-3",
        "imovel_id": "00000000-0000-0000-0000-000000000001",
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000002",
    "titulo": "Residência Arquitetônica em Condomínio Fechado",
    "descricao": "Projeto assinado por arquiteto renomado com integração total de ambientes, living com lareira ecológica, espaço gourmet completo integrado à piscina com borda infinita e jardim paisagístico deslumbrante.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 5900000,
    "preco_condominio": 2800,
    "preco_iptu": 1800,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 5,
    "banheiros": 7,
    "vagas": 6,
    "area_util": 620,
    "area_total": 950,
    "cidade": "Campinas",
    "bairro": "Gramado",
    "uf": "SP",
    "cep": "13092-000",
    "rua": "Avenida das Palmeiras",
    "numero": "45",
    "latitude": -22.894,
    "longitude": -47.025,
    "caracteristicas": [
      "Borda Infinita",
      "Jardim Paisagístico",
      "Segurança Armada",
      "Espaço Gourmet",
      "Lareira"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-23T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-2-1",
        "imovel_id": "00000000-0000-0000-0000-000000000002",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-2-2",
        "imovel_id": "00000000-0000-0000-0000-000000000002",
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-2-3",
        "imovel_id": "00000000-0000-0000-0000-000000000002",
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000003",
    "titulo": "Apartamento Contemporâneo com Living Integrado",
    "descricao": "Apartamento de alto padrão com acabamentos nobres em mármore e madeira freijó, ampla varanda gourmet com churrasqueira a carvão e condomínio com infraestrutura completa de resort internacional.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 2200000,
    "preco_condominio": 1600,
    "preco_iptu": 750,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 3,
    "banheiros": 4,
    "vagas": 3,
    "area_util": 195,
    "area_total": 260,
    "cidade": "São Paulo",
    "bairro": "Itaim Bibi",
    "uf": "SP",
    "cep": "04530-000",
    "rua": "Rua Tabapuã",
    "numero": "800",
    "latitude": -23.585,
    "longitude": -46.678,
    "caracteristicas": [
      "Varanda Gourmet",
      "Acabamento em Mármore",
      "Lazer Completo",
      "3 Vagas"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-23T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-3-1",
        "imovel_id": "00000000-0000-0000-0000-000000000003",
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-3-2",
        "imovel_id": "00000000-0000-0000-0000-000000000003",
        "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-3-3",
        "imovel_id": "00000000-0000-0000-0000-000000000003",
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000004",
    "titulo": "Mansão Minimalista com Vista para o Vale",
    "descricao": "Design de vanguarda com linhas retas, esquadrias do chão ao teto, piscina aquecida com deck molhado e iluminação cênica. Ideal para quem busca privacidade absoluta e alto requinte.",
    "finalidade": "aluguel",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 28000,
    "preco_condominio": 3500,
    "preco_iptu": 1200,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 6,
    "vagas": 4,
    "area_util": 510,
    "area_total": 800,
    "cidade": "Barueri",
    "bairro": "Alphaville",
    "uf": "SP",
    "cep": "06472-000",
    "rua": "Alameda dos Bosques",
    "numero": "120",
    "latitude": -23.491,
    "longitude": -46.852,
    "caracteristicas": [
      "Piscina Aquecida",
      "Segurança 24h",
      "Varanda Gourmet",
      "Home Cinema"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-24T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-4-1",
        "imovel_id": "00000000-0000-0000-0000-000000000004",
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-4-2",
        "imovel_id": "00000000-0000-0000-0000-000000000004",
        "url": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-4-3",
        "imovel_id": "00000000-0000-0000-0000-000000000004",
        "url": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000005",
    "titulo": "Penthouse Exclusiva na Praça Pereira Coutinho",
    "descricao": "Localização mais nobre de São Paulo em frente à praça. Três pavimentos interligados por elevador privativo panorâmico, adega climatizada para 800 rótulos e solarium privativo.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 18500000,
    "preco_condominio": 8900,
    "preco_iptu": 3800,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 5,
    "banheiros": 8,
    "vagas": 7,
    "area_util": 680,
    "area_total": 890,
    "cidade": "São Paulo",
    "bairro": "Vila Nova Conceição",
    "uf": "SP",
    "cep": "04508-010",
    "rua": "Praça Pereira Coutinho",
    "numero": "88",
    "latitude": -23.591,
    "longitude": -46.671,
    "caracteristicas": [
      "Piscina Privativa",
      "Adega Climatizada",
      "Elevador Panorâmico",
      "Vista Parque",
      "Segurança Blindada"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-24T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-5-1",
        "imovel_id": "00000000-0000-0000-0000-000000000005",
        "url": "https://images.pexels.com/photos/4913326/pexels-photo-4913326.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-5-2",
        "imovel_id": "00000000-0000-0000-0000-000000000005",
        "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-5-3",
        "imovel_id": "00000000-0000-0000-0000-000000000005",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000006",
    "titulo": "Mansão Moderna na Fazenda Boa Vista",
    "descricao": "Projeto integrado à natureza com vista panorâmica para o campo de golfe. Suíte master com closet duplo e banheiros Sr. e Sra., spa privativo com sauna seca e úmida.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 24000000,
    "preco_condominio": 5500,
    "preco_iptu": 2800,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 6,
    "banheiros": 9,
    "vagas": 8,
    "area_util": 980,
    "area_total": 2500,
    "cidade": "Porto Feliz",
    "bairro": "Fazenda Boa Vista",
    "uf": "SP",
    "cep": "18540-000",
    "rua": "Alameda das Araucárias",
    "numero": "15",
    "latitude": -23.21,
    "longitude": -47.53,
    "caracteristicas": [
      "Campo de Golfe",
      "Spa Privativo",
      "Sauna",
      "Borda Infinita",
      "Heliponto Próximo"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-25T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-6-1",
        "imovel_id": "00000000-0000-0000-0000-000000000006",
        "url": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-6-2",
        "imovel_id": "00000000-0000-0000-0000-000000000006",
        "url": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-6-3",
        "imovel_id": "00000000-0000-0000-0000-000000000006",
        "url": "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000007",
    "titulo": "Apartamento Garden Suspenso no Jardim Europa",
    "descricao": "Sensação de viver em uma casa térrea com a segurança de um edifício blindado. Jardim privativo com irrigação automatizada, piscina privativa e churrasqueira de alta performance.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 8200000,
    "preco_condominio": 4100,
    "preco_iptu": 2100,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 5,
    "vagas": 5,
    "area_util": 420,
    "area_total": 580,
    "cidade": "São Paulo",
    "bairro": "Jardim Europa",
    "uf": "SP",
    "cep": "01445-001",
    "rua": "Rua Groenlândia",
    "numero": "710",
    "latitude": -23.578,
    "longitude": -46.681,
    "caracteristicas": [
      "Jardim Privativo",
      "Piscina Privativa",
      "Varanda Gourmet",
      "Automação Completa"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-25T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-7-1",
        "imovel_id": "00000000-0000-0000-0000-000000000007",
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-7-2",
        "imovel_id": "00000000-0000-0000-0000-000000000007",
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-7-3",
        "imovel_id": "00000000-0000-0000-0000-000000000007",
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000008",
    "titulo": "Villa Tropical Beira-Mar em Juquehy",
    "descricao": "Pé na areia com acesso privativo à praia. Deck amplo em madeira de lei com espreguiçadeiras, piscina com hidro integrada e suítes com vista panorâmica para o oceano.",
    "finalidade": "temporada",
    "tipo": "Casa",
    "status": "disponivel",
    "preco": 8500,
    "preco_condominio": 0,
    "preco_iptu": 0,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 5,
    "banheiros": 6,
    "vagas": 4,
    "area_util": 450,
    "area_total": 700,
    "cidade": "São Sebastião",
    "bairro": "Juquehy",
    "uf": "SP",
    "cep": "11600-000",
    "rua": "Avenida Mãe Bernarda",
    "numero": "320",
    "latitude": -23.766,
    "longitude": -45.733,
    "caracteristicas": [
      "Pé na Areia",
      "Vista Mar",
      "Piscina com Hidro",
      "Deck de Madeira",
      "Serviço de Praia"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-26T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-8-1",
        "imovel_id": "00000000-0000-0000-0000-000000000008",
        "url": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-8-2",
        "imovel_id": "00000000-0000-0000-0000-000000000008",
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-8-3",
        "imovel_id": "00000000-0000-0000-0000-000000000008",
        "url": "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000009",
    "titulo": "Residência Neoclássica no Residencial Tamboré",
    "descricao": "Imponente mansão neoclássica com colunata nobre, mármore Crema Marfil, living para 4 ambientes com pé-direito de 7 metros e quadra de beach tennis privativa.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 11900000,
    "preco_condominio": 3800,
    "preco_iptu": 1950,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 5,
    "banheiros": 8,
    "vagas": 6,
    "area_util": 780,
    "area_total": 1200,
    "cidade": "Santana de Parnaíba",
    "bairro": "Tamboré",
    "uf": "SP",
    "cep": "06543-000",
    "rua": "Avenida Tamboré",
    "numero": "850",
    "latitude": -23.475,
    "longitude": -46.839,
    "caracteristicas": [
      "Quadra Beach Tennis",
      "Pé-direito Duplo",
      "Adega Subterrânea",
      "Piscina Aquecida"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-08-26T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-9-1",
        "imovel_id": "00000000-0000-0000-0000-000000000009",
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-9-2",
        "imovel_id": "00000000-0000-0000-0000-000000000009",
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-9-3",
        "imovel_id": "00000000-0000-0000-0000-000000000009",
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000010",
    "titulo": "Apartamento de Grife em Pinheiros com Vista Parque",
    "descricao": "Edifício icônico com arquitetura premiada. Ambientes fluidos, caixilhos piso-teto que maximizam a luminosidade natural e cozinha gourmet integrada.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 3100000,
    "preco_condominio": 1900,
    "preco_iptu": 820,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 3,
    "banheiros": 4,
    "vagas": 3,
    "area_util": 210,
    "area_total": 290,
    "cidade": "São Paulo",
    "bairro": "Pinheiros",
    "uf": "SP",
    "cep": "05415-000",
    "rua": "Rua dos Pinheiros",
    "numero": "1120",
    "latitude": -23.565,
    "longitude": -46.689,
    "caracteristicas": [
      "Arquitetura Premiada",
      "Vista Panorâmica",
      "Piscina Aquecida",
      "Academia Moderna"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-08-27T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-10-1",
        "imovel_id": "00000000-0000-0000-0000-000000000010",
        "url": "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-10-2",
        "imovel_id": "00000000-0000-0000-0000-000000000010",
        "url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-10-3",
        "imovel_id": "00000000-0000-0000-0000-000000000010",
        "url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000011",
    "titulo": "Mansão Contemporânea na Quinta da Baroneza",
    "descricao": "Terreno exclusivo com bosque privativo e vista permanente. Residência com 6 suítes avarandadas, adega para 1.200 garrafas, quadra de tênis de saibro e casa de caseiro independente.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 29500000,
    "preco_condominio": 6200,
    "preco_iptu": 3400,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 6,
    "banheiros": 10,
    "vagas": 10,
    "area_util": 1250,
    "area_total": 3800,
    "cidade": "Bragança Paulista",
    "bairro": "Quinta da Baroneza",
    "uf": "SP",
    "cep": "12900-000",
    "rua": "Alameda dos Barões",
    "numero": "42",
    "latitude": -22.95,
    "longitude": -46.54,
    "caracteristicas": [
      "Quadra de Tênis",
      "Bosque Privativo",
      "Adega de Luxo",
      "Heliponto",
      "Casa de Hóspedes"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-27T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-11-1",
        "imovel_id": "00000000-0000-0000-0000-000000000011",
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-11-2",
        "imovel_id": "00000000-0000-0000-0000-000000000011",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-11-3",
        "imovel_id": "00000000-0000-0000-0000-000000000011",
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000012",
    "titulo": "Studio Penthouse Executivo no Itaim Bibi",
    "descricao": "Ideal para executivos e investidores de alta rentabilidade. Totalmente mobiliado e decorado pela Armani/Casa, serviços pay-per-use e rooftop com piscina de borda infinita.",
    "finalidade": "aluguel",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 16000,
    "preco_condominio": 1800,
    "preco_iptu": 650,
    "aceita_financiamento": true,
    "quartos": 1,
    "suites": 1,
    "banheiros": 2,
    "vagas": 2,
    "area_util": 95,
    "area_total": 130,
    "cidade": "São Paulo",
    "bairro": "Itaim Bibi",
    "uf": "SP",
    "cep": "04532-001",
    "rua": "Rua Joaquim Floriano",
    "numero": "460",
    "latitude": -23.583,
    "longitude": -46.674,
    "caracteristicas": [
      "Mobiliado Armani",
      "Rooftop com Piscina",
      "Serviços Pay-per-use",
      "Valet 24h"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-08-28T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-12-1",
        "imovel_id": "00000000-0000-0000-0000-000000000012",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-12-2",
        "imovel_id": "00000000-0000-0000-0000-000000000012",
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-12-3",
        "imovel_id": "00000000-0000-0000-0000-000000000012",
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000013",
    "titulo": "Cobertura Triplex com Heliponto Privativo no Morumbi",
    "descricao": "Uma das maiores coberturas da América Latina. Possui 1.500m² úteis, elevador privativo codificado, heliponto homologado e piscina aquecida no 3º piso com vista monumental.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 42000000,
    "preco_condominio": 15000,
    "preco_iptu": 6500,
    "aceita_financiamento": true,
    "quartos": 7,
    "suites": 7,
    "banheiros": 12,
    "vagas": 12,
    "area_util": 1500,
    "area_total": 2100,
    "cidade": "São Paulo",
    "bairro": "Morumbi",
    "uf": "SP",
    "cep": "05650-000",
    "rua": "Rua São Paulo Antigo",
    "numero": "300",
    "latitude": -23.605,
    "longitude": -46.712,
    "caracteristicas": [
      "Heliponto Homologado",
      "Piscina Aquecida",
      "Segurança Bunker",
      "12 Vagas",
      "Elevador Codificado"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-28T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-13-1",
        "imovel_id": "00000000-0000-0000-0000-000000000013",
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-13-2",
        "imovel_id": "00000000-0000-0000-0000-000000000013",
        "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-13-3",
        "imovel_id": "00000000-0000-0000-0000-000000000013",
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000014",
    "titulo": "Residência de Vidro em Meio à Mata no Terras de São José",
    "descricao": "Total integração arquitetônica com a mata atlântica nativa. Paredes envidraçadas retráteis, lareira suspensa, adega climatizada e pomar produtivo.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 7800000,
    "preco_condominio": 2600,
    "preco_iptu": 1400,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 5,
    "banheiros": 7,
    "vagas": 6,
    "area_util": 670,
    "area_total": 2200,
    "cidade": "Itu",
    "bairro": "Terras de São José",
    "uf": "SP",
    "cep": "13300-000",
    "rua": "Alameda das Paineiras",
    "numero": "89",
    "latitude": -23.26,
    "longitude": -47.3,
    "caracteristicas": [
      "Mata Nativa",
      "Lareira Suspensa",
      "Adega Climatizada",
      "Condomínio com Golfe"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-08-29T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-14-1",
        "imovel_id": "00000000-0000-0000-0000-000000000014",
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-14-2",
        "imovel_id": "00000000-0000-0000-0000-000000000014",
        "url": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-14-3",
        "imovel_id": "00000000-0000-0000-0000-000000000014",
        "url": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000015",
    "titulo": "Apartamento Clássico Reformado em Higienópolis",
    "descricao": "Planta generosa com janelões do piso ao teto, piso original em parquet restaurado, ar-condicionado central em todos os cômodos e cozinha gourmet com ilha central em Silestone.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 4500000,
    "preco_condominio": 3100,
    "preco_iptu": 1350,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 3,
    "banheiros": 5,
    "vagas": 3,
    "area_util": 330,
    "area_total": 420,
    "cidade": "São Paulo",
    "bairro": "Higienópolis",
    "uf": "SP",
    "cep": "01238-000",
    "rua": "Rua Alagoas",
    "numero": "520",
    "latitude": -23.546,
    "longitude": -46.657,
    "caracteristicas": [
      "Parquet Restaurado",
      "Janelões Clássicos",
      "Ar Central",
      "Cozinha com Ilha"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-08-29T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-15-1",
        "imovel_id": "00000000-0000-0000-0000-000000000015",
        "url": "https://images.pexels.com/photos/4913326/pexels-photo-4913326.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-15-2",
        "imovel_id": "00000000-0000-0000-0000-000000000015",
        "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-15-3",
        "imovel_id": "00000000-0000-0000-0000-000000000015",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000016",
    "titulo": "Casa de Praia de Alto Padrão em Riviera de São Lourenço",
    "descricao": "Módulo 2, a apenas 50 metros da praia. Casa nova com acabamento primoroso, piscina aquecida com prainha, sauna úmida com passagem direta para a água e espaço gourmet climatizado.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 9800000,
    "preco_condominio": 1800,
    "preco_iptu": 1200,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 6,
    "banheiros": 8,
    "vagas": 4,
    "area_util": 580,
    "area_total": 750,
    "cidade": "Bertioga",
    "bairro": "Riviera de São Lourenço",
    "uf": "SP",
    "cep": "11250-000",
    "rua": "Largo dos Coqueiros",
    "numero": "18",
    "latitude": -23.792,
    "longitude": -46.015,
    "caracteristicas": [
      "Sauna com Passagem",
      "Piscina Aquecida",
      "50m da Praia",
      "Espaço Gourmet Climatizado"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-30T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-16-1",
        "imovel_id": "00000000-0000-0000-0000-000000000016",
        "url": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-16-2",
        "imovel_id": "00000000-0000-0000-0000-000000000016",
        "url": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-16-3",
        "imovel_id": "00000000-0000-0000-0000-000000000016",
        "url": "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000017",
    "titulo": "Apartamento Frente Mar em Balneário Camboriú",
    "descricao": "Andar alto com vista espetacular de toda a orla. Edifício com heliponto, piscina aquecida de 25m, academia assinada e serviço de conciergerie 24 horas.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 14500000,
    "preco_condominio": 3900,
    "preco_iptu": 2100,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 6,
    "vagas": 5,
    "area_util": 390,
    "area_total": 510,
    "cidade": "Balneário Camboriú",
    "bairro": "Centro",
    "uf": "SC",
    "cep": "88330-000",
    "rua": "Avenida Atlântica",
    "numero": "2100",
    "latitude": -26.992,
    "longitude": -48.635,
    "caracteristicas": [
      "Frente Mar",
      "Heliponto",
      "Piscina 25m",
      "Concierge 24h",
      "Automação"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-08-30T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-17-1",
        "imovel_id": "00000000-0000-0000-0000-000000000017",
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-17-2",
        "imovel_id": "00000000-0000-0000-0000-000000000017",
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-17-3",
        "imovel_id": "00000000-0000-0000-0000-000000000017",
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000018",
    "titulo": "Residência Contemporânea no Alto de Pinheiros",
    "descricao": "Rua tranquila e arborizada com segurança armada 24h. Arquitetura moderna com estrutura metálica aparente, muita luz natural, jardim com piscina e espaço wellness privativo.",
    "finalidade": "venda",
    "tipo": "Casa",
    "status": "disponivel",
    "preco": 8700000,
    "preco_condominio": 0,
    "preco_iptu": 2400,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 6,
    "vagas": 5,
    "area_util": 520,
    "area_total": 780,
    "cidade": "São Paulo",
    "bairro": "Alto de Pinheiros",
    "uf": "SP",
    "cep": "05460-000",
    "rua": "Rua Arquiteto Jaime Fonseca",
    "numero": "140",
    "latitude": -23.548,
    "longitude": -46.708,
    "caracteristicas": [
      "Espaço Wellness",
      "Segurança Armada",
      "Jardim Paisagístico",
      "Piscina Privativa"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-08-31T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-18-1",
        "imovel_id": "00000000-0000-0000-0000-000000000018",
        "url": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-18-2",
        "imovel_id": "00000000-0000-0000-0000-000000000018",
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-18-3",
        "imovel_id": "00000000-0000-0000-0000-000000000018",
        "url": "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000019",
    "titulo": "Apartamento Duplex Mobiliado no Moema Pássaros",
    "descricao": "Fora da rota de aviões. Pé-direito duplo no living, terraço gourmet com churrasqueira e fechamento em vidro retrátil, armários Ornare e automação de iluminação e som.",
    "finalidade": "aluguel",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 22000,
    "preco_condominio": 2400,
    "preco_iptu": 950,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 3,
    "banheiros": 5,
    "vagas": 3,
    "area_util": 235,
    "area_total": 310,
    "cidade": "São Paulo",
    "bairro": "Moema",
    "uf": "SP",
    "cep": "04515-030",
    "rua": "Rua Canário",
    "numero": "720",
    "latitude": -23.602,
    "longitude": -46.668,
    "caracteristicas": [
      "Pé-direito Duplo",
      "Mobiliado Ornare",
      "Fora da Rota",
      "Varanda Gourmet"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-08-31T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-19-1",
        "imovel_id": "00000000-0000-0000-0000-000000000019",
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-19-2",
        "imovel_id": "00000000-0000-0000-0000-000000000019",
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-19-3",
        "imovel_id": "00000000-0000-0000-0000-000000000019",
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000020",
    "titulo": "Mansão Suspensa com Vista para o Parque Ibirapuera",
    "descricao": "Edifício exclusivo com apenas uma unidade por andar. Living com 120m², adega walk-in climatizada, suíte master com dois banheiros e dois closets com marcenaria italiana.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 16800000,
    "preco_condominio": 7200,
    "preco_iptu": 3400,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 7,
    "vagas": 6,
    "area_util": 560,
    "area_total": 750,
    "cidade": "São Paulo",
    "bairro": "Vila Nova Conceição",
    "uf": "SP",
    "cep": "04505-001",
    "rua": "Avenida República do Líbano",
    "numero": "990",
    "latitude": -23.593,
    "longitude": -46.663,
    "caracteristicas": [
      "Vista Ibirapuera",
      "Adega Walk-in",
      "Marcenaria Italiana",
      "Depósito Privativo"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-01T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-20-1",
        "imovel_id": "00000000-0000-0000-0000-000000000020",
        "url": "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-20-2",
        "imovel_id": "00000000-0000-0000-0000-000000000020",
        "url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-20-3",
        "imovel_id": "00000000-0000-0000-0000-000000000020",
        "url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000021",
    "titulo": "Cobertura Duplex com Terraço Gourmet no Jardim Paulistano",
    "descricao": "Cobertura duplex em rua arborizada do Jardim Paulistano, com terraço gourmet integrado, churrasqueira a carvão, ofurô aquecido e vista aberta para o skyline. Living com pé-direito duplo, marcenaria sob medida e automação de cortinas e iluminação.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 5400000,
    "preco_condominio": 2900,
    "preco_iptu": 1600,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 5,
    "vagas": 4,
    "area_util": 320,
    "area_total": 420,
    "cidade": "São Paulo",
    "bairro": "Jardim Paulistano",
    "uf": "SP",
    "cep": "01455-000",
    "rua": "Rua Doutor Melo Alves",
    "numero": "640",
    "latitude": -23.576,
    "longitude": -46.678,
    "caracteristicas": [
      "Terraço Gourmet",
      "Ofurô Aquecido",
      "Pé-direito Duplo",
      "Automação",
      "Vista Skyline"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-01T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-21-1",
        "imovel_id": "00000000-0000-0000-0000-000000000021",
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-21-2",
        "imovel_id": "00000000-0000-0000-0000-000000000021",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-21-3",
        "imovel_id": "00000000-0000-0000-0000-000000000021",
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000022",
    "titulo": "Casa Térrea Contemporânea no Granja Viana",
    "descricao": "Residência térrea de linhas retas em condomínio consolidado, com jardim paisagístico, piscina aquecida com deck e espaço gourmet coberto. Suíte master com closet e banheiro com banheira de imersão.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 4300000,
    "preco_condominio": 1900,
    "preco_iptu": 980,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 3,
    "banheiros": 5,
    "vagas": 4,
    "area_util": 360,
    "area_total": 600,
    "cidade": "Cotia",
    "bairro": "Granja Viana",
    "uf": "SP",
    "cep": "06709-015",
    "rua": "Rua das Acácias",
    "numero": "210",
    "latitude": -23.596,
    "longitude": -46.842,
    "caracteristicas": [
      "Piscina Aquecida",
      "Jardim Paisagístico",
      "Espaço Gourmet",
      "Segurança 24h",
      "Suíte Master com Closet"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-02T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-22-1",
        "imovel_id": "00000000-0000-0000-0000-000000000022",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-22-2",
        "imovel_id": "00000000-0000-0000-0000-000000000022",
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-22-3",
        "imovel_id": "00000000-0000-0000-0000-000000000022",
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000023",
    "titulo": "Apartamento Alto Padrão na Vila Olímpia",
    "descricao": "Unidade de esquina com planta flexível, living ampliado em porcelanato e varanda gourmet com churrasqueira. Prédio com rooftop, piscina aquecida, academia e coworking, a passos do Parque do Povo.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 2750000,
    "preco_condominio": 1750,
    "preco_iptu": 780,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 3,
    "banheiros": 4,
    "vagas": 3,
    "area_util": 180,
    "area_total": 240,
    "cidade": "São Paulo",
    "bairro": "Vila Olímpia",
    "uf": "SP",
    "cep": "04551-000",
    "rua": "Rua Fiandeiras",
    "numero": "420",
    "latitude": -23.595,
    "longitude": -46.687,
    "caracteristicas": [
      "Varanda Gourmet",
      "Rooftop com Piscina",
      "Academia",
      "Coworking",
      "3 Vagas"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-02T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-23-1",
        "imovel_id": "00000000-0000-0000-0000-000000000023",
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-23-2",
        "imovel_id": "00000000-0000-0000-0000-000000000023",
        "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-23-3",
        "imovel_id": "00000000-0000-0000-0000-000000000023",
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000024",
    "titulo": "Casa de Campo com Lago Particular no Vale Verde",
    "descricao": "Terreno com paisagismo maduro e lago com carpas, pomar e quadra de beach tennis. Casa com varandas em todas as suítes, lareira e cozinha gourmet integrada ao salão de vidro.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 6800000,
    "preco_condominio": 2200,
    "preco_iptu": 1250,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 5,
    "banheiros": 6,
    "vagas": 6,
    "area_util": 540,
    "area_total": 1800,
    "cidade": "Valinhos",
    "bairro": "Vale Verde",
    "uf": "SP",
    "cep": "13278-000",
    "rua": "Alameda dos Ipês",
    "numero": "77",
    "latitude": -22.97,
    "longitude": -46.995,
    "caracteristicas": [
      "Lago Particular",
      "Lareira",
      "Quadra Beach Tennis",
      "Pomar",
      "Piscina Aquecida"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-03T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-24-1",
        "imovel_id": "00000000-0000-0000-0000-000000000024",
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-24-2",
        "imovel_id": "00000000-0000-0000-0000-000000000024",
        "url": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-24-3",
        "imovel_id": "00000000-0000-0000-0000-000000000024",
        "url": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000025",
    "titulo": "Cobertura Frente Mar no Jardim Acapulco",
    "descricao": "Última unidade com vista frontal para o oceano, em condomínio pé na areia com acesso privativo à praia. Living com esquadrias panorâmicas, terraço com piscina privativa e serviço de praia.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 9800000,
    "preco_condominio": 3400,
    "preco_iptu": 2100,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 6,
    "vagas": 4,
    "area_util": 410,
    "area_total": 530,
    "cidade": "Guarujá",
    "bairro": "Jardim Acapulco",
    "uf": "SP",
    "cep": "11442-000",
    "rua": "Avenida Miguel Estefno",
    "numero": "1390",
    "latitude": -23.97,
    "longitude": -46.22,
    "caracteristicas": [
      "Frente Mar",
      "Piscina Privativa",
      "Vista Oceano",
      "Serviço de Praia",
      "Pé na Areia"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-03T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-25-1",
        "imovel_id": "00000000-0000-0000-0000-000000000025",
        "url": "https://images.pexels.com/photos/4913326/pexels-photo-4913326.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-25-2",
        "imovel_id": "00000000-0000-0000-0000-000000000025",
        "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-25-3",
        "imovel_id": "00000000-0000-0000-0000-000000000025",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000026",
    "titulo": "Apartamento Amplo no Coração do Cambuí",
    "descricao": "Planta de 210m² com quatro dormitórios, dois deles suítes, e três vagas cobertas. Condomínio com piscina, salão de festas e quadra, em rua tranquila do Cambuí, próximo a restaurantes e academias.",
    "finalidade": "aluguel",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 14500,
    "preco_condominio": 2100,
    "preco_iptu": 890,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 2,
    "banheiros": 4,
    "vagas": 3,
    "area_util": 210,
    "area_total": 285,
    "cidade": "Campinas",
    "bairro": "Cambuí",
    "uf": "SP",
    "cep": "13025-050",
    "rua": "Rua Doutor Sampaio Ferraz",
    "numero": "530",
    "latitude": -22.899,
    "longitude": -47.052,
    "caracteristicas": [
      "Piscina",
      "Quadra",
      "Salão de Festas",
      "3 Vagas Cobertas",
      "Próximo ao Comércio"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-04T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-26-1",
        "imovel_id": "00000000-0000-0000-0000-000000000026",
        "url": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-26-2",
        "imovel_id": "00000000-0000-0000-0000-000000000026",
        "url": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-26-3",
        "imovel_id": "00000000-0000-0000-0000-000000000026",
        "url": "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000027",
    "titulo": "Residência Moderna no Ecoville",
    "descricao": "Projeto de linhas contemporâneas com fachada ventilada e amplos panos de vidro, em região nobre de Curitiba. Espaço gourmet com forno a lenha, adega climatizada e jardim de inverno.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 6900000,
    "preco_condominio": 1600,
    "preco_iptu": 1400,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 5,
    "banheiros": 7,
    "vagas": 5,
    "area_util": 520,
    "area_total": 780,
    "cidade": "Curitiba",
    "bairro": "Ecoville",
    "uf": "PR",
    "cep": "82305-000",
    "rua": "Rua Doutor Ovande do Amaral",
    "numero": "300",
    "latitude": -25.43,
    "longitude": -49.31,
    "caracteristicas": [
      "Fachada Ventilada",
      "Forno a Lenha",
      "Adega Climatizada",
      "Jardim de Inverno",
      "Segurança 24h"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-04T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-27-1",
        "imovel_id": "00000000-0000-0000-0000-000000000027",
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-27-2",
        "imovel_id": "00000000-0000-0000-0000-000000000027",
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-27-3",
        "imovel_id": "00000000-0000-0000-0000-000000000027",
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000028",
    "titulo": "Apartamento Vista Mar na Barra Sul",
    "descricao": "Andar alto com vista permanente para o mar de Balneário Camboriú, acabamento em porcelanato e marcenaria planejada. Edifício com piscina aquecida, academia e concierge, a poucos metros da orla.",
    "finalidade": "aluguel",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 25000,
    "preco_condominio": 2800,
    "preco_iptu": 1100,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 3,
    "banheiros": 4,
    "vagas": 3,
    "area_util": 235,
    "area_total": 310,
    "cidade": "Balneário Camboriú",
    "bairro": "Barra Sul",
    "uf": "SC",
    "cep": "88330-694",
    "rua": "Avenida Atlântica",
    "numero": "3450",
    "latitude": -27,
    "longitude": -48.63,
    "caracteristicas": [
      "Vista Mar",
      "Piscina Aquecida",
      "Academia",
      "Concierge",
      "Próximo à Orla"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-05T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-28-1",
        "imovel_id": "00000000-0000-0000-0000-000000000028",
        "url": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-28-2",
        "imovel_id": "00000000-0000-0000-0000-000000000028",
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-28-3",
        "imovel_id": "00000000-0000-0000-0000-000000000028",
        "url": "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000029",
    "titulo": "Cobertura Panorâmica no Leblon",
    "descricao": "Cobertura duplex com vista para o Morro Dois Irmãos e o mar do Leblon, terraço com piscina de borda infinita e espaço gourmet. Living com pé-direito duplo e esquadrias acústicas de alto desempenho.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 21500000,
    "preco_condominio": 6800,
    "preco_iptu": 4200,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 7,
    "vagas": 5,
    "area_util": 480,
    "area_total": 640,
    "cidade": "Rio de Janeiro",
    "bairro": "Leblon",
    "uf": "RJ",
    "cep": "22440-032",
    "rua": "Rua Dias Ferreira",
    "numero": "560",
    "latitude": -22.985,
    "longitude": -43.223,
    "caracteristicas": [
      "Vista Mar",
      "Borda Infinita",
      "Pé-direito Duplo",
      "Vista Morro Dois Irmãos",
      "5 Vagas"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-05T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-29-1",
        "imovel_id": "00000000-0000-0000-0000-000000000029",
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-29-2",
        "imovel_id": "00000000-0000-0000-0000-000000000029",
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-29-3",
        "imovel_id": "00000000-0000-0000-0000-000000000029",
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000030",
    "titulo": "Casa de Praia em Geribá",
    "descricao": "Casa de temporada em condomínio fechado a 400m da Praia de Geribá, com piscina com raia, espaço gourmet e cinco suítes. Estrutura completa para locação por temporada, com lavanderia e área de serviço independente.",
    "finalidade": "temporada",
    "tipo": "Casa",
    "status": "disponivel",
    "preco": 9500,
    "preco_condominio": 0,
    "preco_iptu": 0,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 5,
    "banheiros": 6,
    "vagas": 4,
    "area_util": 380,
    "area_total": 620,
    "cidade": "Armação dos Búzios",
    "bairro": "Geribá",
    "uf": "RJ",
    "cep": "28950-000",
    "rua": "Rua das Gaivotas",
    "numero": "88",
    "latitude": -22.77,
    "longitude": -41.9,
    "caracteristicas": [
      "Piscina com Raia",
      "Espaço Gourmet",
      "Condomínio Fechado",
      "400m da Praia",
      "5 Suítes"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-06T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-30-1",
        "imovel_id": "00000000-0000-0000-0000-000000000030",
        "url": "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-30-2",
        "imovel_id": "00000000-0000-0000-0000-000000000030",
        "url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-30-3",
        "imovel_id": "00000000-0000-0000-0000-000000000030",
        "url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000031",
    "titulo": "Apartamento de Frente para a Praia de Ipanema",
    "descricao": "Imóvel de frente para a orla de Ipanema, com varanda contínua e vista desobstruída para o mar e o Arpoador. Reforma recente com marcenaria planejada, piso em madeira e ar-condicionado em todos os ambientes.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 12800000,
    "preco_condominio": 4300,
    "preco_iptu": 3200,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 5,
    "vagas": 2,
    "area_util": 290,
    "area_total": 360,
    "cidade": "Rio de Janeiro",
    "bairro": "Ipanema",
    "uf": "RJ",
    "cep": "22010-000",
    "rua": "Avenida Vieira Souto",
    "numero": "480",
    "latitude": -22.984,
    "longitude": -43.204,
    "caracteristicas": [
      "Frente Mar",
      "Vista Arpoador",
      "Reforma Recente",
      "Varanda Contínua",
      "Ar-condicionado Central"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-06T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-31-1",
        "imovel_id": "00000000-0000-0000-0000-000000000031",
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-31-2",
        "imovel_id": "00000000-0000-0000-0000-000000000031",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-31-3",
        "imovel_id": "00000000-0000-0000-0000-000000000031",
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000032",
    "titulo": "Casa em Condomínio Helvetia",
    "descricao": "Residência no Condomínio Helvetia, o mais tradicional de Indaiatuba, com bosque nativo preservado e infraestrutura de clube. Casa com living de dois ambientes, varanda gourmet e piscina aquecida.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 4600000,
    "preco_condominio": 1700,
    "preco_iptu": 1050,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 6,
    "vagas": 5,
    "area_util": 420,
    "area_total": 850,
    "cidade": "Indaiatuba",
    "bairro": "Helvetia",
    "uf": "SP",
    "cep": "13330-000",
    "rua": "Alameda das Hortênsias",
    "numero": "360",
    "latitude": -23.07,
    "longitude": -47.2,
    "caracteristicas": [
      "Piscina Aquecida",
      "Bosque Nativo",
      "Clube Completo",
      "Varanda Gourmet",
      "Segurança 24h"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-07T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-32-1",
        "imovel_id": "00000000-0000-0000-0000-000000000032",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-32-2",
        "imovel_id": "00000000-0000-0000-0000-000000000032",
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-32-3",
        "imovel_id": "00000000-0000-0000-0000-000000000032",
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000033",
    "titulo": "Cobertura Duplex em Lourdes",
    "descricao": "Cobertura duplex em bairro nobre de Belo Horizonte, com terraço panorâmico e vista para a Serra do Curral. Living integrado, adega climatizada e três vagas cobertas, a poucos minutos da Savassi.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 4900000,
    "preco_condominio": 2400,
    "preco_iptu": 1500,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 6,
    "vagas": 3,
    "area_util": 340,
    "area_total": 450,
    "cidade": "Belo Horizonte",
    "bairro": "Lourdes",
    "uf": "MG",
    "cep": "30180-050",
    "rua": "Rua da Bahia",
    "numero": "2100",
    "latitude": -19.93,
    "longitude": -43.945,
    "caracteristicas": [
      "Vista Serra do Curral",
      "Terraço Panorâmico",
      "Adega Climatizada",
      "3 Vagas",
      "Próximo à Savassi"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-07T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-33-1",
        "imovel_id": "00000000-0000-0000-0000-000000000033",
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-33-2",
        "imovel_id": "00000000-0000-0000-0000-000000000033",
        "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-33-3",
        "imovel_id": "00000000-0000-0000-0000-000000000033",
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000034",
    "titulo": "Apartamento de Luxo no Bela Vista",
    "descricao": "Unidade de altíssimo padrão em região valorizada de Porto Alegre, com living com lareira a gás, cozinha gourmet com ilha e varanda com churrasqueira. Entrega com acabamentos premium.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 3900000,
    "preco_condominio": 1900,
    "preco_iptu": 920,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 3,
    "banheiros": 4,
    "vagas": 3,
    "area_util": 215,
    "area_total": 280,
    "cidade": "Porto Alegre",
    "bairro": "Bela Vista",
    "uf": "RS",
    "cep": "90450-190",
    "rua": "Rua Ramiro Barcelos",
    "numero": "1500",
    "latitude": -30.04,
    "longitude": -51.19,
    "caracteristicas": [
      "Lareira a Gás",
      "Cozinha com Ilha",
      "Varanda com Churrasqueira",
      "Acabamentos Premium",
      "3 Vagas"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-08T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-34-1",
        "imovel_id": "00000000-0000-0000-0000-000000000034",
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-34-2",
        "imovel_id": "00000000-0000-0000-0000-000000000034",
        "url": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-34-3",
        "imovel_id": "00000000-0000-0000-0000-000000000034",
        "url": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000035",
    "titulo": "Casa em Jurerê Internacional",
    "descricao": "Residência a 250m da praia de Jurerê Internacional, em bairro com segurança própria e infraestrutura completa. Piscina com deck em madeira, espaço gourmet e suíte master com varanda e vista.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 11500000,
    "preco_condominio": 2600,
    "preco_iptu": 2400,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 5,
    "banheiros": 7,
    "vagas": 5,
    "area_util": 560,
    "area_total": 900,
    "cidade": "Florianópolis",
    "bairro": "Jurerê Internacional",
    "uf": "SC",
    "cep": "88053-510",
    "rua": "Rua Jurerê",
    "numero": "540",
    "latitude": -27.44,
    "longitude": -48.5,
    "caracteristicas": [
      "250m da Praia",
      "Piscina com Deck",
      "Segurança Própria",
      "Suíte Master com Varanda",
      "Espaço Gourmet"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-08T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-35-1",
        "imovel_id": "00000000-0000-0000-0000-000000000035",
        "url": "https://images.pexels.com/photos/4913326/pexels-photo-4913326.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-35-2",
        "imovel_id": "00000000-0000-0000-0000-000000000035",
        "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-35-3",
        "imovel_id": "00000000-0000-0000-0000-000000000035",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000036",
    "titulo": "Cobertura Frente Mar no Gonzaga",
    "descricao": "Cobertura em edifício clássico de frente para a orla do Gonzaga, com living de três ambientes e vista para o canal do porto. Terraço com churrasqueira e quatro vagas cobertas.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 3600000,
    "preco_condominio": 2700,
    "preco_iptu": 1500,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 3,
    "banheiros": 5,
    "vagas": 4,
    "area_util": 360,
    "area_total": 470,
    "cidade": "Santos",
    "bairro": "Gonzaga",
    "uf": "SP",
    "cep": "11065-010",
    "rua": "Avenida Presidente Wilson",
    "numero": "900",
    "latitude": -23.97,
    "longitude": -46.332,
    "caracteristicas": [
      "Frente Mar",
      "Terraço com Churrasqueira",
      "Living 3 Ambientes",
      "Vista do Canal",
      "4 Vagas"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-09T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-36-1",
        "imovel_id": "00000000-0000-0000-0000-000000000036",
        "url": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-36-2",
        "imovel_id": "00000000-0000-0000-0000-000000000036",
        "url": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-36-3",
        "imovel_id": "00000000-0000-0000-0000-000000000036",
        "url": "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000037",
    "titulo": "Apartamento no Jardim Canadá",
    "descricao": "Apartamento novo em um dos melhores bairros de Ribeirão Preto, com varanda gourmet, cozinha integrada e depósito privativo. Condomínio com piscina aquecida, academia e brinquedoteca.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 1850000,
    "preco_condominio": 950,
    "preco_iptu": 520,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 3,
    "banheiros": 4,
    "vagas": 3,
    "area_util": 145,
    "area_total": 200,
    "cidade": "Ribeirão Preto",
    "bairro": "Jardim Canadá",
    "uf": "SP",
    "cep": "14024-350",
    "rua": "Avenida Wladimir Meirelles Ferreira",
    "numero": "1850",
    "latitude": -21.22,
    "longitude": -47.83,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Aquecida",
      "Academia",
      "Brinquedoteca",
      "Depósito Privativo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-09T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-37-1",
        "imovel_id": "00000000-0000-0000-0000-000000000037",
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-37-2",
        "imovel_id": "00000000-0000-0000-0000-000000000037",
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-37-3",
        "imovel_id": "00000000-0000-0000-0000-000000000037",
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000038",
    "titulo": "Casa em Condomínio Reserva da Serra",
    "descricao": "Casa nova em condomínio de Vinhedo com clube, trilhas e lago. Integração total entre living, cozinha e área externa, com piscina aquecida, spa e espaço pet.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 5200000,
    "preco_condominio": 1500,
    "preco_iptu": 900,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 6,
    "vagas": 5,
    "area_util": 395,
    "area_total": 620,
    "cidade": "Vinhedo",
    "bairro": "Reserva da Serra",
    "uf": "SP",
    "cep": "13280-000",
    "rua": "Rua das Hortênsias",
    "numero": "150",
    "latitude": -23.03,
    "longitude": -46.97,
    "caracteristicas": [
      "Piscina Aquecida",
      "Spa",
      "Clube com Lago",
      "Espaço Pet",
      "Trilhas"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-10T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-38-1",
        "imovel_id": "00000000-0000-0000-0000-000000000038",
        "url": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-38-2",
        "imovel_id": "00000000-0000-0000-0000-000000000038",
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-38-3",
        "imovel_id": "00000000-0000-0000-0000-000000000038",
        "url": "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000039",
    "titulo": "Mansão em Terras de São José II",
    "descricao": "Mansão de arquitetura clássica atualizada em um dos condomínios mais exclusivos do interior paulista, com terreno amplo e paisagismo assinado. Adega subterrânea, home theater e casa de hóspedes.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 18900000,
    "preco_condominio": 4800,
    "preco_iptu": 2900,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 6,
    "banheiros": 9,
    "vagas": 8,
    "area_util": 980,
    "area_total": 2600,
    "cidade": "Itu",
    "bairro": "Terras de São José II",
    "uf": "SP",
    "cep": "13309-000",
    "rua": "Alameda das Figueiras",
    "numero": "23",
    "latitude": -23.29,
    "longitude": -47.32,
    "caracteristicas": [
      "Adega Subterrânea",
      "Home Theater",
      "Casa de Hóspedes",
      "Paisagismo Assinado",
      "8 Vagas"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-10T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-39-1",
        "imovel_id": "00000000-0000-0000-0000-000000000039",
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-39-2",
        "imovel_id": "00000000-0000-0000-0000-000000000039",
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-39-3",
        "imovel_id": "00000000-0000-0000-0000-000000000039",
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000040",
    "titulo": "Cobertura no Brooklin",
    "descricao": "Cobertura duplex com terraço de 120m², piscina privativa e vista para o parque. Living com pé-direito duplo, automação completa e cozinha gourmet integrada à varanda.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 7300000,
    "preco_condominio": 3300,
    "preco_iptu": 1900,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 6,
    "vagas": 5,
    "area_util": 430,
    "area_total": 560,
    "cidade": "São Paulo",
    "bairro": "Brooklin",
    "uf": "SP",
    "cep": "04578-000",
    "rua": "Rua Flórida",
    "numero": "1180",
    "latitude": -23.61,
    "longitude": -46.7,
    "caracteristicas": [
      "Piscina Privativa",
      "Terraço 120m²",
      "Pé-direito Duplo",
      "Automação Completa",
      "Vista Parque"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-11T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-40-1",
        "imovel_id": "00000000-0000-0000-0000-000000000040",
        "url": "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-40-2",
        "imovel_id": "00000000-0000-0000-0000-000000000040",
        "url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-40-3",
        "imovel_id": "00000000-0000-0000-0000-000000000040",
        "url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000041",
    "titulo": "Apartamento nos Pioneiros",
    "descricao": "Apartamento em Balneário Camboriú com vista para o mar entre os edifícios, a duas quadras da praia central. Varanda gourmet integrada, planta com três suítes e duas vagas cobertas.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 2650000,
    "preco_condominio": 1500,
    "preco_iptu": 780,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 3,
    "banheiros": 4,
    "vagas": 2,
    "area_util": 160,
    "area_total": 210,
    "cidade": "Balneário Camboriú",
    "bairro": "Pioneiros",
    "uf": "SC",
    "cep": "88331-090",
    "rua": "Terceira Avenida",
    "numero": "780",
    "latitude": -26.99,
    "longitude": -48.635,
    "caracteristicas": [
      "Vista Mar",
      "Varanda Gourmet",
      "3 Suítes",
      "2 Vagas Cobertas",
      "Duas Quadras da Praia"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-11T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-41-1",
        "imovel_id": "00000000-0000-0000-0000-000000000041",
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-41-2",
        "imovel_id": "00000000-0000-0000-0000-000000000041",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-41-3",
        "imovel_id": "00000000-0000-0000-0000-000000000041",
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000042",
    "titulo": "Casa de Montanha em Capivari",
    "descricao": "Casa de montanha em Campos do Jordão com lareira de pedra, mezanino e vista para o vale. Ampla área de convivência, spa com ofurô e aquecimento central, a poucos minutos do centro de Capivari.",
    "finalidade": "venda",
    "tipo": "Casa",
    "status": "disponivel",
    "preco": 5900000,
    "preco_condominio": 0,
    "preco_iptu": 1600,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 4,
    "banheiros": 6,
    "vagas": 4,
    "area_util": 420,
    "area_total": 1200,
    "cidade": "Campos do Jordão",
    "bairro": "Capivari",
    "uf": "SP",
    "cep": "12460-000",
    "rua": "Rua Doutor Adhemar de Barros",
    "numero": "280",
    "latitude": -22.74,
    "longitude": -45.59,
    "caracteristicas": [
      "Lareira de Pedra",
      "Ofurô",
      "Aquecimento Central",
      "Vista Vale",
      "Mezanino"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-12T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-42-1",
        "imovel_id": "00000000-0000-0000-0000-000000000042",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-42-2",
        "imovel_id": "00000000-0000-0000-0000-000000000042",
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-42-3",
        "imovel_id": "00000000-0000-0000-0000-000000000042",
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000043",
    "titulo": "Apartamento Mobiliado no Centro de Florianópolis",
    "descricao": "Apartamento totalmente mobiliado e decorado, pronto para morar, a poucos minutos da Avenida Beira-Mar Norte. Prédio com academia, piscina e portaria 24h, ideal para executivos.",
    "finalidade": "aluguel",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 12000,
    "preco_condominio": 1400,
    "preco_iptu": 600,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 2,
    "banheiros": 3,
    "vagas": 2,
    "area_util": 130,
    "area_total": 175,
    "cidade": "Florianópolis",
    "bairro": "Centro",
    "uf": "SC",
    "cep": "88015-200",
    "rua": "Rua Felipe Schmidt",
    "numero": "600",
    "latitude": -27.595,
    "longitude": -48.552,
    "caracteristicas": [
      "Mobiliado e Decorado",
      "Academia",
      "Piscina",
      "Portaria 24h",
      "Próximo à Beira-Mar"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-12T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-43-1",
        "imovel_id": "00000000-0000-0000-0000-000000000043",
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-43-2",
        "imovel_id": "00000000-0000-0000-0000-000000000043",
        "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-43-3",
        "imovel_id": "00000000-0000-0000-0000-000000000043",
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000044",
    "titulo": "Cobertura no Setor Bueno",
    "descricao": "Cobertura duplex no Setor Bueno, em Goiânia, com terraço gourmet, piscina com prainha e vista para o parque. Living com pé-direito duplo, quatro suítes e automação de iluminação.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 4100000,
    "preco_condominio": 2200,
    "preco_iptu": 1150,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 6,
    "vagas": 4,
    "area_util": 380,
    "area_total": 500,
    "cidade": "Goiânia",
    "bairro": "Setor Bueno",
    "uf": "GO",
    "cep": "74230-030",
    "rua": "Avenida T-9",
    "numero": "2200",
    "latitude": -16.7,
    "longitude": -49.28,
    "caracteristicas": [
      "Terraço Gourmet",
      "Piscina com Prainha",
      "Pé-direito Duplo",
      "4 Suítes",
      "Vista Parque"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-13T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-44-1",
        "imovel_id": "00000000-0000-0000-0000-000000000044",
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-44-2",
        "imovel_id": "00000000-0000-0000-0000-000000000044",
        "url": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-44-3",
        "imovel_id": "00000000-0000-0000-0000-000000000044",
        "url": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000045",
    "titulo": "Casa em Condomínio no Lago Sul",
    "descricao": "Casa em condomínio fechado do Lago Sul, com terreno amplo e projeto voltado para o convívio. Piscina aquecida, quadra de esportes e suíte master com closet e banheiro duplo, a minutos do Lago Paranoá.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 8900000,
    "preco_condominio": 2800,
    "preco_iptu": 2200,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 5,
    "banheiros": 7,
    "vagas": 6,
    "area_util": 560,
    "area_total": 1100,
    "cidade": "Brasília",
    "bairro": "Lago Sul",
    "uf": "DF",
    "cep": "71635-000",
    "rua": "SHIS QI 11",
    "numero": "12",
    "latitude": -15.83,
    "longitude": -47.88,
    "caracteristicas": [
      "Piscina Aquecida",
      "Quadra de Esportes",
      "Suíte Master com Closet",
      "Condomínio Fechado",
      "Próximo ao Lago"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-13T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-45-1",
        "imovel_id": "00000000-0000-0000-0000-000000000045",
        "url": "https://images.pexels.com/photos/4913326/pexels-photo-4913326.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-45-2",
        "imovel_id": "00000000-0000-0000-0000-000000000045",
        "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-45-3",
        "imovel_id": "00000000-0000-0000-0000-000000000045",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000046",
    "titulo": "Apartamento Reformado na Asa Sul",
    "descricao": "Apartamento reformado na Asa Sul, em quadra residencial tranquila, com varanda e ampla área social. Localização privilegiada, próxima ao Eixo Monumental, shoppings e restaurantes.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 1950000,
    "preco_condominio": 900,
    "preco_iptu": 550,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 2,
    "banheiros": 3,
    "vagas": 2,
    "area_util": 135,
    "area_total": 180,
    "cidade": "Brasília",
    "bairro": "Asa Sul",
    "uf": "DF",
    "cep": "70390-000",
    "rua": "SQS 308",
    "numero": "B",
    "latitude": -15.81,
    "longitude": -47.9,
    "caracteristicas": [
      "Reformado",
      "Varanda",
      "Quadra Residencial",
      "Próximo ao Eixo",
      "2 Vagas"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-14T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-46-1",
        "imovel_id": "00000000-0000-0000-0000-000000000046",
        "url": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-46-2",
        "imovel_id": "00000000-0000-0000-0000-000000000046",
        "url": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-46-3",
        "imovel_id": "00000000-0000-0000-0000-000000000046",
        "url": "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000047",
    "titulo": "Casa em Condomínio em Alphaville Campinas",
    "descricao": "Residência em condomínio fechado de Alphaville Campinas, com projeto contemporâneo, piscina aquecida e espaço gourmet. Segurança 24h e infraestrutura completa de esportes e lazer.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 5500000,
    "preco_condominio": 1900,
    "preco_iptu": 1300,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 6,
    "vagas": 5,
    "area_util": 430,
    "area_total": 680,
    "cidade": "Campinas",
    "bairro": "Alphaville",
    "uf": "SP",
    "cep": "13098-325",
    "rua": "Avenida Alphaville",
    "numero": "620",
    "latitude": -22.95,
    "longitude": -47.1,
    "caracteristicas": [
      "Piscina Aquecida",
      "Espaço Gourmet",
      "Segurança 24h",
      "Projeto Contemporâneo",
      "5 Vagas"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-14T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-47-1",
        "imovel_id": "00000000-0000-0000-0000-000000000047",
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-47-2",
        "imovel_id": "00000000-0000-0000-0000-000000000047",
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-47-3",
        "imovel_id": "00000000-0000-0000-0000-000000000047",
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000048",
    "titulo": "Cobertura no Batel",
    "descricao": "Cobertura no Batel, em Curitiba, com terraço panorâmico, spa com hidromassagem e vista para o parque Barigui. Ambientes integrados, adega climatizada e quatro vagas cobertas.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 4600000,
    "preco_condominio": 2500,
    "preco_iptu": 1350,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 4,
    "banheiros": 5,
    "vagas": 4,
    "area_util": 330,
    "area_total": 440,
    "cidade": "Curitiba",
    "bairro": "Batel",
    "uf": "PR",
    "cep": "80420-000",
    "rua": "Avenida do Batel",
    "numero": "1350",
    "latitude": -25.44,
    "longitude": -49.29,
    "caracteristicas": [
      "Terraço Panorâmico",
      "Spa com Hidromassagem",
      "Adega Climatizada",
      "Vista Barigui",
      "4 Vagas Cobertas"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-15T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-48-1",
        "imovel_id": "00000000-0000-0000-0000-000000000048",
        "url": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-48-2",
        "imovel_id": "00000000-0000-0000-0000-000000000048",
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-48-3",
        "imovel_id": "00000000-0000-0000-0000-000000000048",
        "url": "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000049",
    "titulo": "Apartamento em Icaraí com Vista para a Baía",
    "descricao": "Apartamento de frente para a Baía de Guanabara, em Icaraí, com living integrado e varanda panorâmica. Prédio reformado com salão de festas, academia e duas vagas demarcadas.",
    "finalidade": "venda",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 2400000,
    "preco_condominio": 1300,
    "preco_iptu": 760,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 3,
    "banheiros": 4,
    "vagas": 2,
    "area_util": 175,
    "area_total": 230,
    "cidade": "Niterói",
    "bairro": "Icaraí",
    "uf": "RJ",
    "cep": "24220-031",
    "rua": "Rua Gavião Peixoto",
    "numero": "310",
    "latitude": -22.903,
    "longitude": -43.105,
    "caracteristicas": [
      "Vista Baía de Guanabara",
      "Varanda Panorâmica",
      "Academia",
      "Salão de Festas",
      "2 Vagas"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-15T12:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-49-1",
        "imovel_id": "00000000-0000-0000-0000-000000000049",
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-49-2",
        "imovel_id": "00000000-0000-0000-0000-000000000049",
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-49-3",
        "imovel_id": "00000000-0000-0000-0000-000000000049",
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000050",
    "titulo": "Casa de Alto Luxo em Alphaville Barueri",
    "descricao": "Mansão contemporânea no coração de Alphaville Barueri, com 1.200m² de área construída, piscina aquecida com borda infinita, spa, home theater e espaço gourmet com forno a lenha. Acabamentos importados.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 24500000,
    "preco_condominio": 5200,
    "preco_iptu": 3800,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 6,
    "banheiros": 10,
    "vagas": 8,
    "area_util": 1200,
    "area_total": 2000,
    "cidade": "Barueri",
    "bairro": "Alphaville",
    "uf": "SP",
    "cep": "06454-000",
    "rua": "Alameda Rio Negro",
    "numero": "1500",
    "latitude": -23.5,
    "longitude": -46.85,
    "caracteristicas": [
      "Borda Infinita",
      "Spa",
      "Home Theater",
      "Forno a Lenha",
      "Acabamentos Importados"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-16T00:00:00.000Z",
    "updated_at": "2026-09-16T12:00:00.000Z",
    "imoveis_imagens": [
      {
        "id": "img-50-1",
        "imovel_id": "00000000-0000-0000-0000-000000000050",
        "url": "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "ordem": 1,
        "capa": true
      },
      {
        "id": "img-50-2",
        "imovel_id": "00000000-0000-0000-0000-000000000050",
        "url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
        "ordem": 2,
        "capa": false
      },
      {
        "id": "img-50-3",
        "imovel_id": "00000000-0000-0000-0000-000000000050",
        "url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  }
];
