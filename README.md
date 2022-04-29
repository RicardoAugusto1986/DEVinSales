# DEVinSales API
## Projeto de Avaliação 3º modulo  do curso DEVinHouse SENAI-SC



- [Tecnologias](#tech)
- [Como Utilizar](#settings)

<a id="tech"></a>

Projeto criado para testar os conhecimentos em NodeJS com Express, Sequelize, Instancias na AWS, Docker, PM2 e Nginx. Criando API em CLoud, com 
## Tecnologias

O projeto desenvolvido utiliza as seguintes tecnologias:
- [NodeJS](https://nodejs.org/en/) 
- [Express](https://expressjs.com/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/)
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)
- [Instancia AWS](https://aws.amazon.com/pt/ec2/)
- [Docker](https://docs.docker.com/desktop/windows/troubleshoot/#virtualization)
- [PM2](https://pm2.keymetrics.io/)
- [Nginx](https://pm2.keymetrics.io/)

<a id="settings"></a>

# Como Utilizar

  -  São 2 url de teste dos endpoints.


```bash
# De produção 
$ http://18.230.196.141/api/v1/docs/#/ (link swagger)
$ http://18.230.196.141/api/v1/users 
```

```bash
# De stanging 
$ http://52.67.214.71/api/v1/docs/#/ (link swagger)
$ http://52.67.214.71/api/v1/users  
```
## Usuario teste de autenticação

{
  "email": "Bertramvictor123@gmail.com",
  "password": "VictorD12."
}
## Feature em stangig para testes

http:GET
$ http://52.67.214.71/api/v1/usersales (link insonmnia)
