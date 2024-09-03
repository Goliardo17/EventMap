const express = require('express')
const { controllers } = require("../../controllers")
const router = express.Router()

router.get("/", controllers.user.get)
router.get("/subscriptions", controllers.subscriber.getByUserId)
router.get("/invite/received", controllers.invitation.getByUserId)
router.post("/enter", controllers.user.enter)
router.post("/create", controllers.user.create)
router.put("/edit", controllers.user.edit)
// router.put("/invite/replay", controllers.invitation.)

module.exports = router