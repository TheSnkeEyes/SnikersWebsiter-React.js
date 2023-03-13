import React from 'react';
import '../component/Footer.css'


function Footer() {
    return (
        <div className='Footer'>
            <div className='location_map'>
                <iframe width="677" height="432" id="gmap_canvas" src="https://maps.google.com/maps?q=Ruse&t=&z=11&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div >
            <form action="">
                <h1>GET IN TOUCH</h1>
                <div class="inputs">
                    <label for="">First Name *</label>
                    <input type={'text'}></input>
                    <label for="">Last Name *</label>
                    <input type={'text'}></input>
                    <label for="">E-mail*</label>
                    <input type={'email'}></input>
                    <label for="">Phone </label>
                    <input type={'text'}></input>
                    <label for="">Message</label>
                    <textarea name="" id="" cols="60" rows="10"></textarea>
                    <button id="sumbit">Sumbit</button>
                </div>
            </form>
            
        </div >
    )
}

export default Footer
