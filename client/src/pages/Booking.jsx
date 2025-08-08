import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
    const [formData, setFormData] = useState({
        doctorId: '',
        date: '',
        time: ''
    });

    const [doctors, setDoctors] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch available doctors
        axios.get('http://localhost:5000/api/doctors') // Adjust if your route differs
            .then(res => setDoctors(res.data))
            .catch(err => console.error('Error fetching doctors', err));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/appointments', formData);
            setMessage('✅ Appointment booked successfully!');
        } catch (error) {
            setMessage('❌ Booking failed');
        }
    };
    <select name="doctorId" value={formData.doctorId} onChange={handleChange} required>
        <option value="">Select Doctor</option>
        {doctors.map(doc => (
            <option key={doc._id} value={doc._id}>
                Dr. {doc.name} ({doc.specialization})
            </option>
        ))}
    </select>


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
        }}>
            <form onSubmit={handleSubmit} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
                width: '400px'
            }}>
                {/* ✅ Title inside the box */}
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Book Appointment</h2>

                {message && (
                    <div style={{
                        backgroundColor: '#f0fdf4',
                        color: '#166534',
                        padding: '10px',
                        borderRadius: '6px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        {message}
                    </div>
                )}

                <select
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={handleChange}
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '15px',
                        borderRadius: '6px',
                        border: '1px solid #ccc'
                    }}
                >
                    <option value="">Select Doctor</option>
                    {doctors.map((doc) => (
                        <option key={doc._id} value={doc._id}>
                            Dr. {doc.name} ({doc.specialization})
                        </option>
                    ))}
                </select>

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '15px',
                        borderRadius: '6px',
                        border: '1px solid #ccc'
                    }}
                />

                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '15px',
                        borderRadius: '6px',
                        border: '1px solid #ccc'
                    }}
                />

                <button type="submit" style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default Booking;
