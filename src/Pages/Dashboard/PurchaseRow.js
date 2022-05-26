import React from 'react';
import { Link } from 'react-router-dom';


const PurchaseRow = ({ purchase, index, setDeletePurchase }) => {
    const { _id, product, orderQuantity, price, totalPrice, paid, transactionId } = purchase;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product}</td>
            <td>{orderQuantity}</td>
            <td>{price}</td>
            <td>{totalPrice}</td>
            <td>{(totalPrice && !paid) && <div> <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-success mr-2">Payment</button></Link>
                <label onClick={() => setDeletePurchase(purchase)} htmlFor="delete-confirm-purchase-modal" className="btn btn-error">Delete</label></div>}</td>

            <td>{(totalPrice && paid) && <div>
                <p className='text-success'>Paid</p>
                <p>Transaction id: <span className='text-success'>{transactionId}</span> </p>
            </div>}</td>
        </tr>
    );
};

export default PurchaseRow;