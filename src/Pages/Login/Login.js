import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';



const Login = () => {
    const { register, handleSubmit } = useForm();
    const {signIn,providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from,{replace:true})
        })
        .catch(error=>console.error(error))
    }
  
  const handleLogin = data => {
    console.log(data);
   
    signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
            
        })
        .catch(error => {
            console.log(error.message)
        });
}
    return (
        <div  className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border-solid border-2 border-teal-800 '>
            <h3 className='text-2xl text-center'> Login</h3>

            <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                       
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                              
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        
                    </div>
                    <input className='btn btn-primary w-full' value="Login" type="submit" />
                    
                </form>
                <p> <Link className='text-danger' to="/signup">Create new Account</Link></p>
                <button className='btn btn-outline w-full '  onClick={handleGoogleSignIn} >Sign Up With GOOGLE</button>
            </div>
            
        </div>
    );
};

export default Login;