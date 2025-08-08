// server/controllers/appointmentController.js

const Appointment = require('../models/Appointment');

// Create appointment
exports.createAppointment = async (req, res) => {
    try {
        const { doctor, patient, date, time } = req.body;
        const newAppointment = await Appointment.create({ doctor, patient, date, time });
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(500).json({ message: 'Error creating appointment', error: err.message });
    }
};

// Get appointments
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching appointments', error: err.message });
    }
};
