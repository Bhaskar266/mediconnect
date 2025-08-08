import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '70vh',
            textAlign: 'center'
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
                width: '400px'
            }}>
                <h2>Welcome to MediConnect 🎉</h2>
                {user && (
                    <>
                        <p>Hello, <strong>{user.name}</strong>!</p>
                        <p>You're logged in as a <strong>{user.role}</strong>.</p>

                        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {user.role === 'patient' && (
                                <>
                                    <button onClick={() => navigate('/booking')}>📅 Book Appointment</button>
                                    <button onClick={() => navigate('/appointments')}>📖 My Appointments</button>
                                </>
                            )}
                            {user.role === 'doctor' && (
                                <>
                                    <button onClick={() => navigate('/appointments')}>📖 View Appointments</button>
                                </>
                            )}

                            <button onClick={handleLogout} style={{ backgroundColor: '#e11d48', color: 'white', padding: '10px', borderRadius: '6px' }}>🚪 Logout</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
