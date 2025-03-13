import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";

export default function Cart() {
    useEffect(() => {
allProducs
        return () => {
            
            setCartPrice(0)
            setNumOfCartItems(0)
        }
    }, [])

    const { allProducs, cartPrice, numOfCartItems, updateCount, removeItem, removeAllCart, setAllProducs, setCartPrice,
        setNumOfCartItems } = useContext(cartContext)
    const [clearAllCart, setClearAllCart] = useState('')
    function handleUpdateCount(productId, newCount) {
        updateCount(productId, newCount)
    }
    function handleRemove(productId) {
        removeItem(productId)
    }

    async function handelRemoveCart() {
        let { data } = await removeAllCart()

        console.log(data);
        if (data.message == "success") {
            setClearAllCart('No items')
            setAllProducs(null)
        }

    }


    return (
        <>
            <div className="container mx-auto py-20">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <div className="w-full  ext-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <div className=" px-9 text-2xl py-4 text-[#447b55] text-center"><h2>Cart shop</h2></div>
                        <div className="flex justify-between px-9 text-xl pb-5"> <span>total price: <span className='text-custom-green'>{clearAllCart ? '' : cartPrice}</span></span> <span>total number of items: <span className='text-custom-green'>{clearAllCart ? "" : numOfCartItems}</span></span> </div>
                        <div className='flex justify-end mr-5' ><i onClick={handelRemoveCart} className="fa-regular fa-trash-can text-3xl  mx-9 cursor-pointer pb-5  " style={{ color: '#c20000' }} /></div>
                    </div>
                    {clearAllCart ? <div className=" flex justify-center items-center flex-col pb-12">
                        <svg className=' my-11' fill="#1b8322" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256px" height="256px" viewBox="-10.98 -10.98 131.77 131.77" xml:space="preserve" stroke="#1b8322" stroke-width="0.00109814" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><path transform="translate(-10.98, -10.98), scale(4.1178125)" d="M16,26.92474466841668C18.34345893525151,26.61487279183152,20.719667580417287,27.601469345734785,22.946989978014905,26.80972740654719C25.513314072552873,25.897481196755155,28.43822885455397,24.671239610905285,29.451588704545372,22.143134723858182C30.464580039082243,19.61594919997863,28.334826697867282,16.977071279025164,27.969776020344433,14.279006024292938C27.600497696035074,11.54969451361244,29.042932832396467,8.341213275995639,27.296077283959484,6.211893315061463C25.552270914549496,4.086290134128044,22.124298979518983,4.889808118024581,19.527088757033187,3.9878388297423264C16.748133088778502,3.0227522747292292,14.210617344624124,-0.45032561384585046,11.516924716065256,0.7320477145236239C8.700330245776179,1.9683677546034941,9.415878531595833,6.331830824804166,7.984369529062057,9.054416659489796C6.972002687829328,10.97983635057597,5.202830605299363,12.318659505189066,4.368494246253036,14.327641946133545C3.321377855566988,16.848973324904996,1.9259645865545651,19.484868376756083,2.548627067313408,22.14303618415203C3.205833223796219,24.948672145798525,5.04754430653613,27.852346990541573,7.7626767416129265,28.81752518206732C10.472144688052827,29.78068975509408,13.149243871651176,27.301695652233807,16,26.92474466841668" fill="#e8f8ed" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.0981400000000001"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M52.996,11.231l5.39,1.806l-1.807,5.389L51.19,16.62L52.996,11.231z M56.155,1.807L50.766,0l-1.807,5.39l5.389,1.807 L56.155,1.807z M70.469,9.6l-5.392-1.808l-1.808,5.39l5.392,1.808L70.469,9.6z M83.017,25.799l1.809-5.389l-5.389-1.808 l-1.723,5.136l-5.389-1.807l1.723-5.134l-5.391-1.808l-1.808,5.39l5.39,1.806l-1.722,5.135l5.39,1.808l1.722-5.136L83.017,25.799z M66.795,20.547l-5.39-1.807l-1.809,5.389l5.391,1.807l-1.664,4.967l5.39,1.807l1.807-5.39l-5.389-1.807L66.795,20.547z M93.262,68.206c-1.347-0.292-2.683,0.56-2.978,1.908l-2.375,10.867H40.237L23.282,26.242c-0.324-1.047-1.292-1.761-2.388-1.761 h-10.5c-1.381,0-2.5,1.119-2.5,2.5c0,1.381,1.119,2.5,2.5,2.5h8.657l16.955,54.739c0.324,1.047,1.292,1.761,2.388,1.761h51.528 c1.176,0,2.19-0.818,2.442-1.966l2.806-12.834C95.465,69.834,94.61,68.502,93.262,68.206z M101.346,36.885 c-0.476-0.572-1.181-0.903-1.924-0.903H79.603l1.693-5.047l-5.389-1.807l-1.807,5.39l4.367,1.464H73.61l0.34-1.014L68.56,33.16 l-0.945,2.821H40.394c-1.381,0-2.5,1.119-2.5,2.5c0,1.381,1.119,2.5,2.5,2.5h56.016l-3.562,19H55.394c-1.381,0-2.5,1.118-2.5,2.5 c0,1.381,1.119,2.5,2.5,2.5h39.528c1.202,0,2.235-0.856,2.457-2.039l4.5-24C102.015,38.212,101.821,37.457,101.346,36.885z M52.394,100.648c0,5.054-4.112,9.166-9.167,9.166c-5.055,0-9.167-4.112-9.167-9.166c0-5.055,4.113-9.167,9.167-9.167 C48.282,91.481,52.394,95.594,52.394,100.648z M47.394,100.648c0-2.299-1.869-4.167-4.167-4.167c-2.298,0-4.167,1.868-4.167,4.167 c0,2.297,1.87,4.166,4.167,4.166C45.525,104.814,47.394,102.945,47.394,100.648z M90.256,100.648c0,5.054-4.111,9.166-9.166,9.166 c-5.056,0-9.168-4.112-9.168-9.166c0-5.055,4.112-9.167,9.168-9.167C86.142,91.481,90.256,95.594,90.256,100.648z M85.256,100.648 c0-2.299-1.869-4.167-4.166-4.167c-2.3,0-4.168,1.868-4.168,4.167c0,2.297,1.87,4.166,4.168,4.166 C83.387,104.814,85.256,102.945,85.256,100.648z"></path> </g> </g></svg>

                        <h1 className='text-lg'>You have no products to buy ,  <Link to="/Product" className='text-[#1b8322]'> Add some products</Link></h1>
                    </div> : <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className=" text-xs text-gray-700 uppercase bg-[#e8f8ed] dark:bg-gray-700 dark:text-gray-400">
                            <tr >
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducs?.map((product) => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4">
                                    <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {product.product.title}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <button onClick={() => handleUpdateCount(product.product._id, product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <div>
                                            <input id="first_product" className=" text-center bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={product.count} required />
                                        </div>
                                        <button onClick={() => handleUpdateCount(product.product._id, product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {product.price}
                                </td>
                                <td className="px-6 py-4">
                                    <a onClick={() => handleRemove(product.product._id)} href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                </td>
                            </tr>)}

                        </tbody>

                    </table>}
                    {allProducs?.length == 0 ? <div className=" flex justify-center items-center flex-col pb-12">
                        <svg className=' my-11' fill="#1b8322" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256px" height="256px" viewBox="-10.98 -10.98 131.77 131.77" xml:space="preserve" stroke="#1b8322" stroke-width="0.00109814" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><path transform="translate(-10.98, -10.98), scale(4.1178125)" d="M16,26.92474466841668C18.34345893525151,26.61487279183152,20.719667580417287,27.601469345734785,22.946989978014905,26.80972740654719C25.513314072552873,25.897481196755155,28.43822885455397,24.671239610905285,29.451588704545372,22.143134723858182C30.464580039082243,19.61594919997863,28.334826697867282,16.977071279025164,27.969776020344433,14.279006024292938C27.600497696035074,11.54969451361244,29.042932832396467,8.341213275995639,27.296077283959484,6.211893315061463C25.552270914549496,4.086290134128044,22.124298979518983,4.889808118024581,19.527088757033187,3.9878388297423264C16.748133088778502,3.0227522747292292,14.210617344624124,-0.45032561384585046,11.516924716065256,0.7320477145236239C8.700330245776179,1.9683677546034941,9.415878531595833,6.331830824804166,7.984369529062057,9.054416659489796C6.972002687829328,10.97983635057597,5.202830605299363,12.318659505189066,4.368494246253036,14.327641946133545C3.321377855566988,16.848973324904996,1.9259645865545651,19.484868376756083,2.548627067313408,22.14303618415203C3.205833223796219,24.948672145798525,5.04754430653613,27.852346990541573,7.7626767416129265,28.81752518206732C10.472144688052827,29.78068975509408,13.149243871651176,27.301695652233807,16,26.92474466841668" fill="#e8f8ed" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.0981400000000001"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M52.996,11.231l5.39,1.806l-1.807,5.389L51.19,16.62L52.996,11.231z M56.155,1.807L50.766,0l-1.807,5.39l5.389,1.807 L56.155,1.807z M70.469,9.6l-5.392-1.808l-1.808,5.39l5.392,1.808L70.469,9.6z M83.017,25.799l1.809-5.389l-5.389-1.808 l-1.723,5.136l-5.389-1.807l1.723-5.134l-5.391-1.808l-1.808,5.39l5.39,1.806l-1.722,5.135l5.39,1.808l1.722-5.136L83.017,25.799z M66.795,20.547l-5.39-1.807l-1.809,5.389l5.391,1.807l-1.664,4.967l5.39,1.807l1.807-5.39l-5.389-1.807L66.795,20.547z M93.262,68.206c-1.347-0.292-2.683,0.56-2.978,1.908l-2.375,10.867H40.237L23.282,26.242c-0.324-1.047-1.292-1.761-2.388-1.761 h-10.5c-1.381,0-2.5,1.119-2.5,2.5c0,1.381,1.119,2.5,2.5,2.5h8.657l16.955,54.739c0.324,1.047,1.292,1.761,2.388,1.761h51.528 c1.176,0,2.19-0.818,2.442-1.966l2.806-12.834C95.465,69.834,94.61,68.502,93.262,68.206z M101.346,36.885 c-0.476-0.572-1.181-0.903-1.924-0.903H79.603l1.693-5.047l-5.389-1.807l-1.807,5.39l4.367,1.464H73.61l0.34-1.014L68.56,33.16 l-0.945,2.821H40.394c-1.381,0-2.5,1.119-2.5,2.5c0,1.381,1.119,2.5,2.5,2.5h56.016l-3.562,19H55.394c-1.381,0-2.5,1.118-2.5,2.5 c0,1.381,1.119,2.5,2.5,2.5h39.528c1.202,0,2.235-0.856,2.457-2.039l4.5-24C102.015,38.212,101.821,37.457,101.346,36.885z M52.394,100.648c0,5.054-4.112,9.166-9.167,9.166c-5.055,0-9.167-4.112-9.167-9.166c0-5.055,4.113-9.167,9.167-9.167 C48.282,91.481,52.394,95.594,52.394,100.648z M47.394,100.648c0-2.299-1.869-4.167-4.167-4.167c-2.298,0-4.167,1.868-4.167,4.167 c0,2.297,1.87,4.166,4.167,4.166C45.525,104.814,47.394,102.945,47.394,100.648z M90.256,100.648c0,5.054-4.111,9.166-9.166,9.166 c-5.056,0-9.168-4.112-9.168-9.166c0-5.055,4.112-9.167,9.168-9.167C86.142,91.481,90.256,95.594,90.256,100.648z M85.256,100.648 c0-2.299-1.869-4.167-4.166-4.167c-2.3,0-4.168,1.868-4.168,4.167c0,2.297,1.87,4.166,4.168,4.166 C83.387,104.814,85.256,102.945,85.256,100.648z"></path> </g> </g></svg>
                        <h1 className='text-lg'>You have no products to buy ,  <Link to="/Product" className='text-[#1b8322]'> Add some products</Link></h1>
                    </div> : <>
                        <div className="mx-auto border-emerald-800 text-center"><Link to="/Product" className='text-[#1b8322] '> Continue shopping</Link></div>
                        <Link to='/payment'>

                            <Button className=' bg-[#1b8322] focus:ring-0 enabled:hover:bg-lime-600 m-6  w-[50%] mx-auto '>
                                <HiShoppingCart className="mr-2 h-5 w-5" />
                                Buy now
                            </Button>
                        </Link>
                    </>
                    }
                </div></div>








        </>
    )
}
