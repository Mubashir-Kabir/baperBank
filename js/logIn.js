document.getElementById("logInBtn").addEventListener("click", function () {
  if (
    document.getElementById("userEmail").value == "baper@bank.com" &&
    document.getElementById("userPassword").value == "baperbank"
  ) {
    window.location.href = "main.html";
  } else {
    alert("Invalid User");
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";
  }
});
