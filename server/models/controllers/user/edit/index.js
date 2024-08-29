const { services } = require("../../../services");

const userServices = services.user;

const err4 = {
  message: "требуемое поле не передано",
};

const err5 = {
  message: "вам отказано в доступе",
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
    const auth = req.user;
    const newData = req.body;
    const newDataPlaces = Object.keys(newData);

    if (!newData?.id) {
      res.status(400).json(err4);
      return;
    }

    if (newData.id !== auth.id) {
      res.status(400).json(err5);
      return;
    }

    const checkAuth = () => {
      const placesAuth = ["email", "password"];
      return helperCheckPlace(placesAuth, newDataPlaces);
    };

    if (checkAuth()) {
      userServices.auth.edit(auth, newData);
    }

    const filter = {
      userId: auth.id,
    };

    const checkInfo = () => {
      const placesInfo = ["name", "sureName"];
      return helperCheckPlace(placesInfo, newDataPlaces);
    };

    if (checkInfo()) {
      userServices.info.edit(filter, newData);
    }

    if (newData?.categories) {
      const categories = userServices.categories.get(filter).map((item) => {
        return item.categoryId;
      });

      newData.categories
        .filter((categoryId) => {
          return !categories.includes(categoryId);
        })
        .map((categoryId) => {
          return { userId: auth.id, categoryId };
        })
        .forEach((item) => {
          userServices.categories.create(item);
        });

      categories
        .filter((categoryId) => {
          return !newData.categories.includes(categoryId);
        })
        .map((categoryId) => {
          return { userId: auth.id, categoryId };
        })
        .forEach((item) => {
          userServices.categories.deletePlace(item);
        });
    }

    res.status(204);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { edit };
