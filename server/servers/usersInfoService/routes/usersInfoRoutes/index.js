const express = require('express')
const router = express.Router()
const { usersInfoControllers } = require('../../controllers')

router.get('/', usersInfoControllers.get)
router.put('/edit', usersInfoControllers.edit)

module.exports = router