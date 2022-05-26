import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import DeleteConfirmPurchaseModal from './DeleteConfirmPurchaseModal';
import PurchaseRow from './PurchaseRow';

const MyOrders = () => {
    const [purchases, setPurchases] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [deletePurchase, setDeletePurchase] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`https://serene-lake-48668.herokuapp.com/purchase?customerEmail=${user.email}`, {
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
    }, [user, navigate])

    return (
        <div>
            <h2 className='text-2xl'>My Orders: {purchases.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th className='w-1/3'>Product</th>
                            <th>Order Quantity</th>
                            <th>Price/Qty</th>
                            <th>Total Price</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((purchase, index) => <PurchaseRow
                                key={purchase._id}
                                purchase={purchase}
                                index={index}
                                setDeletePurchase={setDeletePurchase}
                            ></PurchaseRow>)

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
        </div >
    );
};

export default MyOrders;