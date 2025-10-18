import React from "react";
import {
  Video,
  FlaskConical,
  Pill,
  Brain,
  Calendar,
  FileText,
  LifeBuoy,
  Shield,
  Users
} from "lucide-react";

const services = [
  {
    icon: <Calendar className="w-6 h-6 text-orange-500" />,
    title: "Easy Appointment Booking",
    desc: "Schedule appointments with specialists in seconds. Choose your preferred time and doctor.",
    bg: "bg-purple-50",
  },
  {
    icon: <Video className="w-6 h-6 text-orange-500" />,
    title: "Virtual Consultations",
    desc: "Connect with doctors through secure video calls from the comfort of your home.",
    bg: "bg-orange-50",
  },
  {
    icon: <FileText className="w-6 h-6 text-orange-500" />,
    title: "Digital Health Records",
    desc: "Access your medical history, prescriptions, and test results anytime, anywhere.",
    bg: "bg-blue-50",
  },
  {
    icon: <LifeBuoy className="w-6 h-6 text-orange-500" />,
    title: "24/7 Support",
    desc: "Round-the-clock medical support for urgent consultations and health queries.",
    bg: "bg-green-50",
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "HIPAA Compliant",
    desc: "Your medical data is encrypted and protected with industry-leading security.",
    bg: "bg-red-50",
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: "Family Management",
    desc: "Manage healthcare for your entire family from a single account.",
    bg: "bg-yellow-50",
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-orange-500" />,
    title: "Home Testing",
    desc: "Professional medical testing teams visit your location to collect samples safely.",
    bg: "bg-teal-50",
  },
  {
    icon: <Pill className="w-6 h-6 text-orange-500" />,
    title: "Medicine Delivery",
    desc: "Order prescribed medicines directly through our platform with fast delivery.",
    bg: "bg-indigo-50",
  },
  {
    icon: <Brain className="w-6 h-6 text-orange-500" />,
    title: "AI Health Companion",
    desc: "Get personalized health tips, precautions, and recovery guidance powered by AI.",
    bg: "bg-pink-50",
  },
];

const OurServices = () => {
  return (
    <section id="services" className="w-full bg-[#f9fcfd]  mt-[50px]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Everything You Need for Better Healthcare
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
           Comprehensive healthcare platform designed for modern patients
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bg} mb-4`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
