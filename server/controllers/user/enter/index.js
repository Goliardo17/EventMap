const { services } = require("../../../services");
const { validation } = require("../../../share/validation");

const userServices = services.user;
const categoryServices = services.category;
const requestForm = validation.user.enterUser

const err1 = {
  message: "форма не валидна"
}

const err2 = {
  message: "такого пользователя не существует"
}

const err3 = {
  message: "не верно указан пароль"
}

const enter = (req, res) => {
  try {
    const form = req.body;

    const valid = requestForm.test(form)

    if (!valid) {
      res.status(400).json(err1);
      return;
    }

    const authInfo = userServices.auth.get({email: form.email});

    if (!authInfo.length) {
      res.status(400).json(err2);
      return;
    }

    const user = authInfo[0];

    // TODO: хеширование пароля из формы

    if (user.password !== form.password) {
      res.status(400).json(err3);
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

    // генерация токена
    const token = "key";

    const response = {
      id: user.id,
      email: user.email,
      ...info,
      categories,
    };

    res.status(200).json({ token, response });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { enter };
