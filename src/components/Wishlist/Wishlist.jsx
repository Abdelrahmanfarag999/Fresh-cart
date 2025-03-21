import React, { useContext, useEffect } from 'react'
import { cartContext } from '../../Context/CartContext'
import { WishlistContext } from '../../Context/wishlistcontext';
import emptyList from '../../assets/imgs/heart-love-marriage-27-svgrepo-com.svg'
import toast from 'react-hot-toast';
export default function Wishlist() {
  const { addToWishlist , removeFromWishlist,setAddToWishlist ,empetyPro} = useContext(WishlistContext)
// console.log(getUserWashlist);
// console.log(addToWishlist);
useEffect(() => {
  addToWishlist
  return () => {
    setAddToWishlist()
  }
}, [])
// console.log('addToWishlist:', addToWishlist);
// console.log('Type of addToWishlist:', typeof addToWishlist);
function handleRemove(id){
  removeFromWishlist(id)

}
const { addProduct  } = useContext(cartContext);
async function handlingAdd(id) {
    const resFlag = await addProduct(id)
    console.log(resFlag);

    if (resFlag) {
        toast.success('It has been successfully added.', { position: 'top-right', duration: 4000 })

    } else {
        toast.error('There is an error please try again later .', { position: 'top-right', duration: 4000 })
    }
}

  return (
    <>
      <div className="container mx-auto py-12 pt-24">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-[#e8e8e8] "> 
              <h1 className='text-4xl py-10 text-[#f58e8e] text-center '>My wishlist</h1>
              <h2 className='text-[#f58e8e] px-7 text-lg pb-4'>  Products : {addToWishlist?.data?.length? addToWishlist?.data?.length :0 }</h2>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
       
            <thead className="text-xs text-[#e8e8e8] uppercase bg-[#f58e8e] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                  
                </th>
              </tr>
            </thead>
            <tbody>

              {addToWishlist?.data?.map((product)=> <tr key={product._id} className="bg-[#edecec] border-b  dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                <td className="p-4">
                  <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.title}/>
                </td>
                <td className="px-6 py-4  text-gray-700 dark:text-white">
                  {product.title}
                </td>
                <td className="px-6 py-4  text-gray-700 dark:text-white">
                  {product.price}
                </td>
                <td className="px-6 py-4">
                  <div href="#" className="font-medium text-red-600 dark:text-red-500  w-fit"><i onClick={() => handleRemove(product.id)} class="fa-solid fa-heart-circle-minus text-2xl cursor-pointer"></i></div>
                </td>
                <td className="px-6 py-4">
                <button onClick={() => handlingAdd(product._id)} className='btn  btnDetails bg-custom-green hover:bg-lime-900 w-[80%] mx-auto rounded-md py-2 mt-3 text-white'>Add to cart</button>

                </td>
              </tr>)}
            </tbody>


        </table>

        { addToWishlist?.data?.lenght !== 0 ? '' : <svg className=' m-auto w-[40%] mb-7' viewBox="-51.2 -51.2 614.40 614.40" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} transform="translate(0,0), scale(1)"><path transform="translate(-51.2, -51.2), scale(19.2)" d="M16,30.296633237972856C18.509358298238272,31.099624350474777,20.503272341651527,27.87848360169163,22.760071833906284,26.518877097053977C25.09811958552175,25.11032266314905,28.427949915446558,24.67541552776727,29.498422173293033,22.16452285238498C30.57010175611906,19.650798283484903,28.973858637350965,16.822753702272532,27.978869997459597,14.277698507777691C27.16262228067077,12.189840005358239,25.71768498632612,10.545278250208959,24.282593382353458,8.823091979942198C22.817355013690417,7.06472798826796,21.74855146791817,4.4977149062059985,19.49511288587046,4.0967386461136C17.22730048431965,3.6932047124136256,15.603347543568582,6.5696617635447465,13.319892444632508,6.872391899834259C10.349796704734683,7.266153742819959,6.993799934448797,4.345440879700851,4.5495751198173995,6.078150361607964C2.2742904285001124,7.691098293027317,3.5563940310007123,11.394782769004571,3.0671709711965676,14.140539905709973C2.556580648723487,17.00622048590263,-0.40993744900150997,20.47629101623607,1.6109269437523626,22.571269481804634C3.9591892300066216,25.00565297574383,8.566042566473701,21.33045805287297,11.546090264069589,22.93041882759875C14.12638383958187,24.315755213800585,13.210668704546423,29.404051161652713,16,30.296633237972856" fill="#c3c3c6" strokewidth={0} /></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="3.072" /><g id="SVGRepo_iconCarrier">
           <style type="text/css" dangerouslySetInnerHTML={{__html: " .st0{display:none;} .st1{fill:#FFE2D2;} .st2{fill:#FFDE83;} .st3{fill:#f58e8e;} .st4{fill:#DBDBEF;} .st5{fill:#BCE2FF;} .st6{fill:#e8e8e8;} .st7{fill:#5960c5;} .st8{fill:#FFBE83;} .st9{fill:#F5949E;} .st10{fill:#D0FF67;} .st11{fill:#C69C6D;} .st12{fill:#C5BDD3;} .st13{fill:#FFE2B8;} .st14{fill:#F54670;} " }} /> <g className="st0" id="Layer_1" /> <g id="Layer_2"> <path className="st6" d="M261.73,50.59c0-0.46-0.05-0.92-0.14-1.37c-0.09-0.45-0.23-0.89-0.4-1.31c-0.18-0.42-0.39-0.83-0.65-1.21 c-0.25-0.38-0.54-0.74-0.87-1.06c-0.32-0.33-0.68-0.62-1.06-0.87c-0.38-0.26-0.79-0.47-1.21-0.65c-0.42-0.17-0.86-0.31-1.31-0.4 c-0.9-0.18-1.83-0.18-2.73,0c-0.45,0.09-0.89,0.23-1.31,0.4c-0.43,0.18-0.83,0.39-1.21,0.65c-0.38,0.25-0.74,0.54-1.07,0.87 c-0.32,0.32-0.61,0.68-0.87,1.06c-0.25,0.38-0.46,0.79-0.64,1.21c-0.18,0.42-0.31,0.86-0.4,1.31c-0.09,0.45-0.14,0.91-0.14,1.37 c0,0.45,0.05,0.91,0.14,1.36c0.09,0.45,0.22,0.89,0.4,1.31c0.18,0.43,0.39,0.83,0.64,1.21c0.26,0.38,0.55,0.74,0.87,1.06 c0.33,0.33,0.69,0.62,1.07,0.88c0.38,0.25,0.78,0.46,1.21,0.64c0.42,0.18,0.86,0.31,1.31,0.4c0.45,0.09,0.91,0.14,1.36,0.14 c0.46,0,0.92-0.05,1.37-0.14c0.45-0.09,0.89-0.22,1.31-0.4c0.42-0.18,0.83-0.39,1.21-0.64c0.38-0.26,0.74-0.55,1.06-0.88 c0.33-0.32,0.62-0.68,0.87-1.06c0.26-0.38,0.47-0.78,0.65-1.21c0.17-0.42,0.31-0.86,0.4-1.31 C261.68,51.5,261.73,51.04,261.73,50.59z" /> <g> <path className="st3" d="M249.37,419.42c-0.13,0.11-0.27,0.21-0.39,0.33s-0.22,0.25-0.33,0.38c-0.3,0.35-0.58,0.72-0.81,1.14 L230.78,452c-0.25-0.04-0.5-0.1-0.76-0.15l-0.51-0.1c-1.77-0.35-3.34-0.7-4.79-1.08c-0.96-0.25-1.98-0.54-3.21-0.91 c-1.44-0.45-2.93-0.95-4.44-1.51c-1.37-0.5-2.4-0.9-3.33-1.29c-1.46-0.61-2.9-1.3-4.12-1.9l-0.34-0.16 c-1.06-0.52-2.07-1.01-3.02-1.52c-1.27-0.69-2.55-1.49-3.98-2.38l-0.97-0.59c-0.77-0.47-1.5-0.91-2.15-1.36 c-0.24-0.16-0.49-0.31-0.74-0.46l-0.05-0.04c-28.31-19.73-51.88-39.62-70.09-59.13c-2.64-2.83-7.07-2.98-9.9-0.34 c-0.03,0.03-0.05,0.05-0.08,0.08c-0.12,0.12-0.24,0.24-0.35,0.36c-0.11,0.13-0.22,0.26-0.32,0.39c-0.02-0.02-0.04-0.04-0.06-0.07 c-1.88-2.23-4.05-4.96-6.63-8.33c-0.01-0.01-0.02-0.02-0.03-0.04c0.14-0.08,0.29-0.16,0.43-0.26c0.14-0.1,0.26-0.21,0.39-0.32 c1.53-1.28,2.51-3.19,2.51-5.35c0-3.86-3.13-7-7-7h-0.01c-1.4,0-2.69,0.43-3.78,1.14c-0.14,0.09-0.29,0.17-0.42,0.27 c-0.13,0.1-0.26,0.21-0.38,0.32c-0.01-0.01-0.02-0.02-0.03-0.03c-1.92-2.68-3.64-5.11-4.98-7.03c-0.01-0.02-0.02-0.03-0.03-0.04 c0.14-0.07,0.27-0.14,0.4-0.22c0.01-0.01,0.03-0.02,0.04-0.03c0.14-0.09,0.28-0.19,0.41-0.29c1.86-1.35,2.88-3.47,2.88-5.65 c0-1.25-0.33-2.51-1.03-3.65c-10.48-17.07-16.92-34.1-19.12-50.61c-6.02-45,25.7-86.5,70.7-92.51 c16.88-2.25,34.12,0.85,49.14,8.75l-17.63,45.66c-1.25,3.22,0.05,6.87,3.05,8.59l42.63,24.45l-25.87,37.53 c-1.23,1.79-1.56,4.05-0.9,6.11c0.66,2.07,2.25,3.71,4.29,4.45l27.03,9.75l-19.74,48.45c-1.15,2.82-0.34,6.06,2,8.01l15.57,13.02 c1.31,1.1,2.9,1.63,4.48,1.63c1.84,0,3.65-0.73,5.01-2.12c0.11-0.12,0.23-0.23,0.34-0.36l0.03-0.03c0.1-0.12,0.19-0.25,0.28-0.37 L249.37,419.42z" /> <path className="st3" d="M413.91,230.82c-13.59-17.28-33.11-28.23-54.94-30.84c-15.78-1.88-31.58,0.8-45.79,7.77l-25.83,36.18 l7.24,7.06c2.52,2.44,2.79,6.31,0.81,9.07c-0.09,0.13-0.19,0.27-0.3,0.4s-0.22,0.25-0.34,0.37l11.94,11.88 c0.03-0.03,0.05-0.06,0.08-0.09c0.09-0.09,0.18-0.18,0.28-0.26c0.12-0.11,0.25-0.22,0.38-0.32c2.71-2.17,6.68-2.03,9.23,0.45 l11.48,11.19c1.41,1.36,2.17,3.25,2.12,5.21c-0.06,1.95-0.93,3.8-2.41,5.08l-28.94,25.17l16.5,11.24 c1.58,1.08,2.65,2.75,2.97,4.62c0.31,1.88-0.15,3.81-1.28,5.34l-37.55,50.59l24.1,33.54c1.95,2.73,1.7,6.46-0.61,8.9l-18.22,19.23 l0.09-0.02c1.81-0.38,3.32-0.74,4.72-1.13c0.96-0.27,1.99-0.58,3.25-0.98c1.41-0.45,2.89-0.97,4.36-1.54 c1.38-0.53,2.41-0.95,3.36-1.36c1.43-0.63,2.85-1.33,4.05-1.93l0.28-0.14c1.09-0.55,2.12-1.07,3.09-1.61 c1.25-0.71,2.51-1.51,3.85-2.37l1.02-0.64c0.77-0.49,1.5-0.95,2.17-1.42c0.24-0.17,0.47-0.32,0.71-0.47l0.05-0.03 c70.8-50.85,109.52-100.46,115.13-147.47C433.57,269.65,427.51,248.11,413.91,230.82z M411.82,277.66 c-0.41,0.08-0.82,0.11-1.23,0.11c-3.33,0-6.28-2.39-6.88-5.78c-1.57-8.85-5.38-17.31-11.02-24.47c-3.4-4.33-7.38-8.1-11.83-11.21 c-3.17-2.22-3.94-6.58-1.73-9.75c2.22-3.17,6.58-3.94,9.75-1.73c5.58,3.9,10.56,8.62,14.82,14.03 c7.05,8.97,11.82,19.58,13.79,30.69C418.17,273.35,415.63,276.99,411.82,277.66z" /> <path className="st6" d="M260.08,428.07l-19.41,34.98c-1.25,2.24-3.6,3.6-6.12,3.6c-0.27,0-0.53-0.02-0.8-0.05 c-1.3-0.14-2.37-0.29-3.39-0.45c-1.03-0.16-2.04-0.36-3.06-0.56l-0.5-0.1c-2.05-0.41-3.89-0.82-5.61-1.27 c-1.14-0.3-2.33-0.64-3.76-1.07c-1.71-0.52-3.46-1.12-5.21-1.76c-1.56-0.58-2.76-1.05-3.9-1.52c-1.77-0.75-3.43-1.54-4.82-2.21 l-0.33-0.16c-1.16-0.57-2.37-1.15-3.6-1.83c-1.62-0.87-3.13-1.81-4.6-2.72l-0.95-0.58c-0.87-0.54-1.77-1.09-2.71-1.73l-0.07-0.04 c-0.27-0.16-0.53-0.32-0.78-0.5c-29.16-20.32-53.52-40.88-72.42-61.13c-2.37-2.55-2.48-6.39-0.41-9.06 c0.1-0.13,0.21-0.26,0.32-0.39c0.11-0.12,0.23-0.24,0.35-0.36c0.03-0.03,0.05-0.05,0.08-0.08c2.83-2.64,7.26-2.49,9.9,0.34 c18.21,19.51,41.78,39.4,70.09,59.13l0.05,0.04c0.25,0.15,0.5,0.3,0.74,0.46c0.65,0.45,1.38,0.89,2.15,1.36l0.97,0.59 c1.43,0.89,2.71,1.69,3.98,2.38c0.95,0.51,1.96,1,3.02,1.52l0.34,0.16c1.22,0.6,2.66,1.29,4.12,1.9c0.93,0.39,1.96,0.79,3.33,1.29 c1.51,0.56,3,1.06,4.44,1.51c1.23,0.37,2.25,0.66,3.21,0.91c1.45,0.38,3.02,0.73,4.79,1.08l0.51,0.1 c0.26,0.05,0.51,0.11,0.76,0.15l17.06-30.73c0.23-0.42,0.51-0.79,0.81-1.14c0.11-0.13,0.21-0.26,0.33-0.38s0.26-0.22,0.39-0.33 c2.17-1.89,5.34-2.34,7.99-0.87C260.74,420.42,261.96,424.69,260.08,428.07z" /> <path className="st6" d="M114.24,365.54c0,2.16-0.98,4.07-2.51,5.35c-0.13,0.11-0.25,0.22-0.39,0.32c-0.14,0.1-0.29,0.18-0.43,0.26 c-1.06,0.67-2.31,1.07-3.67,1.07c-3.86,0-7-3.13-7-7c0-2.1,0.93-3.98,2.41-5.27c0.12-0.11,0.25-0.22,0.38-0.32 c0.13-0.1,0.28-0.18,0.42-0.27c1.09-0.71,2.38-1.14,3.78-1.14h0.01C111.11,358.54,114.24,361.68,114.24,365.54z" /> <path className="st6" d="M249.34,344.03l-20.55,50.47l11.65,9.74c2.84,2.38,3.32,6.53,1.16,9.49c-0.09,0.12-0.18,0.25-0.28,0.37 l-0.03,0.03c-0.11,0.13-0.23,0.24-0.34,0.36c-1.36,1.39-3.17,2.12-5.01,2.12c-1.58,0-3.17-0.53-4.48-1.63l-15.57-13.02 c-2.34-1.95-3.15-5.19-2-8.01l19.74-48.45l-27.03-9.75c-2.04-0.74-3.63-2.38-4.29-4.45c-0.66-2.06-0.33-4.32,0.9-6.11l25.87-37.53 l-42.63-24.45c-3-1.72-4.3-5.37-3.05-8.59l17.63-45.66c-15.02-7.9-32.26-11-49.14-8.75c-45,6.01-76.72,47.51-70.7,92.51 c2.2,16.51,8.64,33.54,19.12,50.61c0.7,1.14,1.03,2.4,1.03,3.65c0,2.18-1.02,4.3-2.88,5.65c-0.13,0.1-0.27,0.2-0.41,0.29 c-0.01,0.01-0.03,0.02-0.04,0.03c-0.13,0.08-0.26,0.15-0.4,0.22c-3.24,1.71-7.29,0.65-9.23-2.52 c-11.51-18.74-18.6-37.61-21.07-56.08c-3.41-25.5,3.32-50.8,18.94-71.25c15.63-20.44,38.28-33.58,63.78-36.99 c22-2.94,44.51,1.89,63.39,13.6c2.86,1.77,4.05,5.33,2.84,8.47l-17.64,45.65l44.02,25.24c1.69,0.98,2.91,2.62,3.34,4.53 c0.44,1.9,0.05,3.91-1.06,5.52l-25.03,36.32l25.35,9.15c1.79,0.65,3.24,2,4.02,3.74C250.03,340.29,250.06,342.27,249.34,344.03z" /> <path className="st6" d="M444.86,293.14c-6.09,51.1-46.78,104-120.93,157.24c-0.25,0.18-0.52,0.36-0.79,0.53l-0.07,0.04 c-0.94,0.66-1.84,1.23-2.72,1.78l-0.86,0.54c-1.51,0.97-3,1.92-4.59,2.81c-1.26,0.71-2.49,1.33-3.68,1.93l-0.27,0.13 c-1.36,0.69-2.99,1.5-4.73,2.26c-1.16,0.5-2.37,0.99-3.95,1.6c-1.71,0.66-3.43,1.27-5.11,1.8c-1.45,0.47-2.65,0.83-3.8,1.15 c-1.67,0.46-3.43,0.88-5.53,1.33l-0.52,0.11c-1.02,0.22-2.04,0.43-3.07,0.61c-2.18,0.38-4.25,0.62-6,0.81l-0.91,0.11 c-0.78,0.09-1.57,0.18-2.36,0.24c-2.41,0.18-4.74,0.21-6.7,0.22c-0.3,0-0.59,0.01-0.88,0.02l-0.37,0.01h-0.18 c-2.76,0-5.27-1.62-6.39-4.15c-1.15-2.58-0.63-5.61,1.31-7.66l27.15-28.66l-23.7-32.99c-1.78-2.48-1.75-5.81,0.06-8.26 l36.25-48.84l-17.98-12.24c-1.8-1.23-2.92-3.21-3.05-5.38c-0.13-2.16,0.76-4.27,2.39-5.69l30.06-26.14l-6.03-5.88 c-2.74-2.66-2.82-7.03-0.21-9.81c0.03-0.03,0.05-0.06,0.08-0.09c0.09-0.09,0.18-0.18,0.28-0.26c0.12-0.11,0.25-0.22,0.38-0.32 c2.71-2.17,6.68-2.03,9.23,0.45l11.48,11.19c1.41,1.36,2.17,3.25,2.12,5.21c-0.06,1.95-0.93,3.8-2.41,5.08l-28.94,25.17 l16.5,11.24c1.58,1.08,2.65,2.75,2.97,4.62c0.31,1.88-0.15,3.81-1.28,5.34l-37.55,50.59l24.1,33.54c1.95,2.73,1.7,6.46-0.61,8.9 l-18.22,19.23l0.09-0.02c1.81-0.38,3.32-0.74,4.72-1.13c0.96-0.27,1.99-0.58,3.25-0.98c1.41-0.45,2.89-0.97,4.36-1.54 c1.38-0.53,2.41-0.95,3.36-1.36c1.43-0.63,2.85-1.33,4.05-1.93l0.28-0.14c1.09-0.55,2.12-1.07,3.09-1.61 c1.25-0.71,2.51-1.51,3.85-2.37l1.02-0.64c0.77-0.49,1.5-0.95,2.17-1.42c0.24-0.17,0.47-0.32,0.71-0.47l0.05-0.03 c70.8-50.85,109.52-100.46,115.13-147.47c2.61-21.84-3.45-43.38-17.05-60.67c-13.59-17.28-33.11-28.23-54.94-30.84 c-15.78-1.88-31.58,0.8-45.79,7.77l-25.83,36.18l7.24,7.06c2.52,2.44,2.79,6.31,0.81,9.07c-0.09,0.13-0.19,0.27-0.3,0.4 s-0.22,0.25-0.34,0.37c-0.01,0.02-0.03,0.03-0.04,0.05c-2.69,2.77-7.13,2.83-9.9,0.13l-11.55-11.25 c-2.47-2.41-2.82-6.27-0.81-9.08l30.34-42.48c0.64-0.9,1.5-1.64,2.49-2.15c17.08-8.8,36.22-12.25,55.33-9.97 C413.37,192.37,451.15,240.4,444.86,293.14z" /> <path className="st6" d="M411.82,277.66c-0.41,0.08-0.82,0.11-1.23,0.11c-3.33,0-6.28-2.39-6.88-5.78 c-1.57-8.85-5.38-17.31-11.02-24.47c-3.4-4.33-7.38-8.1-11.83-11.21c-3.17-2.22-3.94-6.58-1.73-9.75 c2.22-3.17,6.58-3.94,9.75-1.73c5.58,3.9,10.56,8.62,14.82,14.03c7.05,8.97,11.82,19.58,13.79,30.69 C418.17,273.35,415.63,276.99,411.82,277.66z" /> <path className="st6" d="M177.31,91.71c-3.08,2.34-3.68,6.73-1.34,9.81l41.75,54.94c1.38,1.81,3.47,2.76,5.58,2.76 c1.48,0,2.96-0.46,4.23-1.43c3.08-2.33,3.68-6.73,1.34-9.8l-41.75-54.94C184.78,89.97,180.38,89.37,177.31,91.71z" /> <path className="st6" d="M254.62,67.51h-0.08c-3.83,0-6.96,3.08-7,6.92l-0.58,53.54c-0.04,3.87,3.06,7.04,6.93,7.08h0.08 c3.83,0,6.95-3.09,6.99-6.93l0.58-53.54C261.58,70.72,258.48,67.55,254.62,67.51z" /> <path className="st6" d="M325.34,95.77l-32.9,32.89c-2.73,2.73-2.73,7.17,0,9.9c1.37,1.37,3.16,2.05,4.95,2.05s3.59-0.68,4.95-2.05 l32.9-32.89c2.73-2.74,2.73-7.17,0-9.9C332.5,93.03,328.07,93.03,325.34,95.77z" /> <path className="st6" d="M278.51,144.26c-0.44,0.09-0.89,0.22-1.31,0.4c-0.42,0.17-0.83,0.39-1.21,0.64 c-0.38,0.26-0.74,0.55-1.06,0.87c-1.3,1.3-2.05,3.11-2.05,4.95s0.75,3.65,2.05,4.95c0.32,0.32,0.68,0.62,1.06,0.87 c0.38,0.25,0.79,0.47,1.21,0.64c0.42,0.18,0.87,0.31,1.31,0.4c0.45,0.09,0.91,0.14,1.37,0.14c1.85,0,3.65-0.75,4.95-2.05 c1.3-1.3,2.05-3.11,2.05-4.95s-0.75-3.64-2.05-4.95C283.21,144.54,280.79,143.8,278.51,144.26z" /> </g> </g> </g></svg> }
        

        </div>
      </div>






    </>
  )
}
