const Singleton = ((name)  => {
  this.name = name;
  return {
    getName: () => this.name,
    setName: (newName) => this.name = newName,
  }
})();

console.log(Singleton.getName());
Singleton.setName('hao');
console.log(Singleton.getName());
