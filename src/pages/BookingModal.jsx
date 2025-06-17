import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

Modal.setAppElement("#root");

const BookingModal = ({ isOpen, onClose, booking, onUpdate }) => {
  const [startDate, setStartDate] = useState(
    booking?.startDate ? new Date(booking.startDate) : new Date()
  );
  const [endDate, setEndDate] = useState(
    booking?.endDate ? new Date(booking.endDate) : new Date()
  );
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!startDate || !endDate || startDate > endDate) {
      Swal.fire("Invalid", "Please select a valid date range", "warning");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings/${booking._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // ✅ Send JWT cookie
          body: JSON.stringify({
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
          }),
        }
      );
      const result = await response.json();

      if (result.modifiedCount > 0 || result.success) {
        Swal.fire("Updated", "Booking dates updated!", "success");
        onUpdate(booking._id, startDate, endDate);
        onClose();
      } else {
        Swal.fire("Info", "No changes made", "info");
      }
    } catch (err) {
      console.error("Update error:", err);
      Swal.fire("Error", "Failed to update booking", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl max-w-md mx-auto mt-40"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <h2 className="text-xl font-bold text-[#DD6B20] mb-4">Modify Booking Dates</h2>

      <label className="font-semibold text-sm dark:text-white">Start Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        dateFormat="yyyy-MM-dd"
        className="input input-bordered w-full dark:bg-gray-700 dark:text-white mb-4"
      />

      <label className="font-semibold text-sm dark:text-white">End Date</label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="yyyy-MM-dd"
        className="input input-bordered w-full dark:bg-gray-700 dark:text-white mb-6"
      />

      <div className="flex justify-end gap-4">
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded font-semibold"
        >
          Cancel
        </button>
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="bg-[#DD6B20] hover:bg-[#c5530c] text-white px-4 py-2 rounded font-semibold"
        >
          {loading ? "Updating..." : "Confirm"}
        </button>
      </div>
    </Modal>
  );
};

export default BookingModal;
