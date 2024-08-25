const { services } = require("../../../services");

const enterUser = (req, res) => {
  try {
    const form = req.body;

    // TODO: валидация формы

    const user = services.user.auth.get({ place: "email", value: form.email });

    if (!user?.id) {
      res.status(400).json("Такого пользователя не существует")
      return
    }

    // TODO: хеширование пароля из формы

    if (user.password !== form.password) {
      res.status(400).json("Не верно указан пароль")
      return
    }

    const userInfo = services.user.info.get({ place: "userId", value: user.id })

    const userCategories = services.user.categories.get({ place: "userId", value: user.id })

    // HACK: когда появится нормальная БД делаем запрос полей по фильтрам и избавляемся от этой заглушки
    const response = {
      id: userInfo.id,
      email: user.email,
      name: userInfo.name,
      sureName: userInfo.sureName,
      image: userInfo.image,
      birthday: userInfo.birthday,
      categories: userCategories
    }

    res.status(200).json({response})
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = enterUser;
