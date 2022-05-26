import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    const [deleteProduct, setDeleteProduct] = useState(null);
    return (
        <div>
            <h2 className='text-3xl fold-bold'>Manage Products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Quantity Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                setDeleteProduct={setDeleteProduct}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteProduct && <DeleteConfirmModal
                products={products}
                setProducts={setProducts}
                deleteProduct={deleteProduct}
                // refetch={refetch}
                setDeleteProduct={setDeleteProduct}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProducts;