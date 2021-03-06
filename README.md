﻿# MyTest
Teste feito para a entrevista e por mais simples que seja o projeto eu tentarei implementar o máximo de conhecimento que eu conserguisse. Independente do resultado da entrevista, isso servirá para me pontuar de minhas habilidades e servirá para uma avaliação futura de crescimento.

Não vou nomear empresa, ou o conteúdo do projeto, para que outros desenvolvedores não encontrem e assim façam seus próprios códigos.

## Fazendo funcionar:

##### Realizar Testes
```
npm test
```

##### Iniciar Servidor
```
npm start
```

###### Coisas úteis
- **Porta:** 80
- **Frontend:** localhost/
- **Banco de dados:** pasta db_sql

> _obs.: O sistema foi feito tudo no windows, se for testar no linux precisa alterar as informações do NODE_ENV no package.json se não ele pode não funcionar como deveria._


## Parâmetros:
- **Backend:** Node.js (Express / ESLint)
- **Frontend:** Vue.js (Axios)
- **Editor:** Visual Studio Code
- **Banco de dados (SGBD):** MySQL
- **Controlador de versão:** Git / Github
- **Ferramenta para testes:** Jest
- **Padrões de código:** [Node Best Practices](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.brazilian-portuguese.md#1-pr%C3%A1ticas-de-estrutura-de-projeto)


## Andamento:

#### Backend:
- [X] Instalar dependências. ( NPM, não tinha o yarn no PC )
- [X] Definir estrutura interna do projeto. ( MVC[P] )
- [X] Modelar objetos e tabelas.
- [X] Desenvolver funções básicas. ( Regras de negócio )
- [X] Desenvolver conexão. (express)
- [X] Integrar com um banco de dados. (Mysql)
- [X] Configurar testes. (JEST + SUPERTEST)
- [X] Tratamento de erros. (registrar erros no log e apresentar uma mensagem amigável)


#### Frontend:
- [X] Configurar arquivos estáticos.
- [X] Desenvolver estrutura (HTML + CSS).
- [X] Desenvolver controladores. (Vue / Axios)
- [X] Melhorar a intuitividade com melhoria de UI.


## Comentários:
> Vou comentar o andamento para identificar meus próprios padrões de desenvolvimento.

> Vou usar o MySQL/MariaDB pois não tenho acesso à outros bancos neste momento e com o campo JSON eu consigo mesclar o uso de tabelas relacionais com objetos mais dinâmicos.

> Configurei o banco de dados e coloquei um limitador lá que eu nem conhecia desta forma, que limita Origem-Destino serem únicos.

> Criei algumas classes e defini como será a estrutura do projeto.

> Finalizei a parte de cálculo.

> Estou fazendo mais do que o planejado, com menos tempo do que o planejado, vamos ver se dá tempo...

> O uso e configuração do Jest é bem mais simples do que o mocha.

> Por conta do vestibular eu vou fazer o front-end da forma mais rápida possível.

> Não tive tempo para mapear os endpoints.

> Finalizado! Tive problemas com tempo mas saiu hoje (domingo) como planejado!
