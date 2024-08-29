const { Data } = require("../../../helpers/data/index.js");

const places = ["id", "userId", "categoryId"];

const categoriesData = new Data(places);

const categories = [
  { userId: 1, categoryId: 1 },
  { userId: 1, categoryId: 2 },
  { userId: 1, categoryId: 3 },
  { userId: 2, categoryId: 2 },
  { userId: 2, categoryId: 3 },
  { userId: 2, categoryId: 4 },
  { userId: 3, categoryId: 3 },
  { userId: 3, categoryId: 4 },
  { userId: 3, categoryId: 5 },
  { userId: 4, categoryId: 1 },
  { userId: 4, categoryId: 2 },
  { userId: 4, categoryId: 3 },
  { userId: 5, categoryId: 1 },
  { userId: 5, categoryId: 4 },
  { userId: 5, categoryId: 5 },
];

categories.forEach((category) => {
  categoriesData.insert(category);
});

module.exports = { categoriesData };
