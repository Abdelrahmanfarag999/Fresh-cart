import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const cartContext = createContext()
export default function CartContextProvider({ children }) {
    useEffect(() => {
        getUserCart();
    }, [])
    const [allProducs, setAllProducs] = useState(null)
    const [cartPrice, setCartPrice] = useState(0)
    const [numOfCartItems, setNumOfCartItems] = useState(0)
    const [CartId, setCartId] = useState(null)
    const [Isonline, setIsonline] = useState(false);

    async function addProduct(productID) {
        return axios.post('https://ecommerce.routemisr.com/api/v1/cart', { 'productId': productID },
            { headers: { token: localStorage.getItem('tkn') } })
            .then((sucsses) => {
                getUserCart()
                return true;
            })
            .catch((errr) => {
                console.log(errr);
                

                return false
            })
    }
    


    function getUserCart() {
        axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
            headers: { token: localStorage.getItem('tkn') }
        })
            .then((response) => {
                setCartPrice(response.data.data.totalCartPrice),
                    setNumOfCartItems(response.data.numOfCartItems),
                    setAllProducs(response.data.data.products)
                setCartId(response.data.data._id)
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
    function updateCount(productId, newCount) {
        axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            "count": newCount
        }, {
            headers: { token: localStorage.getItem('tkn') }
        })
            .then((response) => {
                setCartPrice(response.data.data.totalCartPrice),
                    setNumOfCartItems(response.data.numOfCartItems),
                    setAllProducs(response.data.data.products)
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
    function removeItem(id) {
        axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
            headers: { token: localStorage.getItem('tkn') }
        }).then((response) => {
            setCartPrice(response.data.data.totalCartPrice),
                setNumOfCartItems(response.data.numOfCartItems),
                setAllProducs(response.data.data.products)
        })
            .catch((error) => {
                console.log('error', error);
            })
    }

    async function removeAllCart() {
        return axios.delete('https://ecommerce.routemisr.com/api/v1/cart', {
            headers: { token: localStorage.getItem('tkn') }
        })
            .then((res => res))
            .catch(err => err)
    }




    return <cartContext.Provider value={{
        addProduct,
        allProducs,
        cartPrice,
        numOfCartItems,
        getUserCart,
        updateCount,
        removeItem,
        removeAllCart,
        setAllProducs,
        setCartPrice,
        setNumOfCartItems,
        setCartId,
        CartId,
        Isonline, setIsonline,
        // getId,
        // addProductWishkist,
        // getUserWishlist,
        // getIdWishlist
    }}>
        {children}

    </cartContext.Provider>

}
