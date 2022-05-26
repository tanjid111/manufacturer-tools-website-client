import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {
    const [status, setStatus] = useState('pending');

    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        fetch('https://serene-lake-48668.herokuapp.com/purchase', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPurchases(data)
            })
    }, [])

    const handleShip = id => {
        setStatus('shipped')
    }


    return (
        <div>
            <h2>Manage All Orders:{purchases.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Total price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((p, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{p.customerName}</td>
                                <td>{p.customerEmail}</td>
                                <td>{p.product}</td>
                                <td>{p.totalPrice}</td>
                                <td>
                                    {(p.paid && (status === 'pending')) && <div>
                                        <p className='text-success'>{status}</p>
                                        <button onClick={() => handleShip(p._id)} className='btn btn-xs btn-success'>Ship</button>
                                    </div>}
                                    {!p.paid && <div>
                                        <p className='text-red-600'>UnPaid</p>
                                        {/* <p>Transaction id: <span className='text-success'>{a.transactionId}</span> </p> */}
                                    </div>}
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;