// import { Formik, useFormik } from 'formik';
// import * as yup from 'yup';
// import { Alert, Button } from "flowbite-react";
// import { HiInformationCircle, HiShoppingCart } from "react-icons/hi";
// import axios from 'axios';
// import { useContext, useState } from 'react';
// import { ThreeDots } from 'react-loader-spinner';
// import { useNavigate } from 'react-router-dom';
// import { cartContext } from '../../Context/CartContext';
// import toast from 'react-hot-toast';

// export default function Payment() {
//     const { CartId, setAllProducs, setCartPrice, setNumOfCartItems, setCartId, Isonline, setIsonline } = useContext(cartContext);
//     // const navigate = useNavigate();

//     const cashOrder = (values) => {
//         const bodyRow = {
//             shippingAddress: values,
//         };
//         axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${CartId}`, bodyRow, {
//             headers: {
//                 token: localStorage.getItem('tkn'),
//             }
//         })
//             .then(() => {
//                 toast.success('Congrats!  , The purchase was successful and you will be contacted.', {
//                     position: 'top-right',
//                     duration: 4000
//                 });
//                 setAllProducs(null);
//                 setCartPrice(0);
//                 setNumOfCartItems(0);
//                 setCartId(null);
//                 // navigate('/product');
//             })
//             .catch(() => {
//                 toast.error('Make sure to add the products to the cart and try again.', {
//                     position: 'top-right',
//                     duration: 4000
//                 });
//             });
//     };

//     // const onlinePayment = (values) => {
//     //     const bodyRow = {
//     //         shippingAddress: values,
//     //     };
//     //     axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CartId}`, bodyRow, {
//     //         headers: {
//     //             token: localStorage.getItem('tkn'),
//     //         },
//     //         params: {
//     //             url: 'http://localhost:5174'
//     //         }
//     //     })
//     //         .then(() => {
//     //             toast.success('Congrats!  , The purchase was successful and you will be contacted.', {
//     //                 position: 'top-right',
//     //                 duration: 4000
//     //             });
//     //             setAllProducs(null);
//     //             setCartPrice(0);
//     //             setNumOfCartItems(0);
//     //             setCartId(null);
//     //             // navigate('/product');
//     //         })
//     //         .catch(() => {
//     //             toast.error('Make sure to add the products to the cart and try again.', {
//     //                 position: 'top-right',
//     //                 duration: 4000
//     //             });
//     //         });
//     // };
//     // const callSup = (values) => {
//     //     console.log(values);
        
//     //     if (Isonline) {
//     //         onlinePayment(values);

//     //         console.log('online');

//     //     } else {
//     //         cashOrder(values);
//     //         console.log('cash');
//     //     }
//     // };

//     const paymentFormik = useFormik({
//         initialValues: {
//             details: "",
//             phone: "",
//             city: ""
//         },
//         onSubmit: cashOrder,

//         // validationSchema: yup.object().shape({
//         //     city: yup.string().required('Please write your city!'),
//         //     phone: yup.string().required('Phone number is required').matches(/^01[0125][0-9]{8}$/, 'Invalid number'),
//         //     details: yup.string().required('Details are required')
//         // })
//     });

//     return (
//         <>



//             <form onSubmit={paymentFormik.handleSubmit} className="max-w-5xl mx-auto px-8 py-12">

//                 <div className="mb-5">
//                     <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> details :</label>
//                     <input value={paymentFormik.values.details} onChange={paymentFormik.handleChange} onBlur={paymentFormik.handleBlur} name='details' type="text" id="details" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
//                     {paymentFormik.errors.details && paymentFormik.touched.details ? <Alert color="failure" icon={HiInformationCircle} className='mt-1'>
//                         {paymentFormik.errors.details}
//                     </Alert> : ''}
//                 </div>
//                 <div className="mb-5">
//                     <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> city :</label>
//                     <input value={paymentFormik.values.city} onChange={paymentFormik.handleChange} onBlur={paymentFormik.handleBlur} name='city' type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
//                     {paymentFormik.errors.city && paymentFormik.touched.city ? <Alert color="failure" icon={HiInformationCircle} className='mt-1'>
//                         {paymentFormik.errors.city}
//                     </Alert> : ''}
//                 </div>
//                 <div className="mb-5">
//                     <label htmlFor="Phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Phone :</label>
//                     <input value={paymentFormik.values.phone} onChange={paymentFormik.handleChange} onBlur={paymentFormik.handleBlur} name='phone' type="text" id="Phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
//                     {paymentFormik.errors.phone && paymentFormik.touched.phone ? <Alert color="failure" icon={HiInformationCircle} className='mt-1'>
//                         {paymentFormik.errors.phone}
//                     </Alert> : ''}
//                 </div>



