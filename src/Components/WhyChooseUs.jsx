// import React from "react";
// import { Fade } from "react-awesome-reveal";
// import {
//   FaCarSide,
//   FaDollarSign,
//   FaClock,
//   FaHeadset
// } from "react-icons/fa";

// const WhyChooseUs = () => {
//   const reasons = [
//     {
//       icon: <FaCarSide />,
//       title: "Wide Range of Cars",
//       description: "Choose from economy to luxury — SUVs, sedans, convertibles and more."
//     },
//     {
//       icon: <FaDollarSign />,
//       title: "Affordable Prices",
//       description: "Transparent pricing with no hidden fees. Pay only for what you drive."
//     },
//     {
//       icon: <FaClock />,
//       title: "Fast & Easy Booking",
//       description: "Book a car in minutes with real-time availability and instant confirmation."
//     },
//     {
//       icon: <FaHeadset />,
//       title: "24/7 Customer Support",
//       description: "Our team is always ready to help with any issues or inquiries you may have."
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-14">
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] drop-shadow-sm">
//           Why Choose SwiftCarz?
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm sm:text-base max-w-xl mx-auto">
//           Discover why thousands trust SwiftCarz for reliable, stylish, and affordable car rentals.
//         </p>
//       </div>

//       <Fade cascade damping={0.1}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {reasons.map((item, index) => (
//             <div
//               key={index}
//               className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 border dark:border-gray-800 hover:shadow-md transition"
//             >
//               <div className="p-6 text-center">
//                 <div className="text-4xl text-[#DD6B20] mb-4">{item.icon}</div>
//                 <h3 className="text-lg font-bold text-[#DD6B20] dark:text-white">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Fade>
//     </div>
//   );
// };

// export default WhyChooseUs;



import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaCarSide,
  FaDollarSign,
  FaClock,
  FaHeadset
} from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaCarSide />,
      title: "Wide Range of Cars",
      description: "Choose from economy to luxury — SUVs, sedans, convertibles and more."
    },
    {
      icon: <FaDollarSign />,
      title: "Affordable Prices",
      description: "Transparent pricing with no hidden fees. Pay only for what you drive."
    },
    {
      icon: <FaClock />,
      title: "Fast & Easy Booking",
      description: "Book a car in minutes with real-time availability and instant confirmation."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      description: "Our team is always ready to help with any issues or inquiries you may have."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] drop-shadow-sm">
          Why Choose SwiftCarz?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm sm:text-base max-w-xl mx-auto">
          Discover why thousands trust SwiftCarz for reliable, stylish, and affordable car rentals.
        </p>
      </div>

      {/* Animation Wrapper */}
      <Fade cascade damping={0.15} direction="up" triggerOnce>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 border dark:border-gray-800 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6 text-center">
                <div className="text-4xl text-[#DD6B20] mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#DD6B20] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default WhyChooseUs;

