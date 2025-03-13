import React from 'react'
import Product from '../product/Product'
import SimpleSlider from '../Home Slider/HomeSlider'
import imgSlider1 from "../../assets/imgs/slider-image-2.jpeg"
import imgSlider2 from "../../assets/imgs/slider-image-3.jpeg"
import CategoriesSlider from '../categoriesSlider/categoriesSlider'
export default function Home() {
    return (
        <>
            <div className="pt-8">
                <div className="hidden md:block  ">
                    <div className=" container flex items-center  py-6 mx-auto gap-0">
                        <div className='w-2/3 h-[400px]   '>
                            <SimpleSlider />
                        </div>
                        <div className="w-1/3   flex  flex-col rounded  ">
                            <img className='w-full h-[200px] ' src={imgSlider1} alt="" />
                            <img className='w-full h-[200px] ' src={imgSlider2} alt="" />
                        </div>
                    </div>
                    <div>
                        <CategoriesSlider />
                    </div>
                </div>


                <Product /></div>
        </>
    )
}
