// import React from "react";
// import { Activity } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Button = ({ children, variant = "default", className = "", ...props }) => {
//   const baseStyles =
//     "px-4 py-2 rounded-md font-medium transition-all duration-200";
//   const variants = {
//     default: "bg-green-600 text-white hover:bg-green-400 shadow-md",
//     ghost: "bg-transparent text-green-800 hover:bg-green-100 hover:text-white-shadow",
//   };

//   return (
//     <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// };

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
//           <Activity className="h-8 w-8 text-green-600" />
//           <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
//             MediConnect
//           </span>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center gap-8">
//           <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors">
//             Services
//           </a>
//           <a href="#how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors">
//             How It Works
//           </a>
//           <a href="#doctors" className="text-gray-600 hover:text-orange-600 transition-colors">
//             Doctors
//           </a>
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center gap-3">
//           <Button variant="ghost" onClick={() => navigate("/login")}>
//             Login
//           </Button>
//           <Button onClick={() => navigate("/signup")}>
//             Get Started
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, variant = "default", className = "", ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-all duration-200";
  const variants = {
    default:
      "bg-gradient-to-r from-indigo-900 to-blue-900 text-white shadow-lg hover:from-indigo-700 hover:to-blue-700",
    ghost:
      "bg-transparent text-indigo-900 border border-indigo-900 hover:bg-indigo-900 hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-xl border-b border-gray-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Activity className="h-8 w-8 text-indigo-900" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
            MediConnect
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#services"
            className="text-indigo-900 hover:text-blue-700 transition-colors font-semibold"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="text-indigo-900 hover:text-blue-700 transition-colors font-semibold"
          >
            How It Works
          </a>
          <a
            href="#doctors"
            className="text-indigo-900 hover:text-blue-700 transition-colors font-semibold"
          >
            Doctors
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button onClick={() => navigate("/signup")}>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

