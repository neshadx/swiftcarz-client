// import React from "react";
// import { FaQuoteLeft } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Sarah M.",
//     feedback: "SwiftCarz made my weekend getaway smooth and affordable.",
//     location: "Dhaka, Bangladesh",
//     avatar: "https://i.postimg.cc/j5pRmPD3/dino-headshot-round-150x150.png",
//   },
//   {
//     name: "Rahul D.",
//     feedback: "Loved the variety of cars and the support team was amazing!",
//     location: "Khulna, Bangladesh",
//     avatar: "https://i.postimg.cc/CMRN4DHT/Jim-Fahad-Digital-vic-headshot-round-150x150.png",
//   },
//   {
//     name: "Fatima A.",
//     feedback: "Best rental experience ever! Will definitely use SwiftCarz again.",
//     location: "Chittagong, Bangladesh",
//     avatar: "https://i.postimg.cc/rFFqbVsk/Jim-Fahad-Digital-ron-headshot-round-150x150.png",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="my-24 px-4 max-w-6xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] text-center mb-12">
//         What Our Customers Say
//       </h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {testimonials.map((t, i) => (
//           <div
//             key={i}
//             className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
//           >
//             <FaQuoteLeft className="text-[#DD6B20] text-xl mb-2" />
//             <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{t.feedback}</p>
//             <div className="flex items-center gap-3">
//               <img
//                 src={t.avatar}
//                 alt={t.name}
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-100">{t.name}</h4>
//                 <span className="text-xs text-gray-500 dark:text-gray-400">{t.location}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const testimonials = [
  {
    name: "Sarah M.",
    feedback: "SwiftCarz made my weekend getaway smooth and affordable. The booking process was seamless and the car was in perfect condition.",
    location: "Dhaka, Bangladesh",
    avatar: "https://i.postimg.cc/j5pRmPD3/dino-headshot-round-150x150.png",
    rating: 5,
  },
  {
    name: "Rahul D.",
    feedback: "Loved the variety of cars and the support team was amazing! They helped me choose the perfect vehicle for my family trip.",
    location: "Khulna, Bangladesh",
    avatar: "https://i.postimg.cc/CMRN4DHT/Jim-Fahad-Digital-vic-headshot-round-150x150.png",
    rating: 4,
  },
  {
    name: "Fatima A.",
    feedback: "Best rental experience ever! Will definitely use SwiftCarz again. The luxury car I rented exceeded all my expectations.",
    location: "Chittagong, Bangladesh",
    avatar: "https://i.postimg.cc/rFFqbVsk/Jim-Fahad-Digital-ron-headshot-round-150x150.png",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] mb-4">
          Customer Experiences
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Hear what our valued customers say about their SwiftCarz journey
        </p>
      </div>

      <Fade cascade damping={0.1} triggerOnce>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote icon with gradient background */}
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] flex items-center justify-center text-white">
                <FaQuoteLeft className="text-lg" />
              </div>

              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${star < t.rating ? 'text-[#DD6B20]' : 'text-gray-300 dark:text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t.feedback}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#DD6B20]"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">{t.name}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Testimonials;
