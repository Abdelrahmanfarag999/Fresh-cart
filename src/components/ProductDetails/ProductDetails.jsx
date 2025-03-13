import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import { RevolvingDot } from 'react-loader-spinner';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
export default function ProductDetails() {
    const { id } = useParams()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }


    function getAllDetails() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }
    const { addProduct } = useContext(cartContext);
    async function handlingAdd(id) {
        const resFlag = await addProduct(id)
        // console.log(resFlag);

        if (resFlag) {
            toast.success('It has been successfully added.',{position:'top-right',duration:4000 })
            
        } else {
            toast.error('There is an error please try again later .',{position:'top-right',duration:4000 })
        }
    }
    const { data, isError, isLoading } = useQuery({
        queryKey: ['ProductDetails', id],
        queryFn: getAllDetails,
    })
    if (isError) {
        return <h6 className="text-red-600 mx-auto">there is an error</h6>
    }
    if (isLoading) {
        return <div className="w-full flex items-center justify-center h-[500px] ">
            <RevolvingDot
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }
    const dateils = data.data.data;

    return (
        <>
            <div className="container mx-auto py-12 pt-8">
                <div className="details flex items-center justify-center flex-col md:flex-row ">
                    <div className="carusel w-[50%] md:w-[20%] h-96 ">
                        <div className="slider-container ">
                            <Slider className='h-96' {...settings}>
                                {dateils.images.map((image) => <div key={product._id}>
                                    <img className='w-full' src={image} alt="" />
                                </div>)}
                            </Slider>
                        </div>

                    </div>
                    <div className="title w-[75%] h-96 flex items-start justify-center flex-col px-9 ">

                        <h1 className='text-3xl'>{dateils.title}</h1>
                        <p className='py-3 text-zinc-500'>{dateils.description}</p>
                        <div className=" w-full flex items-center justify-between"><span className='text-zinc-500'>{dateils.price} EGP</span>  <span className='text-zinc-500'><i className='fa-solid fa-star text-yellow-300'></i>   {dateils.ratingsAverage}</span>   </div>
                        <button onClick={() => handlingAdd(dateils._id)} className='btnDetails bg-custom-green hover:bg-lime-900 w-[80%] mx-auto rounded-md py-2 mt-3 text-white'>+ Add </button>
                    </div>
                </div>
            </div>
        </>
    )
}
