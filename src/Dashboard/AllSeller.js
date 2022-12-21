import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../components/Shareds/ConfirmationModal';
import Loading from '../components/Shareds/Loading';


const AllSeller = () => {
    const [deleting, setDeleting] = useState(null);

    const closeModal = () => {
        setDeleting(null);
    }

    const {data: users = [], refetch,isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://products-resale-server-afsanaakterbristy.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

   

     const handleDelete = user => {
        fetch(`https://products-resale-server-afsanaakterbristy.vercel.app/users/${user._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${user.name} deleted successfully`)
            }
        })
    }
  const handleMakeVerify = id => {
        fetch(`https://products-resale-server-afsanaakterbristy.vercel.app/users/seller/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }

     if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-xl font-bold mb-4'>All Seller</h2>
             <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>              
        <th>Verify</th>              
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            { user?.option === 'seller'&& user?.role !== 'admin'&& 
         <>   <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <button className='btn btn-xs btn-danger'>{user.option}</button></td>
                <td> { user?.role !== 'verify' ?
                    <button onClick={() => handleMakeVerify(user._id)} className='btn btn-xs btn-primary'>UnVerify</button>:<><label className="btn btn-xs btn-error">veryfy <FontAwesomeIcon className='font-bold text-xl text-blue-900' icon={faCheck} /></label></>}</td>
            <td>
            <label onClick={() => setDeleting(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
            </td></>}
                </tr>
            )
      }
      
    </tbody>
  </table>
            </div>
            
                  {
                deleting && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleting.name}. It cannot be undone.`}
                    successAction = {handleDelete}
                    successButtonName="Delete"
                    modalData = {deleting}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSeller;







