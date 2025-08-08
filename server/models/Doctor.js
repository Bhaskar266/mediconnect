const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    available: Boolean
});

module.exports = mongoose.model('Doctor', doctorSchema); // ✅ correct export
