# Deploy automatico no Cloud Run via Cloud Build

Este guia conecta o repositorio GitHub `WillianVagner123/NEVProjeto` ao Cloud Build para que cada push na branch `main` gere build e deploy automatico no Cloud Run.

## Servico publicado

URL atual do MVP:

```txt
https://nev-projeto-760280164025.southamerica-east1.run.app/
```

## Projeto Google Cloud

```txt
avance-portal-prod-br
```

Regiao recomendada:

```txt
southamerica-east1
```

Servico Cloud Run:

```txt
nev-projeto
```

## 1. Ativar APIs

No Cloud Shell:

```bash
gcloud config set project avance-portal-prod-br

gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com
```

## 2. Criar repositorio Artifact Registry

```bash
gcloud artifacts repositories create nev-projeto \
  --repository-format=docker \
  --location=southamerica-east1 \
  --description="Imagens Docker do site NEV"
```

Se o repositorio ja existir, ignore o erro.

## 3. Dar permissoes ao Cloud Build

```bash
PROJECT_NUMBER=$(gcloud projects describe avance-portal-prod-br --format='value(projectNumber)')

# Permite deploy no Cloud Run
gcloud projects add-iam-policy-binding avance-portal-prod-br \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/run.admin"

# Permite enviar imagem ao Artifact Registry
gcloud projects add-iam-policy-binding avance-portal-prod-br \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/artifactregistry.writer"

# Permite que o Cloud Build use a service account padrao do runtime
gcloud iam service-accounts add-iam-policy-binding \
  ${PROJECT_NUMBER}-compute@developer.gserviceaccount.com \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser" \
  --project=avance-portal-prod-br
```

## 4. Criar o trigger pelo console

1. Abra o Google Cloud Console.
2. Va em Cloud Build > Triggers.
3. Clique em Create trigger.
4. Escolha GitHub como fonte.
5. Conecte o repositorio `WillianVagner123/NEVProjeto`.
6. Configure:
   - Event: Push to a branch
   - Branch: `^main$`
   - Configuration: Cloud Build configuration file
   - Location: Repository
   - Cloud Build file: `cloudbuild.yaml`
7. Salve.

## 5. Testar

Faca qualquer commit na branch `main`:

```bash
git add .
git commit -m "Trigger deploy"
git push
```

O Cloud Build deve iniciar automaticamente. Ao terminar, o Cloud Run sera atualizado.

## 6. Deploy manual alternativo

Caso precise publicar manualmente:

```bash
gcloud run deploy nev-projeto \
  --source . \
  --region southamerica-east1 \
  --allow-unauthenticated
```

## Observacao

O arquivo `cloudbuild.yaml` ja esta na raiz do repositorio e define:

- build da imagem Docker;
- push para Artifact Registry;
- deploy automatico no Cloud Run;
- porta 8080.
