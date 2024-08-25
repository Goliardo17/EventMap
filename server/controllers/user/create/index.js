const { services } = require("../../../services");

const err1 = "Ошибка валидации";
const err2 = "Пользователь с таким email уже существует";

const createUser = (req, res) => {
  try {
    const form = req.body;

    // TODO: валидация формы

    const user = services.user.auth.get({ place: "email", value: form.email });

    if (user?.id) {
      res.status(400).json(err2);
      return;
    }

    // TODO: хеширование пароля

    services.user.auth.create(form);

    const { id } = services.user.auth.get({
      place: "email",
      value: form.email,
    });

    services.user.info.create({ userId: id, ...form });

    services.user.categories.create({ userId: id, ...form });

    res.status(204);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = createUser;
