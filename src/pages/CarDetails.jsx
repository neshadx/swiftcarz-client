import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/Provider/AuthProvider";
import Swal from "sweetalert2";

const CarDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading car:", err);
        toast.error("Failed to load car info");
        setLoading(false);
      });
  }, [id]);

  const handleBookNow = () => {
    if (!user) {
      toast.error("Please login to book this car.");
      return;
    }

    const booking = {
      carId: id,
      userEmail: user.email,
      bookingDate: new Date().toISOString(),
      totalPrice: car.dailyPrice,
      status: "confirmed",
    };

    fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Booked!", "Your car has been booked successfully.", "success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to book the car.");
      });
  };

  if (loading || !car) {
    return <div className="text-center py-10 text-gray-500 dark:text-gray-400">Loading car details...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Helmet>
        <title>{car.model} | SwiftCarz</title>
      </Helmet>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <img
          src={car.imageUrl}
          alt={car.model}
          className="w-full h-[300px] sm:h-[400px] object-cover"
        />

        <div className="p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-[#DD6B20] dark:text-white mb-2">
            {car.model}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {car.description || "No description available."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 dark:text-gray-300">
            <p><strong>📍 Location:</strong> {car.location}</p>
            <p><strong>💰 Price:</strong> ${car.dailyPrice} / day</p>
            <p><strong>🚗 Status:</strong> {car.availability}</p>
            <p><strong>📅 Booking Count:</strong> {car.bookingCount || 0}</p>
            <p><strong>⚙️ Features:</strong> {car.features || "N/A"}</p>
            <p><strong>👤 Posted By:</strong> {car.creatorName} ({car.creatorEmail})</p>
          </div>

          <div className="mt-8">
            {car.availability === "unavailable" ? (
              <p className="text-red-600 font-semibold">
                ❌ This car is currently unavailable for booking.
              </p>
            ) : (
              <button
                onClick={handleBookNow}
                className="bg-[#DD6B20] hover:bg-[#c5530c] text-white px-6 py-2 rounded-lg font-semibold transition mt-4"
              >
                Book Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
