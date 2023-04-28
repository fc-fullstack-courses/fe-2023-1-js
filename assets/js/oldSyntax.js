function Cat(nickname, breed, age, gender) {
  this.nickname = nickname;
  this.breed = breed;
  this.age = age;
  this.gender = gender;
}

function CatPrototype() {
  this.meow = function () {
    return `${this.nickname} is meowing`;
  };

  this.sleep = function () {
    return `${this.nickname} goes to sleep`;
  };
}

Cat.prototype = new CatPrototype();

const barsik = new Cat('Barsik', 'British', 3, 'male');
