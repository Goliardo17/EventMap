const { services } = require("../../../services");

const userServices = services.user;
const eventServices = services.event;

const getByEventId = (req, res) => {
  try {
    const filter = req.query;

    const event = eventServices.info.get(filter, ["id"])[0];

    if (!event?.id) {
      res.status(400).json("err event");
      return;
    }

    const subsFilter = {
      eventId: event.id,
    };

    const eventSubs = eventServices.subscribers.get(subsFilter);

    const users = eventSubs.map((item) => {
      const userFilter = { id: item.userId };

      return userServices.auth.get(userFilter, ["id", "email"])[0];
    });

    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getByEventId };
