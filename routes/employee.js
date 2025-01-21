const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee');

authMiddleware = require('../middlewares/auth');

router.get('/', authMiddleware, employeeController.fetchAllEmployee);

router.post('/', authMiddleware, async (req, res) => {
    try {
        await employeeController.postEmployee(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', authMiddleware, async (req, res) => {
    try {
        await employeeController.putEmployee(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await employeeController.deleteEmployee(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
