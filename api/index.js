const server = require('./server');
const app  = server();

// START SERVER
app.listen(3000, () => console.log("server run, port " + 3000));