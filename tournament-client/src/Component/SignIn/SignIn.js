import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='container mx-auto'>
            <div class="card mt-20 mx-auto w-96 bg-base-100 shadow-xl">
                <h1 className='text-2xl font-bold'>Sign In</h1>
                <div class="card-body text-center">
                    <input type="text" class="input input-bordered w-full max-w-xs" placeholder='Email'/>
                    <input type="text" class="input input-bordered w-full max-w-xs" placeholder='Password'/>
                    <button className='btn btn-primary '>Sign in</button>
                    <Link className='text-start link link-primary' to='/signup'>Please register</Link>
                </div>
                
            </div>
        </div>
    );
};

export default SignIn;