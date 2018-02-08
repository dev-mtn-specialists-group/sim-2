/**
 * Created by Porter on 2/7/2018.
 */
module.exports = function( req, res, next ) {
    const { session, method } = req;
    if ( !session.user ) {
        session.user = {
            properties:[]
        };
    }

    next();
}