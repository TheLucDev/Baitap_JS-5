function tinhLuong_60(numSal){
    alert("Thuế phải trả : "+ numSal*0.05 +"tr VND")
}
function tinhLuong_60_120(numSal){
    alert("Thuế phải trả : "+ numSal*0.1 +"tr VND")
}
function tinhLuong_120_210(numSal){
    alert("Thuế phải trả : "+ numSal*0.15 +"tr VND")
}
function tinhLuong_210_384(numSal){
    alert("Thuế phải trả : "+ numSal*0.2 +"tr VND")
}
function tinhLuong_384_624(numSal){
    alert("Thuế phải trả : "+ numSal*0.25 +"tr VND")
}
function tinhLuong_624_960(numSal){
    alert("Thuế phải trả : "+ numSal*0.3 +"tr VND")
}
function tinhLuong_960(numSal){
    alert("Thuế phải trả : "+ numSal*0.35 +"tr VND")
}

function tinhThue(){
    var name3 = document.getElementById("txtName3").value;
    var luong = document.getElementById("txtNumber3").value*1;
    var soNguoi = document.getElementById("txtPeople3").value*1;

    var tongLuong = luong - 4 - soNguoi*1.6;
    console.log(tongLuong);
    if(tongLuong<=0){
        alert("Mời nhập lại!");
    }
    else if (tongLuong<=60) {
        tinhLuong_60(tongLuong);
    }
    else if (tongLuong>60 && tongLuong <=120){
        tinhLuong_60_120(tongLuong);
    }
    else if(tongLuong>120 && tongLuong <=210){
        tinhLuong_120_210(tongLuong);
    }
    else if(tongLuong>210 && tongLuong <=384){
        tinhLuong_210_384(tongLuong);
    }
    else if(tongLuong>384 && tongLuong <=624){
        tinhLuong_384_624(tongLuong);
    }
    else if(tongLuong>624 && tongLuong <=960){
        tinhLuong_624_960(tongLuong);
    }
    else if(tongLuong>960){
        tinhLuong_960(tongLuong);
    }
}