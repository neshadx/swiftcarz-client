

// import { useState, useContext, useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { FiSun, FiMoon } from "react-icons/fi";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const { user, loading, logout } = useContext(AuthContext);
//   const [isOpen, setIsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(() => {
//     const stored = localStorage.getItem("theme");
//     if (stored) return stored === "dark";
//     return window.matchMedia("(prefers-color-scheme: dark)").matches;
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const theme = darkMode ? "dark" : "light";
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode((prev) => !prev);
//   };

//   const handleLogout = () => {
//     logout()
//       .then(() => {
//         toast.success("Logged out!");
//         navigate("/login");
//       })
//       .catch((error) => {
//         console.error("Logout error:", error.message);
//         toast.error("Logout failed");
//       });
//   };

//   const navLinkStyle = ({ isActive }) =>
//     isActive ? "text-[#DD6B20] font-semibold" : "hover:text-[#DD6B20] transition";

//   const buttonStyle =
//     "border border-[#DD6B20] px-4 py-1 rounded text-sm transition hover:bg-[#DD6B20] hover:text-white text-[#DD6B20] dark:text-white dark:border-white";

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-[#DD6B20]">SwiftCarz</Link>

//         {/* Desktop nav */}
//         <div className="hidden lg:flex gap-6 items-center text-gray-800 dark:text-white">
//           <NavLink to="/" className={navLinkStyle}>Home</NavLink>
//           <NavLink to="/available" className={navLinkStyle}>Available Cars</NavLink>
//           {user && (
//             <>
//               <NavLink to="/addCar" className={navLinkStyle}>Add Car</NavLink>
//               <NavLink to="/myCars" className={navLinkStyle}>My Cars</NavLink>
//               <NavLink to="/myBookings" className={navLinkStyle}>My Bookings</NavLink>
//             </>
//           )}
//         </div>

//         {/* Desktop buttons */}
//         <div className="hidden lg:flex items-center gap-4">
//           <button onClick={toggleTheme} className="text-xl text-[#DD6B20] dark:text-white">
//             {darkMode ? <FiSun /> : <FiMoon />}
//           </button>

//           {!loading && user ? (
//             <>
//               <img src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"} alt="User" className="w-8 h-8 rounded-full" title={user.displayName} />
//               <button onClick={handleLogout} className="border border-red-400 px-3 py-1 rounded hover:bg-red-400 text-sm text-black dark:text-white">Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className={buttonStyle}>Login</Link>
//               <Link to="/register" className={buttonStyle}>Register</Link>
//             </>
//           )}
//         </div>

//         {/* Mobile menu toggle button */}
//         <div className="lg:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[#DD6B20] font-bold">
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile dropdown menu */}
//       <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white dark:bg-gray-900 px-6 pb-6 text-gray-800 dark:text-white transition-all duration-300`}>
//         <div className="flex flex-col gap-3 mt-3">
//           <NavLink to="/" className={navLinkStyle}>Home</NavLink>
//           <NavLink to="/available" className={navLinkStyle}>Available Cars</NavLink>
//           {user && (
//             <>
//               <NavLink to="/addCar" className={navLinkStyle}>Add Car</NavLink>
//               <NavLink to="/myCars" className={navLinkStyle}>My Cars</NavLink>
//               <NavLink to="/myBookings" className={navLinkStyle}>My Bookings</NavLink>
//             </>
//           )}
//         </div>

//         <div className="mt-6 border-t pt-5">
//           {!loading && user ? (
//             <>
//               <div className="flex items-center gap-2 mb-4">
//                 <img src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"} className="w-8 h-8 rounded-full" />
//                 <span>{user.displayName}</span>
//               </div>
//               <button onClick={handleLogout} className="w-full border border-red-400 py-1 rounded hover:bg-red-400 text-sm">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="block text-center border border-[#DD6B20] py-1 rounded hover:bg-[#DD6B20] hover:text-white text-sm">Login</Link>
//               <Link to="/register" className="block text-center border border-[#DD6B20] py-1 rounded hover:bg-[#DD6B20] hover:text-white mt-2 text-sm">Register</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState, useContext, useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { FiSun, FiMoon } from "react-icons/fi";
// import { toast } from "react-toastify";

