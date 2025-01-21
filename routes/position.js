const express = require('express');

const router = express.Router();

const { Position } = require('../models');  

router.get('/', async (req, res) => {
    try{
        const positions = await Position.findAll();
        res.json(positions);
    }catch(err){
        res.status(500).json({message: err.message});
    }
    }
);

router.post('/', async (req, res) => {
    try{
        await Position.create(req.body);
        res.status(201);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

router.put('/:id', async (req, res) => {
    try{
        const {position} = await Position.update(req.body, {
            where: { id: req.params.id }
        });
        if(position){
            const newPosition = await Position.findOne({
                where: {id:req.params.id}
            });
            res.json(newPosition);
        }else{
            res.status(404).json({message: 'Position not found'});
        }
    }catch(err){
        res.status(500).json({message: err.message});
    }
});


router.delete('/:id', async (req, res) => {
    try{
        const positionDeleted = await Position.destroy({
            where: { id: req.params.id }
        });
        if(positionDeleted){
            res.status(204).send();
        }else{
            res.status(404).json({message: 'Position not found'});
        }
    }catch(err){
        res.status(500).json({message: err.message});
    }
});


module.exports = router;