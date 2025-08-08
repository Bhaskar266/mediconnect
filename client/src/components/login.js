import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Import this
import '../App.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const navigate = useNavigate(); // ✅ Create navigation hook

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', formData);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            setMessage('Login successful ✅');

            // ✅ Use navigate instead of window.location
            navigate('/dashboard');
        } catch (error) {
            setMessage(error.response?.data?.message || '❌ Login failed');
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
            {message && (
                <div style={{
                    backgroundColor: '#f0fdf4',
                    color: '#166534',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    marginBottom: '15px',
                    textAlign: 'center'
                }}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
                width: '320px'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
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
                    type="password"
                    name="password"
                    placeholder="Password"
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
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
