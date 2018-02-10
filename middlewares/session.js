/**
 * Created by Porter on 2/7/2018.
 */
let id = 0;

module.exports = function( req, res, next ) {
    const { session, method } = req;
    console.log(session.user);
    if ( !session.user ) {
        session.user = {
            properties:[],
            id: id
        };
        id++
    }
    console.log(session.user)
    next();
}