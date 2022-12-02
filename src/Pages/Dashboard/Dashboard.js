
import React, { useContext, useEffect, useState } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../Share/Navbar/Navbar';


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email)

    const [review, setreview] = useState([])

useEffect(() => {
    fetch(`https://recycle-shop-server.vercel.app/emaila?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setreview(data))
}, [user?.email])
    return (
        <div>
            
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {/* <li><Link to="/dashboard">My Appointments</Link></li> */}
                        <div>
                            {
                                review.map((a) =><div className='d-flex' key={a._id}>
                                
                                
                                <>
                                { a?.role === 'admin' ? <Link className='text-xl font-semibold' to='/allUsers'>All Buyer & All Seller</Link>
                                    :
                                    // a?.role === 'seller' ? <Link className='blog-container' to='/addproduct'>Sell Here</Link> 
                                    // :
                                    a?.role === 'customer' && <Link className='text-xl font-semibold' to='dashboard/myorder'>My Orders</Link>
                                }
                                </>
                                    </div>)
                            }

                        </div>
                        {
                                review.map((a) =><div className='flex  flex-col-reverse' key={a._id}>
                                    <>
                                    { a?.role === 'seller' && <><Link className='text-xl font-semibold'  to='/dashboard/myproduct'>My Products</Link>
                                    <br />
                                   <Link className='text-xl font-semibold' to='/dashboard/addproduct'>add Product</Link>
                                   <br />
                                   <Link className='text-xl font-semibold' to='/dashboard/mybuyers'>My buyers</Link>
                                    </>
                                    
                                    }

                                    </>

                                    </div>)
                            }
                       

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;