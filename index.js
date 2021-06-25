var getEle = function(id) {
    return document.getElementById(id);
}
var notice = getEle('notice');
var danhSachSoNguyen = [];
var lamMoi = function() {
   getEle('soNguyen').value = '';
}
var Validator = new validator();
getEle('btnthemSo').addEventListener('click', function() {
   var soNguyen = getEle('soNguyen').value;
   var isValid = true;
   isValid &= Validator.checkIfValueIsEmpty(soNguyen, 'notice', '(*) Dữ liệu không được rỗng') 
        && Validator.checkValueIsInteger(soNguyen, 'notice', '(*) Vui lòng nhập vào số nguyên');
    if(!isValid) return;
    soNguyen = parseInt(soNguyen);
   danhSachSoNguyen.push(soNguyen);
   lamMoi();
   console.log(danhSachSoNguyen);
})

// 1. Tổng các số dương trong mảng
getEle('btntongSoDuong').addEventListener('click', function() {
    var sum = 0;
   for ( var i = 0; i < danhSachSoNguyen.length; i++){
        if(danhSachSoNguyen[i] > 0){
            sum = sum + danhSachSoNguyen[i];
        }
    }
    getEle('tongSoDuong').style.display = 'block';
    getEle('tongSoDuong').innerHTML = 'Tổng số dương trong mảng là: ' + ' ' + sum;
})
// End tổng các số dương trong mảng


// 2. Đếm có bao nhiêu số dương trong mảng
getEle('btnsoDuong').addEventListener('click', function() {
    var count = 0;
    for(var i = 0; i < danhSachSoNguyen.length; i++){
        if(danhSachSoNguyen[i] > 0){
            count++;
        }
    }
    getEle('soDuong').style.display = 'block';
    getEle('soDuong').innerHTML = 'Số lượng số dương trong mảng là: ' + ' ' + count;
    return count;
})
// end đếm có bao nhiêu số dương trong mảng

// 3. Tìm số nhỏ nhất trong mảng
getEle('btnsoNhoNhat').addEventListener('click', function() {
    var viTriMin;
    var min = danhSachSoNguyen[0];
    for(var i = 1; i < danhSachSoNguyen.length; i++){
        if(min > danhSachSoNguyen[i]){
            min = danhSachSoNguyen[i];
            viTriMin = i;
        }
    }
    getEle('soNhoNhat').style.display = 'block';
    getEle('soNhoNhat').innerHTML = 'Giá trị số nhỏ nhất trong mảng là: ' + ' ' + min ;
  })
// end số nhỏ nhất trong mảng

// 4. Số dương nhỏ nhất trong mảng
getEle('btnsoDuongNhoNhat').addEventListener('click', function() {
    var soDuongNhoNhat = danhSachSoNguyen[0];
    for(var i = 1; i < danhSachSoNguyen.length; i++){
        if(danhSachSoNguyen[i] < Math.abs(soDuongNhoNhat) && danhSachSoNguyen[i] > 0){
           soDuongNhoNhat= danhSachSoNguyen[i];
        }
    }
    getEle('soDuongNhoNhat').style.display = 'block';
    getEle('soDuongNhoNhat').innerHTML = 'Giá trị số dương nhỏ nhất trong mảng là: ' + ' ' + soDuongNhoNhat ;
})
// end tìm số dương nhỏ nhất trong mảng


