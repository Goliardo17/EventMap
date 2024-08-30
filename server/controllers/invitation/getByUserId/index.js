const { services } = require("../../../services");

const userServices = services.user;

const getByUserId = (req, res) => {
  try {
    const { user } = req;

    const userInfo = userServices.auth.get(user)[0];

    if (!userInfo?.id) {
      res.status(400).json("err user");
      return;
    }

    const inviteFilter = {
      userId: userInfo.id,
    };

    const userInvitations = userServices.invitations.get(inviteFilter);

    res.status(200).json(userInvitations);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getByUserId };
