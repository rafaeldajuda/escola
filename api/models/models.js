const dbConnection = require('../database');

class Models {
     constructor(nomeModelo){
        this.nomeModelo = nomeModelo;
        this.db = null;
    }

    async connectDatabase() {
        this.db = await dbConnection.createConnection();
        if (await dbConnection.connect(this.db)) {
            console.log('erro ao conectar ao banco de dados');
        }
    }

    async getAll() {
        let sql = `SELECT * FROM ${this.nomeModelo}`;
        const [rows, fields] = await this.db.execute(sql);

        return rows;
    }

    async getOne(id) {
        let sql = `SELECT * FROM ${this.nomeModelo} WHERE id = ${id}`;
        const [rows, fields] = await this.db.execute(sql);

        return rows;
    }

    async delete(id) {
        let sql = `DELETE FROM ${this.nomeModelo} WHERE id = ${id}`;
        const [rows, fields] = await this.db.execute(sql);

        return rows;
    }

}

module.exports = Models