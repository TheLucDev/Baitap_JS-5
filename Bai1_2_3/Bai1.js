function diemKhuVuc(khuVuc){
    if (khuVuc == "A") {
        return 2;
    }
    if (khuVuc == "B") {
        return 1;
    }
    if (khuVuc == "C") {
        return 0.5;
    }
    if (khuVuc == "X") {
        return 0;
    }
}
function diemDoiTuong(doiTuong){
    if (doiTuong == 1) {
        return 2.5;
    }
    if (doiTuong == 2) {
        return 1.5;
    }
    if (doiTuong == 3) {
        return 1;
    }
    if (doiTuong == "X") {
        return 0;
    }
}
function tongDiem(){
    var diemChuan = document.getElementById("txtDiemChuan").value*1;
    var diem3Mon = document.getElementById("txtDiem3Mon").value*1;
    var diemKV = document.getElementById("txtDiemKV").value;
    var diemDT = document.getElementById("txtDiemDT").value;
    var diemCongKV = diemKhuVuc(diemKV);
    var diemCongDT = diemDoiTuong(diemDT);
    var diemUuTien = diemCongKV + diemCongDT;
    var diemTongKet = diem3Mon + diemUuTien;
    if (diemTongKet>=diemChuan) {
        alert("Thí sinh đậu! Tổng điểm : "+ diemTongKet);
    }
    else{
        alert("Thí sinh rớt! Tổng điểm : "+ diemTongKet);
    }
}