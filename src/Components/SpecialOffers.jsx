// import React from "react";
// import { Fade } from "react-awesome-reveal";

// const SpecialOffers = () => {
//   const offers = [
//     {
//       title: "15% Off Weekend Rentals",
//       desc: "Enjoy your weekends with a smooth ride — discounted rates Friday to Sunday!",
//       tag: "🔥 Hot Deal",
//     },
//     {
//       title: "Luxury Cars at $99/day",
//       desc: "Cruise in style this season. Premium cars at unbeatable prices.",
//       tag: "💎 Premium Deal",
//     },
//     {
//       title: "Get 1 Day Free (3-Day Bookings)",
//       desc: "Book for 3 days, pay for 2. Ideal for short trips and getaways.",
//       tag: "🎁 Limited Time",
//     },
//   ];

//   return (
//     <section className="bg-orange-50 dark:bg-gray-800 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-[#DD6B20] dark:text-white">
//             Special Offers
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto">
//             Take advantage of our limited-time deals and get more value from your rides.
//           </p>
//         </div>

//         <Fade cascade damping={0.2}>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {offers.map((offer, i) => (
//               <div
//                 key={i}
//                 className="rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow hover:shadow-md transition transform hover:-translate-y-1"
//               >
//                 <span className="inline-block text-xs font-semibold bg-[#DD6B20] text-white px-3 py-1 rounded-full mb-2">
//                   {offer.tag}
//                 </span>
//                 <h3 className="text-lg font-bold text-[#DD6B20] dark:text-white">
//                   {offer.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
//                   {offer.desc}
//                 </p>
//                 <button className="mt-4 inline-block bg-[#DD6B20] hover:bg-[#c5530c] text-white px-4 py-2 rounded text-sm">
//                   Book Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </Fade>
//       </div>
//     </section>
//   );
// };

// export default SpecialOffers;


// import React from "react";
// import { Fade } from "react-awesome-reveal";

// const SpecialOffers = () => {
//   const offers = [
//     {
//       title: "15% Off Weekend Rentals",
//       desc: "Enjoy smooth weekend rides — discounted rates from Friday to Sunday!",
//       tag: "🔥 Hot Deal",
//     },
//     {
//       title: "Luxury Cars at $99/day",
//       desc: "Cruise in style with our premium collection — now more affordable.",
//       tag: "💎 Premium Deal",
//     },
//     {
//       title: "Book 3 Days, Get 1 Free",
//       desc: "Ideal for getaways — book for 3 days and pay for only 2.",
//       tag: "🎁 Limited Time",
//     },
//   ];

//   return (
//     <section className="py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] drop-shadow">
//             Special Offers
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto text-sm sm:text-base">
//             Take advantage of our seasonal deals — more value, more adventure.
//           </p>
//         </div>

//         <Fade cascade damping={0.15} triggerOnce>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {offers.map((offer, i) => (
//               <div
//                 key={i}
//                 className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//               >
//                 <span className="inline-block text-xs font-semibold bg-[#DD6B20] text-white px-3 py-1 rounded-full mb-2">
//                   {offer.tag}
//                 </span>
//                 <h3 className="text-lg font-bold text-[#DD6B20] dark:text-white">
//                   {offer.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
//                   {offer.desc}
//                 </p>
//                 <button className="mt-4 inline-block bg-[#DD6B20] hover:bg-[#c5530c] text-white px-4 py-2 rounded text-sm transition-all duration-200">
//                   Book Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </Fade>
//       </div>
//     </section>
//   );
// };

// export default SpecialOffers;




import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiZap, FiAward, FiClock } from "react-icons/fi";

const SpecialOffers = () => {
  const offers = [
    {
      title: "15% Off Weekend Rentals",
      desc: "Enjoy smooth weekend rides — discounted rates from Friday to Sunday!",
      tag: "Hot Deal",
      icon: <FiZap className="inline mr-1" />,
    },
    {
      title: "Luxury Cars at $99/day",
      desc: "Cruise in style with our premium collection — now more affordable.",
      tag: "Premium Deal",
      icon: <FiAward className="inline mr-1" />,
    },
    {
      title: "Book 3 Days, Get 1 Free",
      desc: "Ideal for getaways — book for 3 days and pay for only 2.",
      tag: "Limited Time",
      icon: <FiClock className="inline mr-1" />,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] drop-shadow-md">
            Special Offers
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Take advantage of our seasonal deals — more value, more adventure.
          </p>
        </div>

        <Fade cascade damping={0.15} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group overflow-hidden"
              >
                {/* Gradient accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b]"></div>
                
                <span className="inline-flex items-center text-xs font-semibold bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] text-white px-3 py-1 rounded-full mb-3">
                  {offer.icon} {offer.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {offer.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  {offer.desc}
                </p>
                <button className="w-full bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] hover:from-[#c5530c] hover:to-[#DD6B20] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow hover:shadow-md">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default SpecialOffers;