import React from "react";
import { Navigate } from 'react-router-dom';
import axios from "axios";
import { API_URL } from "../utils/constants";

const Dashboard = () => {
    const token = localStorage.getItem('token')

    if(!token) {
        return <Navigate to="/" />
    }


    return (
        <body>
                <table id="example" class="display" style={{width:'75%'}}>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Full Name</th>
                            <th>Status Pernikahan</th>
                            <th>NIK</th>
                            <th>Identitas</th>
                            <th>Divisi</th>
                            <th>Tanggal Masuk</th>
                            <th>Status Karyawan</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Alamat</th>
                            <th>Posisi</th>
                            <th>Site</th>
                            <th>Telegram</th>
                            <th>Pendidikan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                            <td></td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                        </tr>
                    </tbody>
                </table>

            </body>
        )
}

export default Dashboard