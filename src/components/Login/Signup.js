import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../Hooks/useToken';
import Loading from '../Shareds/Loading';


const Signup = () => {

    const { register, handleSubmit,formState:{errors} } = useForm();
    const [signupError, setSignupError] = useState();
    const { createUser, updateUserProfile ,providerLogin,loading} = useContext(AuthContext);
    const [createUserEmail, setCreateUserEmail] = useState('')    
    const [token]=useToken(createUserEmail)
    const navigate = useNavigate()
  
    useEffect(() => {
    if (token) {
        navigate('/')
    }
    },[token])
    
   
    //google dignup
    const googleProvider=new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
      
        providerLogin(googleProvider)
            .then(result => {
            const user = result.user;
            console.log(user)               
            saveUser(user?.displayName,user?.email,user?.photoURL,"Buyer")
            toast.success('Your Register success')
        }).catch(error=>console.error(error))
    }  
  
    const handleLogin = data => {
        setSignupError('')
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                handleUpdateProfile(data.name, data.photo)
                saveUser(data.name, data.email, data.photo, data.option)
                console.log(user);
                toast.success('User Created successfully')
               
            }).catch(e => {
                setSignupError(e.message)
                console.log(e)
            })
        
    }
    
     const saveUser = (name, email,photo,option) => {
        const user = { name, email,photo,option};
        fetch(`http://localhost:5000/users`, {
            method: "POST",
            headers: {
                'content-type':'application/json'

            },
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)                
             setCreateUserEmail(email)
               
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
    
     if (loading) {
  return <Loading></Loading>
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
        <div className="form-control w-full max-w-xs">
       <label className="label"><span className="label-text">Choice One</span>
      </label>
              
             <select className="select select-bordered w-full max-w-xs" {...register("option", { required: "option is required" })}
             >
            {errors.option && <p role='alert'>{errors.option?.message}</p>}
            <option selected>Buyer</option>
            <option>seller</option>           
            </select>
                        
      </div>      
     
                    <input className='btn  bg-amber-600 w-full mt-4' type="submit" value='SignUp' />
                     {
                        signupError && <p>{ signupError}</p>
                    }
         </form>
            
                <p>Have an account <Link className='text-accent' to='/login'>please login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>  
          
        </div>
    );
};

export default Signup;
















