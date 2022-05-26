import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

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

// const useProducts = () => {
//     const { data, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json()))
//     return [data, isLoading, refetch];
// }

// export default useProducts;