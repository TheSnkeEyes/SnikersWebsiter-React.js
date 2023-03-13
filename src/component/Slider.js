import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Products } from '../Helper/product_images';
import '../component/Slider.css'

function product_slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <Carousel responsive={responsive} className='slider' >
        <div className='card'>
          <img className='product_img' src={Products.image1} alt='' ></img>
          <p>Red Snikers</p>
          <h3 className='price_shoes'>$34.00</h3>
        </div>
        <div className='card'>
          <img className='product_img' src={Products.image2} alt='' ></img>
          <p>Red Snikers</p>
          <h3 className='price_shoes'>$54.00</h3>
        </div>
        <div className='card'>
          <img className='product_img' src={Products.image3} alt='' ></img>
          <p>Black Snikers</p>
          <h3 className='price_shoes'>$77.00</h3>
        </div>
        <div className='card'>
          <img className='product_img' src={Products.image4} alt='' ></img>
          <p>Gold Snikers</p>
          <h3 className='price_shoes'>$103.00</h3>
        </div>
        <div className='card'>
          <img className='product_img' src={Products.image5} alt='' ></img>
          <p>Blue Snikers</p>
          <h3 className='price_shoes'>$200.00</h3>
        </div>
        <div className='card'>
          <img className='product_img' src={Products.image6} alt='' ></img>
          <p>White Snikers</p>
          <h3 className='price_shoes'>$350.00</h3>
        </div>
        <div className='card'>
          <img className='product_img' src={Products.image7} alt='' ></img>
          <p>Aquaphore Snikers</p>
          <h3 className='price_shoes'>$500.00</h3>
        </div>
        <div className='card'>
          <img className='product_img' src={Products.image8} alt='' ></img>
          <p>Sea Blue Snikers</p>
          <h3 className='price_shoes'>$2.00</h3>
        </div>
      </Carousel>
    </div>
  )
}

export default product_slider;
