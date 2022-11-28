import {  faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import BookingModal from '../Booking/BookingModal';


const CategoryTwo = () => { 
   
	const category = useLoaderData()
	const [booking,setBooking]=useState(null)
	console.log(category);
	const { user } = useContext(AuthContext)
	console.log(user.photoURL)
    
	 const handleReport = id => {
        fetch(`http://localhost:5000/users/report/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Report successful.')
               
            }
        })
    }

	 
	
    return (
		<div>
			 <h2 className="text-3xl font-bold text-center mt-9 mb-9">Our second-hand product categories</h2>
            <p className='text-center mt-2 mb-7'>Vestibulum, diam vulputate amet cras in diam quis turpis curabitur tellus aliquet tellus iaculis tempus, sollicitudin massa duis eleifend egestas turpis sit etiam</p>
			 <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'> 
         {
                category.map(product =>
                <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 mb-10">
	
	<div className=''>
		<img src={product.image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold"><strong>Name: </strong>{product.name}</h2>
		<p className="text-sm dark:text-gray-400"><strong>Location: </strong>{product.location}</p>
		<p className="text-sm dark:text-gray-400">  <strong>Post Time: </strong>{product.time}</p>
		<p className="text-sm dark:text-gray-400"><strong>Original price:</strong>{product.originalprice}</p>
		<p className="text-sm dark:text-gray-400"><strong>Resale price: </strong>{product.resaleprice}</p>
		<p className="text-sm dark:text-gray-400"><strong>Years of use: </strong>{product.purchase}</p>
		<p className="text-sm dark:text-gray-400"><strong>Codition: </strong>{product.option}</p>
		<p className="text-sm dark:text-gray-400"><strong>SellerName: </strong>{product.sellername}{ product.sellerverify && <FontAwesomeIcon className=' text-blue-900' icon={faCheckCircle} />}</p>
	</div>
			<div className='flex justify-between'>

				<label onClick={()=>setBooking(product)}
				htmlFor="my-modal-3" className="btn bg-amber-500" >Book Now</label>
							
			<button  onClick={()=>handleReport(product._id)} className='btn bg-amber-500 rounded-full'><FontAwesomeIcon className='text-2xl' icon={faClock}/></button>
			</div>
			</div>
                 )
				}  				
					{  booking &&
						<BookingModal product={booking} closemodal={setBooking}></BookingModal>
					}
        </div>
	   </div>
    );
};

export default CategoryTwo;