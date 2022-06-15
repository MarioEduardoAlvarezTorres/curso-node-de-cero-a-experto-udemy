const deadpool = {
    nombre:"Wade",
    apellido:"Winston",
    poder: "Regeneración",
    edad: '50',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }   
}

//console.log(deadpool.getNombre())

// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    = deadpool.poder;

//DESTRUCTURACION
// const {nombre,apellido,poder,edad=0} = deadpool;

// console.log(nombre,apellido,poder,edad);


/*function imprimeHeroe(heroe) {
    const {nombre,apellido,poder,edad=0} = deadpool
    console.log(nombre,apellido,poder,edad);
}*/

function imprimeHeroe({nombre,apellido,poder,edad=0}) {
    console.log(nombre,apellido,poder,edad);
}

//imprimeHeroe(deadpool)

const heroes = ['Deadpool','Super Man','Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [h1,h2,h3] = heroes;

console.log(h1,h2,h3);
