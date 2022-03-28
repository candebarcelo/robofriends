import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { // this is a lifecycle hook which is like the try-catch cycle, it runs if there's been an error
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops! There is an error.</h1>
        } // else...
        return this.props.children // this means ErrorBoundary is a wrappable component which will show Oops if there's an error, and 
                                   // if there isn't, it'll show its children.
    }
}

export default ErrorBoundary;