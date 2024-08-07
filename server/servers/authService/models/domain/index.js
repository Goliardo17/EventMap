class User {
  constructor(email, password, role) {
    this.email = email;
    this.password = password;
    this.role = role ? role : 'USER';
    this.ban = false;
    this.disable = false;
  }
}

module.exports = { User };
