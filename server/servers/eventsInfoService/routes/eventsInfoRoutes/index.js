const express = require('express')
const router = express.Router()
const { eventsInfoControllers } = require('../../controllers')

router.get('/', eventsInfoControllers.get) // query params
router.post('/create', eventsInfoControllers.create)
router.put('/edit', eventsInfoControllers.edit)
// router.delete('/delete', eventsInfoControllers.delete)

module.exports = router