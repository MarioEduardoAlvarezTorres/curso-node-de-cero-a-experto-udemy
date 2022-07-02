require('dotenv').config();

const express = require('express')
const hbs = require('hbs');
const app = express()
const port= process.env.PORT;



//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//SERVIR CONTENIDO ESTATICA SE NECESITA:
// APP PARA LA APLICACION DE EXPRESS
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home',{
    nombre: "Mario Eduardo",
    titulo: "Curso de Node"
  })
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: "Mario Eduardo",
    titulo: "Curso de Node"
  })
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: "Mario Eduardo",
    titulo: "Curso de Node"
  })
})

app.listen(port, ()=>{
    console.log(`Example app oaaa listening at http://localhost:${port}`)
});

