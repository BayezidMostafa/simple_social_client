import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
            <div className="min-h-[80vh] flex items-center justify-center  px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 rounded-md shadow-md sm:p-5">
                    <div>

                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-600
                                    focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-600
                                    focus:outline-none focus:ring-cyan-600 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div>
                            <Button
                                fullWidth
                                color='cyan'
                            >Sign In</Button>
                        </div>
                        <Typography
                            className="text-center"
                        >
                            Don't have an account?
                            <Link className='ml-1 underline' to='/signup'>Sign up</Link>
                        </Typography>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn;