// bai 5: 
// giải pt bậc 1: ax^2 + bx + c = 0
// (làm tròn kq đến 2 chữ só thập phân)

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