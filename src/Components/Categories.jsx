import React from "react";

const Categories = () => {
  const brands = [
    {
      name: "Toyota",
      image: "https://i.postimg.cc/BvRpKnLf/kevin-bonilla-YPfnv-Lc3bb-Q-unsplash.jpg",
    },
    {
      name: "BMW",
      image: "https://i.postimg.cc/qRgwtCML/stephan-louis-m-N8-H-fe040-Y-unsplash.jpg",
    },
    {
      name: "Tesla",
      image: "https://i.postimg.cc/QtbDMwC5/tesla-fans-schweiz-2swa-Wy4-Xhb0-unsplash.jpg",
    },
    {
      name: "Audi",
      image: "https://i.postimg.cc/Jngft8ms/raphael-schaller-4ey-BH8j0-p0-unsplash.jpg",
    },
  ];

  return (
    <section className="my-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] text-center mb-12">
        Browse by Brands
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-40 object-cover"
            />
            <div className="text-center py-3 font-semibold text-gray-800 dark:text-gray-200">
              {brand.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

