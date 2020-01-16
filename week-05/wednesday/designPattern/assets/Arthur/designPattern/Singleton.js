class Singleton {
  constructor(name, age, major) {
    if (!Singleton.instance) {
      this.name = name;
      this.age = age;
      this.major = major;
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

let a = new Singleton('Tom', 24, 'Music');
let b = new Singleton('Ace', 25, 'CS');

console.log(a === b);