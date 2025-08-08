import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    return (
        <div style={{ padding: '30px', textAlign: 'center' }}>
            <h2>👨‍⚕️ Welcome Dr. {user?.name}</h2>
            <p>You are logged in as a <strong>{user?.role}</strong>.</p>
            <button onClick={() => navigate('/appointments')}>📖 View Your Appointments</button>
        </div>
    );
};

export default DoctorDashboard;
