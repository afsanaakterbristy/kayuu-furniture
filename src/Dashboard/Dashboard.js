import React, { useContext } from 'react';

import { AuthContext } from '../contexts/AuthProvider';

const Dashboard = () => {
     const { user } = useContext(AuthContext)
    return (
        <div className=''>

            
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl  ">Wellcome To Your Dashboard { user?.displayName}</h2>
			<p className="max-w-3xl mx-auto mt-4 text-2xl text-center ">Please select you role,Thank you</p>
		</div>
    );
};

export default Dashboard;