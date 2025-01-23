import AuthLayout from '@/components/auth-layout';
import React from 'react';

const ForgotPasswordPage = () => {
    return (
        <AuthLayout>
            {/* Right side content: Forgot Password Form */}
            <div className="bg-white shadow-xl rounded-3xl p-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

                {/* Forgot Password Form */}
                <form>
                    {/* Email */}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-left text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            autoComplete="off"
                            placeholder="Enter your email address"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-[#D7F200] text-black font-semibold rounded-full hover:bg-[#B8D400] focus:outline-none focus:ring-4 focus:ring-[#D7F200]"
                    >
                        Reset Password
                    </button>
                </form>

                {/* Back to Login Link */}
                <div className="mt-4 text-center">
                    <span className="text-sm">Remember your password? </span>
                    <a href="login" className="text-sm text-[#0CC0DF] hover:underline">
                        Back to Login
                    </a>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ForgotPasswordPage;
