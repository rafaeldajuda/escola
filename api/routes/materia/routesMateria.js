const {Router} = require('express');
const MateriaController =  require('../../controllers/MateriaController');

const route = Router();

route.get('/materias', MateriaController.pegarMaterias);
route.get('/materias/:id', MateriaController.pegarUmaMateria);
route.post('/materias', MateriaController.criarMateria);
route.put('/materias/:id', MateriaController.atualizarMateria);
route.delete('/materias/:id', MateriaController.deletarMateria);

module.exports = route