const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const controller = require( `${__dirname}/controller` );
require('dotenv').config()

const createInitialSession = require( `${__dirname}/middlewares/session.js` );
//const filter = require( `${__dirname}/middlewares/filter.js`);

const app = express();

app.use( bodyParser.json() );
app.use( express.static( `${__dirname}../build` ) );
app.use( session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use( ( req, res, next ) => createInitialSession( req, res, next ) );
// app.use( ( req, res, next ) => {
//     const { method } = req;
//     if ( method === "POST" || method === "PUT" ) {
//         filter( req, res, next );
//     } else {
//         next();
//     }
// });


//testing
app.get("/", function(req, res){
    res.sendFile('testing/test.html', { root: __dirname });
})


const baseUrl = "/api/properties";
app.post( baseUrl, controller.create );
app.get( baseUrl, controller.read );
app.delete( `${baseUrl}`, controller.delete );

const port = process.env.PORT || 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );