import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: '#eef2ff',
            padding: '12px 24px',
            borderRadius: '8px',
            marginBottom: '20px',
            position: 'relative',
            textAlign: 'center'
        }}>
            {/* Centered MediConnect title */}
            <h1 style={{
                margin: 0,
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#000',
            }}>
                💊 MediConnect
            </h1>

            {/* Top-right aligned nav links */}
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '24px',
                transform: 'translateY(-50%)',
                display: 'flex',
                gap: '20px'
            }}>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/appointments">My Appointments</Link>
                <Link to="/booking">Booking</Link>
            </div>
        </nav>
    );
};

export default Navbar;
