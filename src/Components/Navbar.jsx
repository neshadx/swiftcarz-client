import { useState, useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Provider/AuthProvider";
import { FiSun, FiMoon } from "react-icons/fi";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const navigate = useNavigate();

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out!");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
        toast.error("Logout failed");
      });
  };

  const navLinkStyle = ({ isActive }) =>
    isActive ? "text-[#DD6B20] font-semibold" : "hover:text-[#DD6B20] transition";

  const buttonStyle =
    "border border-[#DD6B20] px-4 py-1 rounded text-sm transition hover:bg-[#DD6B20] hover:text-white text-[#DD6B20] dark:text-white dark:border-white";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#DD6B20]">SwiftCarz</Link>

        <div className="hidden lg:flex gap-6 items-center text-gray-800 dark:text-white">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/available" className={navLinkStyle}>Available Cars</NavLink>
          {user && (
            <>
              <NavLink to="/addCar" className={navLinkStyle}>Add Car</NavLink>
              <NavLink to="/myCars" className={navLinkStyle}>My Cars</NavLink>
              <NavLink to="/myBookings" className={navLinkStyle}>My Bookings</NavLink>
            </>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button onClick={toggleTheme} className="text-xl text-[#DD6B20] dark:text-white">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {!loading && user ? (
            <>
              <img src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"} alt="User" className="w-8 h-8 rounded-full" title={user.displayName} />
              <button onClick={handleLogout} className="border border-red-400 px-3 py-1 rounded hover:bg-red-400 text-sm text-black dark:text-white">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className={buttonStyle}>Login</Link>
              <Link to="/register" className={buttonStyle}>Register</Link>
            </>
          )}
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[#DD6B20] font-bold">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white dark:bg-gray-900 px-6 pb-6 text-gray-800 dark:text-white transition-all duration-300`}>
        <div className="space-y-2">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/available" className={navLinkStyle}>Available Cars</NavLink>
          {user && (
            <>
              <NavLink to="/addCar" className={navLinkStyle}>Add Car</NavLink>
              <NavLink to="/myCars" className={navLinkStyle}>My Cars</NavLink>
              <NavLink to="/myBookings" className={navLinkStyle}>My Bookings</NavLink>
            </>
          )}
        </div>

        <div className="mt-4 border-t pt-5">
          {!loading && user ? (
            <div className="flex items-center gap-2 mb-2">
              <img src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"} className="w-8 h-8 rounded-full" />
              <span>{user.displayName}</span>
            </div>
          ) : (
            <>
              <Link to="/login" className="block text-center border border-[#DD6B20] py-1 rounded hover:bg-[#DD6B20] hover:text-white">Login</Link>
              <Link to="/register" className="block text-center border border-[#DD6B20] py-1 rounded hover:bg-[#DD6B20] hover:text-white mt-2">Register</Link>
            </>
          )}
          {user && (
            <button onClick={handleLogout} className="w-full border border-red-400 py-1 rounded hover:bg-red-400 mt-4">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
