const routesMaterias = require('./materia/routesMateria');
const routesTipoPessaos = require('./tipoPessoa/routesTipoPessoa');
const routesPessoa = require('./pessoa/routesPessoa');

module.exports= (app) => {
    app.use('/api/v1', routesMaterias);
    app.use('/api/v1', routesTipoPessaos);
    app.use('/api/v1', routesPessoa);
}
