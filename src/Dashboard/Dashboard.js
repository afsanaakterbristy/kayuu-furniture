import React, { useContext } from 'react';

import { AuthContext } from '../contexts/AuthProvider';

const Dashboard = () => {
     const { user } = useContext(AuthContext)
    return (
        <div className=''>

              {/* <div className="flex items-center p-2 space-x-4 mt-3 mb-5">
		     <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
		    <div>
                <div className='flex'>
                        <h2 className="text-lg font-semibold">{ user?.displayName}</h2>
                        <FontAwesomeIcon className='font-bold text-2xl' icon={faCheck} />
                    </div>     
			<span className="flex items-center space-x-1">
				<h2 rel="noopener noreferrer" className="text-xs hover:underline dark:text-gray-400">{ user?.email}</h2>
			</span>
		</div>
	          </div> */}
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl  ">Wellcome To Your Dashboard { user?.displayName}</h2>
			<p className="max-w-3xl mx-auto mt-4 text-2xl text-center ">Please select you role,Thank you</p>
		</div>
    );
};

export default Dashboard;