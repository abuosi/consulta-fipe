# ConsultaFipe

Projeto teste desenvolvido em Angular 9 e Angular Material com o objetivo de estudo.

## Pré-Requisitos

* NodeJS instalado e configurado. Para instalar e configurar, basta seguir a documentação oficial no site https://nodejs.org
* Angular instalado e configurador. Para instalar e configurar, basta seguir a documentação oficial no site https://cli.angular.io/

## Como Executar

Após clonar o repositório, entre na pasta do projeto e execute o comando abaixo, para baixar todas as dependencias do projeto.

``` bash
npm install
```
Aṕos baixar todas dependencias do projeto, basta executar o comando abaixo para iniciar a execução do projeto.

``` bash
ng serve
```
O comando vai executar a aplicação localmente, e você poderá acessar a aplicação através da URL http://localhost:4200

## Como distribuir a aplicação

Para distribuir a aplicação em ambiente compartilhado, basta executar o comando abaxio dentro do diretório do projeto.

``` bash
ng build --prod
```

Após a execução do comando acima será criado a pasta **./dist/nome-do-projeto** dentro da pasta do projeto. Nesta pasta tem os binários do projeto, que devem ser copiados dentro do HTTP server de sua preferência.

### Como empactar a aplicação em um container (Docker)

Para colocar a aplicação em um container, basta executar o comando abaixo no diretório raiz do projeto.

``` bash
docker build -t <nome-da-imagem>:<tag-da-imagem> .
```

exemplo

``` bash
docker build -t consulta-fipe:1.0 .
```

O comando irá consumir o arquivo ***Dockerfile*** para gerar a imagem do container. 

### Como executar a imagem do container criado

Para executar a aplicação em container, basta executar o comando abaixo.

``` bash
docker run --name <nome-do-container> -p <porta-externa>:<porta-do-container> <nome-da-imagem>:<tag-da-imagem>
```

exemplo

``` bash
docker run --name consulta-fipe -p 8080:80 consulta-fipe:1.0
```
