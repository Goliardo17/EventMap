const { services } = require("../../../services");

const eventServices = services.event;

const err1 = {
  message: "такого мероприятия не существует",
};

const get = (req, res) => {
  try {
    const filter = req.query;

    const info = eventServices.info.get(filter)[0];

    if (!info?.id) {
      res.status(400).json(err1);
      return;
    }

    const categories = eventServices.categories.get(filter);

    const response = {
      ...info[0],
      categories,
    };

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { get };
