import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';


const CategorysTwo = () => {
     const {data:categorystwo=[]} = useQuery({
        queryKey: ['categorystwo'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categorystwo`);
            const data = await res.json();
            return data;
    }
    })
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-9">Our second-hand product categories</h2>
            <p className='text-center mt-2 mb-3'>Vestibulum, diam vulputate amet cras in diam quis turpis curabitur tellus aliquet tellus iaculis tempus, sollicitudin massa duis eleifend egestas turpis sit etiam</p>
             <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-1 mt-[40px] ml-[40px]'>
            {
                categorystwo.map(category =>
               <div key={category._id} className="card card-compact w-96 bg-base-100 shadow-xl">
           <figure><img className='h-[250px] w-full' src={category.img} alt="Shoes" /></figure>
             <div className="card-body">
     
           <div className="card-actions justify-end">
        <Link  to={`/category/${category._id}`}>
            <button className="btn btn-amber bg-amber-500">{category.name}</button>
        </Link>
    </div>
  </div>
</div>) 
            }
        </div>
       </div>
    );
};

export default CategorysTwo;