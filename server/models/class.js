class Data {
  constructor(places) {
    this.data = [];
    this.places = [...places]
  }

  _setNewData(newData) {
    return this.data = newData;
  }

  _getNextId() {
    const lastIndex = this.data.length - 1;
    const lastRec = this.data[lastRecord];

    return lastRec?.id ? lastRec.id + 1 : undefined
  }

  _createRec(form) {
    const { places } = this
    const result = new Object()
    const id = this._getNextId()
    
    places.forEach((place) => {
        result[place] = form[place]
    })
    
    return {id, ...result}
  }

  _validKey(key) {
    return this.places.includes(string(key))
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
    if (newState?.id) throw new Error("ups.. it's id?")
    if (this.data.length < 1) return;

    const filtered = this._coincidence(filter)

    const newData = this.data.map((item) => {
      if (filtered.includes(item)) {
        return {...item, ...newState}
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
