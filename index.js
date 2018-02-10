const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const controller = require(`${__dirname}/controller`);

const cors = require('cors');
const massive = require('massive');

//require('dotenv').config()

const createInitialSession = require(`${__dirname}/middlewares/session.js`);

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}../build`));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: {secure: false}
}));

app.use((req, res, next) => createInitialSession(req, res, next));
// app.use( ( req, res, next ) => {
//     const { method } = req;
//     if ( method === "POST" || method === "PUT" ) {
//         filter( req, res, next );
//     } else {
//         next();
//     }
// });

massive("postgres://isqfttnejtsndj:1db8c6bb406f9f2ee0c6295db596c722f4229be579740e0d40b6a79d441b17f7@ec2-54-221-251-195.compute-1.amazonaws.com:5432/d6qto9bs6kn4pj?ssl=true")
    .then(dbInstance => app.set('db', dbInstance));

//testing
app.get("/", function (req, res) {
    res.sendFile('testing/test.html', {root: __dirname});
})


const baseUrl = "/api/properties";
app.post(baseUrl, controller.create);
app.get(baseUrl, controller.read);
app.delete(`${baseUrl}/:id`, controller.delete);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`feeling porty --> ${port}`);
});