const subject = function() {
  this.observerList = [];// observers
  return{
    subscribe: (listener) => this.observerList.push(listener),
    unsubscribe: (listener) => {
      this.observerList = this.observerList.filter( observer => observer.name !== listener.name);
    },
    notice: () => this.observerList.forEach(observer => observer.print()),
    showObservers: () => console.log(this.observerList),
  }
}();

for(let i = 1; i <= 10; i++){
  subject.subscribe(
    {
      name: `ob-${i}`,
      print: () => console.log(`this is observer ${i}`),
    });
};

subject.showObservers();
subject.unsubscribe({
  name: `ob-3`,
  print: () => console.log(`this is observer ${i}`),
});
subject.showObservers();
subject.notice();