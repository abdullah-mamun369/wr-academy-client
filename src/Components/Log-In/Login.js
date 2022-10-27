import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signIn, providerLogin } = useContext(AuthContext);

    // login with github handle
    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    // login with google handle
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    // email and password handle
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-center">Please Login here to access!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">LOGIN</button>
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-center'>Login with</p>
                                <div className="form-control mt-2">
                                    <button onClick={handleGoogleSignIn} className="btn btn-outline"> <span className='mx-2'> <BsGoogle /></span> Login with Google</button>
                                </div>
                                <div className="form-control mt-3">
                                    <button onClick={handleGithubSignIn} className="btn btn-outline"> <span className='mx-2'> <BsGithub /></span> Login with GitHub</button>
                                </div>
                                <div className='mt-2'>
                                    <p><small>Don't have an account? <Link className='text-cyan-700 font-medium' to="/signup"> Register here</Link></small></p>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;