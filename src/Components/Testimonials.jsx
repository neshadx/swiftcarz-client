import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah M.",
    feedback: "SwiftCarz made my weekend getaway smooth and affordable.",
    location: "Dhaka, Bangladesh",
    avatar: "https://i.postimg.cc/j5pRmPD3/dino-headshot-round-150x150.png",
  },
  {
    name: "Rahul D.",
    feedback: "Loved the variety of cars and the support team was amazing!",
    location: "Khulna, Bangladesh",
    avatar: "https://i.postimg.cc/CMRN4DHT/Jim-Fahad-Digital-vic-headshot-round-150x150.png",
  },
  {
    name: "Fatima A.",
    feedback: "Best rental experience ever! Will definitely use SwiftCarz again.",
    location: "Chittagong, Bangladesh",
    avatar: "https://i.postimg.cc/rFFqbVsk/Jim-Fahad-Digital-ron-headshot-round-150x150.png",
  },
];

const Testimonials = () => {
  return (
    <section className="my-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <FaQuoteLeft className="text-[#DD6B20] text-xl mb-2" />
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{t.feedback}</p>
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-100">{t.name}</h4>
                <span className="text-xs text-gray-500 dark:text-gray-400">{t.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
