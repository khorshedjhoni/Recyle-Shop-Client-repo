import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { toast } from 'react-toastify';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        } 
    });
    const handleMakeVerify= id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }
    
    
    return (
        <div className='p-5'>
            {
        users.map((user, i) =><div className='d-flex' key={user._id}>
            <p>{i+1}</p>
            <p>. {user.name} — {user.email}</p>
            {user?.newRole === 'verified-seller' && <p>✓</p>}
            {user?.role === 'customer' && <p className='ms-2'>(customer)</p>}
            {user?.role === 'seller' && <p className='ms-2'>(seller)</p>}
            {user?.role === 'admin' && <p className='ms-2'>(admin)</p>}
            { user?.role !== 'admin' && user?.role !== 'customer' && user?.newRole !== 'verified-seller' && <button onClick={() => handleMakeVerify(user._id)} className='btn ms-5 m-1 btn-primary'>Make Verified Seller</button>}
            
          </div>)
      }
        </div>
    );
};

export default AllUsers;