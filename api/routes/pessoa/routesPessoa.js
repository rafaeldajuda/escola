const { Router } = require('express');
const route = Router();

route.get('/pessoas', (req, res) => {res.send('ok')});
route.get('/pessoas/:id', (req, res) => {res.send('ok')});
route.post('/pessoas', (req, res) => {res.send('ok')});
route.put('/pessoas/:id', (req, res) => {res.send('ok')});
route.delete('/pessoas', (req, res) => {res.send('ok')});

module.exports = route;