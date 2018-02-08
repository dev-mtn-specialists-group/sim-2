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
    resave: false,
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

const messagesBaseUrl = "/api/properties";
app.post( messagesBaseUrl, controller.create );
app.get( messagesBaseUrl, controller.read );
app.delete( `${messagesBaseUrl}`, controller.delete );

const port = process.env.PORT || 3000
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );