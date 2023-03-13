import React, { Component } from 'react';
import '../component/Navbar.css'

export class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='logo'>
            <h2>Wild Skate</h2>
        </div>
        <div className='links'>
            <button>Clothing</button>
            <button>Footwear</button>
            <button>Hardware</button>
            <button>Accesories</button>
            <button>Sale</button>
            <button>My Account</button>
            
            <button>Cart()</button>
        </div>
        <button className='search'><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    )
  }
}

export default Navbar;
