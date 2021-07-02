import React, { Component } from 'react';
import css from './btn.module.css';

class Button extends Component {
  render() {
    const { outline, children } = this.props;
    return <button className={outline ? css.outline : css.button}>{children}</button>;
  }
}

export default Button;
