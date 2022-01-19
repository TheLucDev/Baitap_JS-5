var tongTien = 0;
function tienDien_0_50(numberKW) {
    var tienDien50KwDau = 500*numberKW;
        console.log(tienDien50KwDau);
    var tongTien = tienDien50KwDau;
        alert("Tổng tiền điện: "+ tongTien + " VND");
}
function tienDien_50_100(numberKW) {
    var tienDien50KwKe = 650*(numberKW-50);
        console.log(tienDien50KwKe);
        tongTien = 50*500 + tienDien50KwKe ;
        alert("Tổng tiền điện: "+ tongTien + " VND");
}
function tienDien_100_200(numberKW) {
    var tienDien50KwKe = 850*(numberKW-100);
        console.log(tienDien50KwKe);
        tongTien = 50*500 + 650*50 + tienDien50KwKe ;
        alert("Tổng tiền điện: "+ tongTien + " VND");
}
function tienDien_200_350(numberKW){
    var tienDien150KwKe = 1100*(numberKW-200);
        console.log(tienDien150KwKe);
        tongTien = 50*500 + 650*50 + 850*100 + tienDien150KwKe;
        alert("Tổng tiền điện: "+ tongTien + " VND");
}
function tienDien_Max(numberKW){
    var tienDienMax = 1300*(numberKW-350);
        console.log(tienDienMax);
        tongTien = 50*500 + 650*50 + 850*100 + 150*1100 + tienDienMax;
        alert("Tổng tiền điện: "+ tongTien + " VND");
}

function tinhTien(){
    var nameEl = document.getElementById("txtName").value;
    var numEl = document.getElementById("txtNumber").value*1;

    if (numEl <= 50) {
        tienDien_0_50(numEl);
    }
    else if (numEl <= 100){
        tienDien_50_100(numEl);
    }
    else if(numEl <= 200){
        tienDien_100_200(numEl);
    }
    else if(numEl <= 350){
        tienDien_200_350(numEl);
    }
    else{
        tienDien_Max(numEl);
    }
}