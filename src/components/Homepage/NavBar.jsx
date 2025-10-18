import React from "react";
import { Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, variant = "default", className = "", ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-all duration-200";
  const variants = {
    default: "bg-orange-500 text-white hover:bg-blue-700 shadow-md",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Activity className="h-8 w-8 text-orange-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent">
            MediConnect
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors">
            Services
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors">
            How It Works
          </a>
          <a href="#doctors" className="text-gray-600 hover:text-orange-600 transition-colors">
            Doctors
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button onClick={() => navigate("/signup")}>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
