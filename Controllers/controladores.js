const express = require('express');
const { filter } = require('lodash');
let {listaDePosts, listaFiltrada} = require('../Dados/todosPosts')
const routers = require ('../Routes/routes')

function home (req,res) {
    res.render("pages/index", {qualitys: listaDePosts});
    console.log ('index renderizado');
}

function consultaPost (req,res) {
    const postConsultado = listaDePosts.find(postConsultado => postConsultado.id === Number(req.params.idConsultado));

    if(!postConsultado) {
        res.send('O POST ' + req.params.idConsultado + ' NÃO FOI ENCONTRADO');
    }

    res.render("pages/post", {qualitys: postConsultado, });
}

function criaComent(req,res) {
    const postConsultado = listaDePosts.find(postConsultado => postConsultado.id === Number(req.params.idConsultado));

    const coment = req.body;
    postConsultado.comentarios.push(coment);
    console.log(postConsultado);
    res.render("pages/post", {qualitys: postConsultado, });
}

function contato(req,res) {
    res.render("pages/contato");
}


function filtro(req,res) {
    
    listaFiltrada=[]
    for(i=0; i<3; i++) {
        if (listaDePosts[i].categoria == req.params.categoriaConsultada) {
            listaFiltrada.push(listaDePosts[i]);
        }
    }

    res.render("pages/indexComFiltro", {qualitys: listaFiltrada});
}

module.exports = {home, consultaPost,criaComent,contato,filtro};