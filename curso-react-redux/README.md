# Curso React-Redux Udemy

* Comando para criar um projeto com base no npm: npm init -y
* Comando para gerar o bundle.js: ./node_modules/.bin/webpack
* Comando para rodar o servidor: npm run dev
* Comando para iniciar o mongodb: mongod

# Dependências do projeto todo-app (BACKEND/FRONTEND)
```
npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2
npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-plugin-react-html-attrs@2.0.0 babel-plugin-transform-object-rest-spread@6.22.0 babel-preset-react@6.22.0 babel-preset-es2015@6.22.0 

npm i --save-dev react@15.4.2 react-dom@15.4.2 react-router@3.0.2 axios@0.15.3
npm i --save-dev extract-text-webpack-plugin@1.0.1 style-loader@0.13.1 css-loader@0.26.1 file-loader@0.9.0
npm i --save-dev body-parser@1.15.2
npm i pm2 -g
npm i --save-dev bootstrap@3.3.7 font-awesome@4.7.0
npm i --save-dev react-redux@5.0.2 redux@3.6.0 redux-promise@0.5.3 redux-multi@0.1.12 redux-thunk@2.2.0
```

# Dependências do projeto my-money-app (BACKEND)
```
npm i --save express@4.14.0 mongoose@4.13.7 body-parser@1.15.2 lodash@4.17.4 mongoose-paginate@5.0.3 express-query-int@1.0.1 node-restful@0.2.5 pm2@2.1.5
npm i --save-dev nodemon@1.11.0
```

* localhost:3003/api/billingCycles?skip=0&limit=1

# Dependências do projeto my-money-app (FRONTEND)
* O template AdminLTE sofreu uma atualização pequena, mas que gerou impacto no nosso projeto, por isso é importante que as mesmas versões exibidas no vídeo sejam usadas durante o curso. Para que isso ocorra no final de cada comando a flag -E deve ser aplicada. A sequencia de comandos da próxima aula ficaram assim:

```
$ npm init -y
$ npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2 -E
$ npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-plugin-react-html-attrs@2.0.0 babel-plugin-transform-object-rest-spread@6.22.0 babel-preset-es2015@6.22.0 babel-preset-react@6.22.0 -E
$ npm i --save-dev extract-text-webpack-plugin@1.0.1 css-loader@0.26.1 style-loader@0.13.1 file-loader@0.9.0 -E
$ npm i --save-dev admin-lte@2.3.6 font-awesome@4.7.0 ionicons@3.0.0 -E
$ npm i --save-dev react@15.4.2 react-dom@15.4.2 react-router@3.0.2 redux@3.6.0 react-redux@4.4.6 redux-form@6.4.1 redux-multi@0.1.12 redux-promise@0.5.3 redux-thunk@2.1.0 react-redux-toastr@4.4.2 axios@0.15.3 lodash@4.17.4 -E
```

## Links
* NodeRestful[https://github.com/baugarten/node-restful]

## Plus
* Instalar Redux DevTools (ótima ferramenta para debug no Chrome)

## Deploy Heroku 
https://github.com/cod3rcursos/deploy-heroku-backend
https://github.com/cod3rcursos/deploy-heroku-frontend

## Mongo
* Comando para subir o servidor: mongod
* Comando para entrar no console do mongo: mongo
* Comando para ver as bases de  dados: show dbs
* Comando para entrar em um determinado banco de dados: use nome_do_banco
* Comando para ver o nome do db: db
* Comando para criar uma colecao: db.creeateCollection('billingCycles')shoe
* Comando para ver as colecoes: show collections
* Comando para dropar uma collection: db.billingCycles.drop()
* Comando para inserir no db: db.myCollection.insert({name: 'Teste1', year: 2018})
* Comando para inserir/atualizar no db: db.myCollection.save({name: 'Teste1', year: 2018})
* Comando para consultar no db: db.myCollection.find() ou db.myCollection.find().pretty()
* Comando para selecionar o primeiro registro: db.myCollection.findOne()
* Comando para selecionar o registro contendo name: 'Teste1': db.myCollection.findOne({name: 'Teste1'})
* Comando para selecionar o registro a partir de X e limitando: b.myCollection.find({name: 'Teste1'}).skip(1).limit(1)
* Comando para agregacao:   db.billingCycle.aggregate({
                              $project: { credit: { $sum: "$credits.value" }, debit: { $sum: "$debits.value" }}
                            }, {
                              $group: { _id: null, credit: { $sum: "$credit" }, debit: { $sum: "$debit" }}
                            }
* Comando para atualizar:    db.billingCycle.update(
                              {$and:[{month: 1}, {year:2017}]},
                              {$set:{credits:[{name:'Salario', value: 5000}]}}
                              )                      
* Comando para contar os registros: db.billingCycles.count()
* Comando para deletar os registros: db.billingCycles.remove({month:2})                             
* Comando para dropar o db: db.dropDatabase()
* Comando para parar o mongo caso haja problema: ps wuax | grep mongo, depois execute um sudo kill <your_process_here>
