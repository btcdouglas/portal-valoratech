# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visão Geral

Landing page estática da **ValoraTech** — página "em desenvolvimento" com design vibrante, animações CSS puras e deploy via Cloudflare Pages.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Google Fonts (Inter + Plus Jakarta Sans)  
**Deploy:** Static export (`output: 'export'`) → Cloudflare Pages

## Estrutura

```
frontend/
├── app/
│   ├── page.tsx       # Página única — todo o conteúdo visual está aqui
│   ├── layout.tsx     # Fontes Google + metadata (title, description, OG)
│   └── globals.css    # Tema, keyframes e classes de animação
└── public/
    └── icon.svg       # Favicon ValoraTech (letra "V" em fundo preto)
```

## Comandos

```bash
cd frontend
npm install
npm run dev            # http://localhost:3000
npm run build          # Gera pasta out/ (static export)
npm run lint
```

## Animações (CSS puro — globals.css)

| Classe / Keyframe | Uso |
|---|---|
| `.animate-enter` | Fade + slide-up na entrada (sem delay) |
| `.animate-enter-delay-1/2/3` | Mesma animação com delays em cascata |
| `.wordmark-gradient` | Gradiente animado índigo→violeta→azul no wordmark |
| `.badge-shimmer` | Efeito shimmer no badge "Em Desenvolvimento" |
| `@keyframes float1/2/3` | Blobs de fundo que flutuam continuamente |

## Deploy no Cloudflare Pages

```bash
npm run build          # Gera frontend/out/
```

No painel Cloudflare Pages:
- **Build command:** `npm run build`
- **Output directory:** `out`
- **Root directory:** `frontend`
- **Node version:** 20

## Adicionar conteúdo futuro

- Todo o conteúdo fica em `frontend/app/page.tsx`
- Fontes carregadas em `frontend/app/layout.tsx` — Inter (corpo) e Plus Jakarta Sans (display/headings)
- Para adicionar redes sociais: há um bloco comentado no `page.tsx`
- Para adicionar mais páginas: criar `app/sobre/page.tsx`, `app/contato/page.tsx` etc.
