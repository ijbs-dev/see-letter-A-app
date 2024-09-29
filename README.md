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

![Tela Inicial](https://drive.google.com/uc?export=view&id=19oWzVCAEwNGPWl9Y-B4_2EOEuNQh8Y3-)

---

### Verificação de uma String com a Letra 'A'

Neste exemplo, o usuário inseriu a string **"Abacaxi"**, e o sistema retornou que a letra 'A' aparece **3** vezes.

![Verificação de String](https://drive.google.com/uc?export=view&id=1Cu-Fz7QSUlG5_7wEkqDykIyKLvXGisph)

---

### Verificação de uma String sem a Letra 'A'

Aqui, o usuário inseriu a string **"HomeOffice"**, e o sistema retornou que a letra 'A' aparece **0** vezes.

![Verificação sem A](https://drive.google.com/uc?export=view&id=1jG1-UOIa8TiVdm0eaM7-LAkJuFpnQHFS)

