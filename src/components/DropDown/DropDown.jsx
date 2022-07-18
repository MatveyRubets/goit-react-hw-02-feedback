import React, { Component } from 'react';
import style from './DropDown.module.css';

export default class DropDown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div className={style.div}>
        <div className={style.btnContainer}>
          <button type="button" className={style.btn} onClick={this.toggle}>
            {this.state.visible ? 'Hide' : 'Show'}
          </button>
        </div>
        {this.state.visible && <div className={style.dropDown}>DropDown</div>}
      </div>
    );
  }
}
