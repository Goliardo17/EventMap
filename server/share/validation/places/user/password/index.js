const testPassword = (value) => {
  if (typeof value !== "string") {
    return false;
  }

  if (value.length < 6) {
    return false;
  }

  return true;
};

module.exports = { testPassword };
