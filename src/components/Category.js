import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import BookingModal from './Booking/BookingModal';


const Categoty = () => {

    const category = useLoaderData()
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
			 <h2 className="text-3xl font-bold text-center mt-9">Our second-hand product categories</h2>
            <p className='text-center mt-2 mb-7'>Vestibulum, diam vulputate amet cras in diam quis turpis curabitur tellus aliquet tellus iaculis tempus, sollicitudin massa duis eleifend egestas turpis sit etiam</p>
			 <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'> 
         {
                category.map(product =>
                <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	
	<div>
		<img src={product.picture} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">Name:{product.name}</h2>
		<p className="text-sm dark:text-gray-400">Location:{product.location}</p>
		<p className="text-sm dark:text-gray-400"> Post Time:{product.time}</p>
		<p className="text-sm dark:text-gray-400">Original price:{product.originalprice}</p>
		<p className="text-sm dark:text-gray-400">Resale price:{product.resaleprice}</p>
		<p className="text-sm dark:text-gray-400">Years of use:{product.yearsofuse}</p>
		<p className="text-sm dark:text-gray-400">Codition:{product.codition}</p>
		<p className="text-sm dark:text-gray-400">SellerName:{product.sellername}</p>
	</div>
			<div className='flex justify-between'>

				<label
				htmlFor="my-modal-3" className="btn bg-amber-500" >Book Now</label>
						
			<BookingModal product={product}></BookingModal>
			<button  onClick={()=>handleReport(product._id)} className='btn bg-amber-500'>Report</button>
			</div>
              
</div>
                    )
			}  
        </div>

	   </div>
    );
};

export default Categoty;