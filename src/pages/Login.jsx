// // import { useState, useContext } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import { Helmet } from "react-helmet-async";
// // import { toast } from "react-toastify";
// // import { AuthContext } from "../Context/Provider/AuthProvider";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const { loginUser, createUserWithLoginGoogle } = useContext(AuthContext);

// //   // ✅ Email/Password Login
// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       await loginUser(email, password);
// //       toast.success("Login successful!");
// //       navigate("/");
// //     } catch (err) {
// //       console.error("Login error:", err.message);
// //       setError(err.message || "Login failed");
// //       toast.error("Login failed. Please try again.");
// //     }
// //   };

// //   // ✅ Google Login
// //   const handleGoogleLogin = async () => {
// //     setError("");
// //     try {
// //       await createUserWithLoginGoogle();
// //       toast.success("Logged in with Google!");
// //       navigate("/");
// //     } catch (err) {
// //       console.error("Google login error:", err.message);
// //       setError(err.message || "Google login failed");
// //       toast.error("Google login failed.");
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen px-4">
// //       <Helmet>
// //         <title>Login | SwiftCarz</title>
// //       </Helmet>

// //       <form
// //         onSubmit={handleLogin}
// //         className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl p-8 rounded-2xl space-y-5"
// //       >
// //         <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white">
// //           Login to SwiftCarz
// //         </h2>

// //         {error && <p className="text-red-500 text-sm text-center">{error}</p>}

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //           className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //           className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
// //         />

// //         <button
// //           type="submit"
// //           className="w-full bg-[#DD6B20] text-white py-2 rounded-md font-semibold hover:shadow-md transition cursor-pointer"
// //         >
// //           Login
// //         </button>

// //         <p className="text-sm text-center text-gray-600 dark:text-gray-300">
// //           Don’t have an account?{" "}
// //           <Link to="/register" className="text-[#DD6B20] hover:underline font-medium">
// //             Register here
// //           </Link>
// //         </p>

// //         <div className="divider text-gray-400 dark:text-gray-600">OR</div>

// //         <button
// //           type="button"
// //           onClick={handleGoogleLogin}
// //           className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer dark:text-white"
// //         >
// //           Continue with Google
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import {
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { auth } from "../Context/firebase/firebase.config";
// import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";

// const provider = new GoogleAuthProvider();

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       toast.success("Login successful!");
//       navigate("/");
//     } catch (err) {
//       setError("Invalid email or password");
//       toast.error("Login failed. Please try again.");
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       toast.success("Logged in with Google!");
//       navigate("/");
//     } catch (err) {
//       setError("Google login failed");
//       toast.error("Google login failed.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen px-4">
//       <Helmet>
//         <title>Login | Swiftcarz</title>
//       </Helmet>

//       <form
//         onSubmit={handleLogin}
//         className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl p-8 rounded-2xl space-y-5"
//       >
//         <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white">
//           Login to Swiftcarz
//         </h2>

//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//         />

//         <button
//           type="submit"
//           className="w-full bg-[#DD6B20] text-white py-2 rounded-md font-semibold hover:shadow-md transition cursor-pointer"
//         >
//           Login
//         </button>

//         <p className="text-sm text-center text-gray-600 dark:text-gray-300">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-[#DD6B20] hover:underline font-medium">
//             Register here
//           </Link>
//         </p>

//         <div className="divider text-gray-400 dark:text-gray-600">OR</div>

//         <button
//           type="button"
//           onClick={handleGoogleLogin}
//           className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer dark:text-white"
//         >
//           Continue with Google
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Context/firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Send to backend to set JWT cookie
      await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ Required for cookie
        body: JSON.stringify({
          email: user.email,
          displayName: user.displayName || "User",
        }),
      });

      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
      toast.error("Login failed. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // ✅ Send to backend to set JWT cookie
      await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: user.email,
          displayName: user.displayName || "User",
        }),
      });

      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      setError("Google login failed");
      toast.error("Google login failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <Helmet>
        <title>Login | Swiftcarz</title>
      </Helmet>

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl p-8 rounded-2xl space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white">
          Login to Swiftcarz
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
        />

        <button
          type="submit"
          className="w-full bg-[#DD6B20] text-white py-2 rounded-md font-semibold hover:shadow-md transition cursor-pointer"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#DD6B20] hover:underline font-medium">
            Register here
          </Link>
        </p>

        <div className="divider text-gray-400 dark:text-gray-600">OR</div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer dark:text-white"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Login;

  

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import {
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { auth } from "../Context/firebase/firebase.config";
// import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";

// const provider = new GoogleAuthProvider();

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // ✅ Call backend to set cookie and get token
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({
//           email: user.email,
//           displayName: user.displayName || "User",
//         }),
//       });

//       const data = await res.json();

//       if (res.ok && data.token) {
//         // ✅ Save token to localStorage
//         localStorage.setItem("token", data.token);
//         toast.success("Login successful!");
//         navigate("/");
//       } else {
//         throw new Error("Login failed");
//       }
//     } catch (err) {
//       setError("Invalid email or password");
//       toast.error("Login failed. Please try again.");
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // ✅ Call backend to set cookie and get token
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({
//           email: user.email,
//           displayName: user.displayName || "User",
//         }),
//       });

//       const data = await res.json();

//       if (res.ok && data.token) {
//         // ✅ Save token to localStorage
//         localStorage.setItem("token", data.token);
//         toast.success("Logged in with Google!");
//         navigate("/");
//       } else {
//         throw new Error("Google login backend failed");
//       }
//     } catch (err) {
//       setError("Google login failed");
//       toast.error("Google login failed.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen px-4">
//       <Helmet>
//         <title>Login | Swiftcarz</title>
//       </Helmet>

//       <form
//         onSubmit={handleLogin}
//         className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl p-8 rounded-2xl space-y-5"
//       >
//         <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white">
//           Login to Swiftcarz
//         </h2>

//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
//         />

//         <button
//           type="submit"
//           className="w-full bg-[#DD6B20] text-white py-2 rounded-md font-semibold hover:shadow-md transition cursor-pointer"
//         >
//           Login
//         </button>

//         <p className="text-sm text-center text-gray-600 dark:text-gray-300">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-[#DD6B20] hover:underline font-medium">
//             Register here
//           </Link>
//         </p>

//         <div className="divider text-gray-400 dark:text-gray-600">OR</div>

//         <button
//           type="button"
//           onClick={handleGoogleLogin}
//           className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer dark:text-white"
//         >
//           Continue with Google
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


