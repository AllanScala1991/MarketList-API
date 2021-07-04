# API do aplicativo MarketList

## Como executar pela primeira vez :
    - Ao clonar o projeto, execute no terminal "npm install",
    para baixar todas as dependecias.

    - Depois de tudo baixado, acesse a pasta raiz do projeto
    e execute "node server.js", se receber a mensagem "server
    is running" no seu terminal, está tudo certo e o servidor
    está rodando corretamente.

## ROTAS :
    - Todas as rotas se encontram na pasta "Controllers", são
    elas:
        - /login (POST) -> Para realizar login.
        - /user (POST) -> Para criar um usuário.
        - /list (POST) -> Para criar uma nova lista de compras.
        - /list (GET) -> Para receber todas as listas criadas.
        - /list (DELETE) -> Para deletar uma lista.
        - /items (POST) -> Para pegar todos os items de uma lista.
        - /item/filter (POST) -> Para buscar um item pelo nome.
        - /item (POST) -> Para registrar um novo item.
        - /item (PATCH) ->  Para editar um item da lista.
        - /item (DELETE) -> Para deletar um item da lista.

## BANCO DE DADOS :
    - O banco de dados utilizado foi o Sqlite3 em conjunto ao
    ORM Sequelize.

## Observações :
    API desenvolvida especificamente para trabalhar em conjunto com o 
    aplicativo MarketList, nem todas as rotas foram utilizadas, visto
    que o objetivo era apenas para estudo da integração do React Native
    com uma API Node js.