const { services } = require("../../../services");

const userServices = services.user;
const eventServices = services.event;

const invite = (req, res) => {
  try {
    const admin = req.user;
    const invite = req.body;

    const authFilter = {
      id: invite.userId,
    };

    const userInfo = userServices.auth.get(authFilter, ["id"])[0];

    if (!userInfo?.id) {
      res.status(400).json("err user");
      return;
    }

    const eventFilter = {
      id: invite.eventId,
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

    const formData = {
      ...invite,
      agree: false,
    };

    userServices.invitations.create(formData);

    res.status(200).json("created");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { invite };
