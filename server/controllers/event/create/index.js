const { services } = require("../../../services");

const eventServices = services.event;

const create = (req, res) => {
  try {
    const { id } = req.user;
    const form = req.body;

    const newData = { userId: id, ...form };

    const eventId = eventServices.info.create(newData);

    const categories = form.categories.map((categoryId) => {
      return { eventId, categoryId };
    });

    categories.forEach((item) => {
      eventServices.categories.create(item);
    });

    res.status(204);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { create };
