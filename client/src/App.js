import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
// Removed: import BookAppointment from './components/BookAppointment';
import AppointmentsList from './components/AppointmentsList';
import Booking from './pages/Booking'; // ✅ Add this import
import DoctorDashboard from './pages/DoctorDashboard';
import Profile from './pages/Profile';
import BookAppointment from './components/BookAppointment';




const appStyle = {
    backgroundImage: 'url("/bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '20px'
};

function App() {
    return (
        <div style={appStyle}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/register" />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* ❌ Removed BookAppointment */}
                    <Route path="/appointments" element={<AppointmentsList />} />
                    <Route path="/appointments" element={<AppointmentsList />} />
                    <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/booking" element={<BookAppointment />} />
                    <Route path="/booking" element={<Booking />} /> {/* ✅ Added Booking page */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
