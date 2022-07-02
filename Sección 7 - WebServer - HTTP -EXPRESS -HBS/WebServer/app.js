const express = require('express')
const app = express()
const port= 8080;
//SERVIR CONTENIDO ESTATICA SE NECESITA:
// APP PARA LA APLICACION DE EXPRESS
app.use(express.static('public'))

app.get('/hola-mundo', (req, res) => {
    res.send('Hello World')
  })

app.get('*', (req, res) => {
  res.sendfile(__dirname + '/public/404.html')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});

