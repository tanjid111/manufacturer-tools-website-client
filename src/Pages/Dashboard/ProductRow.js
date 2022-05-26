import React from 'react';

const ProductRow = ({ product, index, setDeleteProduct }) => {
    const { name, price, img, quantityAvailable } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{quantityAvailable}</td>
            <td>
                {/* <label onClick={() => handleDelete(_id)} htmlFor="delete-confirm-modal" className="btn  btn-error">Delete</label> */}
                <label onClick={() => setDeleteProduct(product)} htmlFor="delete-confirm-modal" className="btn  btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;