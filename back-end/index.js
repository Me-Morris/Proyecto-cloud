const express = require('express')
const app = express()
require('dotenv').config()

const cors = require('cors');
const port = process.env.PORT

// IMPORT DE RUTAS
const contactsRoutes = require('./src/routes/contactsRoutes')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
// RUTA CONTACTOS
app.use('/contactos', contactsRoutes)

app.use(express.json())


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})