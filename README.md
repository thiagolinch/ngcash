<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Instalação</a>
<a href="#-projeto">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />
</p>

# 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- DayJs
- uuid
- Tsyringe
- Jsonwebtoken
- Bcryptjs
- JavaScript
- NodeJS
- TypeOrm
- Express
- Yarn
- PostrgresSQL

# 💻 Projeto

Projeto de backend de um sistema que possibilite transferências internas entre usuários. Trazendo as funcionalidades de criação de usuário apenas com username e senha, onde automáticamente é criado uma conta para esse usuário. Essa conta já inicia com o saldo de R$100,00 e é a parte do sistema responsável por armazenar informação de saldo do usuário. Tendo criado sua conta no sistema o usuário terá permissão de enviar e receber dinheiro pelo aplicativo, poderá filtrar transações, que são todas armazenadas no banco de dados, e terá sempre acesso ao valor atualizado de seu saldo.

# 🔖 Instalação

* Ao receber o arquivo deste sistema é necessário rodar o comando:
$ yarn

* Criar o docker em sua máquina
$ docker build -t ngcash .

* Rodar o docker-compose para conexão com o banco de dados
$ docker-compose up
$ docker-compose start



# :pushpin: Rotas

### Users
* CREATE - localhost:3333/users
    * Parametros: username e password
* BALANCE - localhost:3333/users/balance
    * Parametros: token

### Autenticação
* CREATE - localhost:3333/sessions
    * Parametros: username e password

### Acount
NÃO TEM ROTA DE CRIAÇÃO POR FORA POIS APENAS DEVE SER POSSÍVEL TER UMA CONTA COM UM USUÁRIO.

### Transaction

* CASHOUT - localhost:3333//transactions
    * Parametros: username de quem vai receber, o valor a ser enviado e o token

* STATEMENT - localhost:3333//transactions/statement
    * Parametros: Apenas o token do user

* FILTER BY DATE (com ou sem tipificação de transação) localhost:3333//transactions/statement-date
    * Parametros: data desejada e se quiser adicionar o tipo de transação (cashOut ou cashIn).

---

Feito com ♥ by Thiago Linch :wave:
# NGCASH