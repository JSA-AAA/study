const interestCalculate = {
  Saving_Account: function (amount, year) {
    return amount * 0.05 * year;
  },
  Checking_Account: function (amount, year) {
    return amount * 0.02 * year;
  },
  Investment_Account: function (amount, year) {
    return amount * 0.07 * year;
  }
};


class UserInfo {
  constructor(account, amount, year) {
    this.account = account;
    this.amount = amount;
    this.year = year;
  }

  cal() {
    return interestCalculate[this.account](this.amount, this.year);
  }
}

let a = new UserInfo('Saving_Account', 1000, 2);

console.log(a.cal());