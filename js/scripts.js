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

$(document).ready(function(){
  $("#createAccount").click(function(){
    $("#InitialDeposit").val();
  });

  $("#withdrawButton").click(function(){
    var withdrawal = parseInt($("#withdrawEntry").val());
    bank.withdraw(withdrawal);
  });

  $("#depositButton").click(function(){
    $("#depositEntry").vak();
  });

  var bank = new BankAccount ("Bob", 500);

  bank.withdraw(50);
  console.log(bank);
});
