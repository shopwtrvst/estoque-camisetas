# Estoque de Camisetas — PWA

App de controle de estoque otimizado para celular.

## Arquivos
- `index.html` — app principal
- `manifest.json` — configuração PWA
- `sw.js` — service worker (funciona offline)
- `icon-192.png` / `icon-512.png` — ícones do app

## Como publicar (GitHub Pages — grátis)

1. Crie uma conta em https://github.com
2. Clique em "New repository" → nome: `estoque-camisetas` → Public → Create
3. Faça upload de todos os arquivos desta pasta
4. Vá em Settings → Pages → Source: Deploy from branch → branch: main → Save
5. Aguarde ~2 minutos → o link do seu app aparece (ex: https://seunome.github.io/estoque-camisetas)

## Como instalar no celular (Android)

1. Abra o link no Chrome
2. Toque no menu (⋮) → "Adicionar à tela inicial"
3. Confirme → o ícone aparece na sua tela como um app normal

## Como instalar no celular (iPhone)

1. Abra o link no Safari
2. Toque no botão de compartilhar (□↑)
3. "Adicionar à Tela de Início" → Adicionar
4. O ícone aparece na sua tela

## Funcionalidades
- Registrar entradas e saídas com confirmação (sem impacto acidental)
- Painel por cor mostrando saldo de cada tamanho (P/M/G/GG/XG)
- Resumo geral de todas as cores
- Histórico dos últimos 50 movimentos
- Funciona offline após primeira visita
- Dados salvos no próprio dispositivo
