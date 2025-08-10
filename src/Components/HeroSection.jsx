// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Typewriter } from "react-simple-typewriter";
// import { Fade } from "react-awesome-reveal";
// import { Link } from "react-router-dom"; // ✅ Corrected for Vite/React

// const slides = [
//   {
//     img: "https://i.postimg.cc/DzhTj8J9/car1.jpg",
//     heading: "Drive in Style",
//     text: "Luxury and economy cars available 24/7 for your comfort and adventure.",
//   },
//   {
//     img: "https://i.postimg.cc/htnSzVtz/car2.jpg",
//     heading: "Wherever You Go",
//     text: "Reliable rides for business trips, family tours, or weekend escapes.",
//   },
//   {
//     img: "https://i.postimg.cc/zvC1X9Wc/car3.jpg",
//     heading: "Swift. Smart. Secure.",
//     text: "Book cars instantly with SwiftCarz – smooth experience, every time.",
//   },
// ];

// const HeroSection = () => {
//   return (
//     <section className="w-full px-4 md:px-12 pt-6 pb-14">
//       <Swiper
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="rounded-xl shadow-xl"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] rounded-xl overflow-hidden">
//               <img
//                 src={slide.img}
//                 alt={slide.heading}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-10"></div>

//               <div className="absolute inset-0 z-20 flex flex-col justify-center items-start md:items-center px-6 text-left md:text-center text-white space-y-4">
//                 <Fade direction="up" cascade duration={600} triggerOnce>
//                   <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow">
//                     <Typewriter
//                       words={[slide.heading]}
//                       loop={false}
//                       cursor
//                       cursorStyle="|"
//                       typeSpeed={60}
//                       deleteSpeed={40}
//                       delaySpeed={1000}
//                     />
//                   </h1>
//                   <p className="text-sm sm:text-base md:text-lg max-w-2xl backdrop-blur-sm bg-white/10 p-3 rounded-md">
//                     {slide.text}
//                   </p>
//                   <Link to="/allcars">
//                     <button className="mt-2 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-amber-400 to-yellow-300 text-black hover:scale-105 transition transform duration-300 shadow-md">
//                       Explore Cars
//                     </button>
//                   </Link>
//                 </Fade>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default HeroSection;




// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Typewriter } from "react-simple-typewriter";
// import { Fade } from "react-awesome-reveal";
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     img: "https://i.postimg.cc/DzhTj8J9/car1.jpg",
//     heading: "Drive Your Dreams Today!",
//     text: "Choose from our fleet of premium cars and make your journey memorable.",
//   },
//   {
//     img: "https://i.postimg.cc/htnSzVtz/car2.jpg",
//     heading: "Your Next Car Awaits You.",
//     text: "Luxury, comfort, and reliability—available at your fingertips.",
//   },
//   {
//     img: "https://i.postimg.cc/zvC1X9Wc/car3.jpg",
//     heading: "Experience Swift Driving.",
//     text: "Book anytime, drive anywhere — SwiftCarz has your back.",
//   },
// ];

// const HeroSection = () => {
//   return (
//     <section className="w-full px-4 md:px-12 pt-6 pb-14">
//       <Swiper
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="rounded-xl shadow-xl"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] rounded-xl overflow-hidden">
//               <img
//                 src={slide.img}
//                 alt={slide.heading}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-10"></div>

//               <div className="absolute inset-0 z-20 flex flex-col justify-center items-start md:items-center px-6 text-left md:text-center text-white space-y-4">
//                 <Fade direction="up" cascade duration={600} triggerOnce>
//                   <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow">
//                     <Typewriter
//                       words={[slide.heading]}
//                       loop={false}
//                       cursor
//                       cursorStyle="|"
//                       typeSpeed={60}
//                       deleteSpeed={40}
//                       delaySpeed={1000}
//                     />
//                   </h1>
//                   <p className="text-sm sm:text-base md:text-lg max-w-2xl backdrop-blur-sm bg-white/10 p-3 rounded-md">
//                     {slide.text}
//                   </p>
//                   <Link to="/allcars">
//                     <button className="mt-2 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-orange-400 to-yellow-300 text-black hover:scale-105 transition transform duration-300 shadow-md">
//                       View Available Cars
//                     </button>
//                   </Link>
//                 </Fade>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default HeroSection;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Typewriter } from "react-simple-typewriter";
// import { Fade } from "react-awesome-reveal";
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     img: "https://i.postimg.cc/zfmncDG6/adrian-newell-7v-Iq-Lit-Lb-T0-unsplash.jpg",
//     heading: "Drive Your Dreams Today!",
//     text: "Choose from our fleet of premium cars and make your journey memorable.",
//   },
//   {
//     img: "https://i.postimg.cc/7YhB0Lcy/anastase-maragos-UZOUVADKq2g-unsplash.jpg",
//     heading: "Your Next Car Awaits You.",
//     text: "Luxury, comfort, and reliability—available at your fingertips.",
//   },
//   {
//     img: "https://i.postimg.cc/156KpYPy/alan-king-1-R63ta-Co-Sn-M-unsplash.jpg",
//     heading: "Experience Swift Driving.",
//     text: "Book anytime, drive anywhere — SwiftCarz has your back.",
//   },
// ];

