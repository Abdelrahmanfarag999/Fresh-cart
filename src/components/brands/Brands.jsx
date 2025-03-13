import React from 'react'
import CategoreyHook from '../custom hooks/CategoreyHook';
import { RevolvingDot } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function Brands() {

    function getAllBrands() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    }
    const { data, isError, isLoading } = useQuery({
        queryKey: 'AllBrands',
        queryFn: getAllBrands
    })

    if (isLoading) {
        return <div className="w-full flex items-center justify-center h-[500px] pt-8 ">
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
    if (isError) {
        return <h6 className="text-red-600 mx-auto">there is an error</h6>
    }
    return (
        <>
            <div className="container mx-auto pt-16">
                <div className="grid md:grid-cols-3  gap-x-11 gap-y-5 my-20 p-6 md:p-2">
                    {data.data.data.map((Brands) => <div key={Brands._id} className="product rounded pb-6 transition-all h-64 border">
                        <img className='w-full h-[90%] rounded rounded-b-none' src={Brands.image} alt={Brands.name} />
                        <div className="">
                            <h2 className=' text-3xl text-main text-center'>{Brands.name}</h2>
                        </div>
                    </div>)}


                </div>
            </div>


        </>
    )


}