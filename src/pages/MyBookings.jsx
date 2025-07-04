


// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import BookingModal from "./BookingModal";

// const MyBookings = () => {
//   const { user } = useContext(AuthContext);
//   const [bookings, setBookings] = useState([]);
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   // ✅ Load bookings on mount
//   useEffect(() => {
//     if (user?.email) {
//       fetch(`${import.meta.env.VITE_API_URL}/api/bookings/my?email=${user.email}`, {
//         credentials: "include",
//       })
//         .then((res) => res.json())
//         .then((data) => setBookings(data))
//         .catch(() => Swal.fire("Error", "Failed to fetch bookings", "error"));
//     }
//   }, [user]);

//   // ✅ Cancel booking
//   const handleCancel = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Are you sure?",
//       text: "This will cancel the booking.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, cancel it!",
//       confirmButtonColor: "#DD6B20",
//     });

//     if (confirm.isConfirmed) {
//       try {
//         const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings/${id}`, {
//           method: "DELETE",
//           credentials: "include",
//         });

//         const result = await res.json();

//         if (res.ok) {
//           Swal.fire("Cancelled", "Booking cancelled.", "success");
//           setBookings((prev) => prev.filter((b) => b._id !== id));
//         } else {
//           Swal.fire("Error", result?.error || "Failed to cancel booking", "error");
//         }
//       } catch (err) {
//         Swal.fire("Error", "Server error while canceling", "error");
//       }
//     }
//   };

//   // ✅ Update local booking dates
//   const handleUpdateDates = (id, newStart, newEnd) => {
//     setBookings((prev) =>
//       prev.map((b) =>
//         b._id === id ? { ...b, startDate: newStart, endDate: newEnd } : b
//       )
//     );
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 min-h-[80vh]">
//       <Helmet>
//         <title>My Bookings | SwiftCarz</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white mb-8">
//         My Bookings
//       </h2>

