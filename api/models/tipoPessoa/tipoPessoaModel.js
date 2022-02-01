const Models = require('../../models/models');

class TipoPessoaModel extends Models {
    constructor(){
        super('tipo_pessoa');
    }

    async create(listaDeCampos) {
        let sql = `INSERT INTO ${this.nomeTabela} (descricao, created_at, updated_at )
        VALUES
        (?, NOW(), NOW())`;

        const [rows, fields] = await this.db.execute(sql, listaDeCampos);
        return rows;
    }

    async update(listaDeCampos) {
        let sql = `UPDATE ${this.nomeTabela} SET 
        descricao = ?,
        updated_at = NOW()
        WHERE
        id = ?`;

        const [rows, fields] = await this.db.execute(sql, listaDeCampos);
        return rows;
    }
}

module.exports = TipoPessoaModel;