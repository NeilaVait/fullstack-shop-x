import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderX extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h3>I am a header</h3>
        </Link>
        <nav className="main-nav">{}</nav>
      </header>
    );
  }
}

export default HeaderX;
