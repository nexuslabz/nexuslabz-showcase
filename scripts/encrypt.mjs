import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const envPath = join(process.cwd(), '.env');
if (existsSync(envPath)) {
  const content = readFileSync(envPath, 'utf-8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const val = trimmed.slice(idx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
}

if (!process.env.STATICRYPT_PASSWORD) {
  console.error('STATICRYPT_PASSWORD not set. Create a .env file or export the variable.');
  process.exit(1);
}

const TEMPLATE_ARGS = [
  '--short',
  '-t shared/staticrypt-template.html',
  '--template-title "Acesso Restrito"',
  '--template-button "DESBLOQUEAR"',
  '--template-placeholder "Senha"',
  '--template-remember "Lembrar de mim"',
  '--template-error "Senha incorreta!"',
  '--remember 7',
].join(' ');

const targets = [
  {
    input: '_site/proposals/index.html',
    dir: '_site/proposals',
    instructions: 'Digite a senha para acessar esta área.',
  },
  {
    input: '_site/nutrigen/index.html',
    dir: '_site/nutrigen',
    instructions: 'Digite a senha para acessar esta apresentação.',
  },
];

for (const t of targets) {
  if (!existsSync(t.input)) {
    console.log(`Skipping ${t.input} (not found)`);
    continue;
  }

  const cmd = `npx staticrypt ${t.input} -d ${t.dir} ${TEMPLATE_ARGS} --template-instructions "${t.instructions}"`;
  console.log(`\nEncrypting: ${t.input}`);
  execSync(cmd, { stdio: 'inherit', env: process.env });
}

console.log('\nAll protected pages encrypted successfully.');
