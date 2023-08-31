# Sistema de Registro de Pontos e Landing Page

Este é um projeto que consiste em um Sistema de Registro de Pontos juntamente com uma Landing Page para divulgação e comercialização do sistema. O sistema permite que os usuários registrem seus pontos e horários de trabalho, enquanto a Landing Page promove os recursos e benefícios do sistema.

## Tecnologias Utilizadas

- [React](https://reactjs.org/): Biblioteca JavaScript para construção de interfaces de usuário.
- [Vite](https://vitejs.dev/): Build tool rápida para projetos modernos de JavaScript.
- [TypeScript](https://www.typescriptlang.org/): Superset de JavaScript que adiciona tipagem estática.
- [Chakra UI](https://chakra-ui.com/): Biblioteca de componentes de interface de usuário para React.
- [GraphQL](https://graphql.org/): Linguagem de consulta para APIs.
- [Apollo Client](https://www.apollographql.com/docs/react/): Biblioteca para gerenciamento de estado e consumo de APIs GraphQL.

## Descrição

Este projeto consiste em dois produtos:

### Sistema de Registro de Pontos

O Sistema de Registro de Pontos permite que os usuários registrem seus pontos. Utiliza a tecnologia GraphQL e Apollo Client para efetuar as requisições e gerenciar o estado da aplicação. A interface é construída utilizando componentes do Chakra UI.

### Landing Page

A Landing Page tem como objetivo promover e comercializar o sistema de registro de pontos. Ela apresenta os recursos, benefícios e diferenciais do sistema para atrair potenciais clientes. Também é desenvolvida com componentes do Chakra UI para uma aparência moderna e atraente.

## Instruções de Uso

1. Clone este repositório para o seu ambiente local.
2. Navegue para a pasta do projeto: `cd nome-do-seu-projeto`.
3. Instale as dependências utilizando o npm ou yarn:
   ```sh
   npm install
   # ou
   yarn install
   ```
4. Execute o projeto em modo de desenvolvimento:
   ```sh
   npm run dev
   # ou
   yarn dev
   ```
5. O Sistema de Registro de Pontos e a Landing Page serão abertos no seu navegador padrão.

## Estrutura de Pastas

- `src`: Contém o código-fonte do projeto.
  - `components`: Contém os componentes reutilizáveis.
  - `pages`: Contém as páginas do sistema e da landing page.
  - `graphql`: Contém as definições de consultas e mutações GraphQL.
  - `App.tsx`: Landing Page.

| Página            | Descrição                                                                                   | Acesso          |
|-------------------|---------------------------------------------------------------------------------------------|-----------------|
| `/`               | Landing Page promovendo o sistema de Registro de Pontos.                                    | Público         |
| `/login`          | Página de login para administradores e colaboradores.                                     | Público         |
| `/dashboard`      | Listagem de Pontos, visualização de todos os colaboradores.                                | Admin (ADMIN)  |
| `/meus-registros` | Listagem de Pontos, visualização dos pontos do colaborador e possibilidade de bater ponto. | Colaborador (USER) |
