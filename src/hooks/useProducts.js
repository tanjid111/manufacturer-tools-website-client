import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            await axios.get('http://localhost:5000/products')
                .then(res => {
                    // console.log(res.data);
                    setProducts(res.data)
                })
        }
        getProducts();
    }, [])
    return [products, setProducts];
};

export default useProducts;