# 🧭 Bússola — Hackathon

Solução para permanência e engajamento de estudantes no ensino superior EAD.

## Estrutura

```
hackathon/
├── ava-mock/       → Frontend (HTML/CSS/JS) — Tela do aluno + Dashboard gestor
└── backend/        → API REST (Node.js + Express + Google Cloud Datastore)
```

## Rodar o projeto

### 1. Backend

```bash
cd backend
npm install
npm run dev
```

> Requer `gcloud auth application-default login` ou emulador do Datastore.

API em: `http://localhost:3001`

### 2. Frontend

```bash
cd ava-mock
npx serve .
```

- AVA do Aluno: `http://localhost:3000`
- Painel do Gestor: `http://localhost:3000/gestor.html`

## Fluxo

```
Aluno acessa o AVA
  → Clica em "Bússola"
  → Responde 6 perguntas no modal
  → Respostas são enviadas ao backend (POST /api/diagnosticos)
  → Backend armazena em tempo real no Datastore
  → Aluno vê resultado simplificado (persona, pontos fortes, áreas)

Gestor acessa /gestor.html
  → Frontend consome GET /api/metricas e GET /api/diagnosticos/risco
  → Exibe KPIs, distribuição de personas, alunos em risco, ações sugeridas
  → Dados atualizados em tempo real conforme alunos respondem
```
