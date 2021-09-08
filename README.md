# ServerTeste
# CONTELE

Desenvolvido por Hernani Amancio de Almeida


## Executar projeto

Para executar o projeto, sera necessario instalar os seguintes programas em seu computador:

- Nodejs
- Docker
- Docker Compose
- Postbird
- yarn

## Desenvolvimento

Para iniciar o desenvolvimento e necessario clonar o projeto do Github num diretorio de sua preferencia com os seguintes comandos:


- `cd "diretorio de sua preferencia"`
- `git clone https://github.com/2020nani/serverC.git`
- `cd serverC`


Apos clonar o projeto em seu computador e necessario instalar as dependencias que o projeto utiliza com o seguinte comando:


- `npm install` ou `yarn`

Crie um arquivo .env conforme o arquivo .env.example e preencha com as variaveis de ambiente para acessar seu banco de dados

- DB_HOST=localhost
- DB_USER= nome de usuario do banco de dados, no docker o nome e - postgres por default
- DB_PASS= senha para acessar banco de dados
- DB_NAME= nome do database que sera criado
- APP_SECRET=66dc49adcfb9aefb042c8d441c3653df

Crie um container docker para rodar uma imagem postgres para o banco de dados com o comando

- `docker-compose up`


- Acesse seu container com o Postbird que pedira as variaveis contidas no arquivo .env
- username = DB_USER
- password = DB_PASS
- porta = 5432


Rode o programa em seu computador na porta 3333 com os seguintes comando


- `yarn sequelize db:migrate` para criar as tabelas no banco de dados postgres
- `npm run dev` ou
- `yarn dev`

## Rodar testes TDD com jest

Rode o seguinte comando
- `npm run test` ou
`yarn test`
