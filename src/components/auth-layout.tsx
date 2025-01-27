import Image from 'next/image';
import React, { ReactNode } from 'react';

interface AuthLayoutProps {
    children: ReactNode; // Explicitly type the children as ReactNode
    showTerms?: boolean; // Add an optional prop to conditionally show the terms
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, showTerms }) => {
    return (
        <div className="container mx-auto">
            <div className="my-20 text-center relative">
                <div className="px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center relative z-10">
                    {/* Left side (Text with Button) */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-block text-5xl font-bold text-transparent bg-custom-gradient-text mb-3">
                            Welcome
                        </div>

                        <p className="font-normal text-black text-5xl leading-tight">
                            <span className="font-bold">
                                Back to <span className="capitalize">{[process.env.NEXT_PUBLIC_APP_NAME]}</span>
                            </span>
                        </p>

                        <div className="flex items-center my-4">
                            <input
                                type="checkbox"
                                id="login-checkbox"
                                className="mr-2 bg-[#D7F200] border-none rounded-md"
                            />
                            <label htmlFor="login-checkbox" className="text-sm font-normal text-black">
                                Login to your account with your details.
                            </label>
                        </div>

                        {/* Buttons in 2 rows with half width */}
                        <div className="flex flex-col space-y-4 w-1/2">
                            <button
                                type="button"
                                className="w-full py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center justify-center"
                            >
                                <Image src="/images/svg/google.svg" alt="Google Icon" className="mr-2 w-5 h-5" />
                                Continue with Google
                            </button>

                            <button
                                type="button"
                                className="w-full text-white bg-[#4267B2] hover:bg-[#365899] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-[#4267B2] dark:hover:bg-[#365899] dark:focus:ring-blue-800 flex items-center justify-center"
                            >
                                <Image src="/images/svg/facebook.svg" alt="Facebook Icon" className="mr-2 w-5 h-5" />
                                Continue with Facebook
                            </button>
                        </div>
                    </div>

                    {/* Right side (Dynamic content based on children) */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        {children}
                    </div>
                </div>

                {/* Conditionally render Terms of Use and Privacy Policy */}
                {showTerms && (
                    <div className="text-center mt-20">
                        <a href="terms" className="text-sm text-[#0CC0DF] hover:underline mx-2">Terms of Use</a>
                        <span className="mx-2">|</span>
                        <a href="privacy" className="text-sm text-[#0CC0DF] hover:underline mx-2">Privacy Policy</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthLayout;
