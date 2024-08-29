const { user1, token } = require("../common/const");
const { controllers } = require("../../controllers");
const { model } = require("../../models");

const createNewUser = controllers.user.create;
const editAuthUser = controllers.user.edit.auth;
const editInfoUser = controllers.user.edit.info;

const authDb = model.user.auth;
const infoDb = model.user.info;
const categoriesDb = model.user.categories;

const status = {
  json: (mess) => console.log("answer: ", mess),
};

const res = {
  status: (value) => {
    console.log("status: ", value);
    return status;
  },
};

// user/edit/auth
const reqAuth1 = {
  user: token,
  body: {
    id: 1,
    password: "654321",
  },
};

const reqAuth2 = {
  user: token,
  body: {
    id: 1,
    email: "popit",
  },
};

const reqAuth3 = {
  user: token,
  body: {
    id: 1,
    email: "popit",
    password: "654321",
  },
};

const test1 = () => {
  console.log("TEST: ", "изменение пароля от учетной записи пользователя")
  createNewUser(user1, res);
  console.log("before: ", authDb);
  editAuthUser(reqAuth1, res);
  console.log("after: ", authDb);
};

const test2 = () => {
  console.log("TEST: ", "изменение адреса электронной почты учетной записи пользователя")
  createNewUser(user1, res);
  console.log("before: ", authDb);
  editAuthUser(reqAuth2, res);
  console.log("after: ", authDb);
};

const test3 = () => {
  console.log("TEST: ", "изменение и адреса электронной почты и пароля от учетной записи пользователя")
  createNewUser(user1, res);
  console.log("before: ", authDb);
  editAuthUser(reqAuth3, res);
  console.log("after: ", authDb);
};

// user/edit/info
const reqInfo1 = {
  user: token,
  body: {
    name: "Bob",
    birthday: "16-01-2002",
  },
};

const reqInfo2 = {
  user: token,
  body: {
    name: "Bob",
    categories: [1, 2],
  },
};

const reqInfo3 = {
  user: token,
  body: {
    categories: [1, 2, 3, 4],
  },
};

const test4 = () => {
  console.log("TEST: ", "изменение данных из таблицы данных о пользователе")
  createNewUser(user1, res);
  console.log("before: ", infoDb);
  editInfoUser(reqInfo1, res);
  console.log("after: ", infoDb);
};

const test5 = () => {
  console.log("TEST: ", "изменение данных из таблиц данных о пользователе и категорий")
  createNewUser(user1, res);
  console.log("before: ", infoDb);
  console.log("before: ", categoriesDb);
  editInfoUser(reqInfo2, res);
  console.log("after: ", infoDb);
  console.log("after: ", categoriesDb);
};

const test6 = () => {
  console.log("TEST: ", "изменение данных из таблицы категорий")
  createNewUser(user1, res);
  console.log("before: ", infoDb);
  console.log("before: ", categoriesDb);
  editInfoUser(reqInfo3, res);
  console.log("after: ", infoDb);
  console.log("after: ", categoriesDb);
};

// user/id

const runTest = {
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
};

module.exports = runTest;
