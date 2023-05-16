(function() {
  function Checking(amt) {
    this.balance = amt
    this.deposit = deposit
    this.withdraw = withdraw
    this.toString = toString
  }

  function deposit(amt) {
    this.balance += amt
  }

  function withdraw(amt) {
    if (amt <= this.balance) {
      this.balance -= amt
    }

    if (amt > this.balance) {
      console.log('insufficient funds')
    }
  }

  function toString() {
    return 'Balance: ' + this.balance
  }

  var account = new Checking(500)

  account.deposit(1000)
  console.log(account.toString())

  account.withdraw(750)
  console.log(account.toString())

  account.withdraw(800)
  console.log(account.toString())

})()

