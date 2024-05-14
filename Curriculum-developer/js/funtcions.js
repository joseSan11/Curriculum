//alert ("hola soy un alert desde un archivo")

const { swal } = require("./sweetalert2@11");

//console.log("hola soy una aleta");

document.write("hola soy la consola");

Swal.fire("hola soy una alerta de una libreria");




//variables y tipo de datos
const pi = 3.14;
var name = "jose angel";
let edad = 18;
let edad_String = "32";
var bool = false;

//operadores basicos + - * / %

var suma = 5 - 2;
console.log("suma");
console.log("edad_String");
var one = 10;
var two = 20;
console.log("one+two");
console.log("one-two");
console.log("one*two");
console.log("one/two");
console.log("one%two");

//operadores de comparacion
//< > >= =< <> 
// =asignacion
// == comparacion s=="S"
// === comparacion s=="S"
// ==== es una mentira del profesor 

//operadores logicos
// add && or ||

console.log("mi nombre",name,"tiene como edad ",edad);

function load_page (){
    swal.fire({
        imagenURL:"https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg "
        ImagenAlt: "a tall image",
        showconfirmButton = false
        })   
    }
function send_info(){
    let name = document.getElementById("name");
    let last_name = document.getElementById ("last_name").ariaValueMin
    if (name.length==0||last_name.length==0){
        swal.fire ({
                little: "campos vacios",
                text:"algunos de los campos se encuentran va",
                icon:"error"
                });
                if(name.length==0){
                    document.getElementById("name".style.border = "2px solid red")
                }
                if (last_name.length==0){
                    document.getElementById("last_name").style.background = "red"
                }
            }else{
                document.getElementById("print").innerText = <strong> name + last_name </strong>
            }

}

//arrays 
var dias_sem = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
var array_num = [1,2,3,4,5,6,7,8,9];
var array_mix = [1,2,5,"abc"];
var array_mul = [
    {name:"jose angel", age:18, color:"blue"},
    {name:"anyi", age:45, color:"white"},
    {name:"celeste", age:3, color:"purple"},
    {name:"antonella", age:46, color:"gray"}
     
] 
var json_ejm = {
    name ="jose",
    lastname = "angel",
    phone= "3107884570",
    email = "jasantiagoo@ufpso.edu.co",
}

console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);

for(ist i=0;1<dias_sem.length,i++) {
    console.log(dias_sem[i]);
}

var J=0;
white(j<array_mum,l)

j++;


var acum=0;
for(ist h=0;h<array_num.length,h++) {
    acum += array_num[h]
}
console.log(acum);

var suma_age = 0;
for(ist a=0;a<array_mul.length,a++){
suma_age += array_mul[a].age;
}
console.log(suma_age)
document.getElementById("print age").innerText = "el valor de la suma es:"+ suma_age;    

function limpiar(){
    document.getElementById("valores").value = "";
    document.getElementById("print_age").innerText = "";
    document.getElementById("print_age_eti").innerHTML = "";
}

var array_ejmul = [1,2,3,4,5,6,7,8,9];

function eliminar (){
    array_ejm.pop();
    document.getElementById("valores").value = array_ejm;
}

function agregar(){
    array_ejm.push(20);
    document.getElementById("valores").value = array_ejm;
}

var array_ejmul = [1,2,3,4,5,6,7,8,9];

function eliminar(){
    array_ejm.pop();
    document.getElementById("valores").value = array_ejm;
}

function agregar2(){
    array_ejm.pop();
    document.getElementById("valores").value = array_ejm;
}
function limpiar2()