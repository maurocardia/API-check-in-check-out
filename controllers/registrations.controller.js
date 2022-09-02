const { Registration } = require('../models/registrations.models');

const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll();

        res.status(200).json({
            status: 'success',
            data: { registrations },
        });
    } catch (error) {
        console.log(error);
    }
};

const getRegistrationId = async (req, res) => {
    try {
        const { id } = req.params;
        const registration = await Registration.findOne({ where: { id } });

        if (!registration) {
            res.status(404).json({
                satus: 'error',
                message: 'registration no fund',
            });
        }

        res.status(200).json({
            status: 'success',
            data: { registration },
        });
    } catch (error) {}
};

const createRegistration = async (req, res) => {
    try {
        const { entranceTime, status } = req.body;

        const newResgistration = await Registration.create({
            entranceTime,
            status,
        });
        res.status(200).json({
            status: 'success',
            data: { newResgistration },
        });
    } catch (error) {
        console.log(error);
    }
};

const createTimeExit = async (req, res) => {
    try {
        const { id } = req.params;
        const { exitTime } = req.body;

        const registration = await Registration.findOne({ where: { id } });

        if (!registration) {
            res.status(404).json({
                status: 'error',
                message: 'registration no fund',
            });
        }

        await registration.update({ exitTime, status: 'out' });
        res.status(200).json({
            status: 'success',
            data: { registration },
        });
    } catch (error) {
        console.log(error);
    }
};

const cancelRegistration = async (req, res) => {
    try {
        const { id } = req.params;

        const cancelRegistration = await Registration.findOne({
            where: { id },
        });

        if (!cancelRegistration) {
            res.status(404).json({
                status: 'error',
                message: 'registration not fund',
            });
        }

        await cancelRegistration.update({ status: 'cancelled' });
        res.status(204).json({});
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllRegistrations,
    createRegistration,
    getRegistrationId,
    createTimeExit,
    cancelRegistration,
};
