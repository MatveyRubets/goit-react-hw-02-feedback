import React, { Component } from 'react';
import Controls from './Controls/Controls';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
