import React from 'react';


const PurchaseRow = ({ purchase, index, setDeletePurchase }) => {
    const { product, orderQuantity, price, totalPrice } = purchase;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{orderQuantity}</td>
            <td>{price}</td>
            <td>{totalPrice}</td>
            <td><label onClick={() => setDeletePurchase(purchase)} htmlFor="delete-confirm-purchase-modal" className="btn btn-success mx-2">Payment</label>
                <label onClick={() => setDeletePurchase(purchase)} htmlFor="delete-confirm-purchase-modal" className="btn btn-error">Delete</label></td>
        </tr>
    );
};

export default PurchaseRow;