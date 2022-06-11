import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const [createUserWithEmailAndPassword,user, loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const handleCreateUser = async (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
        console.log(name, email, password);

    }
    return (
        <div className='container mx-auto'>
            <div className="card mt-20 mx-auto w-96 bg-base-100 shadow-xl">
                <h1 className='text-2xl font-bold'>Sign Up</h1>
                <div className="card-body text-center">
                    <form onSubmit={handleCreateUser}>
                        <input type="text" name='name' className="input input-bordered w-full max-w-xs my-2" placeholder='Name' />
                        <input type="email" name='email' className="input input-bordered w-full max-w-xs my-2" placeholder='Email' />
                        <input type="password" name='password' className="input input-bordered w-full max-w-xs my-2" placeholder='Password' />
                        <button type='submit' className='btn btn-primary '>Sign in</button>
                    </form>

                    <Link className='text-start link link-primary' to='/signin'>Please login</Link>
                </div>

            </div>
        </div>
    );
};

export default SignUp;