import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [view, setView] = useState("grid");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data || []))
      .catch((err) => console.error("❌ Error fetching cars:", err));
  }, []);

  const filteredCars = cars
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
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 min-h-[80vh]">
      <Helmet>
        <title>Available Cars | SwiftCarz</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white mb-8">
        Available Cars for Booking
      </h2>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by model or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-xs dark:bg-gray-800 dark:text-white"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="input input-bordered dark:bg-gray-800 dark:text-white"
        >
          <option value="newest">Date Added: Newest First</option>
          <option value="oldest">Date Added: Oldest First</option>
          <option value="priceLow">Price: Lowest First</option>
          <option value="priceHigh">Price: Highest First</option>
        </select>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium dark:text-white">View:</span>
          <button
            onClick={() => setView("grid")}
            className={`btn btn-sm ${view === "grid" ? "bg-[#DD6B20] text-white" : "bg-gray-200 dark:bg-gray-700"}`}
          >
            Grid
          </button>
          <button
            onClick={() => setView("list")}
            className={`btn btn-sm ${view === "list" ? "bg-[#DD6B20] text-white" : "bg-gray-200 dark:bg-gray-700"}`}
          >
            List
          </button>
        </div>
      </div>

      {/* Car Listings */}
      {filteredCars.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-20 text-lg">
          No cars found.
        </p>
      ) : view === "grid" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <div
              key={car._id}
              className="rounded-xl border bg-white dark:bg-gray-900 p-4 shadow hover:shadow-md transition"
            >
              <img
                src={car.imageUrl || "https://i.ibb.co/5r5C1fJ/user.png"}
                alt={car.model}
                className="h-44 w-full object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-[#DD6B20] dark:text-white">{car.model}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">${car.dailyPrice}</span> / day
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Location: {car.location}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Status: {car.availability}</p>
              <button
                onClick={() => navigate(`/car/${car._id}`)}
                className="mt-4 bg-[#DD6B20] hover:bg-[#c5530c] text-white px-4 py-2 rounded text-sm w-full"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCars.map((car) => (
            <div
              key={car._id}
              className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4 bg-white dark:bg-gray-900 shadow"
            >
              <img
                src={car.imageUrl || "https://i.ibb.co/5r5C1fJ/user.png"}
                alt={car.model}
                className="w-full sm:w-44 h-32 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#DD6B20] dark:text-white">{car.model}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">${car.dailyPrice} / day</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Location: {car.location}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Status: {car.availability}</p>
                <button
                  onClick={() => navigate(`/car/${car._id}`)}
                  className="mt-2 bg-[#DD6B20] hover:bg-[#c5530c] text-white px-4 py-1 rounded text-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableCars;
