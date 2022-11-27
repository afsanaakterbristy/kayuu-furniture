import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Items = () => {
 

     const { data: products=[] } = useQuery({
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
  console.log( products?.length);
    return (
      <div>
        {  products?.length > 0 &&
          
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          
          Advertised items
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
         Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra nunc sed maecenas diam quisque habitasse
        </p>
      </div>
          <div className="lg:flex m-5">
          
            {
              products?.map(product => <div>
                {product?.role === 'available' ?
                  
                  <a
        href="/"
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
      >
        <div className="flex flex-col h-full p-5">
          <img
            src={product.image}
            className="object-cover w-full h-48"
            alt=""
          />
          <div className="flex-grow border border-t-0 rounded-b">
            <div className="p-5">
              <h6 className="mb-4 font-bold text-2xl leading-5">
               {product.name}
                 </h6>
                  <p className=" text-gray-900 "><strong>Uses Of Years: </strong>
                  {product.purchase}
              </p>
               
                  <p className=" text-gray-900 "><strong> Condition: </strong>
               {product.option}
              </p>
                  <p className=" text-gray-900 ">
               <strong>Resaleprice: </strong> {product.resaleprice}
              </p>
              <p className=" text-gray-900">
              <strong> Details: </strong> {product.description}
              </p>
            </div>
          </div>
        </div>
                  </a> :
                  <></>
      }
              </div>)
            }

        
      </div>
          </div>
   
  }
        </div>
    );
};

export default Items;