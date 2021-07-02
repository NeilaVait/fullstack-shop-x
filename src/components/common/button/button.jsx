import React, { Component } from 'react';
import css from './btn.module.css';

class Button extends Component {
  state = {};
  render() {
    return <button className={css.button}>{this.props.children}</button>;
  }
}

export default Button;
