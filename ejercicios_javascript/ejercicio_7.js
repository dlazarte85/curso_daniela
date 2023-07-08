var numero_1=prompt("numero1")
var numero_2=prompt("numero2")
var numero_3=prompt("numero3")
numero_1=parseInt(numero_1)
numero_2=parseInt(numero_2)
numero_3=parseInt(numero_3)
if (numero_1>numero_2){
    if (numero_1>numero_3){
        console.log("el numero mayor es=",numero_1)
    }else{
        console.log("el numero mayor es=",numero_3)
    }
}else{
    if(numero_2>numero_3){
        console.log("el numero mayor es=", numero_2)
    }else{
        console.log("el numero mayor es=", numero_3)
    }
}

//otra manera
let mayor = 0;
if (numero_1 > numero_2) {
  mayor = numero_1;
} else {
  mayor = numero_2;
}
if (mayor > numero_3) {
  mayor = numero_3;
}
console.log(mayor);