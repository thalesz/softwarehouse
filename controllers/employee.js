const { Employee, Position } = require('../models');

const fetchAllEmployee = async (req, res) => {
    try {
        const employees = await Employee.findAll({
            include: [{ model: Position, as: 'position' }]
        });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const postEmployee = async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const putEmployee = async (req, res) => {
    try {
        const [updated] = await Employee.update(req.body, {
            where: { id: req.params.id }
        });

        if (updated) {
            const updatedEmployee = await Employee.findOne({ where: { id: req.params.id } });
            res.json(updatedEmployee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const deleted = await Employee.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { fetchAllEmployee, postEmployee, putEmployee, deleteEmployee };