// 5. Tìm số chẵn cuối cùng trong mảng
getEle('btnsoChanCuoiCung').addEventListener('click', function() {
    for(var i = danhSachSoNguyen.length; i >= 0; i--){
        if(danhSachSoNguyen[i] % 2 == 0){
           getEle('soChanCuoiCung').style.display = 'block';
           getEle('soChanCuoiCung').innerHTML = 'Giá trị số chẵn cuối cùng trong mảng là: ' + ' ' + danhSachSoNguyen[i] ;
           return danhSachSoNguyen[i];
        }
    }
    getEle('soChanCuoiCung').style.display = 'block';
    getEle('soChanCuoiCung').innerHTML =  '-1';
})
// end tìm số chẵn cuối cùng trong mảng
// 6. Đổi chỗ hai giá trị cho người dùng nhập vào vị trí
var newInput = function() {
    viTriMot = getEle('viTriMot').value = '';
    viTriHai = getEle('viTriHai').value ='';
}
getEle('btndoiChoGiaTri').addEventListener('click', function() {
    var viTriMot = getEle('viTriMot').value;
    var viTriHai = getEle('viTriHai').value;
    var Temp = danhSachSoNguyen[viTriMot];
    danhSachSoNguyen[viTriMot] = danhSachSoNguyen[viTriHai];
    danhSachSoNguyen[viTriHai] = Temp;
    getEle('doiChoGiaTri').style.display = 'block';
    getEle('doiChoGiaTri').innerHTML = 'Giá trị sau khi đổi chỗ là: ' +'<br>'+' Vị trí: '+ viTriMot + ' có giá trị là' +' '+ danhSachSoNguyen[viTriMot] + ' ;' + '<br>'+' Vị trí: '+ viTriHai + ' có giá trị là' +' '+ danhSachSoNguyen[viTriHai] ;
    newInput();
})
// 7. Sắp xếp theo thứ tự tăng dần
getEle('btnsapXep').addEventListener('click', function() {
    var bienTrungGian = danhSachSoNguyen[0];
    for(var i = 0; i < danhSachSoNguyen.length - 1; i++){
        for(var j = i+1; j < danhSachSoNguyen.length; j++){
            if(danhSachSoNguyen[i] > danhSachSoNguyen[j]){
                bienTrungGian = danhSachSoNguyen[j];
                danhSachSoNguyen[j] = danhSachSoNguyen[i];
                danhSachSoNguyen[i] = bienTrungGian;
            }
        }
    }
    getEle('sapXepTangDan').style.display = 'block';
    getEle('sapXepTangDan').innerHTML = 'Mảng sắp xếp theo thứ tự tăng dần là: ' + ' ' + danhSachSoNguyen ;
})
// end sắp xếp theo thứ tự tăng dần

// // 8. Tìm số nguyên tố đầu tiên trong mảng
// // điều kiện số nguyên tố
var timSoNguyenTo = function(nhapSoN){
    if(nhapSoN < 2){
        return false;
    }else{
        for(var i =2; i <= Math.sqrt(nhapSoN); i++){
            if(nhapSoN % i == 0){
                return false;
            }
        }
        return true;
    }
}
getEle('btntimSoNguyenTo').addEventListener('click', function() {
    for(var i =0; i < danhSachSoNguyen.length; i++){
        var soNguyenTo = timSoNguyenTo(danhSachSoNguyen[i]);
        if(soNguyenTo === true){
            getEle('timSoNguyenTo').style.display = 'block';
             getEle('timSoNguyenTo').innerHTML = 'Số nguyên tố đầu tiên trong mảng là: ' + ' ' + danhSachSoNguyen[i] ;
            return danhSachSoNguyen[i];
        }
    }
   getEle('timSoNguyenTo').style.display = 'block';
    getEle('timSoNguyenTo').innerHTML = '-1';
    return -1;
})
// end tìm số nguyên tố đầu tiên trong mảng

// 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
getEle('btntimSoLuongSoNguyen').addEventListener('click', function() {
    var countSo = 0;
    for(var i =0; i < danhSachSoNguyen.length; i++){
        if(danhSachSoNguyen[i] % 1 === 0){
            countSo++;
        }
    }
    getEle('timSoLuongSoNguyen').style.display = 'block';
    getEle('timSoLuongSoNguyen').innerHTML = 'tổng số lượng số nguyên là: ' + countSo++;
});
// đếm số lượng số nguyên trong mảng

// 10.So sánh số lượng số dương và số âm
getEle('btnsoSanh').addEventListener('click', function() {
    var soDuong = 0;
    var soAm = 0;
    for(var i =0;  i < danhSachSoNguyen.length; i++){
        if(danhSachSoNguyen[i] > 0){
           soDuong++;
        }
        if(danhSachSoNguyen[i] < 0){
           soAm++;
        }
    }
    if(soDuong > soAm){
        getEle('soSanh').style.display = 'block';
        getEle('soSanh').innerHTML = 'Số lượng của số dương lớn hơn số lượng của số âm';
    }else if(soDuong < soAm){
        getEle('soSanh').style.display = 'block';
        getEle('soSanh').innerHTML = 'Số lượng của số dương bé hơn số lượng của số âm';
    }else{
        getEle('soSanh').style.display = 'block';
        getEle('soSanh').innerHTML = 'Số lượng của số dương bằng số lượng của số âm';
    }
})
// end so sánh số lượng số dương và số âm
