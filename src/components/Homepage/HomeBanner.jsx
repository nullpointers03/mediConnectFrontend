import React from "react";
import { Heart, Video, Phone, Clock, Shield, UserCheck, Star } from "lucide-react";
import heroDoctor from "../../assets/heroDoctor.jpg";
const HomeBanner = () => {
  return (
    <section className="relative w-full m- min-h-[80vh]  flex items-center overflow-hidden bg-gradient-to-r from-blue-300 to-blue-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroDoctor}
          alt="Doctor Consultation"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 space-y-6 max-w-2xl">
          {/* Tagline */}
          <div className="flex items-center gap-2 bg-blue-60 text-blue-600 px-4 py-2 rounded-full w-fit text-sm font-medium shadow-sm">
            <Heart className="w-4 h-4" />
            Healthcare at Your Doorstep
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Doctor Consultations <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 bg-clip-text text-transparent">
              From Home
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-xl">
            Connect with qualified doctors instantly through video calls. Get
            medical tests, AI-powered diagnosis, and medicines delivered — all
            from the comfort of your home.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all">
              <Video className="w-5 h-5" />
              Book Consultation
            </button>
            <button className="flex items-center gap-2 border-2 border-blue-600 text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all">
              <Phone className="w-5 h-5" />
              Emergency Call
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 pt-8 text-gray-600 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              24/7 Available
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              Secure & Private
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-blue-500" />
              Verified Doctors
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-blue-500" />
              7-Day OP Validity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
