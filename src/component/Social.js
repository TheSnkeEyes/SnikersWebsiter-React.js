import React from 'react'
import '../component/Social.css'


function Social() {
    return (
        <div className='Social'>
            <div className='social_brands'>
                <div className='social_media instagram'>
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div className='social_media facebook'>
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <div className='social_media github '>
                    <i class="fa-brands fa-github"></i>
                </div>
                <div className='social_media linkedin'>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
            <div className='copyright'>
                <p>&copy; 2023 TanjuDev</p>
            </div>
            

        </div>
    )
}

export default Social
