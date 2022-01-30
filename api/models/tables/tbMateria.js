async function createTableMateria(db) {
    try {
       let sql = `CREATE TABLE IF NOT EXISTS materia (
           id INTEGER PRIMARY KEY AUTO_INCREMENT,
           descricao VARCHAR(255),
           created_at DATETIME,
           updated_at DATETIME,
           deleted_at DATETIME
       )`;

       await db.execute(sql);
       console.log('tabela materia criada');
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = createTableMateria