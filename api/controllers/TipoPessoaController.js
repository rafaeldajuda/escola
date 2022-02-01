const TipoPessoaModel = require('../models/tipoPessoa/tipoPessoaModel');

class TipoPessoaController{

    static async pegarTodosOsTipo(req, res) {
        try{
            const tipoPessoaModel = new TipoPessoaModel();
            await tipoPessoaModel.connectDatabase();

            const todosOsTipos = await tipoPessoaModel.getAll();
            return res.status(200).json(todosOsTipos);
        }
        catch(err){
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

    static async pegarUmTipo(req, res) {
        try{
            const idTipo = req.params.id;
            const tipoPessoaModel = new TipoPessoaModel();
            await tipoPessoaModel.connectDatabase();

            const tipos = await tipoPessoaModel.getOne(parseInt(idTipo));
            if(tipos.length == 0) {
                return res.status(404).end();
            }

            return res.status(200).json(tipos[0]);
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

    static async criarTipo(req, res) {
        try{
            const tipo = req.body;
            const tipoPessoaModel = new TipoPessoaModel();
            await tipoPessoaModel.connectDatabase();
           
            const novoTipo = await tipoPessoaModel.create([tipo.descricao])
            const idTipo = novoTipo.insertId;

            return res.status(201).json({ id: idTipo });
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

    static async atualizarTipo(req, res) {
        try{
            const idTipo = req.params.id;
            const tipo = req.body;
            const tipoPessoaModel = new TipoPessoaModel();
            await tipoPessoaModel.connectDatabase();

            await tipoPessoaModel.update([tipo.descricao, idTipo]);
           
            return res.status(204).end();
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

    static async deletarTipo(req, res) {
        try{
            const idTipo = req.params.id;
            const tipoPessoaModel = new TipoPessoaModel();
            await tipoPessoaModel.connectDatabase();

            await tipoPessoaModel.delete(idTipo);
           
            return res.status(204).end();
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

}

module.exports = TipoPessoaController