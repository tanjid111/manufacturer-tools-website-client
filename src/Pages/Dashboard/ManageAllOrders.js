import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmPurchaseModal from './DeleteConfirmPurchaseModal';

const ManageAllOrders = () => {
    const [status, setStatus] = useState('');
    const [deletePurchase, setDeletePurchase] = useState(null);
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

    const handleShip = _id => {
        const newPurchase = {
            stat: 'shipped'
        }

        fetch(`https://serene-lake-48668.herokuapp.com/purchase/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newPurchase)

        }).then(res => res.json())
            .then(data => {

                console.log(data);
            })
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
                                    {(p.paid && p.stat === 'pending') && <button onClick={() => handleShip(p._id)} className='btn btn-xs btn-success'>Ship</button>}
                                    {p.paid && <p className='text-success'>{p.stat}</p>}


                                    {!p.paid && <div>
                                        <p className='text-red-600'>Unpaid</p>
                                        <label onClick={() => setDeletePurchase(p)} htmlFor="delete-confirm-purchase-modal" className="btn btn-error">Delete</label>
                                        {/* <p>Transaction id: <span className='text-success'>{a.transactionId}</span> </p> */}
                                    </div>}
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {deletePurchase && <DeleteConfirmPurchaseModal
                deletePurchase={deletePurchase}
                purchases={purchases}
                setPurchases={setPurchases}
                setDeletePurchase={setDeletePurchase}
            ></DeleteConfirmPurchaseModal>}
        </div>
    );
};

export default ManageAllOrders;