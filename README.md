# LANEV UnB Platform 11/10 - Proposições NutEV

Site institucional premium para a **Liga Acadêmica de Nutrição do Estilo de Vida — LANEV UnB** e para a construção científica das proposições **NutEV/NEV**.

A proposta evolui a landing page inicial para uma plataforma com páginas internas, interações e arquitetura preparada para crescimento acadêmico e institucional, deixando claro que diretrizes, protocolo, pirâmide e índice são proposições em construção, não ferramentas oficiais prontas.

## O que esta versão entrega

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Identidade visual NEV/NutEV aplicada
- Dark mode premium
- Busca global com atalho `Ctrl/⌘ + K`
- Progresso de rolagem
- Hero institucional premium
- Círculo da Vida interativo
- Explorer das proposições NutEV com perguntas orientadoras, limites e próximos passos
- Página do Grupo de Pesquisa
- Página da Liga Acadêmica
- Biblioteca científica com filtros
- Agenda de eventos
- Perfis de equipe filtráveis
- Roadmap científico da construção e validação
- Diagnóstico rápido de interesse
- Formulário local com exportação CSV
- Página LGPD inicial
- SEO, sitemap e robots
- Dockerfile para Cloud Run
- Workflow para GitHub Pages via export estático

## Estrutura

```txt
app/
  page.tsx
  grupo-de-pesquisa/page.tsx
  liga-academica/page.tsx
  framework-nutev/page.tsx
  biblioteca/page.tsx
  eventos/page.tsx
  equipe/page.tsx
  contato/page.tsx
  politica-de-privacidade/page.tsx
components/
  Header.tsx
  Hero.tsx
  CircleOfLife.tsx
  FrameworkExplorer.tsx
  LibraryHub.tsx
  TeamGrid.tsx
  LeadForm.tsx
  ...
data/
  site.ts
public/brand/
  nev-logo-horizontal.png
  nev-symbol.png
  nev-brand-board.png
```

## Rodar localmente

```bash
npm install
npm run dev
```

Abra:

```bash
http://localhost:3000
```

## Build de produção

```bash
npm run build
npm start
```

## Publicar no GitHub Pages

Esta versão permite exportação estática.

```bash
npm run build:export
```

A pasta gerada será:

```bash
out/
```

O workflow `.github/workflows/pages.yml` já automatiza isso.

Passos:

1. Crie um repositório no GitHub.
2. Envie este projeto.
3. Vá em `Settings > Pages`.
4. Configure `GitHub Actions` como source.
5. Faça push na branch `main`.

## Publicar no Cloud Run

1. Crie um projeto no Google Cloud.
2. Ative Cloud Run e Cloud Build.
3. Configure o projeto local:

```bash
gcloud config set project PROJECT_ID
```

4. Build e deploy:

```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/lanev-unb-platform
gcloud run deploy lanev-unb-platform \
  --image gcr.io/PROJECT_ID/lanev-unb-platform \
  --platform managed \
  --region southamerica-east1 \
  --allow-unauthenticated
```

## Domínio

Após deploy, configure domínio customizado usando:

- Cloud Run domain mapping; ou
- Load Balancer + Cloud Run + Cloud DNS; ou
- Cloudflare como DNS/CDN.

## Formulário

O formulário atual é demonstrativo. Ele salva dados no `localStorage` do navegador e exporta CSV.

Para produção, conectar com:

- Google Forms
- Google Sheets via Apps Script
- Airtable
- Supabase
- Formspree
- HubSpot
- Brevo
- API própria em Cloud Run

## Revisões antes de publicar oficialmente

- Confirmar autorização de uso do nome UnB.
- Validar uso de logotipo, marca institucional e nome da Liga.
- Revisar dados do DGP/CNPq.
- Inserir e-mail oficial.
- Inserir links de Lattes, ORCID e redes sociais.
- Revisar política de privacidade/LGPD.
- Substituir placeholders por fotos reais e documentos oficiais.
- Validar texto final com orientador/coordenadores.

## Identidade visual

Cores:

- Azul petróleo: `#1F4E5F`
- Verde sálvia: `#8DA58B`
- Bege areia: `#F4F0E6`
- Grafite: `#2D2D2D`
- Dourado fosco: `#B89B5E`

Fontes:

- Cormorant Garamond para títulos
- Montserrat para interface e textos

## Conteúdo base incorporado

- Grupo de Pesquisa em Nutrição do Estilo de Vida
- Repercussões dos trabalhos do grupo
- Linhas de pesquisa
- Nutrição do Estilo de Vida
- Nutrição em agonistas do receptor de GLP-1
- Pesquisadores e estudante listados no conteúdo enviado
- Laboratório NutEV/NEV
- Liga Acadêmica de Nutrição do Estilo de Vida



## Observações antes da publicação

- Revisar autorização institucional para uso do nome UnB e canais oficiais.
- Substituir `contato@seudominio.com.br` pelo e-mail oficial.
- Definir `NEXT_PUBLIC_SITE_URL` com o domínio real.
- O formulário está em modo demonstração/local; conectar a uma solução real antes de captar dados.
- Conteúdos sobre GLP-1 têm finalidade educacional e não substituem orientação médica/nutricional.
- Pesquisas com seres humanos devem observar as aprovações éticas e institucionais cabíveis.
