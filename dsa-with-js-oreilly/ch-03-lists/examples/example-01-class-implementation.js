module.exports = class List {
  constructor() {
    this.listSize = 0
    this.pos = 0
    this.dataStore = []
  }

  get length() {
    return this.listSize;
  }

  clear() {
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  toString() {
    return this.dataStore.toString();
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  insert(element, after) {
    const insertPos = this.dataStore.indexOf(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  }

  append(element) {
    this.dataStore.push(element);
    this.listSize++;
  }

  remove(element) {
    const index = this.dataStore.indexOf(element);
    if (index > -1) {
      this.dataStore.splice(index, 1);
      this.listSize--;
      return true;
    }
    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  prev() {
    if (this.pos > 0) {
      this.pos--;
    }
  }

  next() {
    if (this.pos < this.listSize - 1) {
      this.pos++;
    }
  }

  currPos() {
    return this.pos;
  }

  moveTo(position) {
    if (position >= 0 && position < this.listSize) {
      this.pos = position;
    }
  }

  contains(element) {
    return this.dataStore.includes(element)
  }
}

