import React from 'react';

const EmailSignUp = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add your subscription logic here (e.g., API call)
        console.log('Subscribe button clicked!');
    };

    return (
        <div className="p-10 min-w-full mx-auto rounded-lg shadow-xl">

            <h2 className="text-xl md:text-2xl mb-3 text-center">
                Join our exclusive membership to receive the latest news and trends
            </h2>

            <p className="text-white mb-8 text-xl text-center">
                You can unsubscribe at any time.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-[70%] justify-center items-center gap-3">

                <input type="email" placeholder="Your Email" required aria-label="Your Email"
                    className=" ml-120 sm:w-3/5 p-3 text-black bg-white rounded-md border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150" />

                <button
                    type="submit"
                    className=" sm:w-auto p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-150 shadow-md"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default EmailSignUp;