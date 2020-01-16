
class Store {
  constructor(listenerList) {
    this.listenerList = listenerList;
  }
  listen(id, info) {
    if (!this.listenerList[id]) {
      this.orderList[id] = [];
    }
    this.orderList[id].push(info);
    console.log('Your order added');
  }

  publish() {
    let id = Reflect.ownKeys(listenerList).shift();
    let infos = this.listenerList[id];

    if (!infos || infos.length === 0) {
      console.log('No detail!');
      return false;
    }

    for (let i = 0, info; info = infos[i++];) {
      console.log('Your ');
      info[i]();
      console.log('is coming');
    }
  }
}