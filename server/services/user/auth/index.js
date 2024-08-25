const { model } = require("../../../models");

const db = model.user.auth;

const get = ({ place, value }) => {
  return db.data.find((item) => item[place] === value);
};

const create = ({ email, password }) => {
  if (!email || !password) {
    throw new Error({ message: "Отсутствуют необходимые поля" });
  }

  const newData = [...db.data];

  const lastId = db.getLastId();

  const id = lastId ? lastId + 1 : 1;

  newData.push({ id, email, password });

  db.setData(newData);
};

const authData = {
  get,
  create,
};

module.exports = authData;
