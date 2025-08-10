
// import { Link, NavLink } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0f172a] text-gray-300 py-10 px-4">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//         {/* Logo & Branding */}
//         <div className="flex items-center gap-2">
//           {/* <img src={logo} alt="logo" className="w-8 h-8" /> */}
//           <span className="text-xl font-bold text-[#DD6B20]">Craflin</span>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex gap-6 text-sm">
//           <NavLink to="/terms" className="hover:text-[#DD6B20] transition duration-200">
//             Terms & Conditions
//           </NavLink>
//           <NavLink to="/privacy" className="hover:text-[#DD6B20] transition duration-200">
//             Privacy Policy
//           </NavLink>
//         </div>

//         {/* Social Links */}
//         <div className="flex gap-4 text-lg">
//           <a href="https://www.facebook.com/neshadz/" target="_blank" rel="noreferrer">
//             <FaFacebookF className="hover:text-[#DD6B20] transition duration-200" />
//           </a>
//           <a href="https://twitter.com/0xNeshad" target="_blank" rel="noreferrer">
//             <FaTwitter className="hover:text-[#DD6B20] transition duration-200" />
//           </a>
//           <a href="https://github.com/neshadx" target="_blank" rel="noreferrer">
//             <FaGithub className="hover:text-[#DD6B20] transition duration-200" />
//           </a>
//           <a href="https://www.youtube.com/c/ProgrammingHero" target="_blank" rel="noreferrer">
//             <FaYoutube className="hover:text-[#DD6B20] transition duration-200" />
//           </a>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="mt-8 text-center text-xs text-gray-500">
//         &copy; {new Date().getFullYear()} Craflin. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import { NavLink } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaGithub,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0f172a] text-gray-300 py-10 px-4">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//         {/* Branding */}
//         <div className="flex items-center gap-2">
//           <span className="text-xl font-bold text-[#DD6B20]">SwiftCarz</span>
//         </div>

//         {/* Legal Links */}
//         <div className="flex gap-6 text-sm">
//           <NavLink to="/terms" className="hover:text-[#DD6B20] transition duration-200">
//             Terms & Conditions
//           </NavLink>
//           <NavLink to="/privacy" className="hover:text-[#DD6B20] transition duration-200">
//             Privacy Policy
//           </NavLink>
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4 text-lg">
//           <a href="https://www.facebook.com/neshadz/" target="_blank" rel="noreferrer">
//             <FaFacebookF className="hover:text-[#DD6B20] transition duration-200" />
//           </a>
//           <a href="https://twitter.com/0xNeshad" target="_blank" rel="noreferrer">
//             <FaTwitter className="hover:text-[#DD6B20] transition duration-200" />
//           </a>
//           <a href="https://github.com/neshadx" target="_blank" rel="noreferrer">
//             <FaGithub className="hover:text-[#DD6B20] transition duration-200" />
//           </a>
//           <a href="https://www.youtube.com/c/ProgrammingHero" target="_blank" rel="noreferrer">
//             <FaYoutube className="hover:text-[#DD6B20] transition duration-200" />
//           </a>
//         </div>
//       </div>

//       <div className="mt-8 text-center text-xs text-gray-500">
//         &copy; {new Date().getFullYear()} SwiftCarz. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding - Enhanced */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#DD6B20] hover:text-[#ff9d4b] transition duration-300">
            SwiftCarz
          </span>
        </div>

        {/* Legal Links - Polished */}
        <div className="flex gap-8 text-sm">
          <NavLink 
            to="/terms" 
            className="hover:text-[#DD6B20] transition duration-300 hover:underline underline-offset-4"
          >
            Terms & Conditions
          </NavLink>
          <NavLink 
            to="/privacy" 
            className="hover:text-[#DD6B20] transition duration-300 hover:underline underline-offset-4"
          >
            Privacy Policy
          </NavLink>
        </div>

        {/* Social Icons - Refined */}
        <div className="flex gap-5 text-xl">
          <a 
            href="https://www.facebook.com/neshadz/" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 hover:text-[#DD6B20] hover:scale-110 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://twitter.com/0xNeshad" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 hover:text-[#DD6B20] hover:scale-110 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://github.com/neshadx" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 hover:text-[#DD6B20] hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.youtube.com/c/ProgrammingHero" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 hover:text-[#DD6B20] hover:scale-110 transition duration-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Copyright - Enhanced */}
      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} SwiftCarz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

