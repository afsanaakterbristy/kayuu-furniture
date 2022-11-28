import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Shareds/Loading';
import { AuthContext } from '../contexts/AuthProvider';


const AddProducts = () => {

    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    
    const { data: categories=[], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://products-resale-server-afsanaakterbristy.vercel.app/allcategoryproduct');
            const data = await res.json();
            return data;
        }
    })
    
    const handleAddProducts = data => {

      const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    name: data.name, 
                    sellername:data.sellername,
                    image: imgData.data.url,
                    originalprice: data.originalprice,
                    resaleprice: data.resaleprice,
                    number: data.number,
                    location: data.location,
                    description: data.description,
                    purchase: data.purchase,
                    option: data.option,
                    category_id: data.category,
                    time:new Date().toLocaleString(),
                    email: data.email,
                    status:'unsold'
                    
                }

                // save  information to the database
                fetch('https://products-resale-server-afsanaakterbristy.vercel.app/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/myproducts')
                })
            }
        })
    }
   

    if (isLoading) {
       return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Add A Product</h2>
            <div className='border p-[50px] m-[50px] w-96  '>
                   <form onSubmit={handleSubmit(handleAddProducts)}>

    <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Product Name</span>
      </label>
              <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", { required: "Name is required" })} />
              {errors.name && <p role='alert'>{errors.name?.message}</p>}
                    </div>
                    
        <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Seller Name</span>
      </label>
              <input type="text" defaultValue={user.displayName} readOnly className="input input-bordered w-full max-w-xs" {...register("sellername", { required: "sellername is required" })} />
              {errors.sellername && <p role='alert'>{errors.sellername?.message}</p>}
      </div>

         <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Email</span>
      </label>
              <input type="text" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" {...register("email", { required: "email is required" })} />
              {errors.email && <p role='alert'>{errors.email?.message}</p>}
      </div>
        <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Photo</span>
      </label>
              <input type="file" className="input input-bordered w-full max-w-xs" {...register("image", { required: "photo is required" })} />
              {errors.image && <p role='alert'>{errors.image?.message}</p>}
      </div>         
    <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Originalprice</span>
      </label>
              <input type="text" className="input input-bordered w-full max-w-xs" {...register("originalprice", { required: "originalprice is required" })} />
              {errors.originalprice && <p role='alert'>{errors.originalprice?.message}</p>}
      </div>        
    <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">resaleprice</span>
      </label>
              <input type="text" className="input input-bordered w-full max-w-xs" {...register("resaleprice", { required: "resaleprice is required" })} />
              {errors.resaleprice && <p role='alert'>{errors.resaleprice?.message}</p>}
      </div>        
    <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">mobile number</span>
      </label>
              <input type="text" className="input input-bordered w-full max-w-xs" {...register("number", { required: "number is required" })} />
              {errors.number && <p role='alert'>{errors.number?.message}</p>}
      
                    </div>  
         <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text"> location </span>
      </label>
              <input type="text" className="input input-bordered w-full max-w-xs" {...register("location", { required: " location  is required" })} />
              {errors.location  && <p role='alert'>{errors.location?.message}</p>}
      
                    </div> 
                      <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">description</span>
      </label>
              <input type="text" className="input input-bordered w-full max-w-xs" {...register("description", { required: "description is required" })} />
              {errors.description && <p role='alert'>{errors.description?.message}</p>}
      
                    </div> 
                      <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Year of purchase</span>
      </label>
              <input type="text" className="input input-bordered w-full max-w-xs" {...register("purchase", { required: "purchase is required" })} />
              {errors.purchase && <p role='alert'>{errors.purchase?.message}</p>}
      
      </div> 
                    <div className='flex'>
                        

      <div className="form-control w-full max-w-xs mr-3">
       <label className="label"><span className="label-text">Choice One</span>
      </label>
              
             <select className="select select-bordered w-full max-w-xs" {...register("option", { required: "option is required" })}
             >
            {errors.option && <p role='alert'>{errors.option?.message}</p>}
            <option selected>excellen</option>
            <option>good</option>           
            <option> fair</option>           
            </select>
                        
           </div> 
            

        <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Choice category</span>
      </label>
              
             <select className="select select-bordered w-full max-w-xs" {...register("category", { required: "category is required" })}
             >
            {errors.category && <p role='alert'>{errors.category?.message}</p>}
            <option selected>Please select</option>
               {
                categories?.map(category =>
                  
                         <option
                        value={category._id}>{category.name}</option>
                   
                )                 
              }                           
            </select>
                 </div>     
                 </div>
                    
                    {
                        
                        <input className='btn  bg-amber-600 w-full mt-4' type="submit" value='Add Product' />
                    }
                      
                </form>
          </div>
          </div>
    );
};

export default AddProducts;