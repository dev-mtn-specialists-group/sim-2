//     id SERIAL UNIQUE,
//     name VARCHAR(40)
//     description TEXT,
//     address VARCHAR(100),
//     city VARCHAR(40),
//     state VARCHAR(20),
//     zip VARCHAR(10),
//     image TEXT,
//     loanamt INTEGER,
//     monthly INTEGER,
//     rent INTEGER


let properties = [];
let id = 0;


module.exports = {
    create: (req, res) => {
        const {name, description, address, city, state, zip, image, loanamt, monthly, rent} = req.body;
        //const { properties, time } = req.body;
        const {user} = req.session;
        properties.push({id, name, description, address, city, state, zip, image, loanamt, monthly, rent});
        //messages.push({id, text, time});
        user.properties.push({id, name, description, address, city, state, zip, image, loanamt, monthly, rent});
        //user.messages.push({id, text, time});
        id++;

        console.log(req.session);
        res.status(200).send(properties);
        // res.status(200).send(user.properties.map(property=>property));
    },

    read: (req, res) => {
        const {user} = req.session;
        //console.log(properties)
        if (!req.query.rent) {
            // res.status(200).send(user.properties);
            res.status(200).send(properties);
        }
        else {
            // res.status(200).send(user.properties.filter(property => property.rent > req.query.rent))
            res.status(200).send(properties.filter(property => property.rent > req.query.rent))
        }
    },

    // update: (req, res) => {
    //     const {text} = req.body;
    //     const updateID = req.query.id;
    //     const messageIndex = messages.findIndex(message => message.id == updateID);
    //     let message = messages[messageIndex];
    //
    //     messages[messageIndex] = {
    //         id: message.id,
    //         text: text || message.text,
    //         time: message.time
    //     };
    //
    //     res.status(200).send(messages);
    // },

    delete: (req, res) => {
        const {user} = req.session;
        const deleteID = req.params.id;
        propertiesIndex = user.properties.findIndex(property => property.id == deleteID);
        user.properties.splice(propertiesIndex, 1);
        propertiesIndex = properties.findIndex(property => property.id == deleteID);
        properties.splice(propertiesIndex, 1);
        // res.status(200).send(user.properties);
        res.status(200).send(properties);
    }
    //
    // history: (req, res) => {
    //     const {user} = req.session;
    //     res.status(200).send(user.messages);
    // }
};