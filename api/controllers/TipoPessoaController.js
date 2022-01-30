class TipoPessoaController{

    static getAll(req, res) {
        try{
            return res.status(200).json({ msg: 'ok' })
        }
        catch(err){
            return res.status(500).json({ msg: err })
        }
        
    }

}

module.exports = TipoPessoaController