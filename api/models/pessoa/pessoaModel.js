const Models = require('../models');

class PessoaModel extends Models {
    constructor() {
        super('pessoa');
    }

    async create(listaDeCampos) {
        let sql = `INSERT INTO ${this.nomeTabela} (tipo, nome, sobrenome, data_nascimento, 
            rg, ativo, created_at, updated_at)
        VALUES
        (?, ?, ?, ?, ?, ?, NOW(), NOW())`;

        const [rows, fields] = await this.db.execute(sql, listaDeCampos);
        return rows;
    }

    async update(listaDeCampos) {
        let sql = `UPDATE ${this.nomeTabela} SET 
        tipo = ?,
        nome = ?,
        sobrenome = ?,
        data_nascimento = ?,
        rg = ?,
        ativo = ?,
        updated_at = NOW()
        WHERE
        id = ?`;

        const [rows, fields] = await this.db.execute(sql, listaDeCampos);
        return rows;
    }
}

module.exports = PessoaModel;