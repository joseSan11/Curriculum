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

function toad page 
    swal.fire{
        imagenURL:"https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg "
        ImagenAlt: "a tall image",
        showconfirm-Button; false;
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