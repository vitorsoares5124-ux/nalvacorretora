/**
 * Script utilitário opcional para criar o usuário administrador inicial via Supabase Admin API.
 * 
 * Uso:
 *   node scripts/create-admin.mjs <email> <senha> <SUPABASE_SERVICE_ROLE_KEY>
 * 
 * Alternativamente, crie o usuário direto pelo Dashboard do Supabase:
 *   Supabase Console -> Authentication -> Users -> "Add user" -> "Create user"
 */

import { createClient } from "@supabase/supabase-js";

const email = process.argv[2];
const password = process.argv[3];
const serviceRoleKey = process.argv[4] || process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

if (!email || !password || !serviceRoleKey || !supabaseUrl) {
  console.log(`
Uso do script:
  node scripts/create-admin.mjs <email> <senha> <SUPABASE_SERVICE_ROLE_KEY>

Ou adicione o usuário com 1 clique direto no painel do Supabase:
  Dashboard -> Authentication -> Users -> "Add User" -> "Create User"
  - Email: seu-email@exemplo.com
  - Password: sua-senha-segura
  - Auto Confirm User: Sim
  `);
  process.exit(1);
}

const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function main() {
  console.log(`Criando usuário admin: ${email}...`);

  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { name: "Roberto Andrade" },
  });

  if (error) {
    console.error("Erro ao criar usuário:", error.message);
    process.exit(1);
  }

  console.log("Usuário criado com sucesso! ID:", data.user.id);
  console.log("Agora você pode fazer login em /admin/login.");
}

main();
