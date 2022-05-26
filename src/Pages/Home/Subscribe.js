import React from 'react';

const Subscribe = () => {
    return (
        <div className='text-center'>
            <span class="text-center text-4xl font-bold">Newsletter</span>
            <div className='text-center flex justify-items-center justify-center'>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text text-xl">Enter your email address</span>
                    </label>
                    <div class="relative">
                        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;