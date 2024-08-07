const { authServices } = require("../../services/index");

const create = (req, res) => {
  try {
    const userForm = req.body;

    const user = authServices.get(userForm);

    if (user?.disable) return res.status(400).json('обратитесь в команду поддержки')

    if (user?.id) return res.status(400).json('вас опередили')

    authServices.create(userForm);

    res.status(200).json('все окей');
  } catch (error) {
    res.status(400).json('надо разобраться');
  }
};

module.exports = create