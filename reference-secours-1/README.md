# Référence de secours 1 — TinOR

Sauvegarde de référence du projet TinOR (ERP), enregistrée le 2026-10-01.

## Contenu

| Élément | Description |
|---|---|
| `tinor_admin.html` | Console d'administration (front-end, fichier HTML autonome) |
| `tinor-api-v3/` | Sources de l'API v3 (Node.js / MySQL), extraites de l'archive |
| `archive/tinor-api-v3.zip` | Archive originale de l'API, conservée telle quelle |

## Restauration

- Front-end : ouvrir ou déployer `tinor_admin.html`.
- API : voir `tinor-api-v3/README.md` (copier `.env.example` en `.env`, `npm install`, puis importer `tinor_erp_v3_schema.sql`).
