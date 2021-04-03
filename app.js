function createRegister() {
  var iD = document.getElementById("txtId").value;
  var name = document.getElementById("txtName").value;
  var price = document.getElementById("txtPrice").value;
  var day = document.getElementById("txtMfd").value;
  var yes = document.getElementById("optYes");
  var no = document.getElementById("optNo");
  if (yes.checked) stock = yes.value;
  if (no.checked) stock = no.value;
  var city = document.getElementById("City").value;
  document.getElementById("lblId").innerText = iD;
  document.getElementById("lblName").innerText = name;
  document.getElementById("lblPrice").innerText = price;
  document.getElementById("lblDay").innerText = day;
  document.getElementById("lblStock").innerText = stock;
  document.getElementById("lblShipped").innerText = city;
}
