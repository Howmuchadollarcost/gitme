import React, { Component } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeOut = keyframes`
100% {
  opacity: 0;
}
`;

const Container = styled.div`
  display: ${props => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: white;
  animation: ${props => props.isOpen ? fadeOut : null} 2s;
`;

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isOpen: false }), 2000);
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Container isOpen={isOpen}>
        <h1>GITME</h1>
      </Container>
    );
  }
}

export default Welcome;
