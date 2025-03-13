import React from 'react'
import CategoreyHook from '../custom hooks/CategoreyHook';
import { RevolvingDot } from 'react-loader-spinner';

export default function Categories() {

    const { data, isError, isLoading } = CategoreyHook()
    if (isLoading) {
        return <div className="w-full  flex items-center justify-center h-[500px]">
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
            <div className="container mx-auto pt-8">
                <div className="grid md:grid-cols-3  gap-x-11 gap-y-5 my-20 p-6 md:p-2">
                    {data.data.data.map((categorey) => <div key={categorey._id} className="product rounded pb-6 transition-all h-[450px]">
                        <img className='w-full h-[90%] rounded rounded-b-none' src={categorey.image} alt={categorey.name} />
                        <div className="">
                            <h2 className=' text-3xl text-main text-center'>{categorey.name}</h2>
                        </div>
                    </div>)}


                </div>
            </div>


        </>
    )


}
