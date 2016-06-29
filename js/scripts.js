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

var clearForm = function () {
  $("#customer-name").val('');
  $("#initialDeposit").val('');
  $("#withdrawEntry").val('');
  $("#depositEntry").val('');
};

var bank = null;
$(document).ready(function(){

  $("#createAccount").click(function(){
    var initDeposit = parseInt($("#initialDeposit").val());
    var customerName = $("#customer-name").val();
    bank = new BankAccount (customerName, initDeposit);
    $("#output").html("<h3>Thank you for registering, " + customerName + "!</h3> Initial balance deposited is: $" + bank.balance + ".</h4>")
    clearForm();

    $("#withdrawButton").click(function(){
      var withdrawal = parseInt($("#withdrawEntry").val());
      bank.withdraw(withdrawal);
      $("#output").html("<h4>You have withdrawn $" + withdrawal + " from your account.</h4><h4>Current balance: $" + bank.balance + ".</h4");
      clearForm();
    });

    $("#depositButton").click(function(){
      var deposit = parseInt($("#depositEntry").val());
      bank.deposit(deposit);
      $("#output").html("<h4>You have deposited $" + deposit + " into your account.</h4><h4>Current balance: $" + bank.balance + ".</h4");
      clearForm();

    });
  });
});
