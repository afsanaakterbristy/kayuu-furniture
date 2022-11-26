import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => { })
    .catch(err=>console.log(err))
   }
     const menuItems = <>
        <li className='font-bold'><Link to='/'>Home</Link>
      </li>
      
       <li className='font-bold'><Link to='/blog'>Blog</Link>
        </li>
     
      
      { 
        
          user?.email?
          <>
          
            <li className='font-bold'>
              <button onClick={handleLogout}>Logout</button>
            </li>
             <li className='font-bold'><Link to='/dashboard'>Dashboard</Link>
        </li>
          
          </>
          :
          <>
         <li className='font-bold'><Link to='/login'>Login</Link>
        </li>
         <li className='font-bold'><Link to='/signup'>Signup</Link>
        </li>
        
         </>
    
        
      }
      
    </>
    
    return (
         <div className="navbar h-20">
  <div className="navbar">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
          </div>
              <img className='w-9 ml-8' src='' alt="" />
                <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
                  KAYUU FERNITURE  
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     {menuItems}
    </ul>
        </div>
        
         <label htmlFor="my-drawer-2"  tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
</div>
    );
};

export default Navber;