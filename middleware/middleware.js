const { readToken } = require("../utils/auth");


async function middleware(req, res, next) {
    const token = req.headers.authorization;
    if(!token){
        throw new Error('Usuário não autorizado');
    }
    try{
        const decoded = await readToken(token);
        req.user = decoded;
        next();
    } catch(err){ 
        return res.status(404).json({ message: 'Token invalido, erro: ' + err.message});    
    }
    next();
}

module.exports = middleware;