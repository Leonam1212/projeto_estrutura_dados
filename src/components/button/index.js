import { Container } from "./style";
import React, { Component } from "react";
class Button extends Component {
  render() {
    const { children, redSchema, ...rest } = this.props;
    return (
      <Container redSchema={redSchema} type="button" {...rest}>
        {children}
      </Container>
    );
  }
}

export default Button;
