document.getElementById("deposit-btn").addEventListener("click", function () {
  const newAmountDeposit = getElementByIdInputFieldPage2("deposit-field");
  const previousAmountDeposit = getElements("previous-amount");
  const totalAmount = newAmountDeposit + previousAmountDeposit;
  getTextofElement("previous-amount", totalAmount);
  const totalId = getElements("total-balance");
  const newTotal = totalId + newAmountDeposit;
  getTextofElement("total-balance",newTotal);
});
