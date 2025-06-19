
// import React, { useContext, useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";
// import UpdateCarModal from "../components/UpdateCarModal";

// const MyCars = () => {
//   const { user } = useContext(AuthContext);
//   const [myCars, setMyCars] = useState([]);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [sortOption, setSortOption] = useState("newest");

//   // Load cars
//   useEffect(() => {
//     if (user?.email) {
//       fetch(`${import.meta.env.VITE_API_URL}/api/cars`, {
//         credentials: "include",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           const userCars = data.filter(car => car.creatorEmail === user.email);
//           setMyCars(sortCars(userCars, sortOption));
//         })
//         .catch((err) => {
//           toast.error("Failed to load your cars");
//           console.error(err);
//         });
//     }
//   }, [user, sortOption]);

//   // Sort helper
//   const sortCars = (cars, option) => {
//     if (option === "newest") {
//       return [...cars].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//     } else if (option === "oldest") {
//       return [...cars].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
//     } else if (option === "priceLow") {
//       return [...cars].sort((a, b) => a.dailyPrice - b.dailyPrice);
//     } else {
//       return [...cars].sort((a, b) => b.dailyPrice - a.dailyPrice);
//     }
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This will permanently delete the car.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//       confirmButtonColor: "#DD6B20",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`${import.meta.env.VITE_API_URL}/api/cars/${id}`, {
//           method: "DELETE",
//           credentials: "include",
//         })
//           .then((res) => res.json())
//           .then(() => {
//             toast.success("Car deleted successfully!");
//             setMyCars(prev => prev.filter(car => car._id !== id));
//           })
//           .catch((err) => {
//             toast.error("Failed to delete car.");
//             console.error(err);
//           });
//       }
//     });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 min-h-[80vh]">
//       <Helmet>
//         <title>My Cars | SwiftCarz</title>
//       </Helmet>

//       <h2 className="text-4xl font-bold text-center text-[#DD6B20] dark:text-white mb-6">
//         My Added Cars
//       </h2>

//       {/* Sorting Dropdown */}
//       <div className="flex justify-end mb-4">
//         <select
//           className="select select-bordered dark:bg-gray-800 dark:text-white"
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//         >
//           <option value="newest">Sort: Newest First</option>
//           <option value="oldest">Sort: Oldest First</option>
//           <option value="priceLow">Sort: Price Low to High</option>
//           <option value="priceHigh">Sort: Price High to Low</option>
//         </select>
//       </div>

//       {myCars.length === 0 ? (
//         <p className="text-center text-gray-600 dark:text-gray-300">
//           No cars added yet.
//         </p>
//       ) : (
//         <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow rounded-xl">
//           <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
//             <thead className="bg-[#DD6B20] text-white">
//               <tr>
//                 <th className="px-4 py-3">Image</th>
//                 <th className="px-4 py-3">Model</th>
//                 <th className="px-4 py-3">Price</th>
//                 <th className="px-4 py-3">Booking Count</th>
//                 <th className="px-4 py-3">Availability</th>
//                 <th className="px-4 py-3">Date Added</th>
//                 <th className="px-4 py-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {myCars.map((car, index) => (
//                 <tr
//                   key={car._id}
//                   className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}
//                 >
//                   <td className="px-4 py-2">
//                     <img src={car.imageUrl} alt="car" className="w-16 h-10 object-cover rounded" />
//                   </td>
//                   <td className="px-4 py-2 font-medium">{car.model}</td>
//                   <td className="px-4 py-2">${car.dailyPrice}</td>
//                   <td className="px-4 py-2">{car.bookingCount || 0}</td>
//                   <td className="px-4 py-2">{car.availability}</td>
//                   <td className="px-4 py-2">{new Date(car.createdAt).toLocaleDateString()}</td>
//                   <td className="px-4 py-2 flex gap-2 justify-center">
//                     <button
//                       onClick={() => setSelectedCar(car)}
//                       className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-xs font-semibold"
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => handleDelete(car._id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-xs font-semibold"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Update Modal */}
//       {selectedCar && (
//         <UpdateCarModal
//           car={selectedCar}
//           onClose={() => setSelectedCar(null)}
//           onUpdate={(updatedCar) => {
//             setMyCars(prev =>
//               prev.map((car) => (car._id === updatedCar._id ? updatedCar : car))
//             );
//             setSelectedCar(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default MyCars;




import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const [myCars, setMyCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [sortOption, setSortOption] = useState("newest");
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/api/cars`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          const userCars = data.filter((car) => car.creatorEmail === user.email);
          setMyCars(sortCars(userCars, sortOption));
        })
        .catch((err) => {
          toast.error("Failed to load your cars");
          console.error(err);
        });
    }
  }, [user, sortOption]);

  const sortCars = (cars, option) => {
    if (option === "newest") {
      return [...cars].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (option === "oldest") {
      return [...cars].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (option === "priceLow") {
      return [...cars].sort((a, b) => a.dailyPrice - b.dailyPrice);
    } else {
      return [...cars].sort((a, b) => b.dailyPrice - a.dailyPrice);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the car.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#DD6B20",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/api/cars/${id}`, {
          method: "DELETE",
          credentials: "include",
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("Car deleted successfully!");
            setMyCars((prev) => prev.filter((car) => car._id !== id));
          })
          .catch((err) => {
            toast.error("Failed to delete car.");
            console.error(err);
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 min-h-[80vh]">
      <Helmet>
        <title>My Cars | SwiftCarz</title>
      </Helmet>

      <h2 className="text-4xl font-bold text-center text-[#DD6B20] dark:text-white mb-6">
        My Added Cars
      </h2>

      <div className="flex justify-end mb-4">
        <select
          className="select select-bordered dark:bg-gray-800 dark:text-white"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="newest">Sort: Newest First</option>
          <option value="oldest">Sort: Oldest First</option>
          <option value="priceLow">Sort: Price Low to High</option>
          <option value="priceHigh">Sort: Price High to Low</option>
        </select>
      </div>

      {myCars.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-300 mt-16">
          <p className="text-lg mb-4">No cars added yet. Add one now!</p>
          <button
            onClick={() => navigate("/addCar")}
            className="bg-[#DD6B20] hover:bg-[#c5530c] text-white px-6 py-2 rounded-lg font-semibold text-sm"
          >
            Add a Car
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow rounded-xl">
          <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="bg-[#DD6B20] text-white">
              <tr>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Model</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Booking Count</th>
                <th className="px-4 py-3">Availability</th>
                <th className="px-4 py-3">Date Added</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myCars.map((car, index) => (
                <tr
                  key={car._id}
                  className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}
                >
                  <td className="px-4 py-2">
                    <img src={car.imageUrl} alt="car" className="w-16 h-10 object-cover rounded" />
                  </td>
                  <td className="px-4 py-2 font-medium">{car.model}</td>
                  <td className="px-4 py-2">${car.dailyPrice}</td>
                  <td className="px-4 py-2">{car.bookingCount || 0}</td>
                  <td className="px-4 py-2">{car.availability}</td>
                  <td className="px-4 py-2">{new Date(car.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-2 flex gap-2 justify-center">
                    <button
                      onClick={() => setSelectedCar(car)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-xs font-semibold"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(car._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-xs font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedCar && (
        <UpdateCarModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          onUpdate={(updatedCar) => {
            setMyCars((prev) =>
              prev.map((car) => (car._id === updatedCar._id ? updatedCar : car))
            );
            setSelectedCar(null);
          }}
        />
      )}
    </div>
  );
};

export default MyCars;

