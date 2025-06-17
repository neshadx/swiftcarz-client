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
//       .get(`${import.meta.env.VITE_API_URL}/api/cars`)
//       .then((res) => {
//         const allCars = res.data || [];

//         // ✅ Sort safely by createdAt (or fallback to _id)
//         const sortedCars = allCars
//           .sort((a, b) => {
//             const aDate = new Date(a.createdAt || a._id?.toString().substring(0, 8) * 1000);
//             const bDate = new Date(b.createdAt || b._id?.toString().substring(0, 8) * 1000);
//             return bDate - aDate;
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
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] drop-shadow-sm">
//           Recent Listings
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm sm:text-base max-w-xl mx-auto">
//           Find the newest cars just added to our rental fleet.
//         </p>
//       </div>

//       {loading ? (
//         <Loading />
//       ) : cars.length === 0 ? (
//         <p className="text-center text-gray-500 dark:text-gray-400">
//           No recent listings available right now.
//         </p>
//       ) : (
//         <Fade cascade damping={0.1}>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {cars.map((car) => (
//               <div
//                 key={car._id}
//                 className="rounded-xl overflow-hidden shadow bg-white dark:bg-gray-900 border dark:border-gray-800 hover:shadow-md transition"
//               >
//                 <img
//                   src={car.imageUrl || "https://i.ibb.co/5r5C1fJ/user.png"}
//                   alt={car.model || "Unknown Model"}
//                   className="h-40 w-full object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold truncate text-[#DD6B20] dark:text-white">
//                     {car.model || "Unnamed Car"}
//                   </h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-300">
//                     ${car.dailyPrice || "N/A"} / day
//                   </p>
//                   <p className="text-sm text-gray-600 dark:text-gray-300">
//                     Location: {car.location || "Not specified"}
//                   </p>
//                   <button
//                     onClick={() => navigate(`/car/${car._id}`)}
//                     className="mt-3 bg-[#DD6B20] hover:bg-[#c5530c] text-white px-4 py-2 rounded text-sm transition cursor-pointer"
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
          .filter((car) => car)
          .sort((a, b) => {
            const dateA = new Date(
              a.createdAt || parseInt(a._id?.toString().substring(0, 8), 16) * 1000
            );
            const dateB = new Date(
              b.createdAt || parseInt(b._id?.toString().substring(0, 8), 16) * 1000
            );
            return dateB - dateA;
          })
          .slice(0, 6);

        setCars(sortedCars);
      })
      .catch((err) => {
        console.error("❌ Error loading recent listings:", err.message);
        setCars([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] drop-shadow-sm">
          Recent Listings
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm sm:text-base max-w-xl mx-auto">
          Find the newest cars just added to our rental fleet.
        </p>
      </div>

      {/* Loading / Empty / Listings */}
      {loading ? (
        <Loading />
      ) : cars.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No recent listings available right now.
        </p>
      ) : (
        <Fade cascade damping={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div
                key={car._id}
                className="rounded-xl overflow-hidden shadow bg-white dark:bg-gray-900 border dark:border-gray-800 hover:shadow-md transition"
              >
                <img
                  src={
                    car.imageUrl ||
                    "https://via.placeholder.com/400x200?text=No+Image"
                  }
                  alt={car.model || "Unknown"}
                  className="h-44 w-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/400x200?text=Image+Not+Found")
                  }
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-[#DD6B20] dark:text-white truncate">
                    {car.model || "Unnamed Car"}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Price: ${car.dailyPrice || "N/A"} / day
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Location: {car.location || "Unknown"}
                  </p>
                  <button
                    onClick={() => navigate(`/car/${car._id}`)}
                    className="w-full mt-3 bg-[#DD6B20] hover:bg-[#c5530c] text-white py-2 rounded text-sm transition"
                  >
                    See Details
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
