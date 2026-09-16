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
    "created_at": "2026-08-22T23:10:27.651Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-23T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-23T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-24T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-24T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
    "imoveis_imagens": [
      {
        "id": "img-5-1",
        "imovel_id": "00000000-0000-0000-0000-000000000005",
        "url": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80",
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
    "created_at": "2026-08-25T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
        "url": "https://images.unsplash.com/photo-1600607687979-247fb4591ff1?auto=format&fit=crop&w=1600&q=80",
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
    "created_at": "2026-08-25T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-26T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-26T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-27T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
    "imoveis_imagens": [
      {
        "id": "img-10-1",
        "imovel_id": "00000000-0000-0000-0000-000000000010",
        "url": "https://images.unsplash.com/photo-1502005229762-ee152f90e5f2?auto=format&fit=crop&w=1600&q=80",
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
    "created_at": "2026-08-27T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-28T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-28T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-29T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-29T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
    "imoveis_imagens": [
      {
        "id": "img-15-1",
        "imovel_id": "00000000-0000-0000-0000-000000000015",
        "url": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80",
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
    "created_at": "2026-08-30T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
        "url": "https://images.unsplash.com/photo-1600607687979-247fb4591ff1?auto=format&fit=crop&w=1600&q=80",
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
    "created_at": "2026-08-30T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-31T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-08-31T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "created_at": "2026-09-01T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
    "imoveis_imagens": [
      {
        "id": "img-20-1",
        "imovel_id": "00000000-0000-0000-0000-000000000020",
        "url": "https://images.unsplash.com/photo-1502005229762-ee152f90e5f2?auto=format&fit=crop&w=1600&q=80",
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
    "titulo": "Mansão Suspensa com Espaço Gourmet e Vista Livre",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Itaim Bibi, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Terreno em Condomínio",
    "status": "disponivel",
    "preco": 12100000,
    "preco_condominio": 3200,
    "preco_iptu": 1600,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 2,
    "banheiros": 4,
    "vagas": 3,
    "area_util": 480,
    "area_total": 648,
    "cidade": "São Paulo",
    "bairro": "Itaim Bibi",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "240",
    "latitude": -23.5785,
    "longitude": -46.6782,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-01T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Casa Térrea Contemporânea com Piscina Aquecida",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Vila Nova Conceição, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "aluguel",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 30000,
    "preco_condominio": 3300,
    "preco_iptu": 1650,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 3,
    "banheiros": 5,
    "vagas": 4,
    "area_util": 495,
    "area_total": 668,
    "cidade": "São Paulo",
    "bairro": "Vila Nova Conceição",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "247",
    "latitude": -23.5899,
    "longitude": -46.6783,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-02T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Cobertura Duplex com Solarium e Spa Privativo",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Moema, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "temporada",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 7900,
    "preco_condominio": 0,
    "preco_iptu": 0,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 4,
    "banheiros": 6,
    "vagas": 5,
    "area_util": 510,
    "area_total": 689,
    "cidade": "São Paulo",
    "bairro": "Moema",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "254",
    "latitude": -23.6078,
    "longitude": -46.6731,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-02T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Apartamento de Luxo com Vista Eterna para o Verde",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Pinheiros, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 13550000,
    "preco_condominio": 3450,
    "preco_iptu": 1750,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 5,
    "banheiros": 7,
    "vagas": 6,
    "area_util": 525,
    "area_total": 709,
    "cidade": "São Paulo",
    "bairro": "Pinheiros",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "261",
    "latitude": -23.571,
    "longitude": -46.6873,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-03T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Residência Minimalista com Acabamentos em Concreto e Madeira",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Higienópolis, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Mansão",
    "status": "disponivel",
    "preco": 14000000,
    "preco_condominio": 3550,
    "preco_iptu": 1800,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 2,
    "banheiros": 4,
    "vagas": 7,
    "area_util": 540,
    "area_total": 729,
    "cidade": "São Paulo",
    "bairro": "Higienópolis",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "268",
    "latitude": -23.5558,
    "longitude": -46.6551,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-03T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
    "imoveis_imagens": [
      {
        "id": "img-25-1",
        "imovel_id": "00000000-0000-0000-0000-000000000025",
        "url": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80",
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
    "titulo": "Penthouse Linear com Piscina de Vidro e Sauna",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Morumbi, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Casa",
    "status": "disponivel",
    "preco": 14500000,
    "preco_condominio": 3650,
    "preco_iptu": 1850,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 3,
    "banheiros": 5,
    "vagas": 3,
    "area_util": 555,
    "area_total": 749,
    "cidade": "São Paulo",
    "bairro": "Morumbi",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "275",
    "latitude": -23.5996,
    "longitude": -46.7202,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-04T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
        "url": "https://images.unsplash.com/photo-1600607687979-247fb4591ff1?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000027",
    "titulo": "Mansão com Quadra Poliesportiva e Adega Climatizada",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Alto de Pinheiros, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Apartamento Garden",
    "status": "disponivel",
    "preco": 15000000,
    "preco_condominio": 3750,
    "preco_iptu": 1900,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 4,
    "banheiros": 6,
    "vagas": 4,
    "area_util": 570,
    "area_total": 770,
    "cidade": "São Paulo",
    "bairro": "Alto de Pinheiros",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "282",
    "latitude": -23.5553,
    "longitude": -46.7154,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-04T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Apartamento Boutique com Automação Residencial",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Alphaville, Barueri. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Terreno em Condomínio",
    "status": "disponivel",
    "preco": 15450000,
    "preco_condominio": 3850,
    "preco_iptu": 1950,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 5,
    "banheiros": 7,
    "vagas": 5,
    "area_util": 585,
    "area_total": 790,
    "cidade": "Barueri",
    "bairro": "Alphaville",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "289",
    "latitude": -23.4886,
    "longitude": -46.8475,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-05T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Villa Mediterrânea com Paisagismo e Pomar",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Tamboré, Santana de Parnaíba. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "aluguel",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 36000,
    "preco_condominio": 3900,
    "preco_iptu": 2000,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 2,
    "banheiros": 4,
    "vagas": 6,
    "area_util": 600,
    "area_total": 810,
    "cidade": "Santana de Parnaíba",
    "bairro": "Tamboré",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "296",
    "latitude": -23.4801,
    "longitude": -46.8318,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-05T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Casa de Campo com Haras Privativo e Casa de Hóspedes",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Gramado, Campinas. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 16400000,
    "preco_condominio": 4000,
    "preco_iptu": 2050,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 3,
    "banheiros": 5,
    "vagas": 7,
    "area_util": 615,
    "area_total": 830,
    "cidade": "Campinas",
    "bairro": "Gramado",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "303",
    "latitude": -22.9029,
    "longitude": -47.0252,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-06T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
    "imoveis_imagens": [
      {
        "id": "img-30-1",
        "imovel_id": "00000000-0000-0000-0000-000000000030",
        "url": "https://images.unsplash.com/photo-1502005229762-ee152f90e5f2?auto=format&fit=crop&w=1600&q=80",
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
    "titulo": "Cobertura Triplex com Lareira e Terraço Panorâmico",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Cambuí, Campinas. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 16900000,
    "preco_condominio": 4100,
    "preco_iptu": 2100,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 4,
    "banheiros": 6,
    "vagas": 3,
    "area_util": 630,
    "area_total": 851,
    "cidade": "Campinas",
    "bairro": "Cambuí",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "310",
    "latitude": -22.9058,
    "longitude": -47.0613,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-06T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Apartamento Garden com Piscina Privativa e Lounge",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Fazenda Boa Vista, Porto Feliz. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Mansão",
    "status": "disponivel",
    "preco": 17400000,
    "preco_condominio": 4200,
    "preco_iptu": 2150,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 5,
    "banheiros": 7,
    "vagas": 4,
    "area_util": 645,
    "area_total": 871,
    "cidade": "Porto Feliz",
    "bairro": "Fazenda Boa Vista",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "317",
    "latitude": -23.2191,
    "longitude": -47.5294,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-07T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Mansão Clássica com Mármore Travertino e Cinema",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Terras de São José, Itu. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Casa",
    "status": "disponivel",
    "preco": 17850000,
    "preco_condominio": 4300,
    "preco_iptu": 2200,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 2,
    "banheiros": 4,
    "vagas": 5,
    "area_util": 660,
    "area_total": 891,
    "cidade": "Itu",
    "bairro": "Terras de São José",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "324",
    "latitude": -23.257,
    "longitude": -47.3035,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-07T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Residência com Energia Fotovoltaica e Automação Crestron",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Quinta da Baroneza, Bragança Paulista. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "temporada",
    "tipo": "Apartamento Garden",
    "status": "disponivel",
    "preco": 10100,
    "preco_condominio": 0,
    "preco_iptu": 0,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 3,
    "banheiros": 5,
    "vagas": 6,
    "area_util": 675,
    "area_total": 911,
    "cidade": "Bragança Paulista",
    "bairro": "Quinta da Baroneza",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "331",
    "latitude": -22.9463,
    "longitude": -47.5377,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-08T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Casa de Vidro com Vista para o Vale das Palmeiras",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Jardim Acapulco, Guarujá. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Terreno em Condomínio",
    "status": "disponivel",
    "preco": 18800000,
    "preco_condominio": 4450,
    "preco_iptu": 2300,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 4,
    "banheiros": 6,
    "vagas": 7,
    "area_util": 690,
    "area_total": 932,
    "cidade": "Guarujá",
    "bairro": "Jardim Acapulco",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "338",
    "latitude": -23.9629,
    "longitude": -46.2184,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-08T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
    "imoveis_imagens": [
      {
        "id": "img-35-1",
        "imovel_id": "00000000-0000-0000-0000-000000000035",
        "url": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80",
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
    "titulo": "Apartamento Alto Padrão Reformado por Arquiteto Renomado",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Juquehy, São Sebastião. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "aluguel",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 42000,
    "preco_condominio": 4550,
    "preco_iptu": 2350,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 5,
    "banheiros": 7,
    "vagas": 3,
    "area_util": 705,
    "area_total": 952,
    "cidade": "São Sebastião",
    "bairro": "Juquehy",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "345",
    "latitude": -23.7627,
    "longitude": -45.7291,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-09T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
        "url": "https://images.unsplash.com/photo-1600607687979-247fb4591ff1?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000037",
    "titulo": "Residência com Spa de Hidromassagem e Espaço Gourmet",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Riviera de São Lourenço, Bertioga. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 19800000,
    "preco_condominio": 4650,
    "preco_iptu": 2400,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 2,
    "banheiros": 4,
    "vagas": 4,
    "area_util": 720,
    "area_total": 972,
    "cidade": "Bertioga",
    "bairro": "Riviera de São Lourenço",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "352",
    "latitude": -23.7831,
    "longitude": -46.0144,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-09T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Cobertura Penthouse com Lounge Bar e Forno de Pizza",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Trancoso, Porto Seguro. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 20250000,
    "preco_condominio": 4750,
    "preco_iptu": 2450,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 3,
    "banheiros": 5,
    "vagas": 5,
    "area_util": 735,
    "area_total": 992,
    "cidade": "Porto Seguro",
    "bairro": "Trancoso",
    "uf": "BA",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "359",
    "latitude": -16.5832,
    "longitude": -39.0955,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-10T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Mansão em Condomínio Fechado com Segurança Armada 24h",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Jardins, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Mansão",
    "status": "disponivel",
    "preco": 20750000,
    "preco_condominio": 4800,
    "preco_iptu": 2500,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 4,
    "banheiros": 6,
    "vagas": 6,
    "area_util": 750,
    "area_total": 1013,
    "cidade": "São Paulo",
    "bairro": "Jardins",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "366",
    "latitude": -23.5627,
    "longitude": -46.6553,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-10T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Apartamento de Altíssimo Padrão com Elevador Panorâmico",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Itaim Bibi, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Casa",
    "status": "disponivel",
    "preco": 21200000,
    "preco_condominio": 4900,
    "preco_iptu": 2550,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 5,
    "banheiros": 7,
    "vagas": 7,
    "area_util": 765,
    "area_total": 1033,
    "cidade": "São Paulo",
    "bairro": "Itaim Bibi",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "373",
    "latitude": -23.5914,
    "longitude": -46.6684,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-11T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
    "imoveis_imagens": [
      {
        "id": "img-40-1",
        "imovel_id": "00000000-0000-0000-0000-000000000040",
        "url": "https://images.unsplash.com/photo-1502005229762-ee152f90e5f2?auto=format&fit=crop&w=1600&q=80",
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
    "titulo": "Casa Contemporânea com Pé-direito Duplo e Lareira Ecológica",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Vila Nova Conceição, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Apartamento Garden",
    "status": "disponivel",
    "preco": 21700000,
    "preco_condominio": 5000,
    "preco_iptu": 2600,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 2,
    "banheiros": 4,
    "vagas": 3,
    "area_util": 780,
    "area_total": 1053,
    "cidade": "São Paulo",
    "bairro": "Vila Nova Conceição",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "380",
    "latitude": -23.5965,
    "longitude": -46.6727,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-11T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Residência com Quadra de Tênis Oficial e Piscina Semi-Olímpica",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Moema, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Terreno em Condomínio",
    "status": "disponivel",
    "preco": 22200000,
    "preco_condominio": 5100,
    "preco_iptu": 2650,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 3,
    "banheiros": 5,
    "vagas": 4,
    "area_util": 795,
    "area_total": 1073,
    "cidade": "São Paulo",
    "bairro": "Moema",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "387",
    "latitude": -23.5999,
    "longitude": -46.6686,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-12T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Cobertura Duplex com Terraço Gourmet e Vista 360 Graus",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Pinheiros, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "aluguel",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 47500,
    "preco_condominio": 5200,
    "preco_iptu": 2700,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 4,
    "banheiros": 6,
    "vagas": 5,
    "area_util": 810,
    "area_total": 1094,
    "cidade": "São Paulo",
    "bairro": "Pinheiros",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "394",
    "latitude": -23.5707,
    "longitude": -46.6973,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-12T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Mansão com Borda Infinita e Vista para o Lago",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Higienópolis, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Casa em Condomínio",
    "status": "disponivel",
    "preco": 23150000,
    "preco_condominio": 5250,
    "preco_iptu": 2750,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 5,
    "banheiros": 7,
    "vagas": 6,
    "area_util": 825,
    "area_total": 1114,
    "cidade": "São Paulo",
    "bairro": "Higienópolis",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "401",
    "latitude": -23.5472,
    "longitude": -46.648,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-13T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Apartamento Design Mobiliado com Marcenaria de Alfaiataria",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Morumbi, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "temporada",
    "tipo": "Cobertura",
    "status": "disponivel",
    "preco": 12300,
    "preco_condominio": 0,
    "preco_iptu": 0,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 2,
    "banheiros": 4,
    "vagas": 7,
    "area_util": 840,
    "area_total": 1134,
    "cidade": "São Paulo",
    "bairro": "Morumbi",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "408",
    "latitude": -23.5975,
    "longitude": -46.7133,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-13T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
    "imoveis_imagens": [
      {
        "id": "img-45-1",
        "imovel_id": "00000000-0000-0000-0000-000000000045",
        "url": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80",
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
    "titulo": "Casa de Alto Luxo com Heliponto Privativo e Adega Subterrânea",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Alto de Pinheiros, São Paulo. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Mansão",
    "status": "disponivel",
    "preco": 24100000,
    "preco_condominio": 5450,
    "preco_iptu": 2850,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 3,
    "banheiros": 5,
    "vagas": 3,
    "area_util": 855,
    "area_total": 1154,
    "cidade": "São Paulo",
    "bairro": "Alto de Pinheiros",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "415",
    "latitude": -23.5568,
    "longitude": -46.7043,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": true,
    "is_demo": true,
    "created_at": "2026-09-14T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
        "url": "https://images.unsplash.com/photo-1600607687979-247fb4591ff1?auto=format&fit=crop&w=1600&q=80",
        "ordem": 3,
        "capa": false
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0000-000000000047",
    "titulo": "Cobertura Linear com Piscina Aquecida e Solarium",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Alphaville, Barueri. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Casa",
    "status": "disponivel",
    "preco": 24600000,
    "preco_condominio": 5550,
    "preco_iptu": 2900,
    "aceita_financiamento": true,
    "quartos": 5,
    "suites": 4,
    "banheiros": 6,
    "vagas": 4,
    "area_util": 870,
    "area_total": 1175,
    "cidade": "Barueri",
    "bairro": "Alphaville",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "422",
    "latitude": -23.4943,
    "longitude": -46.8506,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-14T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Residência Sustentável com Sistema de Reuso de Água e Solar",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Tamboré, Santana de Parnaíba. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Apartamento Garden",
    "status": "disponivel",
    "preco": 25050000,
    "preco_condominio": 5650,
    "preco_iptu": 2950,
    "aceita_financiamento": true,
    "quartos": 6,
    "suites": 5,
    "banheiros": 7,
    "vagas": 5,
    "area_util": 885,
    "area_total": 1195,
    "cidade": "Santana de Parnaíba",
    "bairro": "Tamboré",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "429",
    "latitude": -23.4769,
    "longitude": -46.8414,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-15T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Apartamento Garden com Quintal Privativo e Varanda Gourmet",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Gramado, Campinas. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "venda",
    "tipo": "Terreno em Condomínio",
    "status": "disponivel",
    "preco": 25550000,
    "preco_condominio": 5700,
    "preco_iptu": 3000,
    "aceita_financiamento": true,
    "quartos": 3,
    "suites": 2,
    "banheiros": 4,
    "vagas": 6,
    "area_util": 900,
    "area_total": 1215,
    "cidade": "Campinas",
    "bairro": "Gramado",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "436",
    "latitude": -22.898,
    "longitude": -47.0199,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-15T23:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
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
    "titulo": "Mansão Futurista com Domótica Total e Home Theater 4K",
    "descricao": "Imóvel exclusivo de altíssimo padrão localizado em Cambuí, Campinas. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.",
    "finalidade": "aluguel",
    "tipo": "Apartamento",
    "status": "disponivel",
    "preco": 53500,
    "preco_condominio": 5800,
    "preco_iptu": 3050,
    "aceita_financiamento": true,
    "quartos": 4,
    "suites": 3,
    "banheiros": 5,
    "vagas": 7,
    "area_util": 915,
    "area_total": 1235,
    "cidade": "Campinas",
    "bairro": "Cambuí",
    "uf": "SP",
    "cep": "01000-000",
    "rua": "Avenida das Américas",
    "numero": "443",
    "latitude": -22.8959,
    "longitude": -47.0495,
    "caracteristicas": [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    "destaque": false,
    "is_demo": true,
    "created_at": "2026-09-16T11:10:27.652Z",
    "updated_at": "2026-09-16T23:10:27.652Z",
    "imoveis_imagens": [
      {
        "id": "img-50-1",
        "imovel_id": "00000000-0000-0000-0000-000000000050",
        "url": "https://images.unsplash.com/photo-1502005229762-ee152f90e5f2?auto=format&fit=crop&w=1600&q=80",
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
