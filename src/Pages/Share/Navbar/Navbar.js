import { useQuery } from '@tanstack/react-query';
import { Button } from 'bootstrap';
import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(err => console.log(err));

       
  
}
const {data: users = [], } = useQuery({
  queryKey: ['users'],
  queryFn: async() =>{
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();
      return data;
  } 
});

    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        {
          user?.uid? 
          <li><button onClick={handleLogOut}>Sign out</button></li>
          :
          <li><Link to ='/login'>Login</Link></li>
        }
      
        
        {/* <li tabIndex={0}>
          <Link className="justify-between">
            Options
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul className="p-2">
            <li><Link>Buyer</Link></li>
            <li><Link>Seller</Link></li>
          </ul>
        </li> */}
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        
      <li><Link to='/addproduct'>Add Product</Link></li>
        
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Recycle Shop</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     <li><Link to='/'>Home</Link></li>
     {
          user?.uid? 
          <li><button onClick={handleLogOut}>Sign out</button></li>
          :
          <li><Link to ='/login'>Login</Link></li>
        }

{/* <div>
                            {
                                users.map((userr) =><div className='d-flex' key={userr._id}>
                                
                                <>
                                { userr?.role === 'seller' ? <Link className='blog-container' to='/allUsers'>userall</Link>
                                    :
                                    userr?.role === 'admin' && <Link className='blog-container' to='/myOrder'>My Order</Link>
                                }
                                </>
            
                                    </div>)
                            }

                        </div> */}
      {/* <li tabIndex={0}>
        <Link>
        Options
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2">
        <li><Link>Buyer</Link></li>
            <li><Link>Seller</Link></li>
        </ul>
      </li> */}
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='/addproduct'>Add Product</Link></li>

      
      <div>
                            {user?.displayName}
                    </div>
      

    </ul>
  </div>
  
</div>
    );
};

export default Navbar;