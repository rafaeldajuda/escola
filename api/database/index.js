const mysql = require('mysql2/promise')

async function createConnection() {
    return await mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'admin',
        database: 'escola'
    });
}

async function connect(connection) {
    await connection.connect((err) => {
        if (err) {
            console.log(err)
        }
    });
}
module.exports = {
    createConnection: createConnection,
    connect: connect
}