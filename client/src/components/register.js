import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'doctor',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/register', formData);
            setMessage('✅ Registered successfully!');
            console.log('Response:', res.data);
        } catch (error) {
            setMessage(error.response?.data?.message || '❌ Registration failed');
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>

            {/* ✅ Message shown above the form */}
            {message && (
                <div className="message-box">
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="form-box">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <br />
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
