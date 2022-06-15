console.log("Inicio de Programa");

setTimeout(() => {
    console.log("Primer Timeout")
}, 3000);
console.log("Fin de Programa");

setTimeout(() => {
    console.log("Segundo Timeout")
}, 0);
console.log("Fin de Programa");

setTimeout(() => {
    console.log("Tercer Timeout")
}, 0);

console.log("Fin de Programa");