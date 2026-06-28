import React from 'react'
import ErrorBoundary from './ErrorBoundary';

function BuggyComponent() {
    throw new Error("Crash !");
}

const Error = () => {
    return (
        <ErrorBoundary>
            <BuggyComponent />
        </ErrorBoundary>

    )
}

export default Error
