const { services } = require("../../../services");

const userServices = services.user;
const categoryServices = services.category;

const err2 = {
  message: "такого пользователя не существует",
};

const get = (req, res) => {
  try {
    const filter = req.query;

    // TODO: валидация формы

    const user = userServices.auth.get(filter, ["id", "email"])[0];

    if (!user?.id) {
      res.status(400).json(err2);
      return;
    }

    const userFilter = {
      userId: user.id,
    };

    const infoForm = ["name", "sureName"];

    const info = userServices.info.get(userFilter, infoForm)[0];

    const categoryForm = ["categoryId"];

    const userCategories = userServices.categories.get(
      userFilter,
      categoryForm
    );

    const categories = userCategories.map((info) => {
      const filter = { id: info.categoryId };

      return categoryServices.info.get(filter, ["id", "name"])[0];
    });

    const response = {
      id: user.id,
      email: user.email,
      ...info,
      categories,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { get };