// const HeroSection = () => {
//   return (
//     <section className="w-full px-4 md:px-12 pt-6 pb-14">
//       <Swiper
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="rounded-xl shadow-xl"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] rounded-xl overflow-hidden">
//               <img
//                 src={slide.img}
//                 alt={slide.heading}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10 z-10"></div>

//               <div className="absolute inset-0 z-20 flex flex-col justify-center items-start md:items-center px-6 text-left md:text-center text-white space-y-4">
//                 <Fade direction="up" cascade duration={600} triggerOnce>
//                   <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-xl">
//                     <Typewriter
//                       words={[slide.heading]}
//                       loop={false}
//                       cursor
//                       cursorStyle="|"
//                       typeSpeed={60}
//                       deleteSpeed={40}
//                       delaySpeed={1000}
//                     />
//                   </h1>
//                   <p className="text-sm sm:text-base md:text-lg max-w-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md p-3 rounded-md shadow">
//                     {slide.text}
//                   </p>
//                   <Link to="/available">
//                     <button className="mt-2 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] text-white hover:scale-105 transition-transform duration-300 shadow-md">
//                       View Available Cars
//                     </button>
//                   </Link>
//                 </Fade>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const PRIMARY   = "#065F46";   // emerald-800
const SECONDARY = "#10B981";   // emerald-500
const BTN_HOVER = "#059669";   // emerald-600

const slides = [
  {
    img: "https://i.postimg.cc/zfmncDG6/adrian-newell-7v-Iq-Lit-Lb-T0-unsplash.jpg",
    heading: "Drive Your Dreams Today!",
    text: "Choose from our fleet of premium cars and make your journey memorable.",
  },
  {
    img: "https://i.postimg.cc/7YhB0Lcy/anastase-maragos-UZOUVADKq2g-unsplash.jpg",
    heading: "Your Next Car Awaits You.",
    text: "Luxury, comfort, and reliability—available at your fingertips.",
  },
  {
    img: "https://i.postimg.cc/156KpYPy/alan-king-1-R63ta-Co-Sn-M-unsplash.jpg",
    heading: "Experience Swift Driving.",
    text: "Book anytime, drive anywhere — SwiftCarz has your back.",
  },
];

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          style={{ ["--swiper-theme-color"]: SECONDARY }}
          className="rounded-3xl shadow-2xl"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              {/* ✅ Smaller, cinematic banner */}
              <div className="
                relative overflow-hidden rounded-3xl
                h-[220px] sm:h-[280px]
                md:h-auto md:aspect-[16/7]
                lg:aspect-[21/9] lg:max-h-[520px]
              ">
                <img
                  src={slide.img}
                  alt={slide.heading}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* vignette + angle gradient for text legibility */}
                <div className="absolute inset-0 z-10">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                  <Fade direction="up" cascade duration={600} triggerOnce>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-xl">
                      <Typewriter
                        words={[slide.heading]}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={1000}
                      />
                    </h1>

                    <p className="mt-3 text-xs sm:text-sm md:text-base text-white/90 max-w-2xl bg-black/20 backdrop-blur-md px-4 py-2 rounded-lg">
                      {slide.text}
                    </p>

                    <Link to="/available" className="mt-4">
                      <button
                        className="px-6 py-2 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
                        style={{ backgroundColor: SECONDARY }}
                        onMouseEnter={(e)=> e.currentTarget.style.backgroundColor = BTN_HOVER}
                        onMouseLeave={(e)=> e.currentTarget.style.backgroundColor = SECONDARY}
                      >
                        View Available Cars
                      </button>
                    </Link>
                  </Fade>
                </div>

                {/* subtle inner border to tie with brand */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{ boxShadow: `inset 0 0 0 1px ${PRIMARY}22` }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;

