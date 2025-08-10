// import React from "react";

// const Newsletter = () => {
//   return (
//     <section className="my-24 px-4 max-w-3xl mx-auto text-center">
//       <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] mb-4">
//         Stay Updated!
//       </h2>
//       <p className="mb-6 text-gray-600 dark:text-gray-300 text-sm md:text-base">
//         Subscribe to our newsletter to get the latest updates and offers.
//       </p>

//       <form className="flex flex-col sm:flex-row gap-4 justify-center">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded w-full sm:w-2/3 dark:bg-gray-800 dark:text-white"
//         />
//         <button
//           type="submit"
//           className="bg-[#DD6B20] hover:bg-[#c5530c] text-white px-6 py-2 rounded transition"
//         >
//           Subscribe
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Newsletter;

// import React from "react";
// import { FiMail } from "react-icons/fi";

// const Newsletter = () => {
//   return (
//     <section className="py-20 px-4">
//       <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#DD6B20]/10 to-[#ff9d4b]/10 dark:from-[#DD6B20]/5 dark:to-[#ff9d4b]/5 rounded-2xl p-8 md:p-12 shadow-lg">
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] rounded-full mb-4 text-white">
//             <FiMail className="text-2xl" />
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] mb-3">
//             Join Our Community
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
//             Subscribe to get exclusive offers, car rental tips, and updates delivered to your inbox.
//           </p>
//         </div>

//         <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//           <div className="relative flex-grow">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="w-full px-5 py-3 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#DD6B20] focus:border-transparent transition-all"
//               required
//             />
//             <FiMail className="absolute right-4 top-3.5 text-gray-400" />
//           </div>
//           <button
//             type="submit"
//             className="bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] hover:from-[#c5530c] hover:to-[#DD6B20] text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
//           >
//             Subscribe Now
//           </button>
//         </form>

//         <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
//           We respect your privacy. Unsubscribe at any time.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;

import React from "react";
import { FiMail } from "react-icons/fi";

const Newsletter = () => {
  return (
    <section className="my-24 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] mb-4 drop-shadow-md">
        Stay Updated!
      </h2>
      <p className="mb-8 text-gray-600 dark:text-gray-300 text-sm md:text-base">
        Subscribe to our newsletter to get the latest updates and offers.
      </p>

      <form className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="relative w-full sm:w-2/3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#DD6B20] focus:border-transparent transition-all pl-12"
          />
          <FiMail className="absolute left-4 top-3.5 text-gray-400 dark:text-gray-500" />
        </div>
        <button
          type="submit"
          className="bg-[#DD6B20] hover:bg-[#c5530c] text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-300 shadow hover:shadow-md whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;

