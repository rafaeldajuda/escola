const Models = require('../models');

class MateriaModel extends Models {
    constructor() {
        super('materia');
    }

    async create(listaDeCampos) {
        let sql = `INSERT INTO ${this.nomeModelo} (descricao, created_at, updated_at )
        VALUES
        (?, NOW(), NOW())`;

        const [rows, fields] = await this.db.execute(sql, listaDeCampos);
        return rows;
    }

    async update(listaDeCampos) {
        let sql = `UPDATE materia SET 
        descricao = ?,
        updated_at = NOW()
        WHERE
        id = ?`;

        const [rows, fields] = await this.db.execute(sql, listaDeCampos);
        return rows;
    }
}

module.exports = MateriaModel;