import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const [
        sendPasswordResetEmail,
        sending, resetError
    ] = useSendPasswordResetEmail(auth);
    let resetPassError;
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate()

    if (sending) {
        return <Loading></Loading>
    }

    if (resetError) {
        resetPassError = <p className='text-red-500'>{resetError?.message}</ p>
    }

    const onSubmit = async (data) => {
        const { email } = data;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email');
        }
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        {resetPassError}
                        <input className='btn btn-primary w-full text-white max-w-xs' value='Reset Password' type="submit" />
                    </form>
                    <Link to='/login' className='text-primary text-decoration-none' onClick={() => navigate('/login')}>Back to Login</Link>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default ResetPassword;