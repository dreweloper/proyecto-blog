const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());



app.listen(port, () => console.log(`Conectado al puerto: ${port}`));