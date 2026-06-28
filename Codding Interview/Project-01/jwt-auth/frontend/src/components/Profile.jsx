import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getProfile } from "../api/auth.api"

const Profile = () => {
    const [user, setUser] = useState("")

    useEffect(() => {
        const fetchProfile = async () => {

            const token = localStorage.getItem("token");
            if (!token) return;

            const data = await getProfile(token);
            if (data.success) {
                setUser(data.user);
            }
        }

        fetchProfile();
    }, [localStorage.getItem("token")])

    if (!user) {
        return <p>No user Login!</p>
    }
    return (
        <div>
            <h2>Profile </h2>

            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default Profile