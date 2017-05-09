import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello from {this.props.phrase}!</h1>;
  }
}

export default HelloWorld;