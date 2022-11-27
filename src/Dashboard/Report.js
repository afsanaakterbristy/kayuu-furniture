import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Report = () => {

    const { data: categorys=[],refetch } = useQuery({
        queryKey: ['categorys'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/producttwo', {
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
// for deleteing role change
 const handleReport = id => {
        fetch(`http://localhost:5000/users/notreport/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Report successful.')
                refetch();
            }
        })
    }


    return (
        <div className=''>
            <h2 className="text-3xl font-bold text-center mb-9">Report</h2>
               <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          
            {
                categorys?.map(category => <div>
                { category?.report ==='report'?
                  <a
        href="/"
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
      >
        <div className="flex h-full">
          <img
            src={category.image}
            className="object-cover w-full h-48"
            alt=""
          />
          <div className="flex-grow border border-t-0 rounded-b">
            <div className="p-5">
              <h6 className="mb-4 font-bold text-2xl leading-5">
               {category.name}
                </h6>
                <button  onClick={()=>handleReport(category._id)} className='btn btn-sm bg-amber-500 mt-20 ml-8'>Delete</button>
                 
            </div>
          </div>
        </div>
                        </a>
                        :
                  <></>
      }
              </div>)
            }

        
      </div>
      </div>
    );
};

export default Report;