'use strict'

//configs
require('dotenv').config();
require('ejs');

//dependencies
const cors = require('cors');
const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
const superagent = require('superagent');

//app setup
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', error => {
    console.log(error);
});

//middleware 
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));

//routes
// app.get('/', renderHomePage);


client.connect() 
    .then(() => {
        app.listen(PORT, () => {
            console.log(`we're listening on ${PORT}`);
        })
    })