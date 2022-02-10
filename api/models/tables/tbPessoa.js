async function createTablePessoa(db) {
    try{
        let sql = `CREATE TABLE IF NOT EXISTS pessoa (
            id INTEGER PRIMARY KEY AUTO_INCREMENT, 
            tipo INTEGER NOT NULL,
            nome VARCHAR(255) NOT NULL,
            sobrenome VARCHAR(255) NOT NULL,
            data_nascimento DATE NOT NULL,
            rg VARCHAR(13) NOT NULL,
            ativo TINYINT(1) NOT NULL,
            created_at DATETIME,
            updated_at DATETIME,
            deleted_at DATETIME,
            FOREIGN KEY (tipo) REFERENCES tipo_pessoa(id) 
        )`

        await db.execute(sql);
        console.log('tabela pessoa criada');

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = createTablePessoa;