import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {

      const { register, handleSubmit,formState:{errors} } = useForm();
       const [signupError, setSignupError] = useState();
    const { createUser, updateUserProfile } = useContext(AuthContext);
     const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
       const handleLogin = data => {
        setSignupError('')
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                 handleUpdateProfile(data.name, data.photo)
                console.log(user); 
                toast.success('User Created successfully')
                 navigate(from, {replace: true});
            }).catch(e =>{
                setSignupError(e.message)
                console.log(e)
            })
        
    }
    

     const handleUpdateProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL:photo
    }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
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
      
      </div>        
     
                    <input className='btn  bg-amber-600 w-full mt-4' type="submit" value='SignUp' />
                     {
                        signupError && <p>{ signupError}</p>
                    }
         </form>
            
                <p>Have an account <Link className='text-accent' to='/login'>please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>  
          
        </div>
    );
};

export default Signup;
















