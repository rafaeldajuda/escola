const MateriaModel = require('../models/materia/materiaModel');

class MateriaController{

    static async pegarMaterias(req, res) {
        try{
            const materiaModel = new MateriaModel();
            await materiaModel.connectDatabase();

            const todasAsMaterias = await materiaModel.getAll();
            return res.status(200).json(todasAsMaterias);
        }
        catch(err){
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

    static async pegarUmaMateria(req, res) {
        try{
            const idMateria = req.params.id;
            const materiaModel = new MateriaModel();
            await materiaModel.connectDatabase();

            const materias = await materiaModel.getOne(parseInt(idMateria));
            if(materias.length == 0) {
                return res.status(404).end();
            }

            return res.status(200).json(materias[0]);
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

    static async criarMateria(req, res) {
        try{
            const materia = req.body;
            const materiaModel = new MateriaModel();
            await materiaModel.connectDatabase();
           
            const novaMateria = await materiaModel.create([materia.descricao])
            const idMateria = novaMateria.insertId;

            return res.status(201).json({ id: idMateria });
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

    static async atualizarMateria(req, res) {
        try{
            const idMateria = req.params.id;
            const materia = req.body;
            const materiaModel = new MateriaModel();
            await materiaModel.connectDatabase();

            await materiaModel.update([materia.descricao, idMateria]);
           
            return res.status(204).end();
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

    static async deletarMateria(req, res) {
        try{
            const idMateria = req.params.id;
            const materiaModel = new MateriaModel();
            await materiaModel.connectDatabase();

            await materiaModel.delete(idMateria);
           
            return res.status(204).end();
        }catch(err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    }

}

module.exports = MateriaController