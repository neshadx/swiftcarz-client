// import React from "react";

// const Categories = () => {
//   const brands = [
//     {
//       name: "Toyota",
//       image: "https://i.postimg.cc/BvRpKnLf/kevin-bonilla-YPfnv-Lc3bb-Q-unsplash.jpg",
//     },
//     {
//       name: "BMW",
//       image: "https://i.postimg.cc/qRgwtCML/stephan-louis-m-N8-H-fe040-Y-unsplash.jpg",
//     },
//     {
//       name: "Tesla",
//       image: "https://i.postimg.cc/QtbDMwC5/tesla-fans-schweiz-2swa-Wy4-Xhb0-unsplash.jpg",
//     },
//     {
//       name: "Audi",
//       image: "https://i.postimg.cc/Jngft8ms/raphael-schaller-4ey-BH8j0-p0-unsplash.jpg",
//     },
//   ];

//   return (
//     <section className="my-24 px-4 max-w-7xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] text-center mb-12">
//         Browse by Brands
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {brands.map((brand) => (
//           <div
//             key={brand.name}
//             className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//           >
//             <img
//               src={brand.image}
//               alt={brand.name}
//               className="w-full h-40 object-cover"
//             />
//             <div className="text-center py-3 font-semibold text-gray-800 dark:text-gray-200">
//               {brand.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Categories;


import React from "react";
import { Fade } from "react-awesome-reveal";

const Categories = () => {
  const brands = [
    {
      name: "Toyota",
      image: "https://i.postimg.cc/BvRpKnLf/kevin-bonilla-YPfnv-Lc3bb-Q-unsplash.jpg",
      models: "24 Models",
    },
    {
      name: "BMW",
      image: "https://i.postimg.cc/qRgwtCML/stephan-louis-m-N8-H-fe040-Y-unsplash.jpg",
      models: "18 Models",
    },
    {
      name: "Tesla",
      image: "https://i.postimg.cc/QtbDMwC5/tesla-fans-schweiz-2swa-Wy4-Xhb0-unsplash.jpg",
      models: "12 Models",
    },
    {
      name: "Audi",
      image: "https://i.postimg.cc/Jngft8ms/raphael-schaller-4ey-BH8j0-p0-unsplash.jpg",
      models: "22 Models",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] mb-4">
          Premium Brands
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our curated collection of top automotive brands
        </p>
      </div>

      <Fade cascade damping={0.1} triggerOnce>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
              
              {/* Brand info */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {brand.models}
                </p>
              </div>

              {/* Hover effect indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Categories;

