const express = require('express')
const router = express.Router()

const contactController = require('../controller/contactController')
router.get('/',contactController.getAllData)
router.get('/:id',contactController.getOneData)
router.post('/',contactController.createNewData)
router.put('/:id',contactController.updateData)
router.delete('/:id',contactController.deleteData)

module.exports = router