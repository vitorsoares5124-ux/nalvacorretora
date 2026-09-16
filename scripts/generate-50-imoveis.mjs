import fs from 'fs';

// 30 Verified high quality luxury real estate unsplash photo IDs
const PHOTOS = [
  "photo-1600596542815-ffad4c1539a9",
  "photo-1600585154340-be6161a56a0c",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1600566753376-12c8ab7fb75b",
  "photo-1600585154526-990dced4db0d",
  "photo-1600607687920-4e2a09cf159d",
  "photo-1512917774080-9991f1c4c750",
  "photo-1613490493576-7fde63acd811",
  "photo-1580587771525-78b9dba3b914",
  "photo-1513694203232-719a280e022f",
  "photo-1600573472591-ee6b68d14c68",
  "photo-1600566752355-35792bedcfea",
  "photo-1600607687644-c7171b42498b",
  "photo-1600585152220-90363fe7e115",
  "photo-1600210492486-724fe5c67fb0",
  "photo-1600566753190-17f0baa2a6c3",
  "photo-1600585154363-67eb9e2e2099",
  "photo-1600607687979-247fb4591ff1",
  "photo-1542314831-068cd1dbfeeb",
  "photo-1571896349842-33c89424de2d",
  "photo-1564013799919-ab600027ffc6",
  "photo-1600573472550-8090b5e0745e",
  "photo-1600566753086-00f18fb6b3ea",
  "photo-1600607688969-a5bfcd646154",
  "photo-1502672260266-1c1ef2d93688",
  "photo-1560448204-e02f11c3d0e2",
  "photo-1522708323590-d24dbb6b0267",
  "photo-1502005229762-ee152f90e5f2",
  "photo-1486406146926-c627a92ad1ab",
  "photo-1545324418-cc1a3fa10c00"
];

