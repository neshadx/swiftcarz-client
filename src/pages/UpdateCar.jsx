// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import Swal from "sweetalert2";
// import { Helmet } from "react-helmet-async";

// const UpdateCar = () => {
//   const { id } = useParams();
//   const { user } = useContext(AuthContext);
//   const [formData, setFormData] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/api/cars/${id}`)
//       .then((res) => res.json())
//       .then((data) => setFormData(data))
//       .catch(() => {
//         Swal.fire("Error", "Failed to load car data", "error");
//       });
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { _id, ...payload } = formData;

//     fetch(`${import.meta.env.VITE_API_URL}/api/cars/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         Swal.fire("Success", "Car updated successfully!", "success");
//         navigate("/myCars");
//       })
//       .catch((err) => {
//         Swal.fire("Error", "Failed to update car", "error");
//         console.error(err);
//       });
//   };

//   if (!formData) {
//     return <div className="text-center text-gray-500 py-10">Loading car...</div>;
//   }

//   return (
//     <div className="px-4 py-10 min-h-screen">
//       <Helmet>
//         <title>Update Car | SwiftCarz</title>
//       </Helmet>

//       <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
//         <h2 className="text-3xl font-bold mb-8 text-center text-[#DD6B20] dark:text-white">
//           Update Car Info
//         </h2>

//         <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
//           <input
//             type="text"
//             name="model"
//             value={formData.model}
//             onChange={handleChange}
//             className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//             placeholder="Car Model"
//             required
//           />

//           <input
//             type="number"
//             name="dailyPrice"
//             value={formData.dailyPrice}
//             onChange={handleChange}
//             placeholder="Daily Price"
//             className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//             required
//           />

//           <select
//             name="availability"
//             value={formData.availability}
//             onChange={handleChange}
//             className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//           >
//             <option value="available">Available</option>
//             <option value="unavailable">Unavailable</option>
//           </select>

//           <input
//             type="text"
//             name="registrationNo"
//             value={formData.registrationNo}
//             onChange={handleChange}
//             placeholder="Registration Number"
//             className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//             required
//           />

//           <input
//             type="text"
//             name="features"
//             value={formData.features}
//             onChange={handleChange}
//             placeholder="Features"
//             className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//           />

//           <input
//             type="url"
//             name="imageUrl"
//             value={formData.imageUrl}
//             onChange={handleChange}
//             placeholder="Image URL"
//             className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//             required
//           />

//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             placeholder="Pickup Location"
//             className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//             required
//           />

//           <input
//             type="text"
//             value={formData.creatorName}
//             readOnly
//             className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//           />

//           <input
//             type="email"
//             value={formData.creatorEmail}
//             readOnly
//             className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//           />

//           <div className="md:col-span-2">
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Car Description"
//               className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-white"
//               rows={4}
//               required
//             />
//           </div>

//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               className="w-full bg-[#DD6B20] text-white py-3 rounded-lg font-semibold hover:bg-[#c5530c] transition"
//             >
//               Update Car
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateCar;




import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateCar = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch(() => {
        Swal.fire("Error", "Failed to load car data", "error");
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { _id, ...payload } = formData;

    fetch(`${import.meta.env.VITE_API_URL}/api/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Success", "Car updated successfully!", "success");
        navigate("/myCars");
      })
      .catch((err) => {
        Swal.fire("Error", "Failed to update car", "error");
        console.error(err);
      });
  };

  if (!formData) {
    return (
      <div className="text-center text-gray-500 py-10 dark:text-gray-400">
        Loading car info...
      </div>
    );
  }

  return (
    <div className="px-4 py-10 min-h-screen">
      <Helmet>
        <title>Update Car | SwiftCarz</title>
      </Helmet>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#DD6B20] dark:text-white">
          Update Car Info
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
            placeholder="Car Model"
            required
          />

          <input
            type="number"
            name="dailyPrice"
            value={formData.dailyPrice}
            onChange={handleChange}
            placeholder="Daily Price"
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
            value={formData.registrationNo}
            onChange={handleChange}
            placeholder="Registration Number"
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
            required
          />

          <input
            type="text"
            name="features"
            value={formData.features}
            onChange={handleChange}
            placeholder="Features (comma separated)"
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          />

          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
            required
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Pickup Location"
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
            required
          />

          <input
            type="text"
            value={formData.creatorName}
            readOnly
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          />

          <input
            type="email"
            value={formData.creatorEmail}
            readOnly
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          />

          <div className="md:col-span-2">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Car Description"
              className="textarea textarea-bordered w-full dark:bg-gray-800 dark:text-white"
              rows={4}
              required
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#DD6B20] hover:bg-[#c5530c] text-white py-3 rounded-lg font-semibold transition"
            >
              Update Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;

