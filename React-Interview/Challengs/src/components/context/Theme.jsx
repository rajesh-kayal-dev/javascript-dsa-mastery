import React, { useContext } from 'react'
import ThemeProvider from './ThemeProvider'
import { ThemeContext } from './ThemeContaxt'

function Main() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <p>Current Theme : {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

const Theme = () => {
    return (
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    )
}

export default Theme