// const PRIMARY   = "#065F46"; // emerald-800 (navbar bg)
// const SECONDARY = "#10B981"; // emerald-500 (active link)
// const ACCENT    = "#F59E0B"; // amber-500  (brand accent)

// const Navbar = () => {
//   const { user, loading, logout } = useContext(AuthContext);
//   const [isOpen, setIsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(() => {
//     const stored = localStorage.getItem("theme");
//     if (stored) return stored === "dark";
//     return window.matchMedia("(prefers-color-scheme: dark)").matches;
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const theme = darkMode ? "dark" : "light";
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [darkMode]);

//   const toggleTheme = () => setDarkMode((p) => !p);

//   const handleLogout = () => {
//     logout()
//       .then(() => {
//         toast.success("Logged out!");
//         navigate("/login");
//       })
//       .catch((e) => {
//         console.error("Logout error:", e.message);
//         toast.error("Logout failed");
//       });
//   };

//   // active/hover color = SECONDARY (green), base text = white
//   const navLinkStyle = ({ isActive }) =>
//     isActive
//       ? "text-emerald-300 font-semibold"
//       : "text-white/90 hover:text-emerald-200 transition-colors";

//   // unified two button styles for the whole app (filled / outline)
//   const btnFilled  = "px-4 py-1 rounded text-sm bg-white text-slate-900 hover:opacity-90 transition";
//   const btnOutline = "px-4 py-1 rounded text-sm border border-white/80 text-white hover:bg-white hover:text-slate-900 transition";

//   return (
//     <nav
//       className={`w-full sticky top-0 z-50 text-white shadow`}
//       style={{ backgroundColor: PRIMARY }}
//     >
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Brand */}
//         <Link to="/" className="text-2xl font-bold tracking-wide">
//           Swift<span style={{ color: ACCENT }}>Carz</span>
//         </Link>

//         {/* Desktop nav */}
//         <div className="hidden lg:flex gap-6 items-center">
//           <NavLink to="/" className={navLinkStyle}>Home</NavLink>
//           <NavLink to="/available" className={navLinkStyle}>Available Cars</NavLink>
//           {user && (
//             <>
//               <NavLink to="/addCar" className={navLinkStyle}>Add Car</NavLink>
//               <NavLink to="/myCars" className={navLinkStyle}>My Cars</NavLink>
//               <NavLink to="/myBookings" className={navLinkStyle}>My Bookings</NavLink>
//             </>
//           )}
//         </div>

//         {/* Desktop actions */}
//         <div className="hidden lg:flex items-center gap-4">
//           <button
//             onClick={toggleTheme}
//             className="text-xl hover:text-emerald-200 transition"
//             title={darkMode ? "Light mode" : "Dark mode"}
//           >
//             {darkMode ? <FiSun /> : <FiMoon />}
//           </button>

//           {!loading && user ? (
//             <>
//               <img
//                 src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"}
//                 alt="User"
//                 className="w-8 h-8 rounded-full object-cover"
//                 title={user.displayName}
//                 referrerPolicy="no-referrer"
//               />
//               <button onClick={handleLogout} className={btnOutline}>Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className={btnFilled}>Login</Link>
//               <Link to="/register" className={btnOutline}>Register</Link>
//             </>
//           )}
//         </div>

//         {/* Mobile menu toggle */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-2xl font-bold hover:text-emerald-200 transition-colors"
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile dropdown */}
//       <div
//         className={`${isOpen ? "block" : "hidden"} lg:hidden px-6 pb-6 text-white transition-all duration-300`}
//         style={{ backgroundColor: PRIMARY }}
//       >
//         <div className="flex flex-col gap-3 mt-3">
//           <NavLink to="/" onClick={()=>setIsOpen(false)} className={navLinkStyle}>Home</NavLink>
//           <NavLink to="/available" onClick={()=>setIsOpen(false)} className={navLinkStyle}>Available Cars</NavLink>
//           {user && (
//             <>
//               <NavLink to="/addCar" onClick={()=>setIsOpen(false)} className={navLinkStyle}>Add Car</NavLink>
//               <NavLink to="/myCars" onClick={()=>setIsOpen(false)} className={navLinkStyle}>My Cars</NavLink>
//               <NavLink to="/myBookings" onClick={()=>setIsOpen(false)} className={navLinkStyle}>My Bookings</NavLink>
//             </>
//           )}
//         </div>

