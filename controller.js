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

module.exports = {
    create: (req, res) => {
        let dbInstance = req.app.get('db');
        let {name, description, address, city, state, zip, image, loanamt, monthly, rent} = req.body;
        // catch empty vals
        name = name || "";
        description = description || "";
        address = address || "";
        city = city || "";
        state = state || "";
        zip = zip || "";
        image = image || "";
        loanamt = loanamt || 0;
        monthly = monthly || 0;
        rent = rent || 0;

        const {user} = req.session;
        const userid = req.sessionID;
        dbInstance.create_property([name, description, address, city, state, zip, image, loanamt, monthly, rent, userid]).then(() => {
            dbInstance.read_properties([userid]).then(props => {
                res.status(200).send(props.map(property => property));
            });
        }).catch(err => res.status(500).send(err))
    },
    read: (req, res) => {
        let dbInstance = req.app.get('db');
        //const {user} = req.session;
        const userid = req.sessionID;
        const rent = req.query.rent;
        if (!req.query.rent) {
            dbInstance.read_properties([userid]).then(props => {
                res.status(200).send(props.map(property => property));
            });
        }
        else {
            dbInstance.read_properties([userid, rent]).then(props => {
                res.status(200).send(props.map(property => property));
            });
        }
    },
    delete: (req, res) => {
        let dbInstance = req.app.get('db');
        //const {user} = req.session;
        const deleteID = req.params.id;
        const userid = req.sessionID;

        dbInstance.delete_property([deleteID, userid]).then((props) => {
            dbInstance.read_properties([userid]).then(props => {
                res.status(200).send(props.map(property => property));
            });
        }).catch(err => res.status(500).send(err));
    }
};