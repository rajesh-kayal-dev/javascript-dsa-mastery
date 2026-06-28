import React from 'react'
import { useState } from 'react';
import { Login } from '../api/auth.api';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handelChnage = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handelSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    try {
      const response = await Login({
        email,
        password
      })

      if (response.success) {
        localStorage.setItem("token", response.token)
      }

      console.log("Login success Data :", response)
    } catch (error) {
      console.error("Error", error)
    }
  }

  return (
    <div>

      <form method="post" onSubmit={handelSubmit}>
        <input type="email"
          name='email'
          value={formData.email}
          onChange={handelChnage}
          placeholder='Enter Email'
        /><br />
        <input type="password"
          name='password'
          value={formData.password}
          onChange={handelChnage}
          placeholder='Enter Password'
        /><br />
        <input type="submit"
        />
      </form>
    </div>
  )
}

export default LoginForm
