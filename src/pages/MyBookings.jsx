
// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";

// const MyBookings = () => {
//   const { user } = useContext(AuthContext);
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     if (user?.email) {
//       fetch(`${import.meta.env.VITE_API_URL}/api/bookings/my?email=${user.email}`, {
//         credentials: "include", // ✅ Important for JWT Cookie!
//       })
//         .then((res) => res.json())
//         .then((data) => setBookings(data))
//         .catch(() => Swal.fire("Error", "Failed to fetch bookings", "error"));
//     }
//   }, [user]);

//   const handleCancel = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This will cancel the booking.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, cancel it!",
//       confirmButtonColor: "#DD6B20",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`${import.meta.env.VITE_API_URL}/api/bookings/${id}`, {
//           method: "DELETE",
//           credentials: "include", // ✅ Same here to pass auth
//         })
//           .then((res) => res.json())
//           .then(() => {
//             Swal.fire("Cancelled", "Booking cancelled.", "success");
//             setBookings((prev) => prev.filter((b) => b._id !== id));
//           })
//           .catch(() => Swal.fire("Error", "Failed to cancel booking", "error"));
//       }
//     });
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
//                 <th className="px-4 py-3">Car ID</th>
//                 <th className="px-4 py-3">Booking Date</th>
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
//                   <td className="px-4 py-3 font-medium">{booking.carId}</td>
//                   <td className="px-4 py-3">
//                     {new Date(booking.bookingDate).toLocaleDateString()}
//                   </td>
//                   <td className="px-4 py-3">${booking.totalPrice}</td>
//                   <td className="px-4 py-3">{booking.status}</td>
//                   <td className="px-4 py-3 text-center">
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

  // ✅ Load bookings on mount
  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/api/bookings/my?email=${user.email}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => setBookings(data))
        .catch(() => Swal.fire("Error", "Failed to fetch bookings", "error"));
    }
  }, [user]);

  // ✅ Cancel booking
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
          method: "DELETE",
          credentials: "include",
        });

        const result = await res.json();

        if (res.ok) {
          Swal.fire("Cancelled", "Booking cancelled.", "success");
          setBookings((prev) => prev.filter((b) => b._id !== id));
        } else {
          Swal.fire("Error", result?.error || "Failed to cancel booking", "error");
        }
      } catch (err) {
        Swal.fire("Error", "Server error while canceling", "error");
      }
    }
  };

  // ✅ Update local booking dates
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

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          You haven’t booked any cars yet.
        </p>
      ) : (
        <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow rounded-xl">
          <table className="w-full table-auto text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="bg-[#DD6B20] text-white">
              <tr>
                <th className="px-4 py-3">Car</th>
                <th className="px-4 py-3">Dates</th>
                <th className="px-4 py-3">Total Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  className={`${
                    index % 2 === 0
                      ? "bg-gray-50 dark:bg-gray-800"
                      : "bg-white dark:bg-gray-900"
                  } transition`}
                >
                  <td className="px-4 py-3 flex items-center gap-2">
                    <img
                      src={booking.car?.imageUrl || "/default.png"}
                      alt="car"
                      className="w-12 h-8 object-cover rounded"
                    />
                    <span>{booking.car?.model || "Unknown"}</span>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(booking.startDate).toLocaleDateString()} -{" "}
                    {new Date(booking.endDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">${booking.totalPrice}</td>
                  <td className="px-4 py-3">{booking.status}</td>
                  <td className="px-4 py-3 text-center flex gap-2 justify-center">
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-xs font-semibold"
                    >
                      Modify
                    </button>
                    <button
                      onClick={() => handleCancel(booking._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-xs font-semibold"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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


