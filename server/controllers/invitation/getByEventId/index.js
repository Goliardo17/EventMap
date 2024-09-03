const { services } = require("../../../services");

const userServices = services.user;
const eventServices = services.event;

const getByEventId = (req, res) => {
  try {
    const eventFilter = req.query;

    const event = eventServices.info.get(eventFilter, ["id"])[0];

    if (!event?.id) {
      res.status(400).json("err user");
      return;
    }

    const inviteFilter = {
      eventId: event.id,
    };

    const eventInvitations = userServices.invitations.get(inviteFilter);

    res.status(200).json(eventInvitations);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getByEventId };
