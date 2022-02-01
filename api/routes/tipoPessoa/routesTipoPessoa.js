const { Router } = require('express');
const TipoPessoaController = require('../../controllers/TipoPessoaController');

const route = Router();

route.get('/tipoPessoas', TipoPessoaController.pegarTodosOsTipo);
route.get('/tipoPessoas/:id', TipoPessoaController.pegarUmTipo);
route.post('/tipoPessoas', TipoPessoaController.criarTipo);
route.put('/tipoPessoas/:id', TipoPessoaController.atualizarTipo);
route.delete('/tipoPessoas/:id', TipoPessoaController.deletarTipo); 

module.exports = route;