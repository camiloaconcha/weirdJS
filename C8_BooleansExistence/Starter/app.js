Boolean(null);//False is the lack of existance
Boolean(undefined);//False
Boolean(""); //false


var a;

if(a){
    console.log("Coercion");
}

var b = 0;
if(b || b===0){
    console.log('Its value is Cero');
}
