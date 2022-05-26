import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { name, _id } = deleteProduct;
    const handleDelete = () => {
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product ${name} is deleted`)
                    setDeleteProduct(null);
                    // refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}</h3>
                    <p className="py-4">Once deleted the data will be deleted forever.</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-primary">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;