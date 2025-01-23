import React from 'react';
import Image from "next/image";

const BlogPage = () => {
    return (
        <div className="container mx-auto py-10">
            {/* Title with gradient */}
            <h1 className="text-center text-5xl font-bold mb-10">
                <span className="text-[#3A3A40]">Our</span>
                <span className="bg-gradient-to-r from-[#603BFC] to-[#FF6835] text-transparent bg-clip-text">
                    Blogs
                </span>
            </h1>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto">
                    <img
                        src="/images/blog1.png" // Replace with your image URL
                        alt="Card 1"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-sm font-semibold text-gray-800 mb-4">OpenAI, Apple collaborate</h3>
                        <a
                            href="#"
                            className="text-[#603BFC] hover:text-[#FF6835] flex items-center space-x-2"
                        >
                            <span>Learn More</span>
                            <Image src="/images/svg/arrow-right.svg" alt="Arrow ICON" width={20} height={10} />
                        </a>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto">
                    <img
                        src="/images/blog2.png" // Replace with your image URL
                        alt="Card 2"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-sm font-semibold text-gray-800 mb-4">OpenAI acquires Rockset</h3>
                        <a
                            href="#"
                            className="text-[#603BFC] hover:text-[#FF6835] flex items-center space-x-2"
                        >
                            <span>Learn More</span>
                            <Image src="/images/svg/arrow-right.svg" alt="Arrow ICON" width={20} height={10} />
                        </a>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto">
                    <img
                        src="/images/blog3.png" // Replace with your image URL
                        alt="Card 3"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-sm font-semibold text-gray-800 mb-4">Finding GPT-4’s mistakes with GPT-4</h3>
                        <a
                            href="#"
                            className="text-[#603BFC] hover:text-[#FF6835] flex items-center space-x-2"
                        >
                            <span>Learn More</span>
                            <Image src="/images/svg/arrow-right.svg" alt="Arrow ICON" width={20} height={10} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
