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
        const {user} = req.session;
        //console.log(user);
        properties.push({id, name, description, address, city, state, zip, image, loanamt, monthly, rent});
        user.properties.push({id, name, description, address, city, state, zip, image, loanamt, monthly, rent});
        id++;
        //console.log(req.session);
        //res.status(200).send(properties);
        res.status(200).send(user.properties.map(property => property));
    },

    read: (req, res) => {
        const {user} = req.session;
        //console.log(properties)
        if (!req.query.rent) {
            // res.status(200).send(user.properties);
            res.status(200).send(properties);
        }
        else {
            res.status(200).send(user.properties.filter(property => property.rent > req.query.rent))
            // res.status(200).send(properties.filter(property => property.rent > req.query.rent))
        }
    },


    delete: (req, res) => {
        const {user} = req.session;
        const deleteID = req.params.id;
        // console.log(deleteID);
        propertiesIndex = user.properties.findIndex(property => property.id == deleteID);
        // console.log(propertiesIndex)
        if (propertiesIndex >= 0) {
            user.properties.splice(propertiesIndex, 1);
        }
        propertiesIndex = properties.findIndex(property => property.id == deleteID);
        if (propertiesIndex >= 0) {
            properties.splice(propertiesIndex, 1);
        }
        res.status(200).send(user.properties);
        // res.status(200).send(properties);
    }
    //
    // history: (req, res) => {
    //     const {user} = req.session;
    //     res.status(200).send(user.messages);
    // }
};