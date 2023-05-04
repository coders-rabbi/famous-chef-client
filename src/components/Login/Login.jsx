import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error)
            });
    }
    return (
        <div className='container mx-auto mt-20 min-h-screen'>
            <div className="w-3/6 mx-auto bg-header-bg py-14 px-7 rounded-2xl">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text text-center">Please Login!</h1>
                        <p className="py-6 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='flex justify-between px-8 mb-6'>
                            <button className="btn btn-outline btn-primary flex gap-2">< FaGoogle />Google</button>
                            <button className="btn btn-outline btn-primary flex gap-2">< FaGithub />GitHub</button>
                        </div>
                        <p className='text-center mb-5 text-black'>
                            <Link to="/registration">New to Famous Chef ?<button className='btn btn-link p-2'>Please Register</button></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;