import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [dbUser, setDbUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/userProfile?email=${user.email}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDbUser(data)
            })
    }, [user.email])

    const handleSubmit = event => {

        event.preventDefault();


        const newUser = {
            name: user.displayName,
            email: user.email,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedin: event.target.linkedin.value,
        }


        fetch(`http://localhost:5000/userProfile/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('user added')
            })
    }
    return (
        <div>
            <h2>My Profile</h2>
            <form onSubmit={handleSubmit} className='grid  grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="name" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name='location' defaultValue={dbUser[0]?.location || ''} placeholder="Your Location" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='phone' defaultValue={dbUser[0]?.phone || ''} placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='linkedin' defaultValue={dbUser[0]?.linkedin || ''} placeholder="Your LinkedIn Profile" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="submit" className="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default MyProfile;