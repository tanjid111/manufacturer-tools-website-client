import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useProducts()
    const navigate = useNavigate();
    return (
        <div className='my-5' >
            <h1 className='text-center text-4xl font-bold text-white my-5'>Our Products</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
                {products.slice(0, 6).map(product => <ProductCard
                    key={product._id}
                    product={product}
                ></ProductCard>)}
            </div>
            <div className='text-center'>
                <button onClick={() => navigate('/allProducts')} className="btn btn-primary mt-10">Show All Products</button>
            </div>
        </div >
    );
};

export default Products;