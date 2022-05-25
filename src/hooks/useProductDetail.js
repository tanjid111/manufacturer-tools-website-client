import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProductDetail = (productId) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProductDetail = async () => {
            await axios.get(`http://localhost:5000/products/${productId}`)
                .then(res => {
                    // console.log(res.data);
                    setProduct(res.data)
                })
        }
        getProductDetail();
    }, [productId])
    return [product, setProduct];
};

export default useProductDetail;