import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const handleSubmit = (event) => {
        event.preventDefault();
        const rating = event.target.rating.value;
        const review = event.target.review.value;

        const reviews = {
            name: user.displayName,
            rating,
            review
        }
        console.log(reviews);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Review Posted!')
            })

    }



    return (
        <div>
            <h2 className='text-4xl font-bold'>Add Review</h2>
            <form onSubmit={handleSubmit} className='grid  grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="name" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="number" name='rating' placeholder="Rating out of 5" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='review' placeholder="Write your review" className="input input-bordered w-full max-w-xs" required />
                <input type="submit" value="Submit" placeholder="Type here" className="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddAReview;