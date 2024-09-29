const { Form } = require("../../../patterns/form");
const { testBirthday } = require("../../../places/user/birthday");
const { testEmail } = require("../../../places/user/email");
const { testName } = require("../../../places/user/name");
const { testPassword } = require("../../../places/user/password");
const { testSureName } = require("../../../places/user/sureName");
// const { testCategories } = require("../../../places/user/categories")

const places = {
  email: {
    key: true,
    test: testEmail,
  },
  password: {
    key: true,
    test: testPassword,
  },
  name: {
    key: true,
    test: testName,
  },
  sureName: {
    key: false,
    test: testSureName,
  },
  birthday: {
    key: true,
    test: testBirthday,
  },
  // categories: {
  //   key: true,
  //   test: testCategories,
  // }
};

const newUser = new Form(places);

module.exports = { newUser };
