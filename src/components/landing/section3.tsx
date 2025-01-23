import React from 'react';
import Image from "next/image";

const Section3 = () => {
    return (
        <section className="mt-20 text-center">
            <div className="px-6 lg:px-12 flex flex-col items-center justify-center h-full">

                {/* Main Heading */}
                <div className="font-thin relative text-5xl w-full sm:w-3/4 md:w-1/2 mb-6">
                    How It <span className="font-bold">Works?</span>
                </div>

                <div className="text-sm leading-[30px] font-normal max-w-xl mb-8">
                    Use these steps to generate high-quality content.
                </div>

                {/* Flexbox Layout for images */}
                <div className="flex justify-between items-center w-full mb-8">
                    {/* Image 1 */}
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/images/svg/landing/use-case.svg" // Path to the SVG file
                            alt="Use Case"
                            width={243}  // Default width
                            height={243}  // Default height
                            className="w-full h-auto" // Ensures responsiveness
                        />
                        <div className="mt-2 w-8 h-8 flex items-center justify-center bg-[#D7F200] text-black rounded-full font-semibold">
                            1
                        </div>
                        <div className="mt-2 font-bold">Select use-case</div>
                        <p className="text-sm mt-2 max-w-xs mx-auto text-center">
                            Our content creation template library offers a variety of use case for all your needs.
                        </p>
                    </div>

                    {/* Image 2 */}
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/images/svg/landing/input-context.svg" // Path to the SVG file
                            alt="Input Context"
                            width={243}  // Default width
                            height={243}  // Default height
                            className="w-full h-auto" // Ensures responsiveness
                        />
                        <div className="mt-2 w-8 h-8 flex items-center justify-center bg-[#D7F200] text-black rounded-full font-semibold">
                            2
                        </div>
                        <div className="mt-2 font-bold">Input some context</div>
                        <p className="text-sm mt-2 max-w-xs mx-auto text-center">
                            Guidance to the AI by inputting relevant information to generate text based on the given context.
                        </p>
                    </div>

                    {/* Image 3 */}
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/images/svg/landing/generate-result.svg" // Path to the SVG file
                            alt="Generate Result"
                            width={243}  // Default width
                            height={243}  // Default height
                            className="w-full h-auto" // Ensures responsiveness
                        />
                        <div className="mt-2 w-8 h-8 flex items-center justify-center bg-[#D7F200] text-black rounded-full font-semibold">
                            3
                        </div>
                        <div className="mt-2 font-bold">Generate results</div>
                        <p className="text-sm mt-2 max-w-xs mx-auto text-center">
                            Get plagiarism-free high-quality content that tailored to your needs and can be used on any platform
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Section3;
