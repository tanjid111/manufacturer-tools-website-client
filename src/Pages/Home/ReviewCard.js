import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCard = (props) => {
    const { review, rating, name } = props.review;
    return (
        <div>
            <div className='border-solid border-2 my-3 py-5 rounded-2xl w-11/12 md:w-11/12 lg:w-3/4 mx-auto shadow-lg'>
                <div className='text-center'>
                    <p>Customer Name: {name}</p>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating>
                </div>
                <p className='text-center px-6 md:px-12 text-xl'>{review}</p>

            </div>
        </div>
    );
};

export default ReviewCard;