import React from 'react';
import Image from "next/image";

const Section4 = () => {
    return (
        <section className="mt-20 text-center">
            <div className="px-6 lg:px-12 flex flex-col items-center justify-center h-full">

                {/* Main Heading */}
                <div className="font-thin relative text-5xl w-full sm:w-3/4 md:w-1/2 mb-6">
                    Use <span className="font-bold">Cases</span>
                </div>

                <div className="text-sm leading-[30px] font-normal max-w-xl mb-8">
                    Our templates are designed to provide you quickly and easily create high-quality content.
                </div>

                {/* Responsive Grid for Icons, Titles, and Paragraphs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-8">

                    {/* Step 1 */}
                    <div className="flex flex-col sm:flex-row items-center justify-start space-x-4">
                        <div className="flex items-center justify-center w-15 h-15 bg-[#EBFFF9] rounded-[9px] mb-4 sm:mb-0 p-2"> {/* Reduced padding to p-2 */}
                            <Image
                                src="/images/svg/landing/copy.svg" // Path to the SVG file
                                alt="Keyword Generator"
                                width={30} // Reduced icon size
                                height={30} // Reduced icon size
                            />
                        </div>
                        <div className="text-left max-w-xs">
                            <h3 className="text-lg font-bold">Keyword Generator</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Utilizes natural language processing to generate engaging and relevant blog titles.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col sm:flex-row items-center justify-start space-x-4">
                        <div className="flex items-center justify-center w-15 h-15 bg-[#F4E9FF] rounded-[9px] mb-4 sm:mb-0 p-2"> {/* Reduced padding to p-2 */}
                            <Image
                                src="/images/svg/landing/seo.svg" // Path to the SVG file
                                alt="SEO Optimizer"
                                width={30} // Reduced icon size
                                height={30} // Reduced icon size
                            />
                        </div>
                        <div className="text-left max-w-xs">
                            <h3 className="text-lg font-bold">SEO Optimizer</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Analyzes content for SEO, optimizing it for higher search rankings and engagement.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col sm:flex-row items-center justify-start space-x-4">
                        <div className="flex items-center justify-center w-15 h-15 bg-[#CEFFCB] rounded-[9px] mb-4 sm:mb-0 p-2"> {/* Reduced padding to p-2 */}
                            <Image
                                src="/images/svg/landing/blog.svg" // Path to the SVG file
                                alt="Blog"
                                width={30} // Reduced icon size
                                height={30} // Reduced icon size
                            />
                        </div>
                        <div className="text-left max-w-xs">
                            <h3 className="text-lg font-bold">Blog</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Generates descriptive text for videos, enhancing accessibility and improving searchability.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col sm:flex-row items-center justify-start space-x-4">
                        <div className="flex items-center justify-center w-15 h-15 bg-[#E7F0FF] rounded-[9px] mb-4 sm:mb-0 p-2"> {/* Reduced padding to p-2 */}
                            <Image
                                src="/images/svg/landing/social.svg" // Path to the SVG file
                                alt="Instagram/Facebook"
                                width={30} // Reduced icon size
                                height={30} // Reduced icon size
                            />
                        </div>
                        <div className="text-left max-w-xs">
                            <h3 className="text-lg font-bold">Instagram/Facebook</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                AI-powered tool that creates high-quality articles based on user specifications and keywords.
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-col sm:flex-row items-center justify-start space-x-4">
                        <div className="flex items-center justify-center w-15 h-15 bg-[#FFF0D4] rounded-[9px] mb-4 sm:mb-0 p-2"> {/* Reduced padding to p-2 */}
                            <Image
                                src="/images/svg/landing/data-analyst.svg" // Path to the SVG file
                                alt="Data Analyst"
                                width={30} // Reduced icon size
                                height={30} // Reduced icon size
                            />
                        </div>
                        <div className="text-left max-w-xs">
                            <h3 className="text-lg font-bold">Data Analyst</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Analyzes and profiles social media bio to provide insights on personality, interests, and behaviors.
                            </p>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="flex flex-col sm:flex-row items-center justify-start space-x-4">
                        <div className="flex items-center justify-center w-15 h-15 bg-[#EEFF8D] rounded-[9px] mb-4 sm:mb-0 p-2"> {/* Reduced padding to p-2 */}
                            <Image
                                src="/images/svg/landing/presentation.svg" // Path to the SVG file
                                alt="Presentation"
                                width={30} // Reduced icon size
                                height={30} // Reduced icon size
                            />
                        </div>
                        <div className="text-left max-w-xs">
                            <h3 className="text-lg font-bold">Presentation</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                AI-powered tool that generates new variants of existing products, designs, or content.
                            </p>
                        </div>
                    </div>

                </div>

                <button
                    type="button"
                    className="custom-button text-black bg-[#D7F200] hover:bg-[#B8D400] focus:outline-none focus:ring-4 focus:ring-[#D7F200] font-medium rounded-full text-[16px] px-8 py-2.5 text-center me-2 dark:focus:ring-[#B8D400]"
                >
                    VIEW ALL TOOLS
                </button>

            </div>
        </section>
    );
};

export default Section4;
