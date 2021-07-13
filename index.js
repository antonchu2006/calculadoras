const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() )


app.get('/test', (req, res) => {
    res.status(200).send({
        usage: 'Haz un petición POST con un json con los siguientes valores: "numero" y "numero2"; y en la URI la accion que quieres hacer (ejemplo: multiplicar)',
        acciones: 'Sumar, restar, multiplicarm, dividir, potencia, raizcuadrada'
    })
});

app.post('/multiplicar', (req, res) => {
    const { numero } = req.body;
    const { numero2 } = req.body;

    if (!numero) {
        res.status(418).send({ message: 'Haz un GET de /test' })
    }
    if (!numero2) {
        res.status(418).send({ message: 'Haz un GET de /test' })
    }

    const resultado = numero * numero2;
    res.send({ 
        result: `${resultado}`
    })
});

app.post('/sumar', (req, res) => {
    const { numero } = req.body;
    const { numero2 } = req.body;

    if (!numero) {
        res.status(418).send({ message: 'Haz un GET de /test' })
    }
    if (!numero2) {
        res.status(418).send({ message: 'Haz un GET de /test' })
    }

    const resultado = numero + numero2;

    res.send({ 
        result: `${resultado}`
    })

});


app.post('/restar', (req, res) => {
    const { numero } = req.body;
    const { numero2 } = req.body;

    if (!numero) {
        res.status(418).send({ message: 'Haz un GET de /test' })
    }
    if (!numero2) {
        res.status(418).send({ message: 'Haz un GET de /test' })
    }

    const resultado = numero - numero2;

    res.send({ 
        result: `${resultado}`
    })

});

app.post('/dividir', (req, res) => {
    const { numero } = req.body;
    const { numero2 } = req.body;

    if (numero2 === 0) {
        res.status(418).send({ message: 'Que quieres petar el universo? wtf'})
    }

    if (!numero) {
        res.status(418).send({ message: 'Haz un GET de /test' })
    }
    if (!numero2) {
        res.status(418).send({ message: 'Haz un GET de /test' })
    }

    const resultado = numero / numero2;

    res.send({ 
        result: `${resultado}`
    })

});


app.post('/raizcuadrada', (req, res) => {
    const { numero } = req.body;

    if (!numero) {
        res.status(418).send({ message: 'Haz una petición POST con un json con un parámetro "numero"' })
    }

    const resultado = Math.sqrt(numero);

    res.send({ 
        result: `${resultado}`
    })

});

app.post('/potencia', (req, res) => {
    const { numero } = req.body;
    const { numero2 } = req.body;

    if (!numero) {
        res.status(418).send({ message: 'Haz una petición POST con un json con un parámetro "numero"(base) y "numero2"(exponente)' })
    }
    if (!numero2) {
        res.status(418).send({ message: 'Haz una petición POST con un json con un parámetro "numero"(base) y "numero2"(exponente)' })
    }

    const resultado = Math.pow(numero, numero2);

    res.send({ 
        result: `${resultado}`
    })

});


app.listen(
    PORT,
    () => console.log(`escuchando en la URI http://localhost:${PORT}`)
)
