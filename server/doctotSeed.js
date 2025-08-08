const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');

mongoose.connect('mongodb://localhost:27017/mediconnect');

const sampleDoctors = [
    { name: 'Dr. Aditi Mehra', specialization: 'Cardiologist', available: true },
    { name: 'Dr. Rohan Kapoor', specialization: 'Orthopedic', available: true },
    { name: 'Dr. Sneha Rao', specialization: 'Pediatrician', available: true }
];

Doctor.insertMany(sampleDoctors)
    .then(() => {
        console.log("✅ Doctors added");
        mongoose.disconnect();
    })
    .catch(err => console.error("❌ Error:", err));
