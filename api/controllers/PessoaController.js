const PessoaModel = require('../models/pessoa/pessoaModel');

class PessoaController {

    static async pegarTodasAsPessoas(req, res) {
        try {
            const pessoaModel = new PessoaModel();
            await pessoaModel.connectDatabase();

            const pessoas = await pessoaModel.getAll();
            pessoaModel.db.end();

            return res.status(200).json(pessoas);
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

    static async pegarUmaPessoa(req, res) {
        try {
            const idPessoa = req.params.id;
            const pessoaModel = new PessoaModel();
            await pessoaModel.connectDatabase();
    
            const pessoa = await pessoaModel.getOne(parseInt(idPessoa));
            pessoaModel.db.end();

            if(pessoa.length == 0) {
                return res.status(404).end();
            }

            res.status(200).json(pessoa);
        }catch(err) {
            return res.status(500).json({ msg: err.message });
        }
    }

    static async criarPessoa(req, res) {
        try{
            const pessoa = req.body;
            const listaDeCampos = Object.values(pessoa)

            const pessoaModel = new PessoaModel();
            await pessoaModel.connectDatabase();
           
            const novaPessoa = await pessoaModel.create(listaDeCampos);
            const idPessoa = novaPessoa.insertId;
            pessoaModel.db.end();

            return res.status(201).json({ id: idPessoa });
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

    static async atualizarPessoa(req, res) {
        try{
            const idPessoa = req.params.id;
            const pessoa = req.body;
            const listaDeCampos = Object.values(pessoa)
            listaDeCampos.push(idPessoa);

            const pessoaModel = new PessoaModel();
            await pessoaModel.connectDatabase();
           
            await pessoaModel.update(listaDeCampos);
            pessoaModel.db.end();

            return res.status(204).end();
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

    static async deletarPessoa(req, res) {
        try{
            const idPessoa = req.params.id;
            const pessoaModel = new PessoaModel();
            await pessoaModel.connectDatabase();

            await pessoaModel.delete(idPessoa);
            pessoaModel.db.end();
           
            return res.status(204).end();
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = PessoaController;