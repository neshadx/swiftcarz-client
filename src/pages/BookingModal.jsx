import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

Modal.setAppElement("#root");

const BookingModal = ({ isOpen, onClose, booking, onUpdate }) => {
  const [newDate, setNewDate] = useState(
    booking?.bookingDate ? new Date(booking.bookingDate) : new Date()
  );
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings/${booking._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookingDate: newDate.toISOString() }),
        }
      );
      const result = await response.json();
      if (result.modifiedCount > 0 || result.success) {
        Swal.fire("Updated", "Booking date updated!", "success");
        onUpdate(booking._id, newDate.toISOString());
        onClose();
      } else {
        Swal.fire("Info", "No changes made.", "info");
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
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md mx-auto mt-40"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <h2 className="text-xl font-bold text-[#DD6B20] mb-4">Modify Booking Date</h2>

      <DatePicker
        selected={newDate}
        onChange={(date) => setNewDate(date)}
        minDate={new Date()}
        dateFormat="yyyy-MM-dd"
        className="input input-bordered w-full dark:bg-gray-700 dark:text-white mb-4"
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
