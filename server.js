import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { execSync } from 'child_process';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const distServer = path.join(__dirname, 'dist', 'server.cjs');

if (!fs.existsSync(distServer)) {
  console.log('Arquivos de compilação não encontrados. Executando build...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
  } catch (err) {
    console.error('Falha ao executar build automático:', err);
  }
}

// Inicia o servidor compilado do Express
require(distServer);
