function BankAccount(name, initial) {
  this.nameAccount = name;
  this.initialDep = initial;
  this.balance = initial;
}
BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
}
BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
}

var bank = null;
$(document).ready(function(){
  $("#createAccount").click(function(){
    var initDeposit = parseInt($("#initialDeposit").val());
    var customerName = $("#customer-name").val();
    bank = new BankAccount (customerName, initDeposit);
    $("#withdrawButton").click(function(){
      bank.withdraw(parseInt($("#withdrawEntry").val()));
      console.log(bank);
    });

    $("#depositButton").click(function(){
      bank.deposit(parseInt($("#depositEntry").val()));
      console.log(bank);
    });
    console.log(bank);
  });
});
