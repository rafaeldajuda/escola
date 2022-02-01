const dbConnection = require('../database');

class Models {
     constructor(nomeTabela){
        this.nomeTabela = nomeTabela;
        this.db = null;
    }

    async connectDatabase() {
        this.db = await dbConnection.createConnection();
        if (await dbConnection.connect(this.db)) {
            console.log('erro ao conectar ao banco de dados');
        }
    }

    async getAll() {
        let sql = `SELECT * FROM ${this.nomeTabela}`;
        const [rows, fields] = await this.db.execute(sql);

        return rows;
    }

    async getOne(id) {
        let sql = `SELECT * FROM ${this.nomeTabela} WHERE id = ${id}`;
        const [rows, fields] = await this.db.execute(sql);

        return rows;
    }

    async delete(id) {
        let sql = `DELETE FROM ${this.nomeTabela} WHERE id = ${id}`;
        const [rows, fields] = await this.db.execute(sql);

        return rows;
    }

}

module.exports = Models