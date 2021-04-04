function submit() {
  var userDetail = {userName:"duclong", pin:405,otp:123123};

  var txtName = document.getElementById("txtName").value;
  var txtCode = document.getElementById("txtCode").value;
  var msg = document.getElementById("msg");

  if (userDetail.userName == txtName) {
    if (userDetail.txtCode) {
      msg.innerHTML = "pin verified";
    } else if (userDetail.otp == txtCode) {
      msg.innerHTML = "otp verified";
    } else {
      msg.innerHTML = " invalid otp";
    }
  } else {
    msg.innerHTML = "invalid username";
  }
}
