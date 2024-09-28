class Form {
  constructor(places) {
    this.places = places;
  }

  test(form) {
    const keys = Object.keys(this.places);
    let check = true;

    for (let key of keys) {
      const { req, test } = this.places[key];

      if (!form[key] && req) check = false;

      if (form[key]) {
        const i = test(form[key]);
        if (!i) check = false;
      }
    }

    return check;
  }
}

module.exports = { Form };
