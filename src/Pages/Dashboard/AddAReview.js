import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Add Review</h2>
        </div>
    );
};

export default AddAReview;