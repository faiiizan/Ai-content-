"use client";

const Section6 = () => {
    // Define the list items in an array of objects
    const listItems = [
        {
            title: "Can I change my subscription plan later?",
            description: "You can change your subscription plan at any time via the account settings page.",
        },
        {
            title: "Can I cancel my subscription anytime?",
            description: "Yes, you can cancel your subscription anytime through the settings page without penalties.",
        },
        {
            title: "What happens if I miss a payment?",
            description: "If you miss a payment, you will receive a notification. Your account will be suspended after a grace period.",
        },
        {
            title: "Is there any hidden fees with subscription plans?",
            description: "No, all fees are transparent. We do not charge any hidden fees.",
        },
    ];

    return (
        <section className="my-20 text-center">
            <div className="px-6 lg:px-12 flex flex-col items-center justify-center h-full">
                {/* Main Heading */}
                <div className="relative text-1xl w-full sm:w-3/4 md:w-1/2 mb-6 font-bold">
                    The top rated All-In-One optimization tool
                </div>

                {/* Image Section */}
                <div className="flex justify-center items-center w-full mb-8">
                    <img
                        src="/images/svg/landing/optimization-tools.svg" // Path to the image file
                        alt="Polgo"
                        width={460}
                        height={85}
                    />
                </div>

                {/* New Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {/* Left Column - Heading and Button */}
                    <div className="flex flex-col items-start justify-center space-y-4">
                        <div className="text-4xl">
                            Frequently
                        </div>
                        <div className="text-4xl">
                            Asked
                        </div>
                        <div className="font-bold text-4xl">
                            Questions
                        </div>
                        <button
                            type="button"
                            className="uppercase custom-button text-black bg-[#D7F200] hover:bg-[#B8D400] focus:outline-none focus:ring-4 focus:ring-[#D7F200] font-medium rounded-full text-[16px] px-8 py-2.5 text-center me-2 dark:focus:ring-[#B8D400]"
                        >
                            view all
                        </button>
                    </div>


                    {/* Right Column - List with Hover Animation */}
                    <div className="flex flex-col items-start justify-center space-y-4 w-full">
                        {/* List */}
                        <ul className="max-w-full divide-y divide-gray-200 dark:divide-gray-700 w-full">
                            {listItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative flex items-center justify-between py-3 sm:py-4 border-b transition-all duration-300 group hover:bg-white hover:shadow-lg hover:rounded-lg w-full"
                                >
                                    {/* Left side (title) */}
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {item.title}
                                        </p>

                                        {/* Description - Hidden by default and shown on hover */}
                                        <p className="text-xs text-gray-600 dark:text-gray-400 hidden group-hover:block mt-2">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Right side (icon) */}
                                    <div className="flex justify-center items-center">
                                        <div className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-gray-400 group-hover:bg-white group-hover:shadow-lg cursor-pointer transition-all duration-300">
                                            {/* Default Plus Icon (shown by default) */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-4 h-4 text-gray-800 group-hover:hidden m-auto"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 5v14M5 12h14"
                                                />
                                            </svg>

                                            {/* Minus Icon (shown on hover) */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-4 h-4 text-gray-800 group-hover:block hidden m-auto"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 12h14"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;
