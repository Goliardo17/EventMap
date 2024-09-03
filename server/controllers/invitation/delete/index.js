const { services } = require("../../../services");

const userServices = services.user;
const eventServices = services.event;

const inviteDelete = (req, res) => {
  try {
    const admin = req.user;
    const filter = req.body;

    const eventFilter = {
      id: filter.eventId,
    };

    const event = eventServices.info.get(eventFilter, ["id", "userId"])[0];

    if (!event?.id) {
      res.status(400).json("err event");
      return;
    }

    if (event.userId !== admin.id) {
      res.status(400).json("err conect");
      return;
    }

    const authFilter = {
      id: filter.userId,
    };

    const userInfo = userServices.auth.get(authFilter, ["id"])[0];

    if (!userInfo?.id) {
      res.status(400).json("err user");
      return;
    }

    const invite = userServices.invitations.get(filter, ["id"])[0];

    if (!invite?.id) {
      res.status(400).json("err invite");
      return;
    }

    userServices.invitations.inviteDelete(invite);

    res.status(200).json("deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { inviteDelete };
