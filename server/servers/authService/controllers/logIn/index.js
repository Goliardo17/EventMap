const { authServices } = require("../../services/index");

const logIn = (req, res) => {
  try {
    const userForm = req.body;

    const user = authServices.get(userForm);

    if (user.password !== userForm) {
        return res.status(400).json('увы, вы жульничали')
    }

    const token = 'это ваш токен'

    res.status(200).json(token)
  } catch (error) {
    res.status(400).json('надо разобраться');
  }
};

module.exports = logIn