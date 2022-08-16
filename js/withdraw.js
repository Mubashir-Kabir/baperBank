document.getElementById("withdrawBtn").addEventListener("click", function () {
  const withdrawAmount = parseFloat(
    document.getElementById("withdrawField").value
  );
  const balance = parseFloat(document.getElementById("balance").innerText);
  if (isNaN(withdrawAmount)) {
    alert("Please enter valid amount");
    document.getElementById("withdrawField").value = "";
    return;
  }
  if (withdrawAmount > balance) {
    alert("baper oto tk nai. bap fokir");
    document.getElementById("withdrawField").value = "";
    return;
  }
  const totalWithdraw = parseFloat(
    document.getElementById("totalWithdraw").innerText
  );
  document.getElementById("totalWithdraw").innerText =
    totalWithdraw + withdrawAmount;

  document.getElementById("balance").innerText = balance - withdrawAmount;

  document.getElementById("withdrawField").value = "";
});
