import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../components/Shareds/ConfirmationModal';
import toast from 'react-hot-toast';
import Loading from '../components/Shareds/Loading';

const MyProducts = () => {
    const [deleting, setDeleting] = useState(null);

    const closeModal = () => {
        setDeleting(null);
    }

    const { data: products=[], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/product', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    
    const handleDelete = product => {
        fetch(`http://localhost:5000/product/${product._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${product.name} deleted successfully`)
            }
        })
    }

    const handleAvailable = id => {
        fetch(`http://localhost:5000/users/available/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make available successful.')
                refetch();
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl font-semibold mb-4'>My Products</h2>
            <div className="overflow-x-auto border rounded shadow">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Product_Name</th>                     
                            <th>price</th>                     
                            <th>Purchase Year</th>                     
                            <th>Condition</th>
                            <th>Sales_status</th>         
                            <th>Advertised</th>    
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.purchase}</td>
                                <td>{product.option}</td>
                                <td>sold</td>
                               
                                 <td> <button onClick={() => handleAvailable(product._id)} className='btn btn-xs btn-primary'>Advertised</button></td>
                               
                                <td>
                                    <label onClick={() => setDeleting(product)}  htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
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
export default MyProducts;