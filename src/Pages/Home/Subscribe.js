import React from 'react';

const Subscribe = () => {
    return (
        <div className='text-center'>
            <span className="text-center text-4xl font-bold">Newsletter</span>
            <div className='text-center flex justify-items-center justify-center'>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-xl">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;