// Exécute tinor_erp_v3_schema.sql sur la base MariaDB configurée.
// Usage : npm run migrate
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

async function main() {
  const schemaPath = process.env.SCHEMA_PATH || path.join(__dirname, '../tinor_erp_v3_schema.sql');
  const sql = fs.readFileSync(schemaPath, 'utf8');
  const conn = process.env.DATABASE_URL
    ? await mysql.createConnection({ uri: process.env.DATABASE_URL, multipleStatements: true })
    : await mysql.createConnection({
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'tinor',
        password: process.env.DB_PASSWORD || 'tinor',
        database: process.env.DB_NAME || 'tinor_v3',
        multipleStatements: true,
      });
  console.log('Exécution du schéma BD Gestion Commerciale V3 sur',
    process.env.DATABASE_URL ? '(base configurée via DATABASE_URL)' : `${process.env.DB_HOST || '127.0.0.1'}/${process.env.DB_NAME || 'tinor_v3'}...`);
  await conn.query(sql);
  console.log('✓ Schéma appliqué avec succès.');
  await conn.end();
}

main().catch((e) => { console.error('Échec de la migration :', e.message); process.exit(1); });
