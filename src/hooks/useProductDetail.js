import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProductDetail = (productId) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProductDetail = async () => {
            await axios.get(`https://serene-lake-48668.herokuapp.com/products/${productId}`)
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