import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [purchases, setPurchases] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?customerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || (res.status === 403)) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }

                    return res.json();
                })
                .then(data => {

                    setPurchases(data)
                })
        }
    }, [user])

    return (
        <div>
            <h2 className='text-2xl'>My Orders: {purchases.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Order Quantity</th>
                            <th>Price/Qty</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((purchase, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{purchase.product}</td>
                                <td>{purchase.orderQuantity}</td>
                                <td>{purchase.price}</td>
                                <td>{purchase?.totalPrice}</td>
                                {/* <td>
                                    <button onClick={() => { handleDelete(purchase._id) }} className='btn btn-xs btn-error'>Delete</button>

                                </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;