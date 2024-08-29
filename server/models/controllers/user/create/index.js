const { services } = require("../../../services");

const userServices = services.user;

const err1 = {
  message: "такой пользователь уже существует",
};

const create = (req, res) => {
  try {
    const data = req.body;

    // TODO: валидация формы

    const checkEmail = userServices.auth.get({ email: data.email });

    if (checkEmail.length) {
      res.status(400).json(err1);
      return;
    }

    const user = { ...data };

    // TODO: хеширование пароля

    const id = userServices.auth.create(user);
    user.userId = id;

    userServices.info.create(user);

    const categories = data.categories.map((categoryId) => {
      return { userId: user.userId, categoryId };
    });

    categories.forEach((catId) => {
      userServices.categories.create(catId);
    });

    res.status(204);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { create };
