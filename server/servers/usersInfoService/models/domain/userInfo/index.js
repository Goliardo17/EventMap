class UserInfo {
  constructor({ email, name, sureName, image, address }) {
    this.email = email && "";
    this.name = name && "";
    this.sure_name = sureName && "";
    this.image = image && "";
    this.address = address && {
      country: "",
      city: "",
    };
  }
}

module.exports = { UserInfo };
