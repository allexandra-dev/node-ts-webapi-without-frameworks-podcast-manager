# Podcast Manager

Um aplicativo estilo Netflix para centralizar diferentes episódios de podcasts em vídeo, organizados por categorias.

## 📋 Sobre o Projeto

O Podcast Manager é uma aplicação Node.js que permite listar e filtrar episódios de podcasts separados por categorias. O projeto foi desenvolvido com TypeScript para garantir type safety e melhor manutenibilidade.

## ✨ Funcionalidades

- 📺 Listar todos os episódios de podcasts
- 🔍 Filtrar episódios por nome do podcast
- 📂 Organização de episódios em categorias (saúde, bodybuilder, mentalidade, humor)
- 🎬 Integração com vídeos do YouTube

## 🛠️ Tecnologias Utilizadas

- [**Node.js**](https://nodejs.org/) - Ambiente de execução JavaScript
- [**TypeScript**](https://www.typescriptlang.org/) - Linguagem tipada baseada em JavaScript
- [**tsx**](https://github.com/esbuild-kit/tsx) - Executor de TypeScript para Node.js
- [**tsup**](https://tsup.egoist.dev/) - Bundler TypeScript rápido e simples
- [**@types/node**](https://www.npmjs.com/package/@types/node) - Definições de tipos para Node.js

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas (Layered Architecture):

```
Client (port: 333)
    ↓ request
Node.js Server
    ↓
Podcast Controller
    ↓
Services
├── List Episodes
└── Filter Episodes
    ↓
Repository
└── podcasts.json (Base de dados local)
    ↑ response
Client
```

**Fluxo de dados:**
1. **Client** envia requisição HTTP para o servidor na porta 333
2. **Server** recebe a requisição e encaminha para o `Podcast Controller`
3. **Controller** identifica qual serviço executar (listar ou filtrar episódios)
4. **Services** processam a lógica de negócio e consultam o repositório
5. **Repository** acessa a base de dados local (`podcasts.json`)
6. Resposta retorna ao client através do servidor

##  Endpoints da API

### Listar Episódios

```
GET /episodes
```

**Response:**
```json
[
  {
    "podcastName": "flow",
    "episode": "ANSU FATI - Flow #618",
    "videoId": "ciAt3vwsdj4",
    "cover": "https://i.ytimg.com/vi/ciAt3vwsdj4/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=ciAt3vwsdj4",
    "categories": ["saúde", "humor", "bodybuilder"]
  }
]
```

### Filtrar por Nome de Podcast

```
GET /episodes?podcastName={name}
```

**Response:** Lista de episódios do podcast especificado

## 📁 Estrutura do Projeto

```
src/
├── app.ts                    # Aplicação principal com rotas
├── server.ts                 # Configuração do servidor HTTP
├── controllers/
│   └── podcasts-controller.ts  # Controladores de podcasts
├── models/
│   ├── podcast-models.ts       # Modelo de podcast
│   └── podcast-transfer-model.ts # Modelo de transferência
├── repositories/
│   ├── podcast-repository.ts   # Acesso aos dados
│   └── podcasts.json           # Base de dados local
├── routes/
│   └── routes.ts               # Definição de rotas
├── services/
│   ├── list-episodes-service.ts  # Serviço de listagem
│   └── filter-episodes-service.ts # Serviço de filtro
└── utils/
    ├── content-type.ts         # Tipos de conteúdo
    ├── http-methods.ts         # Métodos HTTP
    └── status-code.ts          # Códigos de status HTTP
```

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```
PORT=3000
NODE_ENV=development
```

## �‍🎓 Créditos

Este projeto foi desenvolvido em conjunto com o professor **Felipão**, durante o curso de **Node.js da DIO (Digital Innovation One)**, como parte do processo de aprendizagem e do desafio prático proposto nas aulas.

## 📝 Licença

ISC

---

**Desenvolvido usando TypeScript**
