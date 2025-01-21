const express = require('express');

const positionsRouter = require('./routes/position');
const employeesRouter = require('./routes/employee');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json()); // 🔥 Adicione esta linha para permitir JSON no req.body
app.use(express.urlencoded({ extended: true })); // (Opcional) Para processar form-data

app.use('/positions', positionsRouter);
app.use('/employees', employeesRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

