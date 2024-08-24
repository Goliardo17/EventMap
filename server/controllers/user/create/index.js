const { services } = require("../../../services")

const err1 = "Ошибка валидации";
const err2 = "Пользователь с таким email уже существует";

const createUser = (req, res) => {
  try {
    const form = req.body;

    const checkValid = validation.newUser(form);
    
    if (!checkValid) {
      res.status(400).json(err1);
      return;
    }

    const user = services.user.auth.get({place: 'email', value: data.email});

    if (user.length) {
      res.status(400).json(err2);
      return;
    }

    services.user.auth.create(authForm);

    //    services.user.info.create(form)
    
    //    services.user.categories.create(form)

    res.status(204);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = createUser;