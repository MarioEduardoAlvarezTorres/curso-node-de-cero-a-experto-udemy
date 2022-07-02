const http = require('http');
//req lo que esta solicitando el cliente
//res es lo que se responde al procesar el req
http.createServer((req,res)=>{
    res.write("Hola Mundo");
    res.end();
})
.listen(8080);

console.log("Escuchando el puerto",8080)