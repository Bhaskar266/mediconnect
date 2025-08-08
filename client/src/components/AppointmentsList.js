import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentsList = () => {
    const [appointments, setAppointments] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/appointments');
                const allAppointments = res.data;

                // Filter based on role
                const filtered = user.role === 'patient'
                    ? allAppointments.filter(app => app.patientId === user._id)
                    : allAppointments.filter(app => app.doctorId === user._id);

                setAppointments(filtered);
            } catch (error) {
                console.error('Error fetching appointments', error);
            }
        };

        fetchAppointments();
    }, [user]);

    return (
        <div style={{ padding: '30px', textAlign: 'center' }}>
            <h2>📖 Your Appointments</h2>
            {appointments.length > 0 ? (
                <table style={{ margin: 'auto', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Doctor ID</th>
                            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Date</th>
                            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appt, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appt.doctorId}</td>
                                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appt.date}</td>
                                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{appt.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No appointments found.</p>
            )}
        </div>
    );
};

export default AppointmentsList;
