const { response } = require('express');
const express = require('express');;
const {listaDePosts} = require('./Dados/todosPosts')
const routes = require('./Routes/routes')
const app = express();

app.use(express.urlencoded({
    extended: true  }))
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(routes);


app.listen(8080);
console.log('rodando http://localhost:8080')  