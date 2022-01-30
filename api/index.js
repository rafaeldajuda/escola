const server = require('./server');
const app = server();
const tables = require('./models/tables/createsTables');


// START SERVER
app.listen(3000, async () => {
    console.log("server run, port " + 3000);
    await tables();
});

