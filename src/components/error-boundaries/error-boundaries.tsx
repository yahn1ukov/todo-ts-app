import { Component, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    error: boolean;
}

class ErrorBoundaries extends Component<Props, State> {
    state: State = {
        error: false
    }

    componentDidCatch(): void {
        this.setState({ error: true })
    }

    render() {
        if (this.state.error) {
            return <div><h3><span>Error</span></h3></div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundaries;
