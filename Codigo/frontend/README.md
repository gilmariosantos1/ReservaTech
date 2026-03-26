# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Como executar o projeto FrontEnd

## Arquitetura Geral do Projeto

Estrutura de pastas (frontend, backend)
Tecnologias envolvidas (React, Vite, Express, Sequelize, SQLite)
Fluxo Front-end (React + Vite)

Como o formulário de Colaborador funciona
Estados do React (useState)
Captura de dados do usuário
Validação básica (opcional no frontend)
Integração com o serviço de API
Camada de Serviços (API Client)

Como o ColaboradorService.js e api.js funcionam
Requisição HTTP POST para o backend
Tratamento de erros e respostas
Fluxo Back-end (Express + Middleware)

Roteamento: como a rota /colaborador é mapeada
Middleware de validação (express-validator)
Controllers: lógica de negócio
Camada de Dados (Sequelize + SQLite)

Modelos Sequelize: estrutura Colaborador.js
Sincronização automática com o banco
Persistência de dados
Fluxo Completo (do clique ao banco)

Passo a passo: clique no botão → validação → API call → backend processa → banco salva → resposta retorna → frontend redireciona




🚦 Passo a passo de instalação (frontend + backend)
1) Pré-requisitos
Node.js (recomendado 18+)
npm (vem junto com Node.js)
Git (opcional)
SQLite (não obrigatório se a app cria o arquivo automaticamente, mas ajuda testar manual)
2) Frontend
Abra terminal no diretório do frontend:

cd /home/aula-senac/Downloads/ReservaTech-main/Codigo/frontend
Instale dependências:

npm install
(Opcional) verifique lint:

npm run lint
Rode servidor de desenvolvimento:

npm run dev
Abra no navegador:

http://localhost:5173 (ou porta indicada pelo Vite)
3) Backend
Abra terminal no diretório backend:

cd /home/aula-senac/Downloads/ReservaTech-main/Codigo/backend
Instale dependências:

npm install
Estrutura do config:

database.js deve ter sqlite e storage correto (./database.sqlite)
Se não tiver, crie/ajuste
Criar/atualizar DB via schema (opcional manual):

sqlite3 database.sqlite < database/schema.sql
Start:

npm start
Deve mostrar sucessos:
Conectado com sucesso!
Banco de dados sincronizado.
Servidor rodando na porta 3000
4) Testar o fluxo
Backend rodando → http://localhost:3000/health

retorna { "status": "ok" }
Frontend rodando → tela inicial

Vá em Cadastrar colaborador e envie

Backend deve receber POST em /colaborador e persistir no database.sqlite

5) Possível ciclo de correção
Se npm start ficar com erros, copie o log aqui
Se front não conecta, verifique URL do serviço (api.js)
Se rota /colaborador 404: checar app.js e routes montadas
🚀 Dica final
Roteiro rápido:
backend primeiro
depois frontend
testar Health + POST via Insomnia/postman antes do formulário
Se quiser, gero também um .md com comandos já prontos + insights sobre fluxo (front->api->db).

