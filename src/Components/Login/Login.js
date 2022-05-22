import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    console.log(errors)

    const onSubmit = data => console.log(data);
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div>
                        <p class="text-center">
                            Don't have an account?
                            <span class="label-text font-bold"><Link to='/signup'>Sign up</Link></span>
                        </p>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h2 className='card-title'>Login To Your Account</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                {/*   <label class="label">
                                <span class="label-text">Email</span>
                            </label> */}
                                <input
                                    type="email"
                                    placeholder="email"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Require'
                                        },
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Provide a valid email'
                                        }
                                    })} />
                                <label class="label">
                                    {errors?.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors?.email.message}</span>}
                                    {errors?.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors?.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">
                                {/* <label class="label">
                                <span class="label-text">Password</span>
                            </label> */}
                                <input
                                    type="password"
                                    placeholder="password"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Require'
                                        }
                                    })} />
                                <label class="label">
                                    {errors?.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors?.password.message}</span>}
                                </label>
                            </div>
                            <input type="submit" class="btn btn-primary  w-full max-w-xs text-white" value='login' />
                        </form>

                        <div class="divider">OR</div>
                        <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;