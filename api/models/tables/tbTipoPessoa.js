async function createTableTipoPessoa(db) {
    try {
       let sql = `CREATE TABLE IF NOT EXISTS tipo_pessoa (
           id INTEGER PRIMARY KEY AUTO_INCREMENT,
           descricao VARCHAR(255),
           created_at DATETIME,
           updated_at DATETIME,
           deleted_at DATETIME
       )`;

       await db.execute(sql);
       console.log('tabela tipo_pessoa criada');
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = createTableTipoPessoa