const Contact = require('../models').Contact

class contactController{
    static getAllData(req,res,next){
        Contact.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({
                    error: err.message
                })
            })
    }

    static createNewData(req,res,next){
        let newData = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address
        }
        Contact.create(newData)
            .then(() => {
                res.status(201).json({
                    createdData: newData
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err.message
                })
            })
    }

    static updateData(req,res,next){
        let updated = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address
        }
        let id = req.params.id

        Contact.update(updated, {
            where: {id:id}
        })
            .then(() => {
                res.status(201).json({
                    updatedData: updated
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err.message
                })
            })
    }

    static deleteData(req,res,next){
        let id = req.params.id
        Contact.destroy({
            where: {id:id}
        })
            .then(() => {
                res.status(200).json({
                    message: `Data with id ${id} has been deleted`
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err.message
                })
            })
    }
}

module.exports = contactController