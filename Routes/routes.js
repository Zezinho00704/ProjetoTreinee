const express = require('express');
const {controladores, home, consultaPost, contato, filtro, sobre, criaComentContato, criaComent, pesquisa} = require('../Controllers/controladores');

const routes = express();

//mostrando HOME
routes.get("/",home);

//Abrindo posts individuais  
routes.get("/post/:idConsultado",consultaPost);

// page contato
routes.get("/contato",contato);

//filtro de categorias
routes.get("/categoria/:categoriaConsultada",filtro);

//page sobre
routes.get("/sobre",sobre);

//comentários da page contato
routes.post("/contato",criaComentContato);

//comentários dos posts
routes.post("/post/:idConsultado",criaComent);

module.exports = routes;

