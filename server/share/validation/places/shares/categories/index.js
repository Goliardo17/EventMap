const testCategories = (array) => {
  if (!Array.isArray(array)) return false;

  let i = false;

  array.forEach((value) => {
    if (typeof value !== "number") {
      i = true;
    }
  });

  return i ? false : true;
};

module.exports = { testCategories };
