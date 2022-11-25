import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const MyOrder = () => {

      const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
      
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers: {
                  authorization:`bearer ${localStorage.getItem('accessToken')}`  
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2>My order</h2>

            <div className="overflow-x-auto w-full">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th>
          
        </th>
        <th>image</th>
        <th>title</th>
        <th>price</th>
        <th>pay</th>
      </tr>
    </thead>
    <tbody>
    
       {           bookings &&
                bookings?.map((booking,i) =>
             <tr key={i} >
        <th>
         
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
          {booking.productsname}
          <br/>
         
        </td>
        <td>{booking.resaleprice}</td>
        <th>
            {
              booking.resaleprice &&  !booking.paid &&
            <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-accent btn-xs">Pay</button></Link>
            }
            {
              booking.resaleprice &&  booking.paid &&
             <span>Paid</span>
            }
        </th>
      </tr>
                                )                    
     }
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyOrder;