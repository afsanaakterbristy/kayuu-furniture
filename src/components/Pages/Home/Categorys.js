import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categorys = () => {

     const {data:categorys=[]} = useQuery({
        queryKey: ['categorys'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categorys`);
            const data = await res.json();
            return data;
    }
    })
    return (
        <div className='grid grid-cols-3 gap-1'>
            {
                categorys.map(category =>
               <div key={category._id} className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={category.img} alt="Shoes" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-end">
        <Link  to={`/category/${category._id}`}>
            <button className="btn btn-primary">{category.name}</button>
        </Link>
    </div>
  </div>
</div>) 
            }
        </div>
    );
};

export default Categorys;