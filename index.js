const express = require('express')
const app = express()
const connectDb = require('./config/db');
const indexRoutes =  require('./routes/index.js');
const linksRoutes = require('./routes/links.js');
const bodyParser = require('body-parser');
const {join} = require("path");

app.use(express.static(join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(indexRoutes);
app.use('/links', linksRoutes);

connectDb().then(()=> {
    app.listen(3000, ()=> {
        console.log('APP STARTED')
    });
}).catch((err)=> {
    console.log('Error', JSON.stringify(err))
})
