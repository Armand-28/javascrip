// escribir un algoritmo que pida al usuario un numero del 1 al 12 y responda con  con el mes correspondiente 
let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
];

let mes = prompt("Ingrese el numero  del 1 al 12 para saber a que mes corresponde");
document.write(meses[mes - 1]);


