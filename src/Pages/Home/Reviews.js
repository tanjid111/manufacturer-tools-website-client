import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <section>
            <div>
                <h1 className='text-center text-4xl font-bold text-white mt-10'>Reviews</h1>
                <p className='text-center text-2xl my-5'>What our customers say</p>
            </div>
            <div>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Reviews;