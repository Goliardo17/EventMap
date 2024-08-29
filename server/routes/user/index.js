const express = require('express')
const { controllers } = require("../../controllers")
const router = express.Router()

router.post('/get/:id', controllers.user.get)
router.post('/create', controllers.user.create)
router.post('/enter', controllers.user.enter)
router.put('/edit', controllers.user.edit)

module.exports = router