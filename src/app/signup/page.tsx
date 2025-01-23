import AuthLayout from '@/components/auth-layout';
import React from 'react';

const SignupPage = () => {
    return (
        <AuthLayout showTerms={true}>
            {/* Right side content: Signup Form */}
            <div className="bg-white shadow-xl rounded-3xl p-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                {/* Signup Form */}
                <form>
                    {/* Your Name */}
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-left text-gray-700"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            autoComplete="off"
                            placeholder="Enter your name"
                        />
                    </div>

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
                            autoComplete="off"
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
                            autoComplete="off"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6">
                        <label
                            htmlFor="confirm_password"
                            className="block text-sm font-semibold text-left text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            autoComplete="off"
                            placeholder="Confirm your password"
                        />
                    </div>

                    {/* Terms & Conditions Checkbox */}
                    <div className="flex items-center mb-6">
                        <input
                            type="checkbox"
                            id="keep-me-signed-in"
                            className="mr-2"
                        />
                        <label htmlFor="keep-me-signed-in" className="text-sm text-gray-700">
                            I agree to the
                            <a href="terms" className="text-sm text-[#0CC0DF] hover:underline mx-2">
                                Terms & Conditions
                            </a>
                        </label>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-[#D7F200] text-black font-semibold rounded-full hover:bg-[#B8D400] focus:outline-none focus:ring-4 focus:ring-[#D7F200]"
                    >
                        Continue
                    </button>
                </form>

                {/* Login Link */}
                <div className="mt-2 text-center">
                    <span className="text-sm">Already have an account? </span>
                    <a href="login" className="text-sm text-[#0CC0DF] hover:underline">
                        Login
                    </a>
                </div>
            </div>
        </AuthLayout>
    );
};

export default SignupPage;
