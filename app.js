const express = require('express');

const { registrationsRouter } = require('./routes/registrations.routes');

const app = express();

app.use(express.json());

app.use('/registrations', registrationsRouter);

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} does  not exist in our server`,
    });
});

module.exports = { app };
