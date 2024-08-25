const { model } = require("../../../models");

const db = model.user.info;

const get = ({ place, value }) => {
  return db.data.find((item) => item[place] === value);
};

const create = ({ userId, name, sureName, image, birthday }) => {
  if (!userId || !name) {
    throw new Error({ message: "Отсутствуют необходимые поля" });
  }

  const newData = [...db.data];

  const lastId = db.getLastId();

  const id = lastId ? lastId + 1 : 1;

  newData.push({ id, userId, name, sureName, image, birthday });

  db.setData(newData);
};

const infoData = {
  get,
  create,
};

module.exports = infoData;
