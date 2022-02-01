const routesMaterias = require('./materia/routesMateria');
const routesTipoPessaos = require('./tipoPessoa/routesTipoPessoa');

module.exports= (app) => {
    app.use('/api/v1', routesMaterias);
    app.use('/api/v1', routesTipoPessaos);
}
