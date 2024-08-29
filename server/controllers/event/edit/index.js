const { services } = require("../../../services");

const eventServices = services.event;

const err1 = {
  message: "такого мероприятия не существует",
};

const err2 = {
  message: "отказано в доступе",
};

// helper (...

const helperCheckPlace = (arr1, arr2) => {
  const filter = arr1.filter((item) => {
    return arr2.includes(item);
  });

  return filter.length;
};

// ...)

const edit = (req, res) => {
  try {
    const { id } = req.user;
    const newData = req.body;
    const newDataPlaces = Object.keys(newData);

    const info = eventServices.info.get({ id: newData.id })[0];

    if (!info?.id) {
      res.status(400).json(err1);
      return;
    }

    if (info.userId !== id) {
      res.status(400).json(err2);
      return;
    }

    const infoFilter = {
      userId: info.userId,
    };

    const checkInfo = () => {
      const placesInfo = ["title", "description"];
      return helperCheckPlace(placesInfo, newDataPlaces);
    };

    if (checkInfo()) {
      eventServices.info.edit(infoFilter, newData);
    }

    const categoriesFilter = {
      eventId: info.id,
    };

    if (newData?.categories) {
      const categories = eventServices.categories
        .get(categoriesFilter)
        .map((item) => {
          return item.categoryId;
        });

      newData.categories
        .filter((categoryId) => {
          return !categories.includes(categoryId);
        })
        .map((categoryId) => {
          return { eventId: info.id, categoryId };
        })
        .forEach((item) => {
          eventServices.categories.create(item);
        });

      categories
        .filter((categoryId) => {
          return !newData.categories.includes(categoryId);
        })
        .map((categoryId) => {
          return { eventId: info.id, categoryId };
        })
        .forEach((item) => {
          eventServices.categories.deletePlaces(item);
        });
    }

    res.status(204);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { edit };
