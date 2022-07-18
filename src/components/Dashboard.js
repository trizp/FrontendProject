import React from "react";
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
    const token = localStorage.getItem('token')

    if(!token) {
        return <Navigate to="/" />
    }

    return (
        <div className="container"> 
            <h3> Halaman Dashboard</h3>
        </div>
    )
}

export default Dashboard