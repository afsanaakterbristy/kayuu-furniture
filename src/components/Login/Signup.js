import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {

      const { register, handleSubmit,formState:{errors} } = useForm();
    const handleLogin = data => {
      console.log(data)
  }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7  border'>
                <h2 className='text-xl text-center'>SignUp</h2>
      <form onSubmit={handleSubmit(handleLogin)}>

    <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Name</span>
      </label>
              <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", { required: "Name is required" })} />
              {errors.name && <p role='alert'>{errors.name?.message}</p>}
      </div>
        <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Photo</span>
      </label>
              <input type="text" className="input input-bordered w-full max-w-xs" {...register("photo", { required: "photo is required" })} />
              {errors.photo && <p role='alert'>{errors.photo?.message}</p>}
      </div>         
    <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Email</span>
      </label>
              <input type="text" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email is required" })} />
              {errors.email && <p role='alert'>{errors.email?.message}</p>}
      </div>        
    <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Password</span>
      </label>
              <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", { required: "Password is required",minLength:{value:6,message:'Password must be atlist 6 characters'} })} />
                 {errors.password && <p role='alert'>{errors.password?.message}</p>}
        {/* <label className="label"><span className="label-text">Forget password</span>
      </label> */}
      </div>        
     
      <input className='btn  bg-amber-600 w-full mt-4' type="submit" value='SignUp'/>
         </form>
            
                <p>Have an account <Link className='text-accent' to='/login'>please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>  
          
        </div>
    );
};

export default Signup;
















