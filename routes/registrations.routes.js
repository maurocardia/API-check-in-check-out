const express = require('express');

const {
    getAllRegistrations,
    createRegistration,
    getRegistrationId,
    createTimeExit,
    cancelRegistration,
} = require('../controllers/registrations.controller');

const registrationsRouter = express.Router();
registrationsRouter.get('/', getAllRegistrations);
registrationsRouter.get('/:id', getRegistrationId);
registrationsRouter.post('/', createRegistration);
registrationsRouter.patch('/:id', createTimeExit);
registrationsRouter.delete('/:id', cancelRegistration);

module.exports = { registrationsRouter };
