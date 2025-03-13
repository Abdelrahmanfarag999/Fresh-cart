import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import axios from 'axios';
import { useState } from 'react';
import {  ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [erorMsg, setErorMsg] = useState(null)
    const [statusMsg, setStatusMsg] = useState(null)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isClicked, setIsClicked] = useState(true)
    const navigate = useNavigate()




    let user = {
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: '',
    }

    const userForm = useFormik({
        initialValues: user,
        onSubmit: function (values) {
            
            setIsClicked(false)
            axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
                .then(function (x) {
                    setIsSuccess(true)
                    setIsClicked(true)
                    setTimeout(() => {
                        setIsSuccess(false)
                    }, 2000);
                    setTimeout(() => {
                        navigate('/login')
                    }, 3000);
                })
                .catch(function (x) {
                    setIsClicked(true)
                    setErorMsg(x.response.data.message)
                    setStatusMsg(x.response.data.statusMsg)
                    setTimeout(() => {
                        setErorMsg(null)
                        setStatusMsg(null)
                    }, 3000);
                })

        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Name required.').matches(/^\w+(\s\w+){1,2}$/, 'First and last name must be entered.'),
            email: yup.string().email("Invalid value").required("E-mail is Required"),
            password: yup.string().required('Password is required')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/, 'Password must be between 6 and 12 characters long and include both letters and numbers.'),
            rePassword: yup.string().required("Required").oneOf([yup.ref("password")], 'Password and repassword dont match'),
            phone: yup.string().required('Phone number is required').matches(/^01[0125][0-9]{8}$/, 'Invalid number')
        })
    });

    return (
        <>
            <form onSubmit={userForm.handleSubmit} className="max-w-5xl mx-auto px-8 py-12 pt-16">
                <h2 className='py-5 text-custom-green'>Register Now :</h2>
                {isSuccess ? <Alert color="success">
                    <span className="font-medium">Congratulation !  Waiting...</span>
                </Alert> : ""}
                {erorMsg ? <Alert color="failure" icon={HiInformationCircle} className='mt-1'>
                    <span className='font-bold'>{statusMsg} : </span>
                    {erorMsg}
                </Alert> : ""}
                <div className="mb-5 ">
                    <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name :</label>
                    <input value={userForm.values.name} onChange={userForm.handleChange} onBlur={userForm.handleBlur} name='name' type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    {userForm.errors.name && userForm.touched.name ? <Alert color="failure" icon={HiInformationCircle} className='mt-1'>
                        {userForm.errors.name}
                    </Alert> : ''}


                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "> Email :</label>
                    <input value={userForm.values.email} onChange={userForm.handleChange} onBlur={userForm.handleBlur} name='email' type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    {userForm.errors.email && userForm.touched.email ? <Alert color="failure" icon={HiInformationCircle} className='mt-1'>
                        {userForm.errors.email}
                    </Alert> : ''}
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Password:</label>
                    <input value={userForm.values.password} onChange={userForm.handleChange} onBlur={userForm.handleBlur} name='password' type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    {userForm.errors.password && userForm.touched.password ? <Alert color="failure" icon={HiInformationCircle} className='mt-1'>
                        {userForm.errors.password}
                    </Alert> : ''}
                </div>
                <div className="mb-5">
                    <label htmlFor="RePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Re-enter the password :</label>
                    <input value={userForm.values.rePassword} onChange={userForm.handleChange} onBlur={userForm.handleBlur} name='rePassword' type="Password" id="RePassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    {userForm.errors.rePassword && userForm.touched.rePassword ? <Alert color="failure" icon={HiInformationCircle} className='mt-1'>
                        {userForm.errors.rePassword}
                    </Alert> : ''}
                </div>
                <div className="mb-5">
                    <label htmlFor="Phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Phone :</label>
                    <input value={userForm.values.phone} onChange={userForm.handleChange} onBlur={userForm.handleBlur} name='phone' type="text" id="Phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    {userForm.errors.phone && userForm.touched.phone ? <Alert color="failure" icon={HiInformationCircle} className='mt-1'>
                        {userForm.errors.phone}
                    </Alert> : ''}
                </div>

                <button type="submit" className=" ms-auto sm:block text-white bg-custom-green hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {   isClicked?   'Register':<ThreeDots
                        visible={true}
                        height="30"
                        width="40"
                        color="#fff"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    /> }
                </button>
            </form>



        </>
    )
}
