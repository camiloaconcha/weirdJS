
/* First hoisting example*/

function b() {
    console.log('Called b');
}
b();

console.log(a);
var a = "Hello World"; 
console.log(a);




/*var a = "Hello World";
console.log(a);

if (a === undefined) {
    console.log('a is undefined');
}else{
    console.log('a is defined!');
}*/
