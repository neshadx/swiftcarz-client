import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/Provider/AuthProvider";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CarDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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

    if (startDate > endDate) {
      toast.warn("End date must be after start date");
      return;
    }

    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const totalPrice = days * car.dailyPrice;

    const booking = {
      carId: id,
      userEmail: user.email,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      totalPrice,
      status: "confirmed",
    };

    fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // ✅ important for JWT
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Booked!", `Booking confirmed for $${totalPrice}`, "success");
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

          {car.availability === "available" && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2 dark:text-white">Select Booking Dates</h4>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div>
                  <label className="block text-sm font-medium dark:text-white">Start Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    className="input input-bordered dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-white">End Date</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    minDate={startDate}
                    className="input input-bordered dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
              <button
                onClick={handleBookNow}
                className="mt-6 bg-[#DD6B20] hover:bg-[#c5530c] text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                Confirm Booking
              </button>
            </div>
          )}

          {car.availability === "unavailable" && (
            <p className="mt-6 text-red-600 font-semibold">
              ❌ This car is currently unavailable for booking.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
