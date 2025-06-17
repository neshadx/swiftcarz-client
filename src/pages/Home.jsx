// import { Helmet } from "react-helmet-async";
// import HeroSection from "../Components/HeroSection";
// import RecentListings from "../Components/RecentListings";
// import WhyChooseUs from "../Components/WhyChooseUs";
// // import Testimonials from "../Components/Testimonials";

// const Home = () => {
//   return (
//     <>
//       <Helmet>
//         <title>SwiftCarz | Home</title>
//         <meta
//           name="description"
//           content="Discover and book the perfect rental car for your journey. Browse latest deals, cars and offers."
//         />
//       </Helmet>

//       {/* Hero Slider with 3+ Slides */}
//       <HeroSection />

//       {/* Featured Listings (latest cars) */}
//       <RecentListings />

//       {/* Static Sections */}
//       <WhyChooseUs />
//       {/* <Testimonials /> */}
//     </>
//   );
// };

// export default Home;


import { Helmet } from "react-helmet-async";
import HeroSection from "../Components/HeroSection";
import RecentListings from "../Components/RecentListings";
import WhyChooseUs from "../Components/WhyChooseUs";
import SpecialOffers from "../Components/SpecialOffers";
// import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SwiftCarz | Home</title>
        <meta
          name="description"
          content="Discover and book the perfect rental car for your journey. Browse latest deals, cars and offers."
        />
      </Helmet>

      {/* 🏁 Hero Slider with 3+ Slides */}
      <HeroSection />

      {/* 🚗 Recent Listings (latest cars) */}
      <RecentListings />

      {/* 🌟 Why Choose SwiftCarz */}
      <WhyChooseUs />

      {/* 🎯 Special Offers Section */}
      <SpecialOffers />

      {/* 🗣️ Testimonials (optional if implemented) */}
      {/* <Testimonials /> */}
    </>
  );
};

export default Home;

