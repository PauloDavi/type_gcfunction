<h1 align="center">Type_GCF</h1>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/PauloDavi/type_gcfunction?color=gree">
  <img alt="Linguagem principal" src="https://img.shields.io/github/languages/top/PauloDavi/type_gcfunction">
  <img alt="License" src="https://img.shields.io/github/license/PauloDavi/type_gcfunction">
  <img alt="Stargazers" src="https://img.shields.io/github/stars/PauloDavi/type_gcfunction?style=social">
</p>

<p align="center">
  <a href="#setup">Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#start-e-deploying">Start e Deploying</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#modificações">Modificações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-funciona">Como funciona</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#créditos">Créditos</a>
</p>

# :cloud: Google Cloud Functions modelo de projeto Typescript

Modelo de projeto com typescript para deploy no Google Cloud Function.

## Setup

Primeiro você precisa baixar e configurar o Google Cloud SDK. Crie um projeto e ative a API, instale o Google Cloud SDK e
autorize seu IP. Você pode seguir a seção "Antes de começar" do link [Guia de início rápido](https://cloud.google.com/functions/docs/quickstart).

Então clone esse repositório e rode o seguinte comando:

`git clone git@github.com:golergka/gcf-typescript-template && cd gcf-typescript-template && yarn`

## Start e Deploying

Este projeto é configurado para uma única função (`helloWorld`), que você pode testar localmente ou implantar na nuvem.

Para testar localmente, use o script **start**:

`yarn start`

Isso executará o compilador Typescript e a estrutura de funções no modo de observação, para que você possa acessar sua função no localhost. Ele será reconstruído quando você modificar os arquivos Typescript.

Para implantar em seu projeto no GCF, use o script **deploy**:

`yarn deploy`

## Modificações

Você provavelmente vai querer mudar o nome da função de `helloWorld` para algo mais sensato. O novo nome da função deve ser o mesmo em:

1. `index.ts`, na exportação
2. **start** e **deploy** scripts no arquivo `package.json`

Se você precisar de suporte a mais de uma função em um único repositório, precisará criar scripts para teste e implantação local por conta própria.

## Como funciona

`tsconfig.json` configura o compilador Typescript para traspilar a pasta` src` e envia os arquivos Javascript compilados para a pasta `dist`. `package.json` especifica o arquivo `dist/index.js` como um ponto de entrada para o aplicativo. A pasta `dist` é adicionada ao arquivo` .gitignore`, uma vez que esses arquivos js não precisão ser mandados para o github. No entanto, um arquivo `.gcloudignore` (que funciona da mesma maneira que .gitignore, mas para a ferramenta gcloud) não inclui a pasta `dist` na lista de ignorados, porque é necessário fazer upload desses arquivos js e usá-los para executar seu projeto.

Para teste local, `functions-framework` e `tsc-watch` são usados.

### Créditos

Esse projeto é baseado em, [gcf-typescript-template](https://github.com/golergka/gcf-typescript-template).
