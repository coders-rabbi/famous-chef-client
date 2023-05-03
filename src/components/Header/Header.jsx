import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-header-bg shadow-lg'>
            <nav className='flex items-center justify-between container mx-auto py-4'>
                <h1 className='text-3xl font-serif text-logo-color'>Famous <small className='text-xl'>Chef</small></h1>
                <div className='text-white'>
                    <Link className='ms-20 text-2xl font-serif' to="/">Home</Link>
                    <Link className='ms-20 text-2xl font-serif' to="/blog">Blog</Link>
                    <Link className='ms-20 text-2xl font-serif' to="/login">Login</Link>
                    <Link className='ms-20 text-2xl font-serif' to="/registration">Registration</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;