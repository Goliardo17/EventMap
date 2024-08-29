const { services } = require("../../../services");

const eventServices = services.event;

const getByCreator = (req, res) => {
  const filter = req.query;

  const infos = eventServices.info.get(filter);

  const response = infos.map((info) => {
    const filterCategories = {
      eventId: info.id,
    };

    const form = ["categoryId"];

    const categoriesInfo = eventServices.categories.get(filterCategories, form);

    const categories = categoriesInfo.map((item) => {
      return eventServices.info.get({ id: item.categoryId })[0];
    });

    return { ...info, categories };
  });

  res.status(200).json(response);
};

module.exports = { getByCreator };
