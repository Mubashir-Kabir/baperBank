document.getElementById("dipositBtn").addEventListener("click", function () {
  const dipositAmount = parseFloat(
    document.getElementById("dipositField").value
  );
  if (isNaN(dipositAmount)) {
    alert("Please enter valid amount");
    document.getElementById("dipositField").value = "";
    return;
  }
  const totalDiposit = parseFloat(
    document.getElementById("totalDiposit").innerText
  );
  document.getElementById("totalDiposit").innerText =
    totalDiposit + dipositAmount;

  const balance = parseFloat(document.getElementById("balance").innerText);
  document.getElementById("balance").innerText = balance + dipositAmount;

  document.getElementById("dipositField").value = "";
});
