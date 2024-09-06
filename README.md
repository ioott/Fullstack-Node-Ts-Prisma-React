# Projeto de Gerenciamento de Eventos

Este projeto é uma aplicação fullstack para o gerenciamento de uma empresa de organização de eventos, utilizando Node.js e TypeScript no backend, Prisma como ORM, e React no frontend.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando o Projeto](#executando-o-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [API Endpoints](#api-endpoints)
- [Modelo de Dados](#modelo-de-dados)
- [Containerização](#containerização)
- [Testes](#testes)
- [Licença](#licença)

## Visão Geral

Este projeto visa automatizar o gerenciamento de eventos, permitindo a criação e organização de eventos personalizados com funcionalidades como gestão de buffets, serviços opcionais, pagamentos e controle de convidados.  
A aplicação oferece:
- Cadastro e gerenciamento de clientes e eventos.
- Seleção de buffets e serviços adicionais.
- Pagamento e controle de status dos eventos.

O backend fornece uma API RESTful para operações de dados, enquanto o frontend (em desenvolvimento) oferece uma interface para interação do usuário.

## Tecnologias Utilizadas

### Backend:
- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript
- **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto de JavaScript com tipagem estática
- **[Express.js](https://expressjs.com/)**: Framework para construção de APIs
- **[Prisma ORM](https://www.prisma.io/)**: Gerenciamento de banco de dados
- **[SQLite](https://www.sqlite.org/index.html)**: Banco de dados leve e fácil de configurar
- **[Jest](https://jestjs.io/)**: Framework de testes

### Frontend:
- **[React](https://reactjs.org/)**: Biblioteca para criação de interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto de JavaScript para o frontend
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: Biblioteca de testes

### Ferramentas de Desenvolvimento:
- **[ESLint](https://eslint.org/)**: Linter para garantir boas práticas no código
- **[Prettier](https://prettier.io/)**: Formatação automática de código
- **[Docker](https://www.docker.com/)**: Containerização da aplicação

## Estrutura do Projeto

O projeto é dividido em duas principais áreas: backend e frontend.

### Backend
```bash
backend/ 
├── config/ 
│ ├── Docker/ 
│ │ ├── Dockerfile 
│ │ └── docker-compose.yml 
| ├── code-style/ ... 
├── prisma/ 
│ │ ├── schema.prisma 
│ │ └── ...
├── src/ 
│ ├── api/
│ │ ├── app.ts
│ │ └── server.ts
│ ├── middlewares/
│ │ ├── errorHandler.ts
│ ├── servicesManagement/
│ │ ├── controllers/ ...
│ │ ├── interfaces/ ...
│ │ ├── middlewares/ ...
│ │ ├── models/ ...
│ │ ├── routes/ ...
│ │ └── services/ ...
├── package.json 
```
- `config/`: Arquivos de configuração, incluindo Docker e configurações de estilo de código.
- `prisma/`: Arquivos relacionados ao ORM Prisma, como o schema e as migrações.
- `src/`: Contém o código-fonte da aplicação, incluindo as rotas, controladores, modelos e middlewares.

### Frontend
Em construção.

## Pré-requisitos

- **Node.js**: versão 16.14 ou superior
- **npm** ou **yarn**: para gerenciamento de pacotes
- **Docker** e **Docker Compose**: para executar a aplicação em contêineres

## Instalação

1. Clone o repositório:
   ```
   git clone [URL_DO_REPOSITÓRIO]
   cd [NOME_DO_DIRETÓRIO]
   ```
2. Instale as dependências do backend:
   ```
   cd backend
   npm install
   ```

## Configuração

- Backend:
   - Crie um arquivo `.env` na pasta `backend` com as variáveis de ambiente necessárias, incluindo `DATABASE_URL` para o SQLite. Exemplo:
     ```
     DATABASE_URL="file:./dev.db"
     PORT=3000
     NODE_ENV=development
     ```
   - Execute as migrações do Prisma para configurar o banco de dados:
     ```
     npx prisma migrate dev
     ```

- Frontend:
   - Não requer configuração adicional neste estágio.

## Executando o Projeto

- Usando npm:
   - Inicie o servidor backend:
      ```
      cd backend
      npm run dev
      ```

- Usando Docker:
   - Na raiz do projeto, execute:
      ```
      docker-compose up --build
      ```
      Isso irá construir a imagem do Docker e iniciar o backend e o banco de dados.

## Scripts Disponíveis

### Backend:
- **npm run db: reset**: Reseta o banco de dados
- **npm run db: init**: Inicializa o banco de dados
- **npm run build**: Compila o TypeScript
- **npm start**: Inicia o servidor em produção
- **npm run dev**: Inicia o servidor em modo de desenvolvimento
- **npm run generate-schema**: Gera o schema do Prisma
- **npm test**: Executa os testes

### Frontend:
- **npm start**: Inicia o aplicativo em modo de desenvolvimento
- **npm run build**: Compila o aplicativo para produção
- **npm test**: Executa os testes
- **npm run eject**: Ejeta as configurações do Create React App

## API Endpoints

A API do backend possui os seguintes endpoints:

### Buffets:
- **GET /buffets**: Lista todos os buffets
- **GET /buffets/:id**: Retorna um buffet específico
- **POST /buffets**: Cria um novo buffet
- **PUT /buffets/:id**: Atualiza um buffet existente

### Durações:
- **GET /durations**: Lista todas as durações
- **GET /durations/:id**: Retorna uma duração específica
- **POST /durations**: Cria uma nova duração
- **PUT /durations/:id**: Atualiza uma duração existente

### Convidados:
- **GET /guestsqtt**: Lista todas as quantidades de convidados
- **GET /guestsqtt/:id**: Retorna uma quantidade específica
- **POST /guestsqtt**: Cria uma nova quantidade de convidados
- **PUT /guestsqtt/:id**: Atualiza uma quantidade de convidados existente

### Opcionais:
- **GET /optionals**: Lista todos os opcionais
- **GET /optionals/:id**: Retorna um opcional específico
- **POST /optionals**: Cria um novo opcional
- **PUT /optionals/:id**: Atualiza um opcional existente

### Tipos:
- **GET /types**: Lista todos os tipos
- **GET /types/:id**: Retorna um tipo específico
- **POST /types**: Cria um novo tipo
- **PUT /types/:id**: Atualiza um tipo existente

## Modelo de Dados

Os principais modelos de dados incluem:

- Client (Cliente)
- Buffet
- Duration (Duração)
- GuestsQtt (Quantidade de Convidados)
- Optional (Opcionais)
- Type (Tipos)
- Event (Evento)
- Payment (Pagamento)

Para mais detalhes, consulte o arquivo `schema.prisma`.

## Containerização

O projeto inclui suporte à containerização com Docker. Os arquivos `Dockerfile` e `docker-compose.yml` estão localizados na pasta `config/Docker/`.  
Certifique-se de configurar o arquivo `.env` corretamente para o uso do Docker Compose.

## Testes

Os testes estão sendo configurados com o Jest. O foco principal dos testes será:
- Validação dos endpoints da API.
- Testes unitários dos serviços e middlewares.

## Licença

Este projeto está licenciado sob a licença ISC.
