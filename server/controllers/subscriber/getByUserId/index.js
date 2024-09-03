const { services } = require("../../../services");

const userServices = services.user;
const eventServices = services.event;

const getByUserId = (req, res) => {
  try {
    const filter = req.query;

    const user = userServices.auth.get(filter, ["id", "email"])[0];

    if (!user?.id) {
      res.status(400).json("err user");
      return;
    }

    const subsFilter = {
      userId: filter.id,
    };

    const userSubs = eventServices.subscribers.get(subsFilter, ["eventId"]);

    const events = userSubs.map((item) => {
      const filter = {
        id: item.eventId,
      };

      return eventServices.info.get(filter, ["title"])[0];
    });

    res.status(200).json(events);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getByUserId };
