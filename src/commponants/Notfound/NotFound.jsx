import React from 'react'

const PageNotFound = () => {
    return (
        <div id="wrapper" className='flex justify-center items-center flex-col' >
            <img  className='w-[30%]  '  src="https://i.imgur.com/qIufhof.png " />
            <div id="info">
                <h3 className='text-yellow-300 text-4xl  pb-16 '>This page could not be found</h3>
            </div>
        </div >
    )
}

export default PageNotFound