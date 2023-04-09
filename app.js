const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');

// port config
const app = express();
const port = process.env.PORT;

// MongoDB connection
const connection = require('./helpers/mongodbConnect');

connection();

// cors middleware
app.use(cors());

// cookie-parser middleware
app.use(cookieParser());

// template engine
app.set('view engine', 'ejs');

// views folder
app.set('views', `${__dirname}/views`);

// static folder
app.use(express.static(`${__dirname}/public`));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());


// routes
app.use('/', require('./routers/routerFront')); // front
app.use('/', require('./routers/routerFrontAuth')); // front - auth
app.use('/dashboard-admin', require('./routers/routerFrontAdmin')); // front - admin
app.use('/api/entries', require('./routers/routerBackEntriesAPI')); // back - entries
app.use('/api/users', require('./routers/routerBackUsersAPI')); // back - users

// route: 404
app.use((req, res, next) => {
    res.status(404).render('404', {
        error: '404',
        msg: 'Página no encontrada'
    })
});


app.listen(port, () => console.log(`Servidor a la escucha del puerto: ${port}`));