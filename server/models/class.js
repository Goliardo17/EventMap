class Data {
  constructor(data) {
    this.data = data;
  }

  setData(value) {
    return (this.data = value);
  }

  getLastId() {
    const lastRecord = this.data.length - 1;

    const record = this.data[lastRecord];

    return record.id;
  }
}

module.exports = { Data };
