import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const [error , setError] = useState('')
    const { signIn, passwordReset, googleSingIn, githubSingIn } = useContext(AuthContext);
    const emailRef = useRef();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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
                form.reset();
            })
            .catch(error => {
                setError(error.message)
            });
    }

    const handlePasswordReset = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast("Enter Your Email Please !");
        }
        passwordReset(email)
            .then(() => {
                toast("Please Check your Email !");
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleGoogleSignIn = () => {
        googleSingIn(googleProvider)
            .then(result => {
                const loggedUser = result.user;
                toast("Google Sing In SuccessFully !");
            })
            .catch(error => console.error(error));
    }

    const handleGihubSignIn = () => {
        githubSingIn(githubProvider)
            .then(result => {
                const loggedUser = result.user;
                toast("Github Sing In SuccessFully !");
            })
            .catch(error => console.error(error));
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
                                <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control mt-10">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-black'>{error}</p>
                        </form>
                        <div className='px-8'>
                            <button onClick={handlePasswordReset} className='btn btn-link p-0'>Forgot password?</button>
                        </div>
                        <div className='flex justify-between px-8 mb-6'>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary flex gap-2">< FaGoogle />Google</button>
                            <button onClick={handleGihubSignIn} className="btn btn-outline btn-primary flex gap-2">< FaGithub />GitHub</button>
                        </div>
                        <p className='text-center mb-5 text-black'>
                            <Link to="/registration">New to Famous Chef ?<button className='btn btn-link p-2'>Please Register</button></Link>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;