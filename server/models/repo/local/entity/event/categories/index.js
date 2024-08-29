const { Data } = require("../../../helpers/data/index.js");

const places = ["id", "eventId", "categoryId"];

const categories = new Data(places);

const eventsCategories = [
  { eventId: 1, categoryId: 2 },
  { eventId: 1, categoryId: 5 },
  { eventId: 1, categoryId: 1 },
  { eventId: 2, categoryId: 2 },
  { eventId: 2, categoryId: 4 },
  { eventId: 2, categoryId: 1 },
  { eventId: 3, categoryId: 2 },
  { eventId: 3, categoryId: 1 },
  { eventId: 3, categoryId: 2 },
  { eventId: 4, categoryId: 3 },
  { eventId: 4, categoryId: 1 },
  { eventId: 4, categoryId: 5 },
  { eventId: 5, categoryId: 2 },
  { eventId: 5, categoryId: 3 },
  { eventId: 5, categoryId: 1 },
];

eventsCategories.forEach((rec) => {
  categories.insert(rec);
});

module.exports = { categories };