function getPhotoUrl(index, width = 1600) {
  const id = PHOTOS[index % PHOTOS.length];
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

// 50 realistic luxury real estate property definitions
const RAW_PROPERTIES = [
  {
    titulo: "Cobertura Duplex Skyline com Vista Panorâmica",
    descricao: "Espetacular cobertura duplex finamente decorada, com pé-direito duplo, automação residencial completa, piscina aquecida privativa e vista 360° da cidade. Acabamentos em mármore travertino e marcenaria de grife.",
    finalidade: "venda",
    tipo: "Cobertura",
    preco: 3850000,
    preco_condominio: 3200,
    preco_iptu: 1450,
    quartos: 4,
    suites: 4,
    banheiros: 6,
    vagas: 4,
    area_util: 380,
    area_total: 450,
    cidade: "São Paulo",
    bairro: "Jardins",
    uf: "SP",
    cep: "01401-000",
    rua: "Alameda Lorena",
    numero: "1500",
    latitude: -23.5670,
    longitude: -46.6650,
    caracteristicas: ["Piscina Privativa", "Pé-direito Duplo", "Varanda Gourmet", "Automação", "Elevador Privativo"],
    destaque: true
  },
  {
    titulo: "Residência Arquitetônica em Condomínio Fechado",
    descricao: "Projeto assinado por arquiteto renomado com integração total de ambientes, living com lareira ecológica, espaço gourmet completo integrado à piscina com borda infinita e jardim paisagístico deslumbrante.",
    finalidade: "venda",
    tipo: "Casa em Condomínio",
    preco: 5900000,
    preco_condominio: 2800,
    preco_iptu: 1800,
    quartos: 5,
    suites: 5,
    banheiros: 7,
    vagas: 6,
    area_util: 620,
    area_total: 950,
    cidade: "Campinas",
    bairro: "Gramado",
    uf: "SP",
    cep: "13092-000",
    rua: "Avenida das Palmeiras",
    numero: "45",
    latitude: -22.8940,
    longitude: -47.0250,
    caracteristicas: ["Borda Infinita", "Jardim Paisagístico", "Segurança Armada", "Espaço Gourmet", "Lareira"],
    destaque: true
  },
  {
    titulo: "Apartamento Contemporâneo com Living Integrado",
    descricao: "Apartamento de alto padrão com acabamentos nobres em mármore e madeira freijó, ampla varanda gourmet com churrasqueira a carvão e condomínio com infraestrutura completa de resort internacional.",
    finalidade: "venda",
    tipo: "Apartamento",
    preco: 2200000,
    preco_condominio: 1600,
    preco_iptu: 750,
    quartos: 3,
    suites: 3,
    banheiros: 4,
    vagas: 3,
    area_util: 195,
    area_total: 260,
    cidade: "São Paulo",
    bairro: "Itaim Bibi",
    uf: "SP",
    cep: "04530-000",
    rua: "Rua Tabapuã",
    numero: "800",
    latitude: -23.5850,
    longitude: -46.6780,
    caracteristicas: ["Varanda Gourmet", "Acabamento em Mármore", "Lazer Completo", "3 Vagas"],
    destaque: true
  },
  {
    titulo: "Mansão Minimalista com Vista para o Vale",
    descricao: "Design de vanguarda com linhas retas, esquadrias do chão ao teto, piscina aquecida com deck molhado e iluminação cênica. Ideal para quem busca privacidade absoluta e alto requinte.",
    finalidade: "aluguel",
    tipo: "Casa em Condomínio",
    preco: 28000,
    preco_condominio: 3500,
    preco_iptu: 1200,
    quartos: 4,
    suites: 4,
    banheiros: 6,
    vagas: 4,
    area_util: 510,
    area_total: 800,
    cidade: "Barueri",
    bairro: "Alphaville",
    uf: "SP",
    cep: "06472-000",
    rua: "Alameda dos Bosques",
    numero: "120",
    latitude: -23.4910,
    longitude: -46.8520,
    caracteristicas: ["Piscina Aquecida", "Segurança 24h", "Varanda Gourmet", "Home Cinema"],
    destaque: true
  },
  {
    titulo: "Penthouse Exclusiva na Praça Pereira Coutinho",
    descricao: "Localização mais nobre de São Paulo em frente à praça. Três pavimentos interligados por elevador privativo panorâmico, adega climatizada para 800 rótulos e solarium privativo.",
    finalidade: "venda",
    tipo: "Cobertura",
    preco: 18500000,
    preco_condominio: 8900,
    preco_iptu: 3800,
    quartos: 5,
    suites: 5,
    banheiros: 8,
    vagas: 7,
    area_util: 680,
    area_total: 890,
    cidade: "São Paulo",
    bairro: "Vila Nova Conceição",
    uf: "SP",
    cep: "04508-010",
    rua: "Praça Pereira Coutinho",
    numero: "88",
    latitude: -23.5910,
    longitude: -46.6710,
    caracteristicas: ["Piscina Privativa", "Adega Climatizada", "Elevador Panorâmico", "Vista Parque", "Segurança Blindada"],
    destaque: true
  },
  {
    titulo: "Mansão Moderna na Fazenda Boa Vista",
    descricao: "Projeto integrado à natureza com vista panorâmica para o campo de golfe. Suíte master com closet duplo e banheiros Sr. e Sra., spa privativo com sauna seca e úmida.",
    finalidade: "venda",
    tipo: "Casa em Condomínio",
    preco: 24000000,
    preco_condominio: 5500,
    preco_iptu: 2800,
    quartos: 6,
    suites: 6,
    banheiros: 9,
    vagas: 8,
    area_util: 980,
    area_total: 2500,
    cidade: "Porto Feliz",
    bairro: "Fazenda Boa Vista",
    uf: "SP",
    cep: "18540-000",
    rua: "Alameda das Araucárias",
    numero: "15",
    latitude: -23.2100,
    longitude: -47.5300,
    caracteristicas: ["Campo de Golfe", "Spa Privativo", "Sauna", "Borda Infinita", "Heliponto Próximo"],
    destaque: true
  },
  {
    titulo: "Apartamento Garden Suspenso no Jardim Europa",
    descricao: "Sensação de viver em uma casa térrea com a segurança de um edifício blindado. Jardim privativo com irrigação automatizada, piscina privativa e churrasqueira de alta performance.",
    finalidade: "venda",
    tipo: "Apartamento",
    preco: 8200000,
    preco_condominio: 4100,
    preco_iptu: 2100,
    quartos: 4,
    suites: 4,
    banheiros: 5,
    vagas: 5,
    area_util: 420,
    area_total: 580,
    cidade: "São Paulo",
    bairro: "Jardim Europa",
    uf: "SP",
    cep: "01445-001",
    rua: "Rua Groenlândia",
    numero: "710",
    latitude: -23.5780,
    longitude: -46.6810,
    caracteristicas: ["Jardim Privativo", "Piscina Privativa", "Varanda Gourmet", "Automação Completa"],
    destaque: true
  },
  {
    titulo: "Villa Tropical Beira-Mar em Juquehy",
    descricao: "Pé na areia com acesso privativo à praia. Deck amplo em madeira de lei com espreguiçadeiras, piscina com hidro integrada e suítes com vista panorâmica para o oceano.",
    finalidade: "temporada",
    tipo: "Casa",
    preco: 8500,
    preco_condominio: 0,
    preco_iptu: 0,
    quartos: 5,
    suites: 5,
    banheiros: 6,
    vagas: 4,
    area_util: 450,
    area_total: 700,
    cidade: "São Sebastião",
    bairro: "Juquehy",
    uf: "SP",
    cep: "11600-000",
    rua: "Avenida Mãe Bernarda",
    numero: "320",
    latitude: -23.7660,
    longitude: -45.7330,
    caracteristicas: ["Pé na Areia", "Vista Mar", "Piscina com Hidro", "Deck de Madeira", "Serviço de Praia"],
    destaque: true
  },
  {
    titulo: "Residência Neoclássica no Residencial Tamboré",
    descricao: "Imponente mansão neoclássica com colunata nobre, mármore Crema Marfil, living para 4 ambientes com pé-direito de 7 metros e quadra de beach tennis privativa.",
    finalidade: "venda",
    tipo: "Casa em Condomínio",
    preco: 11900000,
    preco_condominio: 3800,
    preco_iptu: 1950,
    quartos: 5,
    suites: 5,
    banheiros: 8,
    vagas: 6,
    area_util: 780,
    area_total: 1200,
    cidade: "Santana de Parnaíba",
    bairro: "Tamboré",
    uf: "SP",
    cep: "06543-000",
    rua: "Avenida Tamboré",
    numero: "850",
    latitude: -23.4750,
    longitude: -46.8390,
    caracteristicas: ["Quadra Beach Tennis", "Pé-direito Duplo", "Adega Subterrânea", "Piscina Aquecida"],
    destaque: false
  },
  {
    titulo: "Apartamento de Grife em Pinheiros com Vista Parque",
    descricao: "Edifício icônico com arquitetura premiada. Ambientes fluidos, caixilhos piso-teto que maximizam a luminosidade natural e cozinha gourmet integrada.",
    finalidade: "venda",
    tipo: "Apartamento",
    preco: 3100000,
    preco_condominio: 1900,
    preco_iptu: 820,
    quartos: 3,
    suites: 3,
    banheiros: 4,
    vagas: 3,
    area_util: 210,
    area_total: 290,
    cidade: "São Paulo",
    bairro: "Pinheiros",
    uf: "SP",
    cep: "05415-000",
    rua: "Rua dos Pinheiros",
    numero: "1120",
    latitude: -23.5650,
    longitude: -46.6890,
    caracteristicas: ["Arquitetura Premiada", "Vista Panorâmica", "Piscina Aquecida", "Academia Moderna"],
    destaque: false
  },
  {
    titulo: "Mansão Contemporânea na Quinta da Baroneza",
    descricao: "Terreno exclusivo com bosque privativo e vista permanente. Residência com 6 suítes avarandadas, adega para 1.200 garrafas, quadra de tênis de saibro e casa de caseiro independente.",
    finalidade: "venda",
    tipo: "Casa em Condomínio",
    preco: 29500000,
    preco_condominio: 6200,
    preco_iptu: 3400,
    quartos: 6,
    suites: 6,
    banheiros: 10,
    vagas: 10,
    area_util: 1250,
    area_total: 3800,
    cidade: "Bragança Paulista",
    bairro: "Quinta da Baroneza",
    uf: "SP",
    cep: "12900-000",
    rua: "Alameda dos Barões",
    numero: "42",
    latitude: -22.9500,
    longitude: -46.5400,
    caracteristicas: ["Quadra de Tênis", "Bosque Privativo", "Adega de Luxo", "Heliponto", "Casa de Hóspedes"],
    destaque: true
  },
  {
    titulo: "Studio Penthouse Executivo no Itaim Bibi",
    descricao: "Ideal para executivos e investidores de alta rentabilidade. Totalmente mobiliado e decorado pela Armani/Casa, serviços pay-per-use e rooftop com piscina de borda infinita.",
    finalidade: "aluguel",
    tipo: "Apartamento",
    preco: 16000,
    preco_condominio: 1800,
    preco_iptu: 650,
    quartos: 1,
    suites: 1,
    banheiros: 2,
    vagas: 2,
    area_util: 95,
    area_total: 130,
    cidade: "São Paulo",
    bairro: "Itaim Bibi",
    uf: "SP",
    cep: "04532-001",
    rua: "Rua Joaquim Floriano",
    numero: "460",
    latitude: -23.5830,
    longitude: -46.6740,
    caracteristicas: ["Mobiliado Armani", "Rooftop com Piscina", "Serviços Pay-per-use", "Valet 24h"],
    destaque: false
  },
  {
    titulo: "Cobertura Triplex com Heliponto Privativo no Morumbi",
    descricao: "Uma das maiores coberturas da América Latina. Possui 1.500m² úteis, elevador privativo codificado, heliponto homologado e piscina aquecida no 3º piso com vista monumental.",
    finalidade: "venda",
    tipo: "Cobertura",
    preco: 42000000,
    preco_condominio: 15000,
    preco_iptu: 6500,
    quartos: 7,
    suites: 7,
    banheiros: 12,
    vagas: 12,
    area_util: 1500,
    area_total: 2100,
    cidade: "São Paulo",
    bairro: "Morumbi",
    uf: "SP",
    cep: "05650-000",
    rua: "Rua São Paulo Antigo",
    numero: "300",
    latitude: -23.6050,
    longitude: -46.7120,
    caracteristicas: ["Heliponto Homologado", "Piscina Aquecida", "Segurança Bunker", "12 Vagas", "Elevador Codificado"],
    destaque: true
  },
  {
    titulo: "Residência de Vidro em Meio à Mata no Terras de São José",
    descricao: "Total integração arquitetônica com a mata atlântica nativa. Paredes envidraçadas retráteis, lareira suspensa, adega climatizada e pomar produtivo.",
    finalidade: "venda",
    tipo: "Casa em Condomínio",
    preco: 7800000,
    preco_condominio: 2600,
    preco_iptu: 1400,
    quartos: 5,
    suites: 5,
    banheiros: 7,
    vagas: 6,
    area_util: 670,
    area_total: 2200,
    cidade: "Itu",
    bairro: "Terras de São José",
    uf: "SP",
    cep: "13300-000",
    rua: "Alameda das Paineiras",
    numero: "89",
    latitude: -23.2600,
    longitude: -47.3000,
    caracteristicas: ["Mata Nativa", "Lareira Suspensa", "Adega Climatizada", "Condomínio com Golfe"],
    destaque: false
  },
  {
    titulo: "Apartamento Clássico Reformado em Higienópolis",
    descricao: "Planta generosa com janelões do piso ao teto, piso original em parquet restaurado, ar-condicionado central em todos os cômodos e cozinha gourmet com ilha central em Silestone.",
    finalidade: "venda",
    tipo: "Apartamento",
    preco: 4500000,
    preco_condominio: 3100,
    preco_iptu: 1350,
    quartos: 4,
    suites: 3,
    banheiros: 5,
    vagas: 3,
    area_util: 330,
    area_total: 420,
    cidade: "São Paulo",
    bairro: "Higienópolis",
    uf: "SP",
    cep: "01238-000",
    rua: "Rua Alagoas",
    numero: "520",
    latitude: -23.5460,
    longitude: -46.6570,
    caracteristicas: ["Parquet Restaurado", "Janelões Clássicos", "Ar Central", "Cozinha com Ilha"],
    destaque: false
  },
  {
    titulo: "Casa de Praia de Alto Padrão em Riviera de São Lourenço",
    descricao: "Módulo 2, a apenas 50 metros da praia. Casa nova com acabamento primoroso, piscina aquecida com prainha, sauna úmida com passagem direta para a água e espaço gourmet climatizado.",
    finalidade: "venda",
    tipo: "Casa em Condomínio",
    preco: 9800000,
    preco_condominio: 1800,
    preco_iptu: 1200,
    quartos: 6,
    suites: 6,
    banheiros: 8,
    vagas: 4,
    area_util: 580,
    area_total: 750,
    cidade: "Bertioga",
    bairro: "Riviera de São Lourenço",
    uf: "SP",
    cep: "11250-000",
    rua: "Largo dos Coqueiros",
    numero: "18",
    latitude: -23.7920,
    longitude: -46.0150,
    caracteristicas: ["Sauna com Passagem", "Piscina Aquecida", "50m da Praia", "Espaço Gourmet Climatizado"],
    destaque: true
  },
  {
    titulo: "Apartamento Frente Mar em Balneário Camboriú",
    descricao: "Andar alto com vista espetacular de toda a orla. Edifício com heliponto, piscina aquecida de 25m, academia assinada e serviço de conciergerie 24 horas.",
    finalidade: "venda",
    tipo: "Apartamento",
    preco: 14500000,
    preco_condominio: 3900,
    preco_iptu: 2100,
    quartos: 4,
    suites: 4,
    banheiros: 6,
    vagas: 5,
    area_util: 390,
    area_total: 510,
    cidade: "Balneário Camboriú",
    bairro: "Centro",
    uf: "SC",
    cep: "88330-000",
    rua: "Avenida Atlântica",
    numero: "2100",
    latitude: -26.9920,
    longitude: -48.6350,
    caracteristicas: ["Frente Mar", "Heliponto", "Piscina 25m", "Concierge 24h", "Automação"],
    destaque: true
  },
  {
    titulo: "Residência Contemporânea no Alto de Pinheiros",
    descricao: "Rua tranquila e arborizada com segurança armada 24h. Arquitetura moderna com estrutura metálica aparente, muita luz natural, jardim com piscina e espaço wellness privativo.",
    finalidade: "venda",
    tipo: "Casa",
    preco: 8700000,
    preco_condominio: 0,
    preco_iptu: 2400,
    quartos: 4,
    suites: 4,
    banheiros: 6,
    vagas: 5,
    area_util: 520,
    area_total: 780,
    cidade: "São Paulo",
    bairro: "Alto de Pinheiros",
    uf: "SP",
    cep: "05460-000",
    rua: "Rua Arquiteto Jaime Fonseca",
    numero: "140",
    latitude: -23.5480,
    longitude: -46.7080,
    caracteristicas: ["Espaço Wellness", "Segurança Armada", "Jardim Paisagístico", "Piscina Privativa"],
    destaque: false
  },
  {
    titulo: "Apartamento Duplex Mobiliado no Moema Pássaros",
    descricao: "Fora da rota de aviões. Pé-direito duplo no living, terraço gourmet com churrasqueira e fechamento em vidro retrátil, armários Ornare e automação de iluminação e som.",
    finalidade: "aluguel",
    tipo: "Apartamento",
    preco: 22000,
    preco_condominio: 2400,
    preco_iptu: 950,
    quartos: 3,
    suites: 3,
    banheiros: 5,
    vagas: 3,
    area_util: 235,
    area_total: 310,
    cidade: "São Paulo",
    bairro: "Moema",
    uf: "SP",
    cep: "04515-030",
    rua: "Rua Canário",
    numero: "720",
    latitude: -23.6020,
    longitude: -46.6680,
    caracteristicas: ["Pé-direito Duplo", "Mobiliado Ornare", "Fora da Rota", "Varanda Gourmet"],
    destaque: false
  },
  {
    titulo: "Mansão Suspensa com Vista para o Parque Ibirapuera",
    descricao: "Edifício exclusivo com apenas uma unidade por andar. Living com 120m², adega walk-in climatizada, suíte master com dois banheiros e dois closets com marcenaria italiana.",
    finalidade: "venda",
    tipo: "Apartamento",
    preco: 16800000,
    preco_condominio: 7200,
    preco_iptu: 3400,
    quartos: 4,
    suites: 4,
    banheiros: 7,
    vagas: 6,
    area_util: 560,
    area_total: 750,
    cidade: "São Paulo",
    bairro: "Vila Nova Conceição",
    uf: "SP",
    cep: "04505-001",
    rua: "Avenida República do Líbano",
    numero: "990",
    latitude: -23.5930,
    longitude: -46.6630,
    caracteristicas: ["Vista Ibirapuera", "Adega Walk-in", "Marcenaria Italiana", "Depósito Privativo"],
    destaque: true
  }
];

// Helper to expand with more realistic listings up to 50
const CIDADE_BAIRROS = [
  { cidade: "São Paulo", bairro: "Jardins", uf: "SP", lat: -23.567, lng: -46.665 },
  { cidade: "São Paulo", bairro: "Itaim Bibi", uf: "SP", lat: -23.585, lng: -46.678 },
  { cidade: "São Paulo", bairro: "Vila Nova Conceição", uf: "SP", lat: -23.591, lng: -46.671 },
  { cidade: "São Paulo", bairro: "Moema", uf: "SP", lat: -23.602, lng: -46.668 },
  { cidade: "São Paulo", bairro: "Pinheiros", uf: "SP", lat: -23.565, lng: -46.689 },
  { cidade: "São Paulo", bairro: "Higienópolis", uf: "SP", lat: -23.546, lng: -46.657 },
  { cidade: "São Paulo", bairro: "Morumbi", uf: "SP", lat: -23.605, lng: -46.712 },
  { cidade: "São Paulo", bairro: "Alto de Pinheiros", uf: "SP", lat: -23.548, lng: -46.708 },
  { cidade: "Barueri", bairro: "Alphaville", uf: "SP", lat: -23.491, lng: -46.852 },
  { cidade: "Santana de Parnaíba", bairro: "Tamboré", uf: "SP", lat: -23.475, lng: -46.839 },
  { cidade: "Campinas", bairro: "Gramado", uf: "SP", lat: -22.894, lng: -47.025 },
  { cidade: "Campinas", bairro: "Cambuí", uf: "SP", lat: -22.899, lng: -47.052 },
  { cidade: "Porto Feliz", bairro: "Fazenda Boa Vista", uf: "SP", lat: -23.210, lng: -47.530 },
  { cidade: "Itu", bairro: "Terras de São José", uf: "SP", lat: -23.260, lng: -47.300 },
  { cidade: "Bragança Paulista", bairro: "Quinta da Baroneza", uf: "SP", lat: -22.950, lng: -47.540 },
  { cidade: "Guarujá", bairro: "Jardim Acapulco", uf: "SP", lat: -23.970, lng: -46.220 },
  { cidade: "São Sebastião", bairro: "Juquehy", uf: "SP", lat: -23.766, lng: -45.733 },
  { cidade: "Bertioga", bairro: "Riviera de São Lourenço", uf: "SP", lat: -23.792, lng: -46.015 },
  { cidade: "Porto Seguro", bairro: "Trancoso", uf: "BA", lat: -16.589, lng: -39.096 }
];

const TIPOS_EXTRA = [
  "Apartamento", "Casa em Condomínio", "Cobertura", "Mansão", "Casa", "Apartamento Garden", "Terreno em Condomínio"
];

const NOMES_ADICIONAIS = [
  "Mansão Suspensa com Espaço Gourmet e Vista Livre",
  "Casa Térrea Contemporânea com Piscina Aquecida",
  "Cobertura Duplex com Solarium e Spa Privativo",
  "Apartamento de Luxo com Vista Eterna para o Verde",
  "Residência Minimalista com Acabamentos em Concreto e Madeira",
  "Penthouse Linear com Piscina de Vidro e Sauna",
  "Mansão com Quadra Poliesportiva e Adega Climatizada",
  "Apartamento Boutique com Automação Residencial",
  "Villa Mediterrânea com Paisagismo e Pomar",
  "Casa de Campo com Haras Privativo e Casa de Hóspedes",
  "Cobertura Triplex com Lareira e Terraço Panorâmico",
  "Apartamento Garden com Piscina Privativa e Lounge",
  "Mansão Clássica com Mármore Travertino e Cinema",
  "Residência com Energia Fotovoltaica e Automação Crestron",
  "Casa de Vidro com Vista para o Vale das Palmeiras",
  "Apartamento Alto Padrão Reformado por Arquiteto Renomado",
  "Residência com Spa de Hidromassagem e Espaço Gourmet",
  "Cobertura Penthouse com Lounge Bar e Forno de Pizza",
  "Mansão em Condomínio Fechado com Segurança Armada 24h",
  "Apartamento de Altíssimo Padrão com Elevador Panorâmico",
  "Casa Contemporânea com Pé-direito Duplo e Lareira Ecológica",
  "Residência com Quadra de Tênis Oficial e Piscina Semi-Olímpica",
  "Cobertura Duplex com Terraço Gourmet e Vista 360 Graus",
  "Mansão com Borda Infinita e Vista para o Lago",
  "Apartamento Design Mobiliado com Marcenaria de Alfaiataria",
  "Casa de Alto Luxo com Heliponto Privativo e Adega Subterrânea",
  "Cobertura Linear com Piscina Aquecida e Solarium",
  "Residência Sustentável com Sistema de Reuso de Água e Solar",
  "Apartamento Garden com Quintal Privativo e Varanda Gourmet",
  "Mansão Futurista com Domótica Total e Home Theater 4K"
];

// Combine into 50 total listings
const ALL_50 = [...RAW_PROPERTIES];

let nameIdx = 0;
while (ALL_50.length < 50) {
  const loc = CIDADE_BAIRROS[(ALL_50.length) % CIDADE_BAIRROS.length];
  const tipo = TIPOS_EXTRA[(ALL_50.length) % TIPOS_EXTRA.length];
  const finalidade = ALL_50.length % 7 === 0 ? "aluguel" : ALL_50.length % 11 === 0 ? "temporada" : "venda";
  const isAluguel = finalidade === "aluguel";
  const isTemporada = finalidade === "temporada";
  
  const preco = isAluguel
    ? Math.round((12000 + (ALL_50.length * 850)) / 500) * 500
    : isTemporada
    ? Math.round((3500 + (ALL_50.length * 200)) / 100) * 100
    : Math.round((2500000 + (ALL_50.length * 480000)) / 50000) * 50000;

  const area = Math.round(180 + (ALL_50.length * 15));
  const quartos = 3 + (ALL_50.length % 4);
  const suites = Math.min(quartos, 2 + (ALL_50.length % 4));

  ALL_50.push({
    titulo: NOMES_ADICIONAIS[nameIdx % NOMES_ADICIONAIS.length],
    descricao: `Imóvel exclusivo de altíssimo padrão localizado em ${loc.bairro}, ${loc.cidade}. Projeto com acabamentos refinados, integração completa de ambientes sociais, tecnologia residencial de ponta e infraestrutura exemplar de segurança e lazer.`,
    finalidade,
    tipo,
    preco,
    preco_condominio: isTemporada ? 0 : Math.round((1400 + (ALL_50.length * 90)) / 50) * 50,
    preco_iptu: isTemporada ? 0 : Math.round((600 + (ALL_50.length * 50)) / 50) * 50,
    quartos,
    suites,
    banheiros: suites + 2,
    vagas: 3 + (ALL_50.length % 5),
    area_util: area,
    area_total: Math.round(area * 1.35),
    cidade: loc.cidade,
    bairro: loc.bairro,
    uf: loc.uf,
    cep: "01000-000",
    rua: "Avenida das Américas",
    numero: String(100 + ALL_50.length * 7),
    latitude: loc.lat + (Math.random() - 0.5) * 0.02,
    longitude: loc.lng + (Math.random() - 0.5) * 0.02,
    caracteristicas: [
      "Varanda Gourmet",
      "Piscina Privativa",
      "Automação",
      "Segurança 24h",
      "Pé-direito Duplo"
    ],
    destaque: ALL_50.length < 8 || ALL_50.length % 5 === 0
  });
  nameIdx++;
}

console.log(`Generated ${ALL_50.length} total properties.`);

// Create TypeScript file content for src/lib/demo-data.ts
const tsProperties = ALL_50.map((prop, idx) => {
  const idNum = String(idx + 1).padStart(2, '0');
  const id = `00000000-0000-0000-0000-${String(idx + 1).padStart(12, '0')}`;
  const img1 = getPhotoUrl(idx * 3);
  const img2 = getPhotoUrl(idx * 3 + 1);
  const img3 = getPhotoUrl(idx * 3 + 2);

  return {
    id,
    titulo: prop.titulo,
    descricao: prop.descricao,
    finalidade: prop.finalidade,
    tipo: prop.tipo,
    status: "disponivel",
    preco: prop.preco,
    preco_condominio: prop.preco_condominio,
    preco_iptu: prop.preco_iptu,
    aceita_financiamento: true,
    quartos: prop.quartos,
    suites: prop.suites,
    banheiros: prop.banheiros,
    vagas: prop.vagas,
    area_util: prop.area_util,
    area_total: prop.area_total,
    cidade: prop.cidade,
    bairro: prop.bairro,
    uf: prop.uf,
    cep: prop.cep,
    rua: prop.rua,
    numero: prop.numero,
    latitude: Number(prop.latitude.toFixed(4)),
    longitude: Number(prop.longitude.toFixed(4)),
    caracteristicas: prop.caracteristicas,
    destaque: prop.destaque,
    is_demo: true,
    created_at: new Date(Date.now() - (50 - idx) * 1000 * 60 * 60 * 12).toISOString(),
    updated_at: new Date().toISOString(),
    imoveis_imagens: [
      {
        id: `img-${idx + 1}-1`,
        imovel_id: id,
        url: img1,
        ordem: 1,
        capa: true
      },
      {
        id: `img-${idx + 1}-2`,
        imovel_id: id,
        url: img2,
        ordem: 2,
        capa: false
      },
      {
        id: `img-${idx + 1}-3`,
        imovel_id: id,
        url: img3,
        ordem: 3,
        capa: false
      }
    ]
  };
});

const tsContent = `import type { Imovel } from "./supabase/types";

export const DEMO_IMOVEIS: Imovel[] = ${JSON.stringify(tsProperties, null, 2)};
`;

fs.writeFileSync('src/lib/demo-data.ts', tsContent, 'utf8');
console.log('Successfully wrote src/lib/demo-data.ts with 50 properties.');

// Create SQL seed file
let sqlContent = `-- Seed com 50 imóveis ilustrativos de alto padrão
-- Execute este script no Supabase SQL Editor para popular a base em nuvem instantaneamente!

DO $$
BEGIN
`;

tsProperties.forEach((p, idx) => {
  const caracteristicasJson = JSON.stringify(p.caracteristicas);
  const tituloEscaped = p.titulo.replace(/'/g, "''");
  const descEscaped = p.descricao.replace(/'/g, "''");
  const ruaEscaped = (p.rua || '').replace(/'/g, "''");

  sqlContent += `
    -- Imóvel ${idx + 1}: ${tituloEscaped}
    INSERT INTO public.imoveis (
        id, titulo, descricao, finalidade, tipo, status,
        preco, preco_condominio, preco_iptu, aceita_financiamento,
        quartos, suites, banheiros, vagas, area_util, area_total,
        cidade, bairro, uf, cep, rua, numero, latitude, longitude,
        caracteristicas, destaque, is_demo
    ) VALUES (
        '${p.id}',
        '${tituloEscaped}',
        '${descEscaped}',
        '${p.finalidade}', '${p.tipo}', 'disponivel',
        ${p.preco}, ${p.preco_condominio}, ${p.preco_iptu}, ${p.aceita_financiamento},
        ${p.quartos}, ${p.suites}, ${p.banheiros}, ${p.vagas}, ${p.area_util}, ${p.area_total},
        '${p.cidade}', '${p.bairro}', '${p.uf}', '${p.cep}', '${ruaEscaped}', '${p.numero}', ${p.latitude}, ${p.longitude},
        '${caracteristicasJson}'::jsonb,
        ${p.destaque}, true
    ) ON CONFLICT (id) DO UPDATE SET
        titulo = EXCLUDED.titulo,
        descricao = EXCLUDED.descricao,
        preco = EXCLUDED.preco,
        is_demo = true;

    -- Fotos do Imóvel ${idx + 1}
    INSERT INTO public.imoveis_imagens (imovel_id, url, ordem, capa)
    VALUES
        ('${p.id}', '${p.imoveis_imagens[0].url}', 1, true),
        ('${p.id}', '${p.imoveis_imagens[1].url}', 2, false),
        ('${p.id}', '${p.imoveis_imagens[2].url}', 3, false)
    ON CONFLICT DO NOTHING;
`;
});

sqlContent += `
END $$;
`;

fs.writeFileSync('supabase/seed_50_imoveis.sql', sqlContent, 'utf8');
console.log('Successfully wrote supabase/seed_50_imoveis.sql with 50 properties.');