//       {bookings.length === 0 ? (
//         <p className="text-center text-gray-500 dark:text-gray-400">
//           You haven’t booked any cars yet.
//         </p>
//       ) : (
//         <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow rounded-xl">
//           <table className="w-full table-auto text-sm text-left text-gray-700 dark:text-gray-300">
//             <thead className="bg-[#DD6B20] text-white">
//               <tr>
//                 <th className="px-4 py-3">Car</th>
//                 <th className="px-4 py-3">Dates</th>
//                 <th className="px-4 py-3">Total Price</th>
//                 <th className="px-4 py-3">Status</th>
//                 <th className="px-4 py-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking, index) => (
//                 <tr
//                   key={booking._id}
//                   className={`${
//                     index % 2 === 0
//                       ? "bg-gray-50 dark:bg-gray-800"
//                       : "bg-white dark:bg-gray-900"
//                   } transition`}
//                 >
//                   <td className="px-4 py-3 flex items-center gap-2">
//                     <img
//                       src={booking.car?.imageUrl || "/default.png"}
//                       alt="car"
//                       className="w-12 h-8 object-cover rounded"
//                     />
//                     <span>{booking.car?.model || "Unknown"}</span>
//                   </td>
//                   <td className="px-4 py-3">
//                     {new Date(booking.startDate).toLocaleDateString()} -{" "}
//                     {new Date(booking.endDate).toLocaleDateString()}
//                   </td>
//                   <td className="px-4 py-3">${booking.totalPrice}</td>
//                   <td className="px-4 py-3">{booking.status}</td>
//                   <td className="px-4 py-3 text-center flex gap-2 justify-center">
//                     <button
//                       onClick={() => setSelectedBooking(booking)}
//                       className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-xs font-semibold"
//                     >
//                       Modify
//                     </button>
//                     <button
//                       onClick={() => handleCancel(booking._id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-xs font-semibold"
//                     >
//                       Cancel
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {selectedBooking && (
//         <BookingModal
//           isOpen={!!selectedBooking}
//           booking={selectedBooking}
//           onClose={() => setSelectedBooking(null)}
//           onUpdate={handleUpdateDates}
//         />
//       )}
//     </div>
//   );
// };

// export default MyBookings;

// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import BookingModal from "./BookingModal";

// const MyBookings = () => {
//   const { user } = useContext(AuthContext);
//   const [bookings, setBookings] = useState([]);
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   useEffect(() => {
//     if (user?.email) {
//       fetch(`${import.meta.env.VITE_API_URL}/api/bookings/my?email=${user.email}`, {
//         credentials: "include",
//       })
//         .then((res) => res.json())
//         .then((data) => setBookings(data))
//         .catch(() => Swal.fire("Error", "Failed to fetch bookings", "error"));
//     }
//   }, [user]);

//   const handleCancel = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Are you sure?",
//       text: "This will cancel the booking.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, cancel it!",
//       confirmButtonColor: "#DD6B20",
//     });

//     if (confirm.isConfirmed) {
//       try {
//         const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings/${id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//           body: JSON.stringify({ status: "canceled" }),
//         });

//         const result = await res.json();

//         if (res.ok) {
//           Swal.fire("Cancelled", "Booking cancelled.", "success");
//           setBookings((prev) =>
//             prev.map((b) =>
//               b._id === id ? { ...b, status: "canceled" } : b
//             )
//           );
//         } else {
//           Swal.fire("Error", result?.error || "Failed to cancel booking", "error");
//         }
//       } catch (err) {
//         Swal.fire("Error", "Server error while canceling", "error");
//       }
//     }
//   };

//   const handleUpdateDates = (id, newStart, newEnd) => {
//     setBookings((prev) =>
//       prev.map((b) =>
//         b._id === id ? { ...b, startDate: newStart, endDate: newEnd } : b
//       )
//     );
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 min-h-[80vh]">
//       <Helmet>
//         <title>My Bookings | SwiftCarz</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white mb-8">
//         My Bookings
//       </h2>

//       {bookings.length === 0 ? (
//         <p className="text-center text-gray-500 dark:text-gray-400">
//           You haven’t booked any cars yet.
//         </p>
//       ) : (
//         <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow rounded-xl">
//           <table className="w-full table-auto text-sm text-left text-gray-700 dark:text-gray-300">
//             <thead className="bg-[#DD6B20] text-white">
//               <tr>
//                 <th className="px-4 py-3">Car</th>
//                 <th className="px-4 py-3">Dates</th>
//                 <th className="px-4 py-3">Total Price</th>
//                 <th className="px-4 py-3">Status</th>
//                 <th className="px-4 py-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking, index) => (
//                 <tr
//                   key={booking._id}
//                   className={`$${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"} transition`}
//                 >
//                   <td className="px-4 py-3 flex items-center gap-2">
//                     <img
//                       src={booking.car?.imageUrl || "/default.png"}
//                       alt="car"
//                       className="w-12 h-8 object-cover rounded"
//                     />
//                     <span>{booking.car?.model || "Unknown"}</span>
//                   </td>
//                   <td className="px-4 py-3">
//                     {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
//                   </td>
//                   <td className="px-4 py-3">${booking.totalPrice}</td>
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
//                         booking.status === "confirmed"
//                           ? "bg-green-500"
//                           : booking.status === "canceled"
//                           ? "bg-red-500"
//                           : "bg-yellow-500"
//                       }`}
//                     >
//                       {booking.status}
//                     </span>
//                   </td>
//                   <td className="px-4 py-3 text-center flex gap-2 justify-center">
//                     <button
//                       onClick={() => setSelectedBooking(booking)}
//                       className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-xs font-semibold"
//                     >
//                       Modify
//                     </button>
//                     <button
//                       onClick={() => handleCancel(booking._id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-xs font-semibold"
//                     >
//                       Cancel
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {selectedBooking && (
//         <BookingModal
//           isOpen={!!selectedBooking}
//           booking={selectedBooking}
//           onClose={() => setSelectedBooking(null)}
//           onUpdate={handleUpdateDates}
//         />
//       )}
//     </div>
//   );
// };

// export default MyBookings;


// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import BookingModal from "./BookingModal";

// const MyBookings = () => {
//   const { user } = useContext(AuthContext);
//   const [bookings, setBookings] = useState([]);
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   useEffect(() => {
//     if (user?.email) {
//       fetch(`${import.meta.env.VITE_API_URL}/api/bookings/my?email=${user.email}`, {
//         credentials: "include",
//       })
//         .then((res) => res.json())
//         .then((data) => setBookings(data))
//         .catch(() => Swal.fire("Error", "Failed to fetch bookings", "error"));
//     }
//   }, [user]);

//   const handleCancel = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Are you sure?",
//       text: "This will cancel the booking.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, cancel it!",
//       confirmButtonColor: "#DD6B20",
//     });

//     if (confirm.isConfirmed) {
//       try {
//         const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings/${id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//           body: JSON.stringify({ status: "canceled" }),
//         });

//         const result = await res.json();

//         if (res.ok) {
//           Swal.fire("Cancelled", "Booking cancelled.", "success");
//           setBookings((prev) =>
//             prev.map((b) =>
//               b._id === id ? { ...b, status: "canceled" } : b
//             )
//           );
//         } else {
//           Swal.fire("Error", result?.error || "Failed to cancel booking", "error");
//         }
//       } catch (err) {
//         Swal.fire("Error", "Server error while canceling", "error");
//       }
//     }
//   };

//   const handleUpdateDates = (id, newStart, newEnd) => {
//     setBookings((prev) =>
//       prev.map((b) =>
//         b._id === id ? { ...b, startDate: newStart, endDate: newEnd } : b
//       )
//     );
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 min-h-[80vh]">
//       <Helmet>
//         <title>My Bookings | SwiftCarz</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white mb-8">
//         My Bookings
//       </h2>

//       {bookings.length === 0 ? (
//         <p className="text-center text-gray-500 dark:text-gray-400">
//           You haven’t booked any cars yet.
//         </p>
//       ) : (
//         <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow rounded-xl">
//           <table className="w-full table-auto text-sm text-left text-gray-700 dark:text-gray-300">
//             <thead className="bg-[#DD6B20] text-white">
//               <tr>
//                 <th className="px-4 py-3">Car Image</th>
//                 <th className="px-4 py-3">Car Model</th>
//                 <th className="px-4 py-3">Booking Date</th>
//                 <th className="px-4 py-3">Start Date</th>
//                 <th className="px-4 py-3">End Date</th>
//                 <th className="px-4 py-3">Total Price</th>
//                 <th className="px-4 py-3">Booking Status</th>
//                 <th className="px-4 py-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking, index) => (
//                 <tr
//                   key={booking._id}
//                   className={
//                     index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"
//                   }
//                 >
//                   <td className="px-4 py-3">
//                     <img
//                       src={booking.car?.imageUrl || "/default.png"}
//                       alt="car"
//                       className="w-16 h-10 object-cover rounded"
//                     />
//                   </td>
//                   <td className="px-4 py-3 font-medium">{booking.car?.model || "Unknown"}</td>
//                   <td className="px-4 py-3">{new Date(booking.createdAt).toLocaleString()}</td>
//                   <td className="px-4 py-3">{new Date(booking.startDate).toLocaleString()}</td>
//                   <td className="px-4 py-3">{new Date(booking.endDate).toLocaleString()}</td>
//                   <td className="px-4 py-3">${booking.totalPrice}</td>
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
//                         booking.status === "confirmed"
//                           ? "bg-green-500"
//                           : booking.status === "canceled"
//                           ? "bg-red-500"
//                           : "bg-yellow-500"
//                       }`}
//                     >
//                       {booking.status}
//                     </span>
//                   </td>
//                   <td className="px-4 py-3 text-center flex gap-2 justify-center">
//                     <button
//                       onClick={() => setSelectedBooking(booking)}
//                       className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-xs font-semibold"
//                     >
//                       Modify Dates
//                     </button>
//                     <button
//                       onClick={() => handleCancel(booking._id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-xs font-semibold"
//                     >
//                       Cancel
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {selectedBooking && (
//         <BookingModal
//           isOpen={!!selectedBooking}
//           booking={selectedBooking}
//           onClose={() => setSelectedBooking(null)}
//           onUpdate={handleUpdateDates}
//         />
//       )}
//     </div>
//   );
// };

// export default MyBookings;



// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import BookingModal from "./BookingModal";

// const MyBookings = () => {
//   const { user } = useContext(AuthContext);
//   const [bookings, setBookings] = useState([]);
//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (user?.email) {
//       fetch(`${import.meta.env.VITE_API_URL}/api/bookings/my?email=${user.email}`, {
//         credentials: "include",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (Array.isArray(data)) {
//             setBookings(data);
//             setError("");
//           } else {
//             setBookings([]);
//             setError(data?.error || "Unauthorized access");
//           }
//         })
//         .catch(() => {
//           setBookings([]);
//           setError("Failed to fetch bookings");
//         });
//     }
//   }, [user]);

//   const handleCancel = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Are you sure?",
//       text: "This will cancel the booking.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, cancel it!",
//       confirmButtonColor: "#DD6B20",
//     });

//     if (confirm.isConfirmed) {
//       try {
//         const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings/${id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//           body: JSON.stringify({ status: "canceled" }),
//         });

//         const result = await res.json();

//         if (res.ok) {
//           Swal.fire("Cancelled", "Booking cancelled.", "success");
//           setBookings((prev) =>
//             prev.map((b) =>
//               b._id === id ? { ...b, status: "canceled" } : b
//             )
//           );
//         } else {
//           Swal.fire("Error", result?.error || "Failed to cancel booking", "error");
//         }
//       } catch (err) {
//         Swal.fire("Error", "Server error while canceling", "error");
//       }
//     }
//   };

//   const handleUpdateDates = (id, newStart, newEnd) => {
//     setBookings((prev) =>
//       prev.map((b) =>
//         b._id === id ? { ...b, startDate: newStart, endDate: newEnd } : b
//       )
//     );
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 min-h-[80vh]">
//       <Helmet>
//         <title>My Bookings | SwiftCarz</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white mb-8">
//         My Bookings
//       </h2>

//       {error ? (
//         <p className="text-center text-red-500 mt-10 text-lg">{error}</p>
//       ) : bookings.length === 0 ? (
//         <p className="text-center text-gray-500 dark:text-gray-400">
//           You haven’t booked any cars yet.
//         </p>
//       ) : (
//         <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow rounded-xl">
//           <table className="w-full table-auto text-sm text-left text-gray-700 dark:text-gray-300">
//             <thead className="bg-[#DD6B20] text-white">
//               <tr>
//                 <th className="px-4 py-3">Car Image</th>
//                 <th className="px-4 py-3">Car Model</th>
//                 <th className="px-4 py-3">Booking Date</th>
//                 <th className="px-4 py-3">Start Date</th>
//                 <th className="px-4 py-3">End Date</th>
//                 <th className="px-4 py-3">Total Price</th>
//                 <th className="px-4 py-3">Booking Status</th>
//                 <th className="px-4 py-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking, index) => (
//                 <tr
//                   key={booking._id}
//                   className={
//                     index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"
//                   }
//                 >
//                   <td className="px-4 py-3">
//                     <img
//                       src={booking.car?.imageUrl || "/default.png"}
//                       alt="car"
//                       className="w-16 h-10 object-cover rounded"
//                     />
//                   </td>
//                   <td className="px-4 py-3 font-medium">{booking.car?.model || "Unknown"}</td>
//                   <td className="px-4 py-3">{new Date(booking.createdAt).toLocaleString()}</td>
//                   <td className="px-4 py-3">{new Date(booking.startDate).toLocaleString()}</td>
//                   <td className="px-4 py-3">{new Date(booking.endDate).toLocaleString()}</td>
//                   <td className="px-4 py-3">${booking.totalPrice}</td>
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
//                         booking.status === "confirmed"
//                           ? "bg-green-500"
//                           : booking.status === "canceled"
//                           ? "bg-red-500"
//                           : "bg-yellow-500"
//                       }`}
//                     >
//                       {booking.status}
//                     </span>
//                   </td>
//                   <td className="px-4 py-3 text-center flex gap-2 justify-center">
//                     <button
//                       onClick={() => setSelectedBooking(booking)}
//                       className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-xs font-semibold"
//                     >
//                       Modify Dates
//                     </button>
//                     <button
//                       onClick={() => handleCancel(booking._id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-xs font-semibold"
//                     >
//                       Cancel
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {selectedBooking && (
//         <BookingModal
//           isOpen={!!selectedBooking}
//           booking={selectedBooking}
//           onClose={() => setSelectedBooking(null)}
//           onUpdate={handleUpdateDates}
//         />
//       )}
//     </div>
//   );
// };

// export default MyBookings;



import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import BookingModal from "./BookingModal";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/api/bookings/my?email=${user.email}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setBookings(data);
            setError("");
          } else {
            setBookings([]);
            setError(data?.error || "Unauthorized access");
          }
        })
        .catch(() => {
          setBookings([]);
          setError("Failed to fetch bookings");
        });
    }
  }, [user]);

  const handleCancel = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will cancel the booking.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      confirmButtonColor: "#DD6B20",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ status: "canceled" }),
        });

        const result = await res.json();

        if (res.ok) {
          Swal.fire("Cancelled", "Booking cancelled.", "success");
          setBookings((prev) =>
            prev.map((b) => (b._id === id ? { ...b, status: "canceled" } : b))
          );
        } else {
          Swal.fire("Error", result?.error || "Failed to cancel booking", "error");
        }
      } catch (err) {
        Swal.fire("Error", "Server error while canceling", "error");
      }
    }
  };

  const handleUpdateDates = (id, newStart, newEnd) => {
    setBookings((prev) =>
      prev.map((b) =>
        b._id === id ? { ...b, startDate: newStart, endDate: newEnd } : b
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 min-h-[80vh]">
      <Helmet>
        <title>My Bookings | SwiftCarz</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white mb-8">
        My Bookings
      </h2>

      {error ? (
        <p className="text-center text-red-500 mt-10 text-lg">{error}</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          You haven’t booked any cars yet.
        </p>
      ) : (
        <>
          {/* ✅ Desktop Table */}
          <div className="hidden lg:block overflow-x-auto bg-white dark:bg-gray-900 shadow rounded-xl">
            <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
              <thead className="bg-[#DD6B20] text-white">
                <tr>
                  <th className="px-4 py-3">Car Image</th>
                  <th className="px-4 py-3">Car Model</th>
                  <th className="px-4 py-3">Booking Date</th>
                  <th className="px-4 py-3">Start Date</th>
                  <th className="px-4 py-3">End Date</th>
                  <th className="px-4 py-3">Total Price</th>
                  <th className="px-4 py-3">Booking Status</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, index) => (
                  <tr
                    key={b._id}
                    className={
                      index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"
                    }
                  >
                    <td className="px-4 py-3">
                      <img src={b.car?.imageUrl || "/default.png"} className="w-16 h-10 object-cover rounded" />
                    </td>
                    <td className="px-4 py-3 font-medium">{b.car?.model}</td>
                    <td className="px-4 py-3">{new Date(b.createdAt).toLocaleString()}</td>
                    <td className="px-4 py-3">{new Date(b.startDate).toLocaleString()}</td>
                    <td className="px-4 py-3">{new Date(b.endDate).toLocaleString()}</td>
                    <td className="px-4 py-3">${b.totalPrice}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        b.status === "confirmed"
                          ? "bg-green-500"
                          : b.status === "canceled"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}>{b.status}</span>
                    </td>
                    <td className="px-4 py-3 text-center flex gap-2 justify-center">
                      <button
                        onClick={() => setSelectedBooking(b)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold"
                      >
                        Modify
                      </button>
                      <button
                        onClick={() => handleCancel(b._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ Mobile View */}
          <div className="lg:hidden space-y-4">
            {bookings.map((b) => (
              <div key={b._id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                <div className="flex items-center gap-4 mb-3">
                  <img src={b.car?.imageUrl || "/default.png"} className="w-20 h-14 object-cover rounded" />
                  <div>
                    <p className="font-bold text-[#DD6B20] dark:text-white">{b.car?.model}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Booked: {new Date(b.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  <p>Start: {new Date(b.startDate).toLocaleString()}</p>
                  <p>End: {new Date(b.endDate).toLocaleString()}</p>
                  <p>Price: ${b.totalPrice}</p>
                  <p>Status: <span className={`font-medium ${b.status === "confirmed" ? "text-green-500" : b.status === "canceled" ? "text-red-500" : "text-yellow-500"}`}>{b.status}</span></p>
                </div>
                <div className="flex gap-3 justify-end">
                  <button onClick={() => setSelectedBooking(b)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">Modify</button>
                  <button onClick={() => handleCancel(b._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">Cancel</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedBooking && (
        <BookingModal
          isOpen={!!selectedBooking}
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onUpdate={handleUpdateDates}
        />
      )}
    </div>
  );
};

export default MyBookings;
