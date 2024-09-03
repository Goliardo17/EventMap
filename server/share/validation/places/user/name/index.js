const testName = (value) => {
  if (typeof value !== "string") return false;

  if (value === true || value === false) return false;

  if (value.length < 2) return false;

  for (let i = 0; value.length > i; i++) {
    const checkNan = Number(value[i]);

    if (checkNan) return false;
  }

  const firstWord = value[0];

  if (firstWord !== firstWord.toUpperCase()) return false;

  return true;
};

module.exports = { testName };
