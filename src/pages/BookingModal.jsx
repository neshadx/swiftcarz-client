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
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings/${booking._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
          }),
        }
      );

      const result = await res.json();

      if (res.ok && result.success) {
        Swal.fire("Updated", "Booking dates updated!", "success");
        onUpdate(booking._id, startDate, endDate);
        onClose();
      } else {
        Swal.fire("Info", result.error || "No changes made", "info");
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
      className="bg-[#0F172A] text-white p-6 rounded-xl shadow-xl w-full max-w-md mx-auto mt-32"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <h2 className="text-xl font-bold text-[#F97316] mb-6">
        Modify Booking Dates
      </h2>

      <div className="flex flex-col gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
            className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="yyyy-MM-dd"
            className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

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
          className="bg-[#F97316] hover:bg-[#ea6505] text-white px-4 py-2 rounded font-semibold"
        >
          {loading ? "Updating..." : "Confirm"}
        </button>
      </div>
    </Modal>
  );
};

export default BookingModal;
