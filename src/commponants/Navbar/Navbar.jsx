import React, { useContext, useState } from 'react'
import logo from '../../assets/imgs/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Auth } from '../../Context/AuthContext'
import { Button, Navbar } from "flowbite-react";
export default function NavbarCopmponant() {
    const navigate = useNavigate()
    const { token, setToken } = useContext(Auth)
    function logoutUser() {
        localStorage.removeItem('tkn');
        setToken(null)
        navigate('/login')
    }



    return (
        <>
            <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900 fixed w-full z-50 top-0 ">
                <Navbar fluid rounded className='shadow '>
                    
                        <Navbar.Brand >
                            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> <img src={logo} className="mr-3 h-6 sm:h-9" alt="Fresh Cart" /></span>
                        </Navbar.Brand>
                        <div className="flex md:order-2 items-center">
                            {token ? <span className='cursor-pointer flex flex-nowrap border-gray-700 hover:bg-gray-700 hover:text-white transition-all border-2 px-3 mx-3 py-1 rounded-2xl' onClick={logoutUser} > Log out</span>
                                : <>
                                    <Button className='btnDetails bg-gray-900 shadow hover:bg-lime-900 rounded-md  flex items-center mx-2 text-white h-[40px]'>
                                        <NavLink to="/login" className={({ isActive }) => (isActive ? "text-white focus:text-white hover:text-white" : " hover:text-white text-white")}> Login</NavLink>
                                    </Button>
                                    <Button className=' group btnDetails text-gray-900 shadow hover:bg-lime-900  rounded-md  flex items-center mx-2 bg-gray-200 h-[40px] border-0'>
                                        <NavLink to="/register" className="group-hover:text-white">Register</NavLink>
                                    </Button>
                                </>}
                            <Navbar.Toggle />
                        </div>
                        <Navbar.Collapse>
                            {token ? <>
                                <Navbar.Link active className='bg-white'>
                                    <NavLink to="/home" className="block py-2 px-3 text-gray-950  rounded md:hover:text-green-700 md:p-0 dark:text-white md:dark:text-green-500" >Home</NavLink>
                                </Navbar.Link>
                                <Navbar.Link >
                                    <NavLink to="/Cart" className="block py-2 px-3 text-gray-950 rounded   md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</NavLink>
                                </Navbar.Link>
                                <Navbar.Link >
                                    <NavLink to="/Product" className="block py-2 px-3 text-gray-950 rounded   md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Product</NavLink>
                                </Navbar.Link>
                                <Navbar.Link >
                                    <NavLink to="/Categories" className="block py-2 px-3 text-gray-950 rounded   md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categories</NavLink>
                                </Navbar.Link>
                                <Navbar.Link >
                                    <NavLink to="/Brands" className="block py-2 px-3 text-gray-950 rounded   md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brands</NavLink>
                                </Navbar.Link>
                                <Navbar.Link >
                                    <NavLink to="/wishlist" className="block py-2 px-3 text-gray-950 rounded   md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My wishlist</NavLink>
                                </Navbar.Link>
                            </> : ""}
                        </Navbar.Collapse>

                </Navbar>


            </nav>
        </>
    )
}



