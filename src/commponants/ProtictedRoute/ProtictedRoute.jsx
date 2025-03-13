import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../Login/Login'

export default function ProtictedRoute( {children}) {

if ( localStorage.getItem('tkn') == null ){
    
 
    return<Navigate to={'/login'}/>
}



  return (
    <>
    {children}

    
    </>
  )
}
