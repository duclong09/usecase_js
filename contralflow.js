function selecDisk() {
  var lstHdd = document.getElementById("listHdd");
  var txtRam = document.getElementById("txtRam");

  if (parseInt(lstHdd.value) >= 5) {
    txtRam.disabled = false;

    lstHdd.disabled = true;
  }
}

function selectRam() {
  var txtRam = document.getElementById("txtRam");
  var lstGraphic = document.getElementById("lstGraphic");
  if (txtRam.value >= 4) {
    lstGraphic.disabled = false;
    txtRam.disabled = true;
  }
}

function selectGraphic() {
  var lstGraphic = document.getElementById("lstGraphic");
  var btnInstall = document.getElementById("btnInstall");
  if (lstGraphic.value == "yes") {
    btnInstall.disabled = false;
    lstGraphic.disabled = true;
  }
}

function install() {
  document.write("game install succesfully");
}
