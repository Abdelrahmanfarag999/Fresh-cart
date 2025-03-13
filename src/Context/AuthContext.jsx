import React, { createContext, useState } from 'react'
export const Auth = createContext();
export default function AuthContext({ children }) {
    const [token, setToken] = useState(localStorage.getItem('tkn'))


    return (
        <>
           <Auth.Provider value={{ token, setToken }}>
                {children}
            </Auth.Provider>


        </>
    )
}
