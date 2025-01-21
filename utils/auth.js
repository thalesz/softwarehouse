const jwt = require('jsonwebtoken');
const secret = 'SECRET';

function generateToken(userName){
    const payload = {userName};
    const token = jwt.sign(payload, secret, {expiresIn: '1h'});
    return token;

}
function readToken(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if(err) reject(err);
            resolve(decoded);
        });
    });
}


module.exports = {generateToken
    , readToken
};
