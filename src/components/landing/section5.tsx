'use client'; // <-- Add this at the top

import React, { useState } from 'react';

const Section5 = () => {
    // State to track the selected pricing plan type
    const [selectedPlan, setSelectedPlan] = useState('monthly');

    // Handler to update the selected plan type
    const handlePlanSelect = (plan: string) => {
        setSelectedPlan(plan);
    };

    return (
        <section className="mt-20 text-center bg-gradient-to-r from-white via-[#F7F1EE] to-white">
            <div className="px-6 lg:px-12 flex flex-col items-center justify-center h-full">
                {/* Main Heading */}
                <div className="font-thin relative text-5xl w-full sm:w-3/4 md:w-1/2 mb-6">
                    Our <span className="font-bold">Pricing</span>
                </div>

                <div className="text-sm leading-[30px] font-normal max-w-xl mb-8">
                    Our plans are simple and clear, they are based on the total credits used in each month.
                </div>

                {/* Plan Selector Buttons */}
                <div className="flex justify-center space-x-4 mb-8">
                    {/* Monthly Plan Button */}
                    <button
                        onClick={() => handlePlanSelect('monthly')}
                        className={`text-lg font-semibold py-2 px-6 rounded-full transition-all duration-300
                            ${selectedPlan === 'monthly'
                                ? 'bg-[#D7F200] text-black border-2 border-[#D7F200]'
                                : 'bg-transparent text-gray-700 border-2 border-transparent hover:bg-gray-100'}
                        `}
                    >
                        MONTHLY
                    </button>

                    {/* Yearly Plan Button */}
                    <button
                        onClick={() => handlePlanSelect('yearly')}
                        className={`text-lg font-semibold py-2 px-6 rounded-full transition-all duration-300
                            ${selectedPlan === 'yearly'
                                ? 'bg-[#D7F200] text-black border-2 border-[#D7F200]'
                                : 'bg-transparent text-gray-700 border-2 border-transparent hover:bg-gray-100'}
                        `}
                    >
                        YEARLY
                    </button>

                    {/* Prepaid Plan Button */}
                    <button
                        onClick={() => handlePlanSelect('prepaid')}
                        className={`text-lg font-semibold py-2 px-6 rounded-full transition-all duration-300
                            ${selectedPlan === 'prepaid'
                                ? 'bg-[#D7F200] text-black border-2 border-[#D7F200]'
                                : 'bg-transparent text-gray-700 border-2 border-transparent hover:bg-gray-100'}
                        `}
                    >
                        PREPAID
                    </button>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">

                    <div className="bg-transparent p-6 rounded-lg hover:bg-white hover:border-2 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start justify-start space-x-4">
                            {/* Title and Price */}
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 text-left">Free</h3>
                                <p className="text-4xl font-bold text-gray-900 mt-4 text-left">$0/month</p>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full mt-6 py-2 px-4 text-white bg-[#0CC0DF] hover:bg-[#0CC0DF] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
                        >
                            Subscribe
                        </button>


                        {/* Features List */}
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>5K Words Generate</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>4 Images Generate</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>70+ Templates Access</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Assistant Access</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Article Generator</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Content Rewriter</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Smart Editor</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-transparent p-6 rounded-lg hover:bg-white hover:border-2 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start justify-start space-x-4">
                            {/* Title and Price */}
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 text-left">Basic</h3>
                                <p className="text-4xl font-bold text-gray-900 mt-4 text-left">$0/month</p>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full mt-6 py-2 px-4 text-white bg-[#0CC0DF] hover:bg-[#0CC0DF] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
                        >
                            Subscribe
                        </button>


                        {/* Features List */}
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>5K Words Generate</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>4 Images Generate</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>70+ Templates Access</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Assistant Access</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Article Generator</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Content Rewriter</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Smart Editor</span>
                            </li>
                        </ul>
                    </div>


                    <div className="relative bg-transparent p-6 rounded-lg bg-white border-2 border-gray-300 shadow-xl transition-all duration-300">
                        {/* Most Popular Stripe */}
                        <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-[#F7D700] text-center text-sm font-semibold py-1 rounded-t-lg w-1/2">
                            Most Popular
                        </div>

                        <div className="flex items-start justify-start space-x-4">
                            {/* Title and Price */}
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 text-left">Standard</h3>
                                <p className="text-4xl font-bold text-gray-900 mt-4 text-left">$0/month</p>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full mt-6 py-2 px-4 text-white bg-[#0CC0DF] hover:bg-[#0CC0DF] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
                        >
                            Subscribe
                        </button>

                        {/* Features List */}
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>5K Words Generate</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>4 Images Generate</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>70+ Templates Access</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Assistant Access</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Article Generator</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Content Rewriter</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Smart Editor</span>
                            </li>
                        </ul>
                    </div>



                    <div className="bg-transparent p-6 rounded-lg hover:bg-white hover:border-2 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start justify-start space-x-4">
                            {/* Title and Price */}
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 text-left">Free</h3>
                                <p className="text-4xl font-bold text-gray-900 mt-4 text-left">$0/month</p>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full mt-6 py-2 px-4 text-white bg-[#0CC0DF] hover:bg-[#0CC0DF] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
                        >
                            Subscribe
                        </button>


                        {/* Features List */}
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>5K Words Generate</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>4 Images Generate</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>70+ Templates Access</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Assistant Access</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Article Generator</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Content Rewriter</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Smart Editor</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Section5;
