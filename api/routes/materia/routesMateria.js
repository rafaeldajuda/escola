const {Router} = require('express');
const route = Router();

route.get('/materias', (req, res) => {
    res.status(200).json({ msg: "listar materias" });
});

route.get('/materias/:id', (req, res) => {
    res.status(200).json({ msg: 'pegar materia', id: req.params.id });
});

route.post('/materias', (req, res) => {
    res.status(201).json({ msg: 'criar materia' });
});

route.put('/materias/:id', (req, res) => {
    res.status(204).json({ msg: 'atualizar materia', id: req.params.id });
});

route.delete('/materias/:id', (req, res) => {
    res.status(200).json({ msg: 'deletar materia', id: req.params.id  });
});

module.exports = route