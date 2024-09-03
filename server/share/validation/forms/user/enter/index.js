const { Form } = require("../../../patterns/form");
const { testEmail } = require("../../../places/user/email");
const { testPassword } = require("../../../places/user/password");

const places = {
  email: {
    key: true,
    test: testEmail,
  },
  password: {
    key: true,
    test: testPassword,
  },
};

const enterUser = new Form(places);

module.exports = { enterUser };
