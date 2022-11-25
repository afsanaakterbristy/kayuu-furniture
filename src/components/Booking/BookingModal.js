import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ product }) => {
    const {name:productsname,resaleprice,time}=product
    const { user } = useContext(AuthContext)
   // let time = new Date().toLocaleString();

    const handleBooking = (e) => {
         e.preventDefault();
       
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const resaleprice = form.resaleprice.value;
        const location = form.location.value;
        const lastly = form.lastly.value;
        console.log(time,name, email ,lastly, phone,location,resaleprice)
          const booking = {
            time,
            productsname:productsname,
            username: name,
             resaleprice,
             email,
             phone,
             location,
             lastly
        }
        console.log(booking)
       
  fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booking Successfull')
                    form.reset('')
                   
                } 
            })
        
    }


    return (
        <div>
       <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{productsname}</h3>
    
    <form onSubmit={handleBooking} className='mt-10'>
        <input name='name' type="name" defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full " />
        <input name='email' type="email" defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full " />
        <input name='time' type="text" defaultValue={time} placeholder="Type here" className="input input-bordered w-full " />
        <input name='resaleprice' defaultValue={resaleprice} type="text" placeholder="Type here" className="input input-bordered w-full " />
        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
           <input name='location' type="text" placeholder="meeting location" className="input input-bordered w-full " />             
           <input name='lastly' type="text" placeholder="lastly Message" className="input input-bordered w-full " />
           <input  className=" btn btn-accent w-full " type="submit" value="Submit" />
    </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;