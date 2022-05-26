import React, { useEffect } from 'react';
import google from '../../Images/social/google.png'
import facebook from '../../Images/social/facebook.png'
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || googleUser || fbUser)

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let signInError;

    useEffect(() => {
        if (token) {
            // console.log(user || googleUser || fbUser);
            navigate(from, { replace: true });;
        }
    }, [token, from, navigate])

    if (loading || googleLoading || fbLoading) {
        return <Loading></Loading>
    }

    if (error || googleError || fbError) {
        signInError = <p className='text-red-500'>{error?.message || googleError?.message || fbError?.message}</ p>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
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

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                    },
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn btn-primary w-full text-white max-w-xs' value='Login' type="submit" />
                    </form>
                    <p>New to the website? <Link to='/register' className='text-secondary  text-decoration-none'>Please Register</Link></p>
                    <p>Forget Password?  <Link to='/reset' className='text-secondary text-decoration-none' onClick={() => navigate('/reset')}>Reset Password</Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">
                        <img className='px-2' style={{ width: '30px' }} src={google} alt="" />Google Sign In
                    </button>

                    <button
                        onClick={() => signInWithFacebook()}
                        className="btn btn-outline">
                        <img className='px-2' style={{ width: '30px' }} src={facebook} alt="" />Facebook Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;