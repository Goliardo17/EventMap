const { services } = require("../../../../services");

const userEditAuth = (req, res) => {
  try {
    // HACK: проверка токена в midleware
    const { id, email } = req.user;
    const form = req.body;

    // TODO: валидация формы

    if (id !== form.id) {
      res.status(400).json("У вас нет доступа");
      return;
    }

    const user = services.user.auth.get({
      place: "id",
      value: id,
    });

    // TODO: хешировать новый пароль

    services.user.auth.edit({ newState: { ...user, ...form } });

    const newUserAuth = services.user.auth.get({
      place: "id",
      value: id,
    });

    // HACK: это будет функция хелпер которая будет генерировать токен
    const newToken = {
      id: newUserAuth.id,
      email: newUserAuth.email,
    };

    res.status(200).json(newToken);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = userEditAuth;
