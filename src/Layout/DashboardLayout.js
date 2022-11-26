import {  faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../components/Shareds/Navber';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext)
  
  const [isAdmin] = useAdmin(user?.email)
  const [isBuyer] = useBuyer(user?.email)
  const [isSeller] = useSeller(user?.email)
  
    return (
        <div>
            <Navber></Navber>
           
        <div className='flex'>
        <div className="h-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100">
	    <div className="flex items-center p-2 space-x-4">
		<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
		<div>
                <div className='flex'>
                 <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                <FontAwesomeIcon className='font-bold text-2xl' icon={faCheck} />  </div>     
			<span className="flex items-center space-x-1">
				<h2 rel="noopener noreferrer" className="text-xs hover:underline dark:text-gray-400">Email</h2>
			</span>
		</div>
	</div>
	<div className="divide-y divide-gray-700">
		<div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
       
   
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
     {  isBuyer &&
                      <li><Link to='/dashboard/myorder'> My Order</Link></li>
                    }
      {
        isAdmin &&
                      <>
                      <li><Link to='/dashboard/admin'>Admin</Link></li>
                      </>
      }
              
                    { isSeller &&
                      <>
                    <li><Link to='/dashboard/addproducts'> Add A product </Link></li>
                   <li><Link to='/dashboard/myproducts'> My Products</Link></li>  
                    </>
                    }
                   
     
    </ul>
  
  </div>
</div>
		
	</div>
    </div>   
     <div className='mt-6 ml-7'>
       <Outlet></Outlet>
     </div>
      </div>
        </div>
    );
};

export default DashboardLayout;