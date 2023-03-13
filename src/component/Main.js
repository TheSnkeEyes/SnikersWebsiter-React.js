import React, { Component } from 'react'
import '../component/Main.css'
import sniker from '../images/snikers-removebg-preview.png'

export class Main extends Component {
  

  render() {
    return (
      <div className='Main'>
        <div className='main_text'>
            <p>Emerica.</p>
            <h1>The Reynolds</h1>
            <h2>Low Vulc</h2>
            <div className='main_btns'>
              <button>SHOP NOW</button>
              <div className='price'>$56.95</div>
            </div>
            <div className='main_image'>
                <img src={sniker}></img>
            </div>
        </div>
      </div>
    )
  }
}

export default Main;
