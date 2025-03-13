import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import axios from 'axios';
import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from '../../Context/AuthContext';

export default function Login() {
  const {setToken} = useContext(Auth)
  const [erorMsg, setErorMsg] = useState(null)
  const [statusMsg, setStatusMsg] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isClicked, setIsClicked] = useState(true)
  const navigate = useNavigate()




  let user = {
    email: '',
  }

  const userForm = useFormik({
    initialValues: user,
    onSubmit: function (values) {

      setIsClicked(false)
      axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', values)
        .then(function (x) {
            console.log('sucsses', x);
            
          setIsSuccess(true)
          setIsClicked(true)
        //   setToken(x.data.token)
        //   localStorage.setItem('tkn' , (x.data.token))        
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
        console.log('errr ', x);
        
        })

    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Invalid value").required("E-mail is Required"),
    })
  });

  return (
    <>


      <form onSubmit={userForm.handleSubmit} className="max-w-5xl mx-auto px-8 py-12 pt-20">
        {isSuccess ? <Alert color="success">
          <span className="font-medium">Reset code sent to your email</span>
        </Alert> : ""}
        {erorMsg ? <Alert color="failure" icon={HiInformationCircle} className='mt-1'>
          <span className='font-bold'>{statusMsg} : </span>
          {erorMsg}
        </Alert> : ""}

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email :</label>
          <input value={userForm.values.email} onChange={userForm.handleChange} onBlur={userForm.handleBlur} name='email' type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          {userForm.errors.email && userForm.touched.email ? <Alert color="failure" icon={HiInformationCircle} className='mt-1'>
            {userForm.errors.email}
          </Alert> : ''}
        </div>
     

        <button type="submit" className=" ms-auto sm:block text-white bg-custom-green hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {isClicked ? 'Confirm' : <ThreeDots
            visible={true}
            height="25"
            width="30"
            color="#fff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />}
        </button>


        
      </form>



    </>
  )
}