
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Context/firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const provider = new GoogleAuthProvider();

const Register = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must have at least one uppercase, one lowercase, and 6+ characters.");
      toast.error("Weak password. Check rules.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL,
      });
      toast.success("Account created successfully!");
      navigate("/");
    } catch (err) {
      toast.error("Registration failed");
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Signed up with Google!");
      navigate("/");
    } catch (err) {
      toast.error("Google sign up failed");
    }
  };

  return (
    <div className="p-8 flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Register | Swiftcarz</title>
      </Helmet>

      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl p-8 rounded-2xl space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-[#DD6B20] dark:text-white">Create Account</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="url"
          placeholder="Profile Image URL"
          className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 right-3 cursor-pointer text-gray-500 dark:text-gray-300"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-[#DD6B20] text-white py-2 rounded-md font-semibold hover:shadow-md transition cursor-pointer"
        >
          Register
        </button>

        <div className="text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-[#DD6B20] hover:underline font-medium">
            Login here
          </Link>
        </div>

        <div className="divider text-gray-400 dark:text-gray-600">OR</div>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer dark:text-white"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Register;

