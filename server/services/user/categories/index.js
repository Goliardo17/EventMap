const { model } = require("../../../models");

const db = model.user.categories;

const get = ({ place, value }) => {
  const data = db.data.filter((item) => item[place] === value);

  return data.map((item) => item.category)
};

const create = ({ userId, categories }) => {
  if (!userId || !categories.length) {
    throw new Error({ message: "Отсутствуют необходимые поля" });
  }

  for (let category of categories) {
    const newData = [...db.data];

    const lastId = db.getLastId();

    const id = lastId ? lastId + 1 : 1;

    newData.push({ id, userId, category });

    db.setData(newData);
  }
};

const categoriesData = {
  get,
  create,
};

module.exports = categoriesData;
