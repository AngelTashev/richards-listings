import { Component } from 'react';
import { Redirect } from 'react-router';

class CatchErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }

    render() {

        if (this.state.hasError) return <Redirect to="/error" />

        return this.props.children;
    }

}

export default CatchErrorBoundary;