// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const AvailableCars = () => {
//   const [cars, setCars] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sortBy, setSortBy] = useState("newest");
//   const [view, setView] = useState("grid");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/api/cars`)
//       .then((res) => res.json())
//       .then((data) => setCars(data || []))
//       .catch((err) => console.error("❌ Error fetching cars:", err));
//   }, []);

//   const filteredCars = cars
//     .filter((car) => {
//       const text = search.toLowerCase();
//       return (
//         car.model?.toLowerCase().includes(text) ||
//         car.location?.toLowerCase().includes(text)
//       );
//     })
//     .sort((a, b) => {
//       if (sortBy === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
//       if (sortBy === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
//       if (sortBy === "priceLow") return a.dailyPrice - b.dailyPrice;
//       if (sortBy === "priceHigh") return b.dailyPrice - a.dailyPrice;
//       return 0;
//     });

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 min-h-[80vh]">
//       <Helmet>
//         <title>Available Cars | SwiftCarz</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white mb-8">
//         Available Cars for Booking
//       </h2>

//       {/* Filter Controls */}
//       <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by model or location..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="input input-bordered w-full max-w-xs dark:bg-gray-800 dark:text-white"
//         />
//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="input input-bordered dark:bg-gray-800 dark:text-white"
//         >
//           <option value="newest">Date Added: Newest First</option>
//           <option value="oldest">Date Added: Oldest First</option>
//           <option value="priceLow">Price: Lowest First</option>
//           <option value="priceHigh">Price: Highest First</option>
//         </select>
//         <div className="flex items-center gap-2">
//           <span className="text-sm font-medium dark:text-white">View:</span>
//           <button
//             onClick={() => setView("grid")}
//             className={`btn btn-sm ${view === "grid" ? "bg-[#DD6B20] text-white" : "bg-gray-200 dark:bg-gray-700"}`}
//           >
//             Grid
//           </button>
//           <button
//             onClick={() => setView("list")}
//             className={`btn btn-sm ${view === "list" ? "bg-[#DD6B20] text-white" : "bg-gray-200 dark:bg-gray-700"}`}
//           >
//             List
//           </button>
//         </div>
//       </div>

