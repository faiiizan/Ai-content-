import AuthLayout from '@/components/auth-layout';
import React from 'react';

const LoginPage = () => {
    return (
        <AuthLayout>
            {/* Right side content: Login Form */}
            <div className="bg-white shadow-xl rounded-3xl p-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                {/* Login Form */}
                <form>
                    {/* Username */}
                    <div className="mb-6">
                        <label
                            htmlFor="username"
                            className="block text-sm font-semibold text-left text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your username"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-left text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Keep me signed in */}
                    <div className="flex items-center mb-6">
                        <input
                            type="checkbox"
                            id="keep-me-signed-in"
                            className="mr-2"
                        />
                        <label htmlFor="keep-me-signed-in" className="text-sm text-gray-700">
                            Keep me signed in
                        </label>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-[#D7F200] text-black font-semibold rounded-full hover:bg-[#B8D400] focus:outline-none focus:ring-4 focus:ring-[#D7F200]"
                    >
                        Continue
                    </button>
                </form>

                {/* Forgot Password and Sign Up Links */}
                <div className="mt-4 text-center">
                    <a href="forgot-password" className="text-sm text-[#0CC0DF] hover:underline">
                        Forgot Password?
                    </a>
                </div>
                <div className="mt-2 text-center">
                    <span className="text-sm">Don't have an account? </span>
                    <a href="signup" className="text-sm text-[#0CC0DF] hover:underline">
                        Sign up
                    </a>
                </div>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
