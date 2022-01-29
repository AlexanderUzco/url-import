import React from 'react';

class Component extends React.Component {
  render() {
    return <h1>Hello, {this.props.msg}</h1>;
  }
}

export default Component;