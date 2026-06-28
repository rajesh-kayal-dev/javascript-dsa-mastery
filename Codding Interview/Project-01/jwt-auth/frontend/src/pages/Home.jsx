import React from 'react'
import LoginForm from '../components/LoginForm.jsx'
import Profile from '../components/Profile.jsx'

const Home = () => {
    return (
        <>
            <h1>JWT Authentication Demo</h1>
            <LoginForm />
            <hr />
            <Profile />
        </>

    )
}

export default Home