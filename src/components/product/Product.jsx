import axios from 'axios'
import React, { useContext} from 'react'
import { RevolvingDot } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'
import { WishlistContext } from '../../Context/Wishlistcontext'
export default function Product() {
    const { addProductWishkist } = useContext(WishlistContext)
    function getAllProduct() {

        return axios.get("https://ecommerce.routemisr.com/api/v1/products")
    }
    const { data, isLoading, isError } = useQuery({
        queryKey: 'allProducts',
        queryFn: getAllProduct,
    });
    if (isError) {

        return
    }
    if (isLoading) {

        return <div className="loader  h-screen bg-gray-200 flex justify-center items-center">
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

    const { addProduct } = useContext(cartContext);
    async function handlingAdd(id) {
        const resFlag = await addProduct(id)
        // console.log(resFlag);

        if (resFlag) {
            toast.success('It has been successfully added.', { position: 'top-right', duration: 4000 })

        } else {
            toast.error('There is an error please try again later .', { position: 'top-right', duration: 4000 })
        }
    }
    async function handleaddToWishlist(id) {
        const resFlag = await addProductWishkist(id)
        // console.log(resFlag);
        if (resFlag) {
            toast.success('It has been successfully added to wishlist .', {
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#f58e8e',
                },
                iconTheme: {
                    primary: '#713200',
                    secondary: '#FFFAEE',
                },
                position: 'top-right',
                duration: 4000
            },
            );

        } else {
            toast.error('There is an error please try again later .', { position: 'top-right', duration: 4000 })
        }
    }

    return (
        <><div className="container mx-auto pt-8">
            {<div className="grid md:grid-cols-2 lg:grid-cols-4 rounded-lg p-2  pt-10">
                {data.data.data.map((product) => <div key={product._id} className='product overflow-hidden hover:shadow-md box-border m-3 p-3 transition-all rounded-lg flex flex-col'>
                    <Link to={`/productDetails/${product._id}`} key={product._id} className="        ">
                        <img src={product.imageCover} alt={product.title} className='w-full' />
                        <p className='text-custom-green'> {product.category.name} </p>
                        <h5> {product.title.split(' ').slice(0, 3).join(' ')}</h5>
                        <div className="flex justify-between">
                            <div><span className={product.priceAfterDiscount ? "line-through text-red-700  " : ''}>{product.priceAfterDiscount} </span> <span className='ml-3'>{product.price} EPG</span></div>
                            <div className=""><i className='fa-solid fa-star text-yellow-300'></i> <span>{product.ratingsAverage}</span> </div>
                        </div>
                    </Link>

                    <div className="flex justify-end mr-5">
                        <i onClick={() => handleaddToWishlist(product._id)} className="fa-solid fa-heart text-[#f58e8e] cursor-pointer object-contain text-2xl hover:text-[#ff3939]"></i></div>
                    <button onClick={() => handlingAdd(product._id)} className='btn  btnDetails bg-custom-green hover:bg-lime-900 w-[80%] mx-auto rounded-md py-2 mt-3 text-white'>Add</button>
                </div>
                )}
            </div>}
        </div>
        </>
    )
}
