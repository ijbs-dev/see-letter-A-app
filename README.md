# Verificador de Letras 'A'

Este projeto é um verificador simples que conta quantas vezes a letra 'A' (ou 'a') aparece em uma string fornecida pelo usuário. Ele foi desenvolvido usando **Angular** para o frontend e **NestJS** para o backend.

## Funcionalidades

- **Frontend Angular**: Interface de usuário para entrada de texto e exibição de resultados.
- **Backend NestJS**: Processamento e resposta de dados.
- O usuário pode verificar quantas vezes a letra 'A' aparece na string fornecida.
- Verificação é realizada ao pressionar o botão **Verificar** ou ao pressionar a tecla **Enter** no campo de texto.

---

## Estrutura do Projeto

A estrutura do projeto foi organizada para separar o frontend e o backend da seguinte forma:

```
/ver_letra_a_nestjs
│
├── /src                     # Código fonte do projeto
│   ├── /app
│   │   ├── app.component.ts  # Lógica principal do componente Angular
│   │   ├── app.component.html # Template HTML para a interface do usuário
│   │   ├── app.module.ts     # Módulo principal do Angular
│   │   ├── app.controller.ts # Controlador do NestJS
│   │   ├── app.service.ts    # Serviço do NestJS
│   ├── /public               # Arquivos públicos estáticos
│   ├── angular.json          # Configurações do Angular CLI
│   ├── package.json          # Dependências e scripts do projeto
│   ├── tsconfig.json         # Configurações do TypeScript
│   ├── server.ts             # Arquivo de inicialização do servidor
│   └── main.server.ts        # Configurações do servidor Angular Universal
├── /node_modules             # Dependências instaladas via npm
├── /dist                     # Saída dos arquivos compilados
├── /test                     # Testes do NestJS
├── .gitignore                # Arquivos e diretórios ignorados pelo Git
└── README.md                 # Instruções do projeto
```

---

## Instalação

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** (instalado com Node.js)
- **Angular CLI** (caso ainda não esteja instalado, execute `npm install -g @angular/cli`)
- **NestJS CLI** (caso ainda não esteja instalado, execute `npm install -g @nestjs/cli`)

### Clonando o Repositório

Para clonar este projeto do GitHub e navegar até o diretório do projeto:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd ver_letra_a_nestjs
```

### Instalando as Dependências

Navegue até o diretório do projeto e instale as dependências tanto do **backend** quanto do **frontend**:

```bash
npm install
```

---

## Executando o Projeto

### Executando o Backend (NestJS)

1. Navegue até o diretório raiz do backend e execute:

```bash
node server.ts
```

2. O servidor backend será iniciado por padrão em `http://localhost:3000`.

### Executando o Frontend (Angular)

1. Navegue até o diretório do frontend:

```bash
ng serve
```

2. O frontend estará acessível por padrão em `http://localhost:4200`.

---

## Exemplo de Uso

### Tela Inicial

Esta é a tela inicial do projeto, onde o campo de entrada está vazio e nenhuma verificação foi realizada.

![Tela Inicial](https://drive.google.com/uc?export=view&id=1kkJtrXTX8D6qqe9yPBoCQivzwJV66LbU)

---

### Verificação de uma String com a Letra 'A'

Neste exemplo, o usuário inseriu a string **"Abacaxi"**, e o sistema retornou que a letra 'A' aparece **3** vezes.

![Verificação de String](https://drive.google.com/uc?export=view&id=1dy09NaqRpkreBRLUrhIFs-ABi39uOk6D)

---

### Verificação de uma String sem a Letra 'A'

Aqui, o usuário inseriu a string **"Melancia"**, e o sistema retornou que a letra 'A' aparece **1** vez.

![Verificação sem A](https://drive.google.com/uc?export=view&id=1IOJqKiq1Mm2TtE9XtqiPJJM7HygqKL37)

---

## Estrutura do `.gitignore`

Aqui está o `.gitignore` atualizado para o projeto:

```plaintext
# Compiled output
/dist
/tmp
/out-tsc
/bazel-out

# Angular cache
.angular/cache

# Node modules and log files
/node_modules
npm-debug.log
yarn-error.log
.pnpm-debug.log
logs/
*.log
*.log.*

# Package managers lockfiles
package-lock.json
yarn.lock
.pnpm-lock.yaml

# Logs
yarn-debug.log*
.pnpm-debug.log*

# TypeScript cache and build info
*.tsbuildinfo

# Test coverage directories
/coverage
/jest-coverage
/nyc-output

# IDEs and editors
.idea/
.vscode/*
*.sublime-workspace
.vscode/
/*.launch
.settings/
*.sublime-project
.c9/
*.vs

# System files
.DS_Store
Thumbs.db
*.lnk

# Temporary folders created by build tools
/.temp/
/.sass-cache/
/connect.lock
/libpeerconnection.log
testem.log
/typings

# Production environment variables
.env
.env.local
.env.production
.env.production.local
.env.test
.env.test.local

# Visual Studio Code specific settings
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.history/*

# Backend/Server-side specific
/server/dist
/server/build
/server/.env
/server/*.env

# Storybook static files
/out-storybook-static

# Docker-related files
docker-compose.override.yml
.docker

# Windows system files
*.lnk
