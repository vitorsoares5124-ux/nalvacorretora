import fs from 'fs';

const content = fs.readFileSync('.env.local', 'utf8');
const env = {};
content.split('\n').forEach(line => {
  const parts = line.trim().split('=');
  if (parts.length >= 2) {
    env[parts[0].trim()] = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
  }
});

async function main() {
  const res = await fetch(env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1/imoveis', {
    method: 'POST',
    headers: {
      apikey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Authorization: 'Bearer ' + env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      'Content-Type': 'application/json',
      Prefer: 'return=representation'
    },
    body: JSON.stringify({
      titulo: 'Test Property',
      preco: 1000000,
      cidade: 'São Paulo',
      bairro: 'Jardins',
      tipo: 'Apartamento'
    })
  });
  console.log('Anon insert status:', res.status, await res.text());
}

main().catch(console.error);
