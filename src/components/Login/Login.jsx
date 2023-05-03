import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div className='border w-1/2 mx-auto p-10 rounded-md'>
                <h1 className='text-4xl font-serif font-semibold mb-9'>Sign in to your account</h1>
                <div className='flex justify-between'>
                    <button class="bg-transparent hover:bg-logo-color text-white font-semibold hover:text-white py-3 px-7 border border-logo-color hover:border-transparent rounded">
                        Log in with Google
                    </button>
                    <button class="bg-transparent hover:bg-logo-color text-white font-semibold hover:text-white py-3 px-7 border border-logo-color hover:border-transparent rounded">
                        Log in with GitHub
                    </button>
                </div>

                <form action="">
                    <div>
                        <label htmlFor="">Your Email</label>
                        <input type="email" name='email' placeholder='name@company.com' />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" placeholder='*********' />
                    </div>
                    <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Sign in" />
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" name="" id="" />Accepts temrs & conditions
                        </div>
                        <Link>Forgot password?</Link>
                    </div>
                </form>
                <div>
                    <small>
                    Don’t have an account yet? <Link to="/registration">Sign Up</Link>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Login;