const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const alumnos = require('./routes/clientes');
app.use(alumnos)

app.use(express.urlencoded({extended: true}));
app.use(express.json());


    app.get('/', (req, res) => {
        res.send('hola')})
  
    app.listen(4000, () => {
    console.log('Server UPI en http://localhost:4000');
});
