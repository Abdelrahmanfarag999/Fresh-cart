import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const WishlistContext = createContext()
export default function WishlistContextProvider({ children }) {
    const [addToWishlist, setAddToWishlist] = useState(null)
    useEffect(() => {
        getUserWashlist();
    }, [])
    async function addProductWishkist(productID) {
        return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', { 'productId': productID },
            { headers: { token: localStorage.getItem('tkn') } })
            .then((res) => {
                setAddToWishlist(res.data)
                getUserWashlist(res.data)

                return true;
            })
            .catch((errr) => {


                return false
            })
    }
    // console.log(addToWishlist);

    function getUserWashlist() {
        axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
            headers: { token: localStorage.getItem('tkn') }
        })
            .then((response) => {
                setAddToWishlist(response.data)
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
    function removeFromWishlist(id) {
        axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
            headers: { token: localStorage.getItem('tkn') }
        }).then((resbonse) => {
            console.log('res', resbonse);
            setAddToWishlist(resbonse.data)
            getUserWashlist()
        }).catch((err) => {
            console.log('error', err);
        })
    }
    // useEffect(() => {
    //     getUserWashlist()

    // }, [])

    return <WishlistContext.Provider value={{
        addProductWishkist,
        addToWishlist,
        getUserWashlist,
        setAddToWishlist,
        removeFromWishlist,
    }}>


        {children}

    </WishlistContext.Provider>
}
