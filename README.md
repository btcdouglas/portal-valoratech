<div align="center">

# ValoraTech

**Tecnologia com Propósito e Resultado**

[![Site](https://img.shields.io/badge/site-valoratech.io-0a0a0a?style=flat-square&logo=vercel)](https://www.valoratech.io)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-0a0a0a?style=flat-square&logo=vercel)](https://vercel.com/imanage-it-projects/portal-valoratech)
[![Next.js](https://img.shields.io/badge/Next.js-16-0a0a0a?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-6366f1?style=flat-square)](#licença)

Landing page institucional da ValoraTech — página "em desenvolvimento" com design vibrante e animações CSS puras.

[🌐 Ver site ao vivo](https://www.valoratech.io)

</div>

---

## ✨ Visão Geral

Página pública da ValoraTech construída com foco em performance, design vibrante e deploy contínuo. Apresenta blobs de gradiente animados, tipografia display impactante e um sistema de animações CSS puro — sem dependências de bibliotecas de animação JS.

## 🖼️ Preview

| Desktop |
|---|
| Badge "Em Desenvolvimento" + wordmark com gradiente animado índigo→violeta→azul + blobs flutuantes em background |

## 🛠️ Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | Framework React (App Router) |
| [TypeScript](https://typescriptlang.org) | 5 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Estilização utilitária |
| [tw-animate-css](https://github.com/Teshgoren/tw-animate-css) | 1.4 | Animações CSS via Tailwind |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Fonte corpo (Google Fonts) |
| [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | — | Fonte display/headings (Google Fonts) |

## 📁 Estrutura

```
.
├── frontend/
│   ├── app/
│   │   ├── page.tsx        # Página única — todo o conteúdo visual
│   │   ├── layout.tsx      # Fontes, metadata e Open Graph
│   │   └── globals.css     # Tema, keyframes e classes de animação
│   └── public/
│       └── icon.svg        # Favicon ValoraTech
├── CLAUDE.md               # Guia para o Claude Code
└── README.md
```

## 🚀 Desenvolvimento local

**Pré-requisitos:** Node.js 20+

```bash
# Clonar o repositório
git clone https://github.com/btcdouglas/portal-valoratech.git
cd portal-valoratech/frontend

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
# → http://localhost:3000
```

### Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (Turbopack)
npm run build    # Build de produção
npm run start    # Iniciar build de produção localmente
npm run lint     # Verificar código com ESLint
```

## 🎨 Animações

Todas as animações são CSS puro — sem biblioteca JS, zero overhead de runtime.

| Classe / Keyframe | Elemento | Comportamento |
|---|---|---|
| `@keyframes float1/2/3` | Blobs de fundo | Translação circular lenta (14–20s, infinito) |
| `.wordmark-gradient` | "ValoraTech" | Gradiente índigo→violeta→azul em loop (4s) |
| `.badge-shimmer` | Badge "Em Desenvolvimento" | Brilho deslizante (3s, infinito) |
| `.animate-enter` | Elementos na entrada | Fade + slide-up (0.8s, spring) |
| `.animate-enter-delay-1/2/3` | Entrada em cascata | Mesmo efeito com delays de 0.15s, 0.3s, 0.5s |

## 🌐 Deploy

O projeto está configurado para deploy contínuo na **Vercel** a partir da branch `main`.

| Configuração | Valor |
|---|---|
| Plataforma | Vercel (iManage IT's Projects) |
| Domínio | [www.valoratech.io](https://www.valoratech.io) |
| DNS | Cloudflare (DNS only — sem proxy) |
| Branch de produção | `main` |
| Root directory | `frontend/` |
| Build command | `npm run build` |
| Node version | 24.x |

Cada `git push` para `main` dispara um novo deploy automaticamente.

## 📝 Licença

MIT © 2025 [ValoraTech](https://www.valoratech.io)
