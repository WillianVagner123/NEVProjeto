# NEV Projeto - MVP

Site MVP do **NEV - Nutricao do Estilo de Vida**, um ecossistema para organizar pesquisa, formacao, eventos, biblioteca cientifica e proposicoes NutEV em desenvolvimento.

URL atual do MVP:

```txt
https://nev-projeto-760280164025.southamerica-east1.run.app/
```

Repositorio:

```txt
https://github.com/WillianVagner123/NEVProjeto
```

## Visao do projeto

O NEV e a marca/ecossistema principal. Dentro dele existem frentes como:

- Grupo de Pesquisa em Nutricao do Estilo de Vida;
- LANEV, como frente academica;
- Laboratorio NutEV, para discutir proposicoes cientificas;
- Biblioteca cientifica;
- Eventos;
- Equipe;
- Contato e parcerias.

O site nao apresenta piramide, protocolo, indice ou diretrizes como produtos finalizados. Esses elementos aparecem como proposicoes em construcao, abertas a debate, revisao e validacao.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- React
- Docker
- Cloud Run
- Cloud Build
- Artifact Registry

## Estrutura principal

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
  ResearchLines.tsx
  LeadForm.tsx
  Footer.tsx
data/
  site.ts
public/brand/
  nev-logo-horizontal.png
  nev-symbol.png
  nev-brand-board.png
cloudbuild.yaml
Dockerfile
```

## Rodar localmente

```bash
npm install
npm run dev
```

Abra:

```txt
http://localhost:3000
```

## Build de producao

```bash
npm run build
npm start
```

## Deploy manual no Cloud Run

Projeto Google Cloud:

```txt
avance-portal-prod-br
```

Servico:

```txt
nev-projeto
```

Regiao:

```txt
southamerica-east1
```

Comandos:

```bash
gcloud config set project avance-portal-prod-br

gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com

gcloud run deploy nev-projeto \
  --source . \
  --region southamerica-east1 \
  --allow-unauthenticated
```

## Deploy automatico via Cloud Build

O repositorio contem o arquivo:

```txt
cloudbuild.yaml
```

Ele faz:

1. build da imagem Docker;
2. push para Artifact Registry;
3. deploy no Cloud Run;
4. publicacao na porta 8080.

Guia completo:

```txt
docs/cloud-run-trigger.md
```

Resumo para ativar:

1. Abrir Google Cloud Console.
2. Ir em Cloud Build > Triggers.
3. Criar trigger conectado ao GitHub.
4. Selecionar repositorio `WillianVagner123/NEVProjeto`.
5. Evento: push na branch `main`.
6. Arquivo de configuracao: `cloudbuild.yaml`.
7. Salvar.

Depois disso, cada `git push` na branch `main` atualiza o Cloud Run automaticamente.

## Criar Artifact Registry

```bash
gcloud artifacts repositories create nev-projeto \
  --repository-format=docker \
  --location=southamerica-east1 \
  --description="Imagens Docker do site NEV"
```

Se o repositorio ja existir, ignore o erro.

## Permissoes para o Cloud Build

```bash
PROJECT_NUMBER=$(gcloud projects describe avance-portal-prod-br --format='value(projectNumber)')

gcloud projects add-iam-policy-binding avance-portal-prod-br \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding avance-portal-prod-br \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/artifactregistry.writer"

gcloud iam service-accounts add-iam-policy-binding \
  ${PROJECT_NUMBER}-compute@developer.gserviceaccount.com \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser" \
  --project=avance-portal-prod-br
```

## Formulario

O formulario de contato envia mensagens por FormSubmit para:

```txt
wvagners@gmail.com
```

No primeiro envio, o FormSubmit pode solicitar confirmacao por e-mail. Depois da confirmacao, os envios passam normalmente.

## Identidade visual

Cores:

- Azul petroleo: `#1F4E5F`
- Verde salvia: `#8DA58B`
- Bege areia: `#F4F0E6`
- Grafite: `#2D2D2D`
- Dourado fosco: `#B89B5E`

Fontes:

- Cormorant Garamond para titulos
- Montserrat para interface e textos

## Cuidados institucionais

Antes de divulgar oficialmente em canais institucionais, revisar:

- autorizacao de uso do nome UnB;
- dados do DGP/CNPq;
- textos sobre GLP-1;
- politica de privacidade/LGPD;
- e-mail oficial de contato;
- links de Lattes, ORCID e redes sociais;
- aprovacao por coordenadores/orientadores.

## Conteudo sensivel

Conteudos sobre GLP-1, obesidade, cirurgia bariatrica e intervencoes dietoterapicas tem finalidade educacional e cientifica. O site nao substitui avaliacao, diagnostico, prescricao ou tratamento individualizado por profissional habilitado.
