const testEmail = (value) => {
  if (typeof value !== "string") {
    return false;
  }

  const checkAt = value.split("@");

  if (checkAt.length !== 2) {
    return false;
  }

  const checkDot = checkAt[1].split(".");

  if (checkDot.length !== 2) {
    return false;
  }

  const resetDot = checkAt[0].split(".");

  if (resetDot.length > 1) {
    return false;
  }

  return true;
};

module.exports = { testEmail };
