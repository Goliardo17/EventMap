const express = require("express");
const { controllers } = require("../../controllers");
const router = express.Router();

router.get("/all", controllers.event.all)
router.get("/invite/sent", controllers.invitation.getByEventId);
router.get("/subscribers", controllers.subscriber.getByEventId);
router.post("/create", controllers.event.create);
router.post("/invite", controllers.invitation.invite);
router.post("/subscribe", controllers.subscriber.subscribe);
router.put("/edit", controllers.event.edit);
router.delete("/invite", controllers.invitation.delete);
router.delete("/unsubscribe", controllers.subscriber.delete);

module.exports = router;
