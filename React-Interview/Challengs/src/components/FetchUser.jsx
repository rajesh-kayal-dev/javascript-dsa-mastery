import React, { useEffect, useState } from 'react';
import axios from 'axios'

const FetchUser = () => {
    const [data, setData] = useState([]);

    const fetchUser = async () => {
        const res = await fetch("https://json-placeholder.mock.beeceptor.com/users");
        const result = await res.json();
        setData(result)
    }
    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div>

            <table border='1' >
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>

                </thead>
                <tbody>
                    {data.map((user, i) => (
                        <tr key={user.id}>
                            <td>{i+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FetchUser