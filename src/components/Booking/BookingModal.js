import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ product,closemodal }) => {
    const {name:productsname,resaleprice,time,image,_id}=product
    const { user } = useContext(AuthContext)
 

    const handleBooking = (e) => {
         e.preventDefault();
       
        const form = e.target;
        const time = form.time.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const resaleprice = form.resaleprice.value;
        const location = form.location.value;
        const lastly = form.lastly.value;
        const image = form.image.value;
        console.log(time,name, email ,lastly, phone,location,resaleprice)
          const booking = {
            product_id:_id,
            time,
            productsname:productsname,
            username: name,
             resaleprice,
             email,
             phone,
             location,
             lastly,
             image
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
                    closemodal(null)
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
        <input name='name' type="name" value={user?.displayName} readOnly placeholder="Type here" className="input input-bordered w-full mb-4" />
        <input name='email' type="email" value={user?.email} readOnly placeholder="Type here" className="input input-bordered w-full mb-4" />
        <input name='image' type="" value={image} readOnly placeholder="" className="input input-bordered w-full mb-4" />
        <input name='time' type="text" value={time}  placeholder="time" className="input input-bordered w-full mb-4" />
        <input name='resaleprice' value={resaleprice} readOnly type="text" placeholder="Type here" className="input input-bordered w-full mb-4" />
        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mb-4" />
        <input name='location' type="text" placeholder="meeting location" className="input input-bordered w-full mb-4" />             
        <input name='lastly' type="text" placeholder="lastly Message" className="input input-bordered w-full mb-4" />
           
        <input  className=" btn bg-amber-500 w-full " type="submit" value="Submit" />
    </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;