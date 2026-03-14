export class HolbertonClass {
  constructor(year, city) {
    this._year = year;
    this._city = city;
  }

  get year() {
    return this._year;
  }

  get city() {
    return this._city;
  }
}

export class ClassList {
  constructor(data) {
    this._data = data.map(
      (classItem) => new HolbertonClass(classItem.year, classItem.city),
    );
  }

  get data() {
    return this._data;
  }
}

export const listOfClasses = new ClassList([
  { year: 1920, city: 'San Francisco' },
  { year: 1965, city: 'Paris' },
  { year: 2002, city: 'Lyon' },
]);
