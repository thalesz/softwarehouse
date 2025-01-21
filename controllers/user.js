const { User } = require('../models');
const bcrypt = require('bcrypt');

const auth = require('../utils/auth');
const express = require('express');
const app = express();

app.use(express.json());


const login = async (req, res) => {
    try {
        const { name, password } = req.body;
        if (!name || !password)  
            throw new Error('Nome e senha são obrigatórios');

        const user = await User.findOne({ where: { name} });

        if(user){
            const passwordValid = bcrypt.compareSync(password, user.password);
            if (!passwordValid) 
                throw new Error('Senha inválida');
            else {
                const token = auth.generateToken({ id: user.id });
                return res.status(200).json({ token }); }
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });    
    }
}


const createUser = async (req, res) => {
    try {
        const { name, password } = req.body;
        if (!name || !password)  
            throw new Error('Nome e senha são obrigatórios');
        const passwordHash = bcrypt.hashSync(password, 10);
        const user = await User.create({ name, password: passwordHash });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });    
    }
}



module.exports = {login, createUser}