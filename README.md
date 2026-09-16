# RA Imóveis — Roberto Andrade (Consultoria Imobiliária)

Plataforma imobiliária completa de alto padrão construída com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** e **Supabase (PostgreSQL, Auth e Storage)**, desenhada para deploy contínuo na **Vercel**.

---

## 🌟 Recursos do Sistema

### 1. Vitrine Pública (Alta Conversão & SEO)
- **Home**: Hero imersivo Dark Luxury Gold, pilares de atendimento e grid de imóveis em destaque.
- **Busca e Listagem de Imóveis (`/imoveis`)**:
  - Filtros diretos na query Supabase (Finalidade, Cidade, Bairro, Tipo de Imóvel, Preço, Área útil, Quartos, Suítes, Banheiros, Vagas e Características).
  - Debounce de ~400ms em campos numéricos para performance.
  - Sincronização de todos os filtros com a URL (compartilhável e compatível com histórico).
  - Responsivo mobile-first com **Bottom Sheet** ergonômico.
  - Paginação real integrada (24 imóveis por página).
- **Página de Imóvel Individual (`/imoveis/[codigo]`)**:
  - Galeria de imagens em alta resolução com **Lightbox** fullscreen (teclado: Esc, Setas).
  - Ficha técnica completa com ícones arquitetônicos.
  - Mapa de localização aproximada via OpenStreetMap (rua e número ocultos por segurança).
  - **CTA de WhatsApp com Rastreamento de Leads**: Redirecionamento imediato e registro em background na tabela `leads` (`origem: "whatsapp_detalhe"`). Barra sticky no mobile.

### 2. Painel Administrativo Exclusivo (`/admin`)
- **Autenticação Segura**: Protegido por Supabase Auth e Middleware do Next.js.
- **Dashboard**: Contadores de imóveis (Total, Disponíveis, Vendidos/Alugados) e novos leads dos últimos 7 dias com links diretos para contato.
- **Gestão de Imóveis (`/admin/imoveis`)**:
  - Tabela densa com miniatura, código mono, cidade, preço e destaque visual para imóveis de demonstração (`[DEMO]`).
  - Toggle rápido de status (Disponível, Indisponível, Reservado, Vendido, Alugado) direto na linha.
  - Modal customizado Dark Luxury Gold para confirmação de exclusão.
- **Formulário de Cadastro/Edição em 2 Etapas**:
  - Validação de código único e campos numéricos positivos.
  - Gestão de fotos no Supabase Storage organizado por pasta `{imovel_id}`.
  - Upload múltiplo, reordenação e definição de foto de Capa.
  - Exclusão de fotos físicas no Storage sincronizada com o banco.

---

## 🚀 Como Executar Localmente

### 1. Clonar o repositório e instalar dependências:
```bash
npm install
```

### 2. Configurar variáveis de ambiente:
Crie o arquivo `.env.local` na raiz baseado no `.env.example`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-publica-aqui
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

### 3. Configurar o Banco no Supabase:
Execute o script [`supabase/schema.sql`](supabase/schema.sql) no **SQL Editor** do seu painel Supabase. Ele criará as tabelas `imoveis`, `imoveis_imagens`, `leads`, bucket de Storage `imoveis`, políticas RLS e os seeds iniciais.

### 4. Executar em desenvolvimento:
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000).

---

## 📦 Deploy na Vercel

1. Importe este repositório no dashboard da [Vercel](https://vercel.com).
2. Adicione as Variáveis de Ambiente no projeto da Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
3. O deploy será realizado automaticamente.
