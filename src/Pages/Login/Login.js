import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext)
  
  const handleLogin = data => {
    console.log(data);
   
    signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            
        })
        .catch(error => {
            console.log(error.message)
        });
}
    return (
        <div  className='h-[800px] flex justify-center items-center'>
            <div>
            <h3 className='text-2xl'> Login</h3>

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
                <p> <Link className='text-secondary' to="/signup">Create new Account</Link></p>
            </div>
        </div>
    );
};

export default Login;