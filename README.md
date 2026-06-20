# 🍹 bkm-store

> Boutique en ligne de rhums arrangés artisanaux — élaborés avec les fruits des îles de la Caraïbe.

[![Status](https://img.shields.io/badge/status-active-brightgreen)]()
[![Stack](https://img.shields.io/badge/stack-TypeScript%20%2B%20Next.js%20%2B%20Supabase-blue)]()
[![Visibility](https://img.shields.io/badge/visibility-public-brightgreen)]()

---

## Présentation

`bkm-store` est la boutique e-commerce de la marque BKM. Elle propose des rhums arrangés artisanaux confectionnés à partir des fruits des îles des Caraïbes, pour des saveurs authentiques et exotiques.

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | Next.js + TypeScript + Tailwind |
| Backend | Supabase (PostgreSQL + Auth + Storage) |
| Déploiement | Vercel |
| Notifications | Telegram Bot API |

---

## Installation locale

```bash
git clone https://github.com/kurusokey/bkm-store.git
cd bkm-store
cp .env.local.example .env.local
npm install
npm run dev
```

---

## Variables d'environnement

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL du projet Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clé publique Supabase |
| `TELEGRAM_BOT_TOKEN` | Token bot Telegram |

---

## Liens

- Production : [blackbeard-umber.vercel.app](https://blackbeard-umber.vercel.app)
- Anciennement : `bkm`
