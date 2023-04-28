'use strict';

class CatClass {
  constructor(nickname, breed, age, gender) {
    this.nickname = nickname;
    this.breed = breed;
    this.age = age;
    this.gender = gender;
  }

  meow() {
    return `${this.nickname} is meowing`;
  }

  sleep() {
    return `${this.nickname} goes to sleep`;
  }
}

const coolerBarsik = new CatClass('Barsik', 'British', 3, 'male');
const Myrka = new CatClass('Myrka', 'British', 4, 'female');