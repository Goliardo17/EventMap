const express = require('express')
const { controllers } = require("../../controllers")
const router = express.Router()

router.get('/get/:id', controllers.event.get)
router.get('/creator/:id', controllers.event.getByCreator)
router.post('/create', controllers.event.create)
router.put('/edit', controllers.event.edit)

module.exports = router