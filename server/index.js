const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const router = express.Router();
const Doctor = require('./models/Doctor');

const app = express(); // ✅ make sure this comes BEFORE routes

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const doctorRoutes = require('./routes/doctors');
app.use(doctorRoutes); // or app.use('/api/doctors', doctorRoutes)

const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes'); // ✅ Check spelling and path

app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes); // ✅ THIS IS MANDATORY

// DB and server
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error('Mongo Error:', err));
router.get('/api/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching doctors' });
    }
});

module.exports = router;


// Add test doctor
Doctor.create({
    name: "Dr. Kavitha",
    specialization: "Neurology",
    available: true
})
    .then(() => console.log("✅ Test doctor added"))
    .catch(err => console.error("❌ Failed to insert:", err));

