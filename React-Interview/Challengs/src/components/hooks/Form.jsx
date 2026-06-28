import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const Form = () => {
    const [input, setInput] = useLocalStorage("")
    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Write Something...'
            />
            <p>{input}</p>

        </div>
    )
}

export default Form