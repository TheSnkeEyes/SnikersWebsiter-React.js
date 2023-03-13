import React from 'react';
import '../component/VideoSection.css';
import MyVideo from '../images/MyVideo.mp4';
import Logo from '../images/Logo.png'


const VideoSection = () => {
  return (
    <div className='VideoSection'>
        <div className='ovarlay'></div>
        <video className='myVideo' src={MyVideo} autoPlay loop muted></video>
        <div className='content'>
            <h1>Made in America</h1>
            <p>Emerica.</p>
            <h3><img src={Logo}></img></h3>
            <h4>Reynolds</h4>
        </div>
    </div>
  )
}

export default VideoSection
