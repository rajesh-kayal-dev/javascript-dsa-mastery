import React, { useState } from 'react'

const FormValidation = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})

    const handelChage = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        setErrors({})

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (form.name === "") {
            setErrors({ name: "Name is required" })
            return;
        } else if (!emailPattern.test(form.email)) {
            setErrors({ email: "Invalid Email" })
            return;
        } else if (form.password.length < 6) {
            setErrors({ password: "Password Min 6 charactor" })
            return;
        } else if (form.password.length > 10) {
            setErrors({ password: "Password Max 10 charactor" })
            return;
        } else {
            alert("Form Submited")
            
            setForm({
                name: "",
                email: "",
                password: ""
            });
        }
    }
    return (
        <div>
            <h1>Form Validation</h1>
            <form onSubmit={handelSubmit}>
                <input type="text"
                    name="name"
                    value={form.name}
                    onChange={handelChage}
                    placeholder='Enter Name' /> <br />
                {errors.name && <p>{errors.name}</p>}

                <input type="text"
                    name="email"
                    value={form.email}
                    onChange={handelChage}
                    placeholder='Enter Email' /> <br />
                {errors.email && <p>{errors.email}</p>}
                <input type="password"
                    name="password"
                    value={form.password}
                    onChange={handelChage}
                    placeholder='Enter Password' /> <br />
                {errors.password && <p>{errors.password}</p>}
                <button>Submit</button>
            </form>

        </div>
    )
}

export default FormValidation