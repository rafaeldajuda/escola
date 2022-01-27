const routesMaterias = require('./materia/routesMateria');

module.exports= (app) => {
    app.use('/api/v1', routesMaterias)
}
