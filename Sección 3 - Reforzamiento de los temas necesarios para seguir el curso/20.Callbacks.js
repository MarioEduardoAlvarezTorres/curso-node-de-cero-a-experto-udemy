/* Funcion que se ejecuta despues en cierto punto del tiempo*/

setTimeout(()=>{
    console.log("HOLA MUNDO")
}, 1000);

const getUsuarioByID = (id,callback) =>{
    const user = {
        id,
        nombre:"fernando"
    }

    setTimeout(() => {
        callback(user);
    }, 1500);
}

getUsuarioByID(10,(usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});