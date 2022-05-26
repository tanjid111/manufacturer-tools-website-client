import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L11h4AO0LSxhdmBt0cDEKyHishTX082T1qqYJXJKYF8SSXNh8eX7dWq8kZPkfwlW8znYFM4RlJZwQHeYq8kfAng00xkGVldHC');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/purchase/${id}`;

    const { data: purchase, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="card max-w-md w-50 bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {purchase.customerName}</p>
                    <h2 className="card-title">Please Pay for {purchase.product}</h2>
                    <p>Please pay ${purchase.totalPrice}</p>
                </div>
            </div>

            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            purchase={purchase} />
                    </Elements>


                </div>
            </div>
        </div>
    );
};

export default Payment;