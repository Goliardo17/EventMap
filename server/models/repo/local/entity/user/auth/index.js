const { Data } = require("../../../helpers/data/index.js");

const places = ["id", "email", "password"];

const authData = new Data(places);

const users = [
  {
    email: "one@mail.ru",
    password: "123546",
  },
  {
    email: "two@mail.ru",
    password: "123546",
  },
  {
    email: "tree@mail.ru",
    password: "123546",
  },
  {
    email: "foure@mail.ru",
    password: "123546",
  },
  {
    email: "five@mail.ru",
    password: "123546",
  },
];

users.forEach((user) => {
  authData.insert(user);
});

module.exports = { authData };
