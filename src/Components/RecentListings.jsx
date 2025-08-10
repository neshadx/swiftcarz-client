
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Loading from "./Loading";
// import { Fade } from "react-awesome-reveal";

// const RecentListings = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_API_URL}/api/cars`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         const allCars = res.data || [];

//         const sortedCars = allCars
//           .filter((car) => car)
//           .sort((a, b) => {
//             const dateA = new Date(
//               a.createdAt || parseInt(a._id?.toString().substring(0, 8), 16) * 1000
//             );
//             const dateB = new Date(
//               b.createdAt || parseInt(b._id?.toString().substring(0, 8), 16) * 1000
//             );
//             return dateB - dateA;
//           })
//           .slice(0, 6);

//         setCars(sortedCars);
//       })
//       .catch((err) => {
//         console.error("❌ Error loading recent listings:", err.message);
//         setCars([]);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-14">
//       {/* Title */}
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] drop-shadow-sm">
//           Recent Listings
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm sm:text-base max-w-xl mx-auto">
//           Find the newest cars just added to our rental fleet.
//         </p>
//       </div>

//       {/* Loading / Empty / Listings */}
//       {loading ? (
//         <Loading />
//       ) : cars.length === 0 ? (
//         <p className="text-center text-gray-500 dark:text-gray-400">
//           No recent listings available right now.
//         </p>
//       ) : (
//         <Fade cascade damping={0.1}>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {cars.map((car) => (
//               <div
//                 key={car._id}
//                 className="rounded-xl overflow-hidden shadow bg-white dark:bg-gray-900 border dark:border-gray-800 hover:shadow-md transition"
//               >
//                 <img
//                   src={
//                     car.imageUrl ||
//                     "https://via.placeholder.com/400x200?text=No+Image"
//                   }
//                   alt={car.model || "Unknown"}
//                   className="h-44 w-full object-cover"
//                   onError={(e) =>
//                     (e.target.src =
//                       "https://via.placeholder.com/400x200?text=Image+Not+Found")
//                   }
//                 />
//                 <div className="p-4 space-y-2">
//                   <h3 className="text-lg font-bold text-[#DD6B20] dark:text-white truncate">
//                     {car.model || "Unnamed Car"}
//                   </h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-300">
//                     Price: ${car.dailyPrice || "N/A"} / day
//                   </p>
//                   <p className="text-sm text-gray-600 dark:text-gray-300">
//                     Location: {car.location || "Unknown"}
//                   </p>
//                   <button
//                     onClick={() => navigate(`/car/${car._id}`)}
//                     className="w-full mt-3 bg-[#DD6B20] hover:bg-[#c5530c] text-white py-2 rounded text-sm transition"
//                   >
//                     See Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Fade>
//       )}
//     </div>
//   );
// };

// export default RecentListings;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Loading from "./Loading";
// import { Fade } from "react-awesome-reveal";

// const RecentListings = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_API_URL}/api/cars`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         const allCars = res.data || [];

//         const sortedCars = allCars
//           .sort((a, b) => {
//             const dateA = new Date(
//               a.createdAt || parseInt(a._id?.toString().substring(0, 8), 16) * 1000
//             );
//             const dateB = new Date(
//               b.createdAt || parseInt(b._id?.toString().substring(0, 8), 16) * 1000
//             );
//             return dateB - dateA;
//           })
//           .slice(0, 8); //  Always take latest 8 cars

//         setCars(sortedCars);
//       })
//       .catch((err) => {
//         console.error(" Error loading recent listings:", err.message);
//         setCars([]);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-14">
//       {/* Section Title */}
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] drop-shadow-sm">
//           Recent Listings
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm sm:text-base max-w-xl mx-auto">
//           Find the newest cars just added to our rental fleet.
//         </p>
//       </div>

//       {/* Listings Grid */}
//       {loading ? (
//         <Loading />
//       ) : cars.length === 0 ? (
//         <p className="text-center text-gray-500 dark:text-gray-400">
//           No recent listings available right now.
//         </p>
//       ) : (
//         <Fade cascade damping={0.1}>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {cars.map((car) => (
//               <div
//                 key={car._id}
//                 className="rounded-xl overflow-hidden shadow bg-white dark:bg-gray-900 border dark:border-gray-800 hover:shadow-md transition"
//               >
//                 <img
//                   src={
//                     car.imageUrl ||
//                     "https://via.placeholder.com/400x200?text=No+Image"
//                   }
//                   alt={car.model || "Unknown"}
//                   className="w-full h-48 object-cover rounded-t-xl"
//                   onError={(e) =>
//                     (e.target.src =
//                       "https://via.placeholder.com/400x200?text=Image+Not+Found")
//                   }
//                 />
//                 <div className="p-4 space-y-2">
//                   <h3 className="text-lg font-bold text-[#DD6B20] dark:text-white truncate">
//                     {car.model || "Unnamed Car"}
//                   </h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-300">
//                     Price: ${car.dailyPrice || "N/A"} / day
//                   </p>
//                   <p className="text-sm text-gray-600 dark:text-gray-300">
//                     Location: {car.location || "Unknown"}
//                   </p>
//                   <button
//                     onClick={() => navigate(`/car/${car._id}`)}
//                     className="w-full mt-3 bg-[#DD6B20] hover:bg-[#c5530c] text-white py-2 rounded text-sm transition"
//                   >
//                     See Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Fade>
//       )}
//     </div>
//   );
// };

// export default RecentListings;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import { Fade } from "react-awesome-reveal";

const RecentListings = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/cars`, {
        withCredentials: true,
      })
      .then((res) => {
        const allCars = res.data || [];

        const sortedCars = allCars
          .sort((a, b) => {
            const dateA = new Date(
              a.createdAt || parseInt(a._id?.toString().substring(0, 8), 16) * 1000
            );
            const dateB = new Date(
              b.createdAt || parseInt(b._id?.toString().substring(0, 8), 16) * 1000
            );
            return dateB - dateA;
          })
          .slice(0, 8);

        setCars(sortedCars);
      })
      .catch((err) => {
        console.error("Error loading recent listings:", err.message);
        setCars([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      {/* Section Title - Enhanced */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#f97316] drop-shadow-md">
          Fresh Additions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm sm:text-base max-w-xl mx-auto">
          Explore the latest premium vehicles added to our collection
        </p>
      </div>

      {/* Listings Grid - Polished */}
      {loading ? (
        <Loading />
      ) : cars.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl max-w-md mx-auto">
            No recent listings available. Check back soon!
          </p>
        </div>
      ) : (
        <Fade cascade damping={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car) => (
              <div
                key={car._id}
                className="group rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image with improved fallback */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={
                      car.imageUrl ||
                      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    }
                    alt={car.model || "Vehicle"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";
                      e.target.className += " opacity-90";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Card Content - Refined */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white truncate">
                      {car.model || "Premium Vehicle"}
                    </h3>
                    <p className="text-[#DD6B20] font-medium">
                      ${car.dailyPrice?.toLocaleString() || "N/A"}
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">/day</span>
                    </p>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {car.location || "Location not specified"}
                  </div>

                  <button
                    onClick={() => navigate(`/car/${car._id}`)}
                    className="w-full mt-4 bg-gradient-to-r from-[#DD6B20] to-[#f97316] hover:from-[#c5530c] hover:to-[#DD6B20] text-white py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow hover:shadow-md active:scale-95"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      )}
    </div>
  );
};

export default RecentListings;
