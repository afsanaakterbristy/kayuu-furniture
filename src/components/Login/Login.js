import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../Hooks/useToken';
import { setAuthToken } from '../../Token';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
     const [loginError, setLoginError] = useState();
    const { signIn,providerLogin } = useContext(AuthContext);
  const location = useLocation();
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token]=useToken(loginUserEmail)
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
   if (token) {
    navigate(from, {replace: true});
  } 
    const handleLogin = data => {
        setLoginError('')
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
              console.log(user);
              setLoginUserEmail(data.email)
             // navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message)
               setLoginError(error.message);
            })
  }
   //google
    const googleProvider=new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
      
        providerLogin(googleProvider)
            .then(result => {
              const user = result.user;
                console.log(user) 
              setAuthToken(user)
               saveUser(user?.email,user?.displayName, user?.photoURL,"Buyer")
             navigate(from, { replace: true })
              toast.success('Your Login success')
        }).catch(error=>console.error(error))
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
             setLoginUserEmail(email)
               
        })
    }
    


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border'>
                <h2 className='text-xl text-center'>Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
          
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
        <label className="label"><span className="label-text">Forget password</span>
      </label>
      </div>        
     
      
            <input className='btn  bg-amber-600 w-full mt-3' type="submit" value='Login' />
            <div>
              {
                loginError && <p>{ loginError}</p>
              }
            </div>
         </form>
            
                <p>Don't have an account <Link className='text-accent' to='/signup'>please signup</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>  
          
        </div>
    );
};



export default Login;