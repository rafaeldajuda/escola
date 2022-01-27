const express = require('express');
const routes = require('../routes');

module.exports = () => {
    const app = express()

    // MIDDLEWARES
    app.use(express.json());

    // ROUTES
    routes(app);

    return app
}