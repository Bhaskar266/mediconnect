const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor'); // ✅ Capital 'D' to match Doctor.js

// GET /api/doctors
router.get('/api/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find(); // ✅ Must match model name exactly
        res.json(doctors);
    } catch (err) {
        console.error('❌ Error in /api/doctors:', err.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
