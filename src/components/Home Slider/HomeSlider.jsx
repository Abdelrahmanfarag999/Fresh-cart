import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images 
import slider1 from "../../assets/imgs/grocery-banner.png"
import slider2 from "../../assets/imgs/grocery-banner-2.jpeg"
import slider3 from "../../assets/imgs/slider-2.jpeg"

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <>
        <div className=" hidden md:block  ">

<Slider  {...settings  }>
            <div>
                <img className="w-full h-[400px]"  src={slider1} alt="" />  </div>
            <div>
                <img className="w-full h-[400px]" src={slider2} alt=""/>
            </div>
            <div>
                <img className="w-full h-[400px]" src={slider3} alt='' />   </div>

        </Slider>


        </div>
          
        
        
        </>
      
    );
}