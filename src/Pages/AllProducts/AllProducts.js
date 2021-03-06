import React from 'react';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../Home/ProductCard';

const AllProducts = () => {
    const [products] = useProducts()
    return (
        <div>
            <div className='my-5' >
                <h1 className='text-center text-3xl font-bold text-white my-5'>Our Products</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
                    {products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)}
                </div>
            </div >
        </div>
    );
};

export default AllProducts;