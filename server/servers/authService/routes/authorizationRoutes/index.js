const express = require('express')
const router = express.Router()
const { authControllers } = require('../../controllers')

router.post('/', authControllers.logIn)
router.post('/create', authControllers.create)
router.put('/appoint', authControllers.appoint)
router.put('/baned', authControllers.baned)
router.delete('/delete', authControllers.disabling)
// + востановление пароля

module.exports = router