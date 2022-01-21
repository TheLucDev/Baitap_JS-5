const bill_1 = 4.5;
const servc_1 = 20.5;
const vip_1 = 7.5;

const bill_2 = 15;
const servc_2 = 7.5; //per 10 connect
const servc_2_plus = 5;
const vip_2 = 50;

function  hienThi(){
    var typeVal = document.getElementById("txtType").value;
    console.log(typeVal);
    if (typeVal == 1) {
        document.getElementById("connect").style.display = "none";
    }
    if (typeVal == 2) {
        document.getElementById("connect").style.display = "block";
    }
}
function nhaDan(vipNum){
    var tongTien4 = 0;
    tongTien4 = bill_1 + servc_1 +  vipNum*vip_1;
    alert("Tổng tiền là : "+ tongTien4 + " USD");
}
function doanhNghiep(vipNum,cntNum){
    var tongTien4 = 0;
    if(cntNum>10){
        tongTien4 = bill_2 + servc_2*10 + servc_2_plus*(cntNum-10) + vipNum*vip_2;
        alert("Tổng tiền là : "+ tongTien4 + " USD");
    }
    else{
        tongTien4 = bill_2 + servc_2*cntNum +vip_2*vipNum;
        alert("Tổng tiền là : "+ tongTien4 + " USD");
    }
}

function tinhTienCap(){
    var code4 = document.getElementById("txtCode").value;

    var type4 = document.getElementById("txtType").value;
    var num4 = document.getElementById("txtConnectNumber").value*1;
    var vip4 = document.getElementById("txtVip").value*1;

    if (type4==1) {
        nhaDan(vip4);
    }
    else if(type4==2){
        doanhNghiep(vip4,num4);
    }
    else alert("Bạn chưa chọn loại khách hàng!");
}