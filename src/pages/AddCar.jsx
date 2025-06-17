// import React, { useContext, useState } from "react";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";

// const AddCar = () => {
//   const { user } = useContext(AuthContext);
//   const [formData, setFormData] = useState({
//     model: "",
//     dailyPrice: "",
//     availability: "available",
//     registrationNo: "",
//     features: "",
//     description: "",
//     imageUrl: "",
//     location: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//       dailyPrice: Number(formData.dailyPrice),
//       bookingCount: 0,
//       creatorName: user?.displayName,
//       creatorEmail: user?.email,
//       createdAt: new Date(),
//     };

//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/api/cars`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (res.ok && (data.insertedId || data.acknowledged)) {
//         Swal.fire("Success", "Car added successfully!", "success");
//         setFormData({
//           model: "",
//           dailyPrice: "",
//           availability: "available",
//           registrationNo: "",
//           features: "",
//           description: "",
//           imageUrl: "",
//           location: "",
//         });
//       } else {
//         throw new Error(data?.error || "Unknown error");
//       }
//     } catch (error) {
//       toast.error("Failed to add car");
//       console.error("AddCar Error:", error);
//     }
//   };

//   return (
//     <section className="min-h-screen px-4 py-12">
//       <Helmet>
//         <title>Add Car | SwiftCarz</title>
//       </Helmet>

//       <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-10">
//         <h2 className="text-4xl font-bold text-center mb-10 text-[#DD6B20] dark:text-white">
//           Add a Car for Rent
//         </h2>

//         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
//           <input
//             type="text"
//             name="model"
//             placeholder="Car Model"
//             value={formData.model}
//             onChange={handleChange}
//             className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
//             required
//           />

//           <input
//             type="number"
//             name="dailyPrice"
//             placeholder="Daily Rental Price ($)"
//             value={formData.dailyPrice}
//             onChange={handleChange}
//             className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
//             required
//           />

//           <select
//             name="availability"
//             value={formData.availability}
//             onChange={handleChange}
//             className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
//           >
//             <option value="available">Available</option>
//             <option value="unavailable">Unavailable</option>
//           </select>

//           <input
//             type="text"
//             name="registrationNo"
//             placeholder="Vehicle Registration Number"
//             value={formData.registrationNo}
//             onChange={handleChange}
//             className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
//             required
//           />

//           <input
//             type="text"
//             name="features"
//             placeholder="Features (comma separated)"
//             value={formData.features}
//             onChange={handleChange}
//             className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
//           />

//           <input
//             type="url"
//             name="imageUrl"
//             placeholder="Car Image URL"
//             value={formData.imageUrl}
//             onChange={handleChange}
//             className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
//             required
//           />

//           <input
//             type="text"
//             name="location"
//             placeholder="Pickup Location"
//             value={formData.location}
//             onChange={handleChange}
//             className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
//             required
//           />

//           <input
//             type="text"
//             value={user?.displayName || ""}
//             readOnly
//             className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
//           />

//           <input
//             type="email"
//             value={user?.email || ""}
//             readOnly
//             className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
//           />

//           <div className="md:col-span-2">
//             <textarea
//               name="description"
//               placeholder="Car Description"
//               value={formData.description}
//               onChange={handleChange}
//               className="textarea textarea-bordered w-full dark:bg-gray-800 dark:text-white"
//               required
//             />
//           </div>

//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               className="w-full bg-[#DD6B20] text-white py-3 rounded-lg font-semibold hover:bg-[#cc5c14] transition cursor-pointer"
//             >
//               Add Car
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default AddCar;




import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddCar = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    model: "",
    dailyPrice: "",
    availability: "available",
    registrationNo: "",
    features: "",
    description: "",
    imageUrl: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      dailyPrice: Number(formData.dailyPrice),
      bookingCount: 0,
      creatorName: user?.displayName,
      creatorEmail: user?.email,
      createdAt: new Date(),
    };

    try {
      // ✅ Get token from localStorage (must be saved after login)
      const token = localStorage.getItem("token");

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ Send token manually
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && (data.insertedId || data.acknowledged)) {
        Swal.fire("✅ Success", "Car added successfully!", "success");
        setFormData({
          model: "",
          dailyPrice: "",
          availability: "available",
          registrationNo: "",
          features: "",
          description: "",
          imageUrl: "",
          location: "",
        });
      } else {
        throw new Error(data?.error || "Unauthorized or unknown error");
      }
    } catch (error) {
      toast.error("❌ Failed to add car");
      console.error("AddCar Error:", error);
    }
  };

  return (
    <section className="min-h-screen px-4 py-12">
      <Helmet>
        <title>Add Car | SwiftCarz</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#DD6B20] dark:text-white">
          Add a Car for Rent
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
            required
          />

          <input
            type="number"
            name="dailyPrice"
            placeholder="Daily Rental Price ($)"
            value={formData.dailyPrice}
            onChange={handleChange}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
            required
          />

          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>

          <input
            type="text"
            name="registrationNo"
            placeholder="Vehicle Registration Number"
            value={formData.registrationNo}
            onChange={handleChange}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
            required
          />

          <input
            type="text"
            name="features"
            placeholder="Features (comma separated)"
            value={formData.features}
            onChange={handleChange}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          />

          <input
            type="url"
            name="imageUrl"
            placeholder="Car Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Pickup Location"
            value={formData.location}
            onChange={handleChange}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
            required
          />

          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          />

          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          />

          <div className="md:col-span-2">
            <textarea
              name="description"
              placeholder="Car Description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#DD6B20] text-white py-3 rounded-lg font-semibold hover:bg-[#cc5c14] transition cursor-pointer"
            >
              Add Car
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddCar;

