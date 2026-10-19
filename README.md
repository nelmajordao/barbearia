# O Meu Barbeiro — página web

Versão web da app de marcações, servida pelo GitHub Pages em `https://marcacoes.barbcapitao.pt`.
Página única, sem build: o que está neste repositório é o que é publicado.

## Como se usa
- `https://marcacoes.barbcapitao.pt/<codigo>` — entra directamente na barbearia com esse código (ex.: `/capitao`). É o link do QR que cada barbearia imprime.
- `https://marcacoes.barbcapitao.pt/` — pede o código da barbearia.
- "Acesso administrativo" (fundo da página) — painel do barbeiro, com login Supabase Auth.

Mesmas funcionalidades da app Android (cliente e administrador); ver o README do repositório `barbearia-app`.

## Ficheiros
| Ficheiro | Para quê |
|---|---|
| `index.html` | a página inteira (HTML, CSS e JavaScript) |
| `404.html` | o GitHub Pages não conhece `/capitao` como ficheiro → reencaminha para `index.html?s=capitao` |
| `firebase-messaging-sw.js` | service worker das notificações web (Firebase Cloud Messaging) |
| `logo.png` | logótipo do produto, usado quando ainda não há barbearia escolhida; o de cada barbearia vem do Supabase Storage |
| `CNAME` | domínio personalizado do GitHub Pages — **não apagar** |

## Configuração dentro do `index.html`
No topo do ficheiro, no bloco `<script type="module">`:
- `FIREBASE_CONFIG` e `VAPID_KEY` — app Web do projecto Firebase (valores públicos).
- No script principal: `SB_URL`, `SB_KEY` (chave *publishable* do Supabase — pública; a segurança está nas RLS e funções do servidor), `PRODUCT_NAME`, `SITE_URL` (derivado do domínio).

O `firebase-messaging-sw.js` tem o mesmo `firebaseConfig` (sem a VAPID). Se mudar o projecto Firebase, actualizar os dois.

## Publicar
Qualquer `push` para `main` publica em 1–2 minutos. Depois de publicar, **Ctrl+F5** (o browser guarda a versão anterior em cache).
A alteração do `index.html` e as da app Android andam em conjunto quando tocam na base de dados; ver `supabase/` no repositório da app.

## Domínio
`CNAME` → `marcacoes.barbcapitao.pt`, com registo CNAME no DNS a apontar para `nelmajordao.github.io`. Para servir o produto noutro domínio, basta apontá-lo também para o GitHub Pages e actualizar o `CNAME` (o GitHub Pages só aceita um domínio personalizado por repositório; outros fazem redirecionamento).

## Dependências externas (CDN)
Google Fonts (Bebas Neue, IBM Plex Mono, Inter), Firebase JS SDK (gstatic), `qrcodejs` (cdnjs) para o QR nas Definições.
