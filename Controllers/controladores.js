const express = require('express');
const { filter } = require('lodash');
let {listaDePosts, listaFiltrada, comentsContato} = require('../Dados/todosPosts')
const routers = require ('../Routes/routes')

function home (req,res) {
    res.render("pages/index", {qualitys: listaDePosts});
    console.log ('O index foi renderizado!');
}
function consultaPost (req,res) {
    const postConsultado = listaDePosts.find(postConsultado => postConsultado.id === Number(req.params.idConsultado));

    if(!postConsultado) {
        res.send('O POST ' + req.params.idConsultado + ' NÃO FOI ENCONTRADO');
    }

    res.render("pages/post", {qualitys: postConsultado, });
    console.log('O post ' + postConsultado.id + ' foi renderizado!');
}
function criaComent(req,res) {
    const postConsultado = listaDePosts.find(postConsultado => postConsultado.id === Number(req.params.idConsultado));

    const coment = req.body;
    postConsultado.comentarios.push(coment);
    console.log('Comentário feito!)');
    res.render("pages/post", {qualitys: postConsultado, });
    console.log('Pagina reiniciada!)');   
}
function contato(req,res) {
    res.render("pages/contato");
    console.log('A página contato foi renderizada!');
}
function criaComentContato(req,res) {
    
    coment = req.body;
    comentsContato.push(coment);
    console.log('Comentário Feito!');
    res.render("pages/contato");
    console.log('Página reiniciada!');
}
function sobre(req,res) {
    res.render("pages/sobre",{qualitys:listaDePosts});
    console.log ("A página sobre foi renderizada!")
}
function filtro(req,res) {

    listaFiltrada=[]
    for(i=0; i<3; i++) {
        if (listaDePosts[i].categoria == req.params.categoriaConsultada) {
            listaFiltrada.push(listaDePosts[i]);
        }
    }
    res.render("pages/indexComFiltro", {qualitys: listaFiltrada});
    console.log('A categoria ' + req.params.categoriaConsultada + ' foi renderizada!');
}

module.exports = {home, consultaPost, criaComent, contato, sobre, filtro, criaComentContato,};