// function tienDien_0_50(numberKW) {
//     if (numberKW<=50) {
//         return 500;
//     }
// }
// function tienDien_50_100(numberKW) {
//     if (numberKW<=100) {
//         return 650;
//     }
// }


function tinhTien(){
    var nameEl = document.getElementById("txtName").value;
    var numEl = document.getElementById("txtNumber").value*1;
    // console.log(nameEl,numEl);
    var tongTien = 0;


    if (numEl <= 50) {
        var tienDien50KwDau = 500*numEl;
        console.log(tienDien50KwDau);
        tongTien = tienDien50KwDau;
        alert("Tổng tiền điện: "+ tongTien + " VND");
    }
    else if (numEl <= 100){
        var tienDien50KwKe = 650*(numEl-50);
        console.log(tienDien50KwKe);
        tongTien = 25000 + tienDien50KwKe ;
        alert("Tổng tiền điện: "+ tongTien + " VND");
    }
    else if(numEl <= 150){
        var tienDien100KwKe = 850*(numEl-100);
        console.log(tienDien100KwKe);
        tongTien = 25000 + 650*50 + tienDien100KwKe;
        alert("Tổng tiền điện: "+ tongTien + " VND");
    }
    else if(numEl <= 350){
        var tienDien150KwKe = 1100*(numEl-200);
        console.log(tienDien150KwKe);
        tongTien = 25000 + 650*50 + 850*100 + tienDien150KwKe;
        alert("Tổng tiền điện: "+ tongTien + " VND");
    }
    else{
        var tienDienMax = 1300*(numEl-350);
        console.log(tienDienMax);
        tongTien = 50*500 + 650*50 + 850*100 + 150*1100 + tienDienMax;
        alert("Tổng tiền điện: "+ tongTien + " VND");
    }
}