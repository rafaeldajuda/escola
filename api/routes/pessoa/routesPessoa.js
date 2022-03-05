const { Router } = require('express');
const PessoaController = require('../../controllers/PessoaController');

const route = Router();

route.get('/pessoas', PessoaController.pegarTodasAsPessoas);
route.get('/pessoas/:id', PessoaController.pegarUmaPessoa);
route.post('/pessoas', PessoaController.criarPessoa);
route.put('/pessoas/:id', PessoaController.atualizarPessoa);
route.delete('/pessoas/:id', PessoaController.deletarPessoa);

module.exports = route;