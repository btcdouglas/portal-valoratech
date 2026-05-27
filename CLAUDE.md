# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visão Geral

Landing page da **ValoraTech** — página "em desenvolvimento" com design vibrante, animações CSS puras e deploy contínuo via Vercel.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Google Fonts (Inter + Plus Jakarta Sans)  
**Deploy:** Vercel (App Router nativo, sem `output: 'export'`) → [www.valoratech.io](https://www.valoratech.io)

## Estrutura

```
frontend/
├── app/
│   ├── page.tsx       # Página única — todo o conteúdo visual está aqui
│   ├── layout.tsx     # Fontes Google + metadata (title, description, OG) + Analytics + SpeedInsights
│   └── globals.css    # Tema, keyframes e classes de animação
└── public/
    └── icon.svg       # Favicon ValoraTech (letra "V" em fundo preto)
```

## Comandos

```bash
cd frontend
npm install
npm run dev            # http://localhost:3000
npm run build          # Build de produção (saída em .next/)
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

## Deploy na Vercel

O projeto usa integração GitHub → Vercel: cada `git push` para `main` dispara um deploy de produção automaticamente.

| Configuração | Valor |
|---|---|
| Plataforma | Vercel (iManage IT's Projects) |
| Domínio | [www.valoratech.io](https://www.valoratech.io) |
| DNS | Cloudflare (DNS only — sem proxy) |
| Branch de produção | `main` |
| Root directory | `frontend/` |
| Build command | `npm run build` |
| Node version | 24.x |

## Observabilidade

- **Web Analytics** (`@vercel/analytics`) — coleta pageviews e eventos no painel da Vercel
- Componente `<Analytics />` em `frontend/app/layout.tsx`

## Adicionar conteúdo futuro

- Todo o conteúdo fica em `frontend/app/page.tsx`
- Fontes carregadas em `frontend/app/layout.tsx` — Inter (corpo) e Plus Jakarta Sans (display/headings)
- Para adicionar redes sociais: há um bloco comentado no `page.tsx`
- Para adicionar mais páginas: criar `app/sobre/page.tsx`, `app/contato/page.tsx` etc.
