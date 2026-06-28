import React, { useState } from 'react'

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [from, setForm] = useState({
        name: "",
        email: ""
    })

    const handeChange = (e) => {
        setForm({
            ...from,
            [e.target.name]: e.target.value,
        })
    }

    const handelNext = () => {
        setStep(step + 1)
    }
    const handelPrev = () => {
        setStep(step - 1)
    }

    return (
        <div>
            <h3>Step {step}</h3>

            {step === 1 && (
                <div>
                    <input
                        name='name'
                        placeholder='Name'
                        onChange={handeChange}
                    />
                    <button onClick={handelNext}>Next</button>
                </div>
            )}

            {step === 2 && (
                <div>
                    <input
                        name='email'
                        placeholder='Email'
                        onChange={handeChange}
                    />
                    <button onClick={handelNext}>Next</button>
                    <button onClick={handelPrev}>Prev</button>
                </div>
            )}

            {step === 3 && (
                <div>
                    <p>Name : {from.name}</p>
                    <p>Email : {from.email}</p>
                    <button onClick={handelPrev}>Back</button>
                    <button onClick={() => alert("form sumited!")}> Submit</button>
                </div>
            )}
        </div>
    )
}

export default MultiStepForm