import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const [error, setError] = useState('');
    const {Register} = useContext(AuthContext);


    const handleRegistration = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            alert('Please enter more than 6 characters password');
        }
        console.log(name,email, password);

        

        Register(email, password)
        .then(result =>{
            const loggedUser = result.user;
            updateProfileData(loggedUser, name, photo);
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => console.error(error));
    }

    const updateProfileData = (user, name, photo) =>{
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
        .then()
        .catch(error => console.error(error));
    }

    return (
        <div className='container mx-auto mt-20 min-h-screen'>
            <div className="w-3/6 mx-auto bg-header-bg py-14 px-7 rounded-2xl">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text text-center">Please Registration!</h1>
                        <p className="py-6 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered text-black" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='text-center mb-5 text-black'>
                            <Link to="/login">Already have an account?<button className='btn btn-link p-2'>Login</button></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
