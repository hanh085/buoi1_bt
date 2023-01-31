/*
//  bai 1: 
var myName = 'Trinh Hanh'; 
var age= '20'; 
var address = '30 Hung Vuong'

setTimeout(function()
{
    console.log(myName, '-',age,'-',address); 
}, 2000)
 */

/*
// bai 2: 
var a,b,c; 
a = alert('day la alert');
console.log(a); 
b = confirm('day la confirm'); 
console.log(b); 
c = prompt('day la promt'); 
console.log(c); 
*/

/*
// bai 1: 
var cdai = 1*prompt('Nhap chieu dai HCN: '); 
var crong = 1*prompt('Nhap chieu rong HCN: ');  
console.log('Chu vi: ',2*(cdai+crong)); 
console.log('Dien tich: ',cdai*crong); 
*/

/*
// bai 2: 
var r = prompt('Nhap ban kinh: '); 
console.log('Chu vi hinh tron: ', 2*3.14*r); 
console.log('Dien tich hinh tron: ', 3.14*r*r); 
*/

/*
// bai 3: 
var a,b; 
a = 1*prompt('Nhap a: '); 
b = 1*prompt('Nhap b: '); 
var tong = a+b; 
var hieu = a-b; 
var tich = a*b; 
var thuong1 = a/b; 
var thuong2 = a%b;  
*/

/*
// bai 4: 
alert('pt bac 1: ax+b = 0'); 
var a = 1*prompt(' a= '); 
var b = 1*prompt('b = '); 
if (a != 0 && b!= 0)
{
    var x = -b/a; 
    console.log('x = ', x.toFixed(2)); 
}
else if (a== 0 && b==0)
{
    console.log('pt vo so nghiem')
}
else if (a== 0 && b!=0)
{
    console.log('pt vo nghiem')
}
*/

/*
// bai 5: 
alert('pt bac 2: ax^2 + bx + c = 0'); 
var a = 1*prompt(' a= '); 
var b = 1*prompt(' b = '); 
var c = 1*prompt(' c = '); 

var delta = b**2 - 4*a*c; 
var k = Math.sqrt(delta); 
var x1,x2; 

if (delta > 0)
{
    x1 = (-b + k)/ 2/a; 
    x2 = (-b - k)/ 2/a; 
    console.log('pt co 2 nghiem phan biet: ')
    console.log('x1 = ', x1.toFixed(2)); 
    console.log('x2 = ', x2.toFixed(2)); 
}
else if(delta == 0)
{
    x1 = -b / 2/ a; 
    x2=x1; 
    console.log('pt co 1 nghiem: ');
    console.log('x1 = ', x1.toFixed(2));  
}
else{
    console.log('pt vo nghiem'); 
}

*/