class Data {
  constructor(places) {
    this.places = [...places];
    this.data = [];
  }

  _setNewData(newData) {
    this.data = newData;
  }

  _getKeys(form) {
    return Object.keys(form)
  }

  _getLastId() {
    const lastIndex = this.data.length - 1;
    const lastRecord = this.data[lastIndex];
    const newId = lastRecord?.id ? lastRecord.id + 1 : 1;
    return newId;
  }

  _createRec(form) {
    const keys = this.places;
    const result = new Object();
    const id = this._getLastId();

    for (let key of keys) {
      result[key] = form[key] ? form[key] : null;
    }

    return {id, ...result};
  }

  _filterForm(form) {
    const result = new Object()
    
    this.places.forEach((key) => {
      if (form[key]) {
        result[key] = form[key]
      }
    })

    return result
  }

  _validKey(value) {
    return this.places.includes(String(value));
  }

  _configForm(places, array) {
    return array.map((item) => {
      const obj = new Object()

      places.forEach((place) => {
        obj[place] = item[place]
      })

      return obj
    })
  }

  _coincidence(filter) {
    const keysFilter = Object.keys(filter)
    const filterLength = keysFilter.length
    
    return this.data.filter((item) => {
      let i = 0

      keysFilter.forEach((key) => {
        if (filter[key] === item[key]) i++
      })

      return i === filterLength
    })
  }

  _exception(filter) {
    const keysFilter = Object.keys(filter)
    const filterLength = keysFilter.length
    
    return this.data.filter((item) => {
      let i = 0

      keysFilter.forEach((key) => {
        if (filter[key] === item[key]) i++
      })

      return i !== filterLength
    })
  }

  insert(form) {
    const newData = [...this.data];
    
    const rec = this._createRec(form);

    rec.id = this._getLastId()

    newData.push(rec);

    this._setNewData(newData)

    return rec.id
  }

  update(filter, newState) {
    if (this.data.length < 1) return;

    const newStateValues = this._filterForm(newState)

    const filtered = this._coincidence(filter)

    const newData = this.data.map((item) => {
      if (filtered.includes(item)) {
        return {...item, ...newStateValues, id: item.id}
      }

      return item
    })

    this._setNewData(newData)
  }

  select(filter, form = [...this.places]) {
    const filtered = this._coincidence(filter)

    return this._configForm(form, filtered)
  }

  delete(filter) {
    const newData = this._exception(filter)

    this._setNewData(newData);
  }
}

module.exports = { Data };
