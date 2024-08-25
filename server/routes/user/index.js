const express = require('express')
const { controllers } = require("../../controllers")
const router = express.Router()

router.post('/create', controllers.user.create)
router.post('/enter', controllers.user.enter)

module.exports = router