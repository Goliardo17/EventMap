const { services } = require("../../../services");

const userServices = services.user;
const eventServices = services.event;

const subDelete = (req, res) => {
  try {
    // проверить является ли пользователь организатором мероприятия
    const filter = req.body;

    const userFilter = {
      id: filter.userId,
    };

    const user = userServices.auth.get(userFilter, ["id"])[0];

    if (!user?.id) {
      res.status(400).json("err user");
      return;
    }

    const eventFilter = {
      id: filter.eventId,
    };

    const event = eventServices.info.get(eventFilter, ["id"])[0];

    if (!event?.id) {
      res.status(400).json("err event");
      return;
    }

    // проверить существование такой подписки

    eventServices.subscribers.subDelete(filter);

    res.status(200).json("sub deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { subDelete };