//                 <div className=" flex justify-between ">

//                     {/* <Button onClick={() => setIsonline(true)} className=' bg-[#1b8322] focus:ring-0 enabled:hover:bg-lime-600 m-6  w-[30%] mx-auto '>
//                         <HiShoppingCart className="mr-2 h-5 w-5" />
//                         {paymentFormik ? 'Cash order' : <ThreeDots
//                             visible={true}
//                             height="25"
//                             width="30"
//                             color="#fff"
//                             radius="9"
//                             ariaLabel="three-dots-loading"
//                             wrapperStyle={{}}
//                             wrapperClass=""
//                         />}
//                     </Button> */}


//                     <Button  onClick={cashOrder} className=' bg-[#1b8322] focus:ring-0 enabled:hover:bg-lime-600 m-6  w-[30%] mx-auto '>
//                         <HiShoppingCart className="mr-2 h-5 w-5" />
//                         {paymentFormik ? 'Cash order' : <ThreeDots
//                             visible={true}
//                             height="25"
//                             width="30"
//                             color="#fff"
//                             radius="9"
//                             ariaLabel="three-dots-loading"
//                             wrapperStyle={{}}
//                             wrapperClass=""
//                         />}
//                     </Button>


//                 </div>



//             </form>



//         </>
//     );
// }



import { Alert, Button } from "flowbite-react";
import { HiInformationCircle, HiShoppingCart } from "react-icons/hi";
import axios from 'axios';
import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

export default function Payment() {
    const { CartId, setAllProducs, setCartPrice, setNumOfCartItems, setCartId, Isonline, setIsonline } = useContext(cartContext);
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        details: "",
        phone: "",
        city: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const errors = {};
        if (!formValues.details) errors.details = 'Details are required';
        if (!formValues.phone) errors.phone = 'Phone number is required';
        else if (!/^01[0125][0-9]{8}$/.test(formValues.phone)) errors.phone = 'Invalid number';
        if (!formValues.city) errors.city = 'Please write your city!';
        return errors;
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleBlur = () => {
        const validationErrors = validate();
        setErrors(validationErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setIsSubmitting(true);
        if (Isonline) {
            onlinePayment();
        } else {
            cashOrder();
        }
    };

    const cashOrder = () => {
        const bodyRow = {
            shippingAddress: formValues,
        };
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${CartId}`, bodyRow, {
            headers: {
                token: localStorage.getItem('tkn'),
            }
        })
            .then(() => {
                toast.success('Congrats!  , The purchase was successful and you will be contacted.', {
                    position: 'top-right',
                    duration: 4000
                });
                setAllProducs(null);
                setCartPrice(0);
                setNumOfCartItems(0);
                setCartId(null);
                navigate('/product');
            })
            .catch(() => {
                toast.error('Make sure to add the products to the cart and try again.', {
                    position: 'top-right',
                    duration: 4000
                });
            });
    };

    // const onlinePayment = () => {
    //     // Implement online payment logic
    // };

    return (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto px-8 py-12 pt-16">
            <div className="mb-5">
                <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details:</label>
                <input
                    value={formValues.details}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='details'
                    type="text"
                    id="details"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                />
                {errors.details && <Alert color="failure" icon={HiInformationCircle} className='mt-1'>{errors.details}</Alert>}
            </div>
            <div className="mb-5">
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City:</label>
                <input
                    value={formValues.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='city'
                    type="text"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                />
                {errors.city && <Alert color="failure" icon={HiInformationCircle} className='mt-1'>{errors.city}</Alert>}
            </div>
            <div className="mb-5">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone:</label>
                <input
                    value={formValues.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='phone'
                    type="text"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                />
                {errors.phone && <Alert color="failure" icon={HiInformationCircle} className='mt-1'>{errors.phone}</Alert>}
            </div>

            <div className="flex justify-between">
                <Button
                    type="submit"
                    className='bg-[#1b8322] focus:ring-0 enabled:hover:bg-lime-600 m-6 w-[30%] mx-auto'>
                    <HiShoppingCart className="mr-2 h-5 w-5" />
                    {isSubmitting ? <ThreeDots
                        visible={true}
                        height="25"
                        width="30"
                        color="#fff"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    /> : 'Cash order'}
                </Button>
            </div>
        </form>
    );
}

