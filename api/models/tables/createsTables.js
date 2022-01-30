const tbMateria = require('./tbMateria');
const tbTipoPessoa = require('./tbTipoPessoa');
const dbConnection = require('../../database');

async function createTables() {
    try {
        const db = await dbConnection.createConnection();
        if (await dbConnection.connect(db)) {
            console.log('erro ao conectar ao banco de dados');
        }

        await tbMateria(db);
        await tbTipoPessoa(db);
        console.log('todas as tabelas criadas');
        db.end();

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = createTables;