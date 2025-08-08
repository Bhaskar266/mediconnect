// server/routes/appointmentRoutes.js

const express = require('express');
const router = express.Router();

const {
    createAppointment,
    getAppointments
} = require('../controllers/appointmentController');

// POST appointment
router.post('/', createAppointment);

// GET appointments
router.get('/', getAppointments);

module.exports = router;
