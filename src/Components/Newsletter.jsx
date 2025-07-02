import React from "react";

const Newsletter = () => {
  return (
    <section className="my-24 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] mb-4">
        Stay Updated!
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300 text-sm md:text-base">
        Subscribe to our newsletter to get the latest updates and offers.
      </p>

      <form className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded w-full sm:w-2/3 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="bg-[#DD6B20] hover:bg-[#c5530c] text-white px-6 py-2 rounded transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