//       {/* Car Listings */}
//       {filteredCars.length === 0 ? (
//         <p className="text-center text-gray-500 dark:text-gray-400 mt-20 text-lg">
//           No cars found.
//         </p>
//       ) : view === "grid" ? (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredCars.map((car) => (
//             <div
//               key={car._id}
//               className="rounded-xl border bg-white dark:bg-gray-900 p-4 shadow hover:shadow-md transition"
//             >
//               <img
//                 src={car.imageUrl || "https://i.ibb.co/5r5C1fJ/user.png"}
//                 alt={car.model}
//                 className="h-44 w-full object-cover rounded mb-4"
//               />
//               <h3 className="text-xl font-semibold text-[#DD6B20] dark:text-white">{car.model}</h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 <span className="font-medium">${car.dailyPrice}</span> / day
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-300">Location: {car.location}</p>
//               <p className="text-sm text-gray-600 dark:text-gray-300">Status: {car.availability}</p>
//               <button
//                 onClick={() => navigate(`/car/${car._id}`)}
//                 className="mt-4 bg-[#DD6B20] hover:bg-[#c5530c] text-white px-4 py-2 rounded text-sm w-full"
//               >
//                 Book Now
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {filteredCars.map((car) => (
//             <div
//               key={car._id}
//               className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4 bg-white dark:bg-gray-900 shadow"
//             >
//               <img
//                 src={car.imageUrl || "https://i.ibb.co/5r5C1fJ/user.png"}
//                 alt={car.model}
//                 className="w-full sm:w-44 h-32 object-cover rounded"
//               />
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold text-[#DD6B20] dark:text-white">{car.model}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">${car.dailyPrice} / day</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">Location: {car.location}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">Status: {car.availability}</p>
//                 <button
//                   onClick={() => navigate(`/car/${car._id}`)}
//                   className="mt-2 bg-[#DD6B20] hover:bg-[#c5530c] text-white px-4 py-1 rounded text-sm"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AvailableCars;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const AvailableCars = () => {
//   const [cars, setCars] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sortBy, setSortBy] = useState("newest");
//   const [view, setView] = useState("grid");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/api/cars`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setCars(data);
//           setError(null);
//         } else {
//           console.error("❌ API returned non-array:", data);
//           setCars([]);
//           setError(data?.error || "Unexpected response from server.");
//         }
//       })
//       .catch((err) => {
//         console.error("❌ Fetch error:", err);
//         setCars([]);
//         setError("Network error or server unavailable.");
//       });
//   }, []);

//   const filteredCars = Array.isArray(cars)
//     ? [...cars]
//         .filter((car) => {
//           const text = search.toLowerCase();
//           return (
//             car.model?.toLowerCase().includes(text) ||
//             car.location?.toLowerCase().includes(text)
//           );
//         })
//         .sort((a, b) => {
//           if (sortBy === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
//           if (sortBy === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
//           if (sortBy === "priceLow") return a.dailyPrice - b.dailyPrice;
//           if (sortBy === "priceHigh") return b.dailyPrice - a.dailyPrice;
//           return 0;
//         })
//     : [];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 min-h-[80vh]">
//       <Helmet>
//         <title>Available Cars | SwiftCarz</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white mb-8">
//         Available Cars for Booking
//       </h2>

//       {/* Filter Controls */}
//       <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by model or location..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="input input-bordered w-full max-w-xs dark:bg-gray-800 dark:text-white"
//         />
//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="input input-bordered dark:bg-gray-800 dark:text-white"
//         >
//           <option value="newest">Date Added: Newest First</option>
//           <option value="oldest">Date Added: Oldest First</option>
//           <option value="priceLow">Price: Lowest First</option>
//           <option value="priceHigh">Price: Highest First</option>
//         </select>
//         <div className="flex items-center gap-2">
//           <span className="text-sm font-medium dark:text-white">View:</span>
//           <button
//             onClick={() => setView("grid")}
//             className={`btn btn-sm ${view === "grid" ? "bg-[#DD6B20] text-white" : "bg-gray-200 dark:bg-gray-700"}`}
//           >
//             Grid
//           </button>
//           <button
//             onClick={() => setView("list")}
//             className={`btn btn-sm ${view === "list" ? "bg-[#DD6B20] text-white" : "bg-gray-200 dark:bg-gray-700"}`}
//           >
//             List
//           </button>
//         </div>
//       </div>

//       {/* Car Listings or Error Message */}
//       {error ? (
//         <p className="text-center text-red-500 mt-20 text-lg">{error}</p>
//       ) : filteredCars.length === 0 ? (
//         <p className="text-center text-gray-500 dark:text-gray-400 mt-20 text-lg">
//           No cars found.
//         </p>
//       ) : view === "grid" ? (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredCars.map((car) => (
//             <div
//               key={car._id}
//               className="rounded-xl border bg-white dark:bg-gray-900 p-4 shadow hover:shadow-md transition"
//             >
//               <img
//                 src={car.imageUrl || "https://i.ibb.co/5r5C1fJ/user.png"}
//                 alt={car.model}
//                 className="h-44 w-full object-cover rounded mb-4"
//               />
//               <h3 className="text-xl font-semibold text-[#DD6B20] dark:text-white">{car.model}</h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 <span className="font-medium">${car.dailyPrice}</span> / day
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-300">Location: {car.location}</p>
//               <p className="text-sm text-gray-600 dark:text-gray-300">Status: {car.availability}</p>
//               <button
//                 onClick={() => navigate(`/car/${car._id}`)}
//                 className="mt-4 bg-[#DD6B20] hover:bg-[#c5530c] text-white px-4 py-2 rounded text-sm w-full"
//               >
//                 Book Now
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {filteredCars.map((car) => (
//             <div
//               key={car._id}
//               className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4 bg-white dark:bg-gray-900 shadow"
//             >
//               <img
//                 src={car.imageUrl || "https://i.ibb.co/5r5C1fJ/user.png"}
//                 alt={car.model}
//                 className="w-full sm:w-44 h-32 object-cover rounded"
//               />
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold text-[#DD6B20] dark:text-white">{car.model}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">${car.dailyPrice} / day</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">Location: {car.location}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">Status: {car.availability}</p>
//                 <button
//                   onClick={() => navigate(`/car/${car._id}`)}
//                   className="mt-2 bg-[#DD6B20] hover:bg-[#c5530c] text-white px-4 py-1 rounded text-sm"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AvailableCars;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [view, setView] = useState("grid");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/cars`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCars(data);
          setError(null);
        } else {
          console.error("❌ API returned non-array:", data);
          setCars([]);
          setError(data?.error || "Unexpected response from server.");
        }
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err);
        setCars([]);
        setError("Network error or server unavailable.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const filteredCars = Array.isArray(cars)
    ? [...cars]
        .filter((car) => {
          const text = search.toLowerCase();
          return (
            car.model?.toLowerCase().includes(text) ||
            car.location?.toLowerCase().includes(text)
          );
        })
        .sort((a, b) => {
          if (sortBy === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
          if (sortBy === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
          if (sortBy === "priceLow") return a.dailyPrice - b.dailyPrice;
          if (sortBy === "priceHigh") return b.dailyPrice - a.dailyPrice;
          return 0;
        })
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 min-h-[80vh]">
      <Helmet>
        <title>Available Cars | SwiftCarz</title>
      </Helmet>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Available Cars for Booking
        </h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <input
          type="text"
          placeholder="Search by model or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
        />
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full sm:w-48 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">View:</span>
          <button
            onClick={() => setView("grid")}
            className={`px-3 py-1 rounded-lg transition-all ${view === "grid" ? "bg-amber-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
          >
            <i className="fas fa-th"></i>
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-3 py-1 rounded-lg transition-all ${view === "list" ? "bg-amber-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
          >
            <i className="fas fa-list"></i>
          </button>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mb-4">
            <i className="fas fa-exclamation-triangle text-red-500 dark:text-red-300 text-2xl"></i>
          </div>
          <p className="text-lg text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !error && filteredCars.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
            <i className="fas fa-car text-gray-400 dark:text-gray-500 text-2xl"></i>
          </div>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No cars found</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Grid View */}
      {!isLoading && !error && filteredCars.length > 0 && view === "grid" && (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <div
              key={car._id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.imageUrl || "https://i.ibb.co/5r5C1fJ/user.png"}
                  alt={car.model}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-medium">${car.dailyPrice} <span className="text-sm font-normal">/ day</span></span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{car.model}</h3>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                  <i className="fas fa-map-marker-alt mr-2 text-amber-500"></i>
                  <span>{car.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${car.availability === 'available' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                    {car.availability}
                  </span>
                </div>
                
                <button
                  onClick={() => navigate(`/car/${car._id}`)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <i className="fas fa-calendar-check"></i> Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {!isLoading && !error && filteredCars.length > 0 && view === "list" && (
        <div className="space-y-6">
          {filteredCars.map((car) => (
            <div
              key={car._id}
              className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="sm:w-1/3 h-48 sm:h-auto relative">
                <img
                  src={car.imageUrl || "https://i.ibb.co/5r5C1fJ/user.png"}
                  alt={car.model}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="sm:w-2/3 p-5 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{car.model}</h3>
                  <span className="text-lg font-bold text-amber-500">${car.dailyPrice}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/day</span></span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                  <i className="fas fa-map-marker-alt mr-2 text-amber-500"></i>
                  <span>{car.location}</span>
                </div>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs rounded-full ${car.availability === 'available' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                    {car.availability}
                  </span>
                  
                  <button
                    onClick={() => navigate(`/car/${car._id}`)}
                    className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-calendar-check"></i> Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableCars; 

