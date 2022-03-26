import React from "react";
import * as PropTypes from "prop-types";
import ShowCase from "../../organisms/show-case/show-case.component";
import Card from "../../molecules/card/card.component";

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ShowCase>
        <Card>Honk honk motherfucker !</Card>
      </ShowCase>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
