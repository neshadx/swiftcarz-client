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
    <section className="w-full px-4 md:px-12 pt-6 pb-14">
      <Swiper
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="rounded-xl shadow-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] rounded-xl overflow-hidden">
              <img
                src={slide.img}
                alt={slide.heading}
                className="w-full h-full object-cover brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>

              <div className="absolute inset-0 z-20 flex flex-col justify-center items-start md:items-center px-6 text-left md:text-center text-white space-y-4">
                <Fade direction="up" cascade duration={600} triggerOnce damping={0.2}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-2xl">
                    <Typewriter
                      words={[slide.heading]}
                      loop={false}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg max-w-2xl bg-white/20 dark:bg-black/30 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    {slide.text}
                  </p>
                  <Link to="/available">
                    <button className="mt-4 px-8 py-3 rounded-full font-bold bg-gradient-to-r from-[#DD6B20] to-[#f97316] text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
                      View Available Cars →
                    </button>
                  </Link>
                </Fade>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination styling (add to your CSS) */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5);
          width: 10px;
          height: 10px;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #DD6B20;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
