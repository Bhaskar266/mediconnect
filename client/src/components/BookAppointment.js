import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        doctorId: '',
        date: '',
        time: ''
    });

    const [doctors, setDoctors] = useState([]);
    const [message, setMessage] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        axios.get('http://localhost:5000/api/doctors')
            .then(res => {
                console.log('Doctors fetched:', res.data);
                setDoctors(res.data);
            })
            .catch(err => {
                console.error('Error fetching doctors:', err);
            });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/appointments', {
                ...formData,
                patientId: user._id
            });
            setMessage('✅ Appointment booked successfully!');
        } catch (err) {
            setMessage('❌ Failed to book appointment');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '70vh'
        }}>
            <form onSubmit={handleSubmit} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
                width: '350px'
            }}>
                <h2 style={{ textAlign: 'center' }}>Book Appointment</h2>

                <select
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
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
                    style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
                />
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
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
                    Book
                </button>

                {message && <p style={{ marginTop: '15px', textAlign: 'center' }}>{message}</p>}
            </form>
        </div>
    );
};

export default BookAppointment;
