const { authServices } = require("../../services/index");

const baned = (req, res) => {
  try {
    const banedForm = req.body
    const manager = req.user.email

    const verificate = authServices.get(manager)

    if (verificate.role !== 'CREATOR' && verificate.role !== 'ADMIN' && verificate.role !== 'MODERATOR') return res.status(400).json('иди ка лесом')
    
    const user = authServices.get(banedForm.user)

    user.ban = !user.ban

    authServices.edit(user)

    res.status(200).json('все ок')
  } catch (error) {
    res.status(400).json('надо разбираться')
  }
};

module.exports = baned;