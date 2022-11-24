import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
     const [loginError, setLoginError] = useState();
      const { signIn } = useContext(AuthContext);
    const handleLogin = data => {
        setLoginError('')
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
              console.log(user);
             // setLoginUserEmail(data.email)
              // navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message)
               setLoginError(error.message);
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
            <input className='btn  bg-amber-600 w-full mt-3' type="submit" value='Login' />
            <div>
              {
                loginError && <p>{ loginError}</p>
              }
            </div>
         </form>
            
                <p>Don't have an account <Link className='text-accent' to='/signup'>please signup</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>  
          
        </div>
    );
};



export default Login;