//         <div className="mt-6 border-t border-white/20 pt-5">
//           {!loading && user ? (
//             <>
//               <div className="flex items-center gap-2 mb-4">
//                 <img
//                   src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"}
//                   className="w-8 h-8 rounded-full object-cover"
//                   alt="User"
//                   referrerPolicy="no-referrer"
//                 />
//                 <span className="text-white/90">{user.displayName}</span>
//               </div>
//               <button onClick={handleLogout} className="w-full px-3 py-1 rounded border border-white/80 text-white hover:bg-white hover:text-slate-900 text-sm transition">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="block text-center px-3 py-1 rounded bg-white text-slate-900 hover:opacity-90 text-sm">
//                 Login
//               </Link>
//               <Link to="/register" className="block text-center mt-2 px-3 py-1 rounded border border-white/80 text-white hover:bg-white hover:text-slate-900 text-sm transition">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




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
    setDarkMode((prev) => !prev);
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

  // Updated: Smoother active link style
  const navLinkStyle = ({ isActive }) =>
    isActive 
      ? "text-white bg-[#DD6B20] px-3 py-1 rounded font-medium" 
      : "text-gray-700 dark:text-gray-200 hover:text-[#DD6B20] dark:hover:text-[#DD6B20] transition-colors";

  // Updated: More polished button style
  const buttonStyle =
    "border border-[#DD6B20] px-4 py-1 rounded-md text-sm font-medium transition-all hover:bg-[#DD6B20] hover:text-white hover:shadow-md text-[#DD6B20] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900";

  return (
    <nav className="bg-gradient-to-r from-[#1a365d] to-[#153e75] dark:from-gray-800 dark:to-gray-900 shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-white hover:text-[#DD6B20] transition-colors"
        >
          SwiftCarz
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-6 items-center">
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

        {/* Desktop buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="text-xl text-white hover:text-[#DD6B20] transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {!loading && user ? (
            <>
              <img 
                src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"} 
                alt="User" 
                className="w-8 h-8 rounded-full border-2 border-[#DD6B20] hover:scale-105 transition-transform" 
                title={user.displayName} 
              />
              <button 
                onClick={handleLogout} 
                className="border border-red-400 px-3 py-1 rounded-md hover:bg-red-400 hover:text-white text-sm text-white transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={buttonStyle}>Login</Link>
              <Link to="/register" className={buttonStyle}>Register</Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-2xl text-white hover:text-[#DD6B20] transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-gradient-to-b from-[#1a365d] to-[#153e75] dark:from-gray-800 dark:to-gray-900 px-6 pb-6 text-white transition-all duration-300 shadow-xl`}>
        <div className="flex flex-col gap-3 mt-3">
          <NavLink to="/" className={navLinkStyle} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/available" className={navLinkStyle} onClick={() => setIsOpen(false)}>Available Cars</NavLink>
          {user && (
            <>
              <NavLink to="/addCar" className={navLinkStyle} onClick={() => setIsOpen(false)}>Add Car</NavLink>
              <NavLink to="/myCars" className={navLinkStyle} onClick={() => setIsOpen(false)}>My Cars</NavLink>
              <NavLink to="/myBookings" className={navLinkStyle} onClick={() => setIsOpen(false)}>My Bookings</NavLink>
            </>
          )}
        </div>

        <div className="mt-6 border-t border-gray-600 pt-5">
          {!loading && user ? (
            <>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"} 
                  className="w-8 h-8 rounded-full border-2 border-[#DD6B20]" 
                />
                <span className="font-medium">{user.displayName}</span>
              </div>
              <button 
                onClick={handleLogout} 
                className="w-full border border-red-400 py-1 rounded-md hover:bg-red-400 hover:text-white text-sm transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="block text-center border border-[#DD6B20] py-1 rounded-md hover:bg-[#DD6B20] hover:text-white text-sm transition-all mb-2"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="block text-center border border-[#DD6B20] py-1 rounded-md hover:bg-[#DD6B20] hover:text-white text-sm transition-all"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
