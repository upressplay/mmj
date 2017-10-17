import React, { Component } from 'react';
import img from '../../img/home.jpg';

class Header extends Component {

  render() {

    return (
      <header className="Header">
        <div className="HeaderHolder">
        	<img src={img} alt="Home"/>
        </div>  
      </header>
    );
  }
}

export default Header;