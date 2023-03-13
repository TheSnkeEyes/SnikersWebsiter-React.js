import React from 'react'
import '../component/About.css';


function About() {
  return (
    <div className='About'>
      <div className='About_card' >
        <img src={require('../images/AboutMe.jpg')}></img>
        <div className='about_content'>
          <h1>Tanju <br></br> <span>Tasim</span></h1>
          <p>Tanju is already a certified programmer and is looking for a job in the field.
            If you want more information about Tanju, please click on the red button below 😊. </p>
          <button>Read More</button>
        </div>
      </div>
      <div className='sniker_information'>
        
        <div className='about_sniker'>
          <h1>01</h1>
          <h3>One-peace toe panel to avoid blowouts in Oliie area</h3>
        </div>
        <img className='imgontop' src={require('../images/imgontopview.png')}></img>
        <div className='about_sniker two'>
          <h1>02</h1>
          <h3>Thin tongue and collar for a slimmer, low profile fit and more comfort</h3>
        </div>
        <div className='about_sniker three'>
          <h1>03</h1>
          <h3>Full lenght Ortholite foothead for comfort</h3>
        </div>
      </div>

    </div>
  )
}

export default About
