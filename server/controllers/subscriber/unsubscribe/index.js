const { services } = require("../../../services");

const userServices = services.user;
const eventServices = services.event;

const unsubscribe = (req, res) => {
  try {
    const { user } = req;
    const { eventId } = req.body;

    const userInfo = userServices.auth.get(user, ["id"])[0];

    if (!userInfo?.id) {
      res.status(400).json("err user");
      return;
    }

    const eventFilter = {
      id: eventId,
    };

    const eventInfo = eventServices.info.get(eventFilter, ["id"])[0];

    if (!eventInfo?.id) {
      res.status(400).json("err event");
      return;
    }

    const subsFilter = {
      userId: userInfo.id,
      eventId: eventInfo.id,
    };

    const sub = eventServices.subscribers.get(subsFilter, ["id"])[0];

    if (!sub?.id) {
      res.status(400).json("err sub");
      return;
    }

    eventServices.subscribers.subDelete(sub);

    res.status(200).json("unsubscribe");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { unsubscribe };
