import React, { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    this.setState = { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oppps. This is not good!</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
