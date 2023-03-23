## Documentação do Projeto Desafio Fullstack

Este documento tem como objetivo orientar a instalação e configuração dos projetos back-end e front-end do Desafio Fullstack.

## Pré-requisitos

- Git
- Node.js
- Yarn
  -PostgreSQL

## Clonando os repositórios

Primeiramente, clone os repositórios do back-end e front-end para sua máquina local utilizando os seguintes comandos:

## Back-end

git clone git@github.com:arimoncaojr/desafio-fullstack-arimoncaojr.git

## Front-end

git clone git@github.com:arimoncaojr/desafio-full-stack-front-end-arimoncaojr.git

## Instalando as dependências

Navegue até a pasta de cada repositório e instale as dependências utilizando o comando yarn:

cd desafio-fullstack-arimoncaojr
yarn

cd ../desafio-full-stack-front-end-arimoncaojr
yarn

## Configurando o banco de dados PostgreSQL

Crie um banco de dados PostgreSQL utilizando o comando CREATE DATABASE:
CREATE DATABASE nome_do_banco;

## Configurando o arquivo .env

Na pasta do projeto back-end, crie um arquivo .env baseado no arquivo .env.example. Preencha as informações necessárias, como as informações do banco de dados criado anteriormente.

## Executando migrações no banco de dados

Navegue até a pasta do repositório back-end e rode as migrações:
cd desafio-fullstack-arimoncaojr
yarn typeorm migration:run -d src/data-source

## Executando os projetos

Inicie o projeto back-end utilizando o comando yarn dev:
cd desafio-fullstack-arimoncaojr
yarn dev

## Em seguida, inicie o projeto front-end utilizando o comando yarn start:

cd ../desafio-full-stack-front-end-arimoncaojr
yarn start

## Após seguir todas as etapas, o projeto back-end estará rodando na porta configurada no arquivo .env e o projeto front-end estará rodando na porta padrão 3000(caso a porta configurada no arquivo .env seja a 3000, o projeto front-end irá automaticamente para a porta 3001). Agora você pode começar a explorar e utilizar os projetos Desafio Fullstack Arimoncaojr.

## Documentação

Link para documentação do projeto: https://sassy-jay-fe8.notion.site/Documenta-o-da-API-do-Desafio-Fullstack-578547af61ce42f1ac47a4b8db15aeaa
