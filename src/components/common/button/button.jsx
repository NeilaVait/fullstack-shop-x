import React, { Component } from 'react';
import css from './btn.module.css';

class Button extends Component {
  render() {
    const { outline, children, size, link } = this.props;
    return (
      <button
        className={`
        ${css.button} 
        ${outline ? css.outline : ''} 
        ${size === 'medium' ? css.medium : ''}
        ${link ? css.link : ''} 
        `}
      >
        {children}
      </button>
    );
  }
}

export default Button;
