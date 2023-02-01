//  bai 1: 
// khai báo 3 biến chứa thông tin: họ tên, tuổi, địa chỉ
// in ra thông tin sau 2 giây 
// sử dụng comment để ghi chú đoạn mã 

var myName = 'Trinh Hanh'; 
var age= '20'; 
var address = '30 Hung Vuong'

setTimeout(function()
{
    console.log(myName, '-',age,'-',address); 
}, 2000) // 2000 miliseconds 