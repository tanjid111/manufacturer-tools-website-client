import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            await axios.get('http://localhost:5000/reviews')
                .then(res => {
                    // console.log(res.data);
                    setReviews(res.data)
                })
        }
        getReviews();
    }, [])
    return [reviews, setReviews];
};

export default useReviews;