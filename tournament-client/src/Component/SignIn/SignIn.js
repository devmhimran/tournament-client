import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleSignIn = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='container mx-auto'>
            <div className="card mt-20 mx-auto w-96 bg-base-100 shadow-xl">
                <h1 className='text-2xl font-bold'>Sign In</h1>
                <div className="card-body text-center">
                    <form onSubmit={handleSignIn}>
                        <input type="text" name='email' className="input input-bordered w-full max-w-xs my-2" placeholder='Email' />
                        <input type="password" name='password' className="input input-bordered w-full max-w-xs my-2" placeholder='Password' />
                        <button className='btn btn-primary '>Sign in</button>
                    </form>

                    <Link className='text-start link link-primary' to='/signup'>Please register</Link>
                </div>

            </div>
        </div>
    );
};

export default SignIn;