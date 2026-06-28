import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = { hasError: false };
    }
    static getDrivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log("Error", error)
    }

    render() {
        if (this.state.hasError) {
            return <h3>Something went wrong</h3>
        }
        return this.props.children;
    }
}

export default ErrorBoundary
