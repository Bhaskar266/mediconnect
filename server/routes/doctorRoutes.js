const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// GET all doctors
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find({}, '_id name specialization'); // Only needed fields
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch doctors' });
    }
});

module.exports = router;
