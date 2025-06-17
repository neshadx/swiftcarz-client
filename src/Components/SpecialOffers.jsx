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


import React from "react";
import { Fade } from "react-awesome-reveal";

const SpecialOffers = () => {
  const offers = [
    {
      title: "15% Off Weekend Rentals",
      desc: "Enjoy smooth weekend rides — discounted rates from Friday to Sunday!",
      tag: "🔥 Hot Deal",
    },
    {
      title: "Luxury Cars at $99/day",
      desc: "Cruise in style with our premium collection — now more affordable.",
      tag: "💎 Premium Deal",
    },
    {
      title: "Book 3 Days, Get 1 Free",
      desc: "Ideal for getaways — book for 3 days and pay for only 2.",
      tag: "🎁 Limited Time",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] drop-shadow">
            Special Offers
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Take advantage of our seasonal deals — more value, more adventure.
          </p>
        </div>

        <Fade cascade damping={0.15} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span className="inline-block text-xs font-semibold bg-[#DD6B20] text-white px-3 py-1 rounded-full mb-2">
                  {offer.tag}
                </span>
                <h3 className="text-lg font-bold text-[#DD6B20] dark:text-white">
                  {offer.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  {offer.desc}
                </p>
                <button className="mt-4 inline-block bg-[#DD6B20] hover:bg-[#c5530c] text-white px-4 py-2 rounded text-sm transition-all duration-200">
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


