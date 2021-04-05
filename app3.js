function f1(){
    var city = ["BinhThuan", "HCM", "PhanThiet","HaNoi"];
    city.splice(1,0, "Phu Yen", "SaiGon");
    document.write("city: " + city.toString());
}
f1();