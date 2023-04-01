const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());

// static folder
app.use(express.static(`${__dirname}/public`));


// routes
app.use((req, res, next) => {
    res.status(404).render('404', {
        error: '404',
        msg: 'Página no encontrada'
    })
});


app.listen(port, () => console.log(`Conectado al puerto: ${port}`));