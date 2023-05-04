import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (
        
        <div className='bg-header-bg shadow-lg border-b border-logo-color'>
            <nav className='flex items-center justify-between container mx-auto py-4'>
                <h1 className='text-3xl font-serif text-logo-color'>Famous <small className='text-xl'>Chef</small></h1>
                <div className='text-white flex items-center'>
                    <NavLink className='ms-16 text-2xl font-serif' to="/">Home</NavLink>
                    <NavLink className='ms-16 text-2xl font-serif' to="/blog">Blog</NavLink>

                    <div className='ms-16 text-2xl'>
                        {
                            user ?
                                <div className='flex items-center gap-8'>
                                    <img className='bg-transparent border-2 border-logo-color h-20 w-20 rounded-full' title={user.displayName} src={user.photoURL} alt="" />
                                    <button onClick={handleLogOut} className="btn btn-error">Log Out</button>
                                </div> :
                                <NavLink to="/login">
                                    <div className='flex items-center gap-8'>
                                        <NavLink className='text-2xl font-serif' to="/registration">Registration</NavLink>
                                        <button className="btn btn-error">LogIn</button>
                                    </div>
                                </NavLink>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;