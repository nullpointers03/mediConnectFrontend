import React from "react";
import { useNavigate } from "react-router-dom";

const SecondSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      title: "Live Consultation",
      description: "Book consultation with doctors instantly",
      icon: "🩺",
      onClick: () =>  alert("Lab test clicked"),
    },
    {
      id: 2,
      title: "Lab Test",
      description: "Home sample collection and analysis",
      icon: "🧪",
      onClick: () => alert("Lab test clicked"),
    },
    {
      id: 3,
      title: "Medicine Delivery",
      description: "Get medicines at your doorstep",
      icon: "💊",
      onClick: () => alert("Medicine delivery clicked"),
    },
    {
      id: 4,
      title: "Multilingual Bot",
      description: "Chat in all languages",
      icon: "🤖",
      onClick: () => alert("Multilingual bot clicked"),
    },
    {
      id: 5,
      title: "3D Disease Models",
      description: "View patient disease in 3D",
      icon: "🧬",
      onClick: () => alert("3D disease model clicked"),
    },
    {
      id: 6,
      title: "Medical Passport",
      description: "Access patient's health history",
      icon: "📋",
      onClick: () => alert("Medical records clicked"),
    },
  ];

  const doctors = [
    { id: 1, name: "Dr. Alice Smith", img: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: 2, name: "Dr. John Doe", img: "https://randomuser.me/api/portraits/men/45.jpg" },
    { id: 3, name: "Dr. Nina Patel", img: "https://randomuser.me/api/portraits/women/15.jpg" },
    { id: 4, name: "Dr. Mark Wilson", img: "https://randomuser.me/api/portraits/men/70.jpg" },
    { id: 5, name: "Dr. Sarah Lee", img: "https://randomuser.me/api/portraits/women/80.jpg" },
    { id: 6, name: "Dr. Raj Mehta", img: "https://randomuser.me/api/portraits/men/20.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 bg-blue-50 w-full">
      <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-16">
        What We Provide
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {features.map(({ id, title, description, icon, onClick }) => (
          <div
            key={id}
            onClick={onClick}
            className="cursor-pointer shadow-md rounded-xl p-6 flex flex-col items-center text-center bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-4">{icon}</div>
            <h4 className="text-lg font-bold mb-2">{title}</h4>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>

      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Meet Our Experienced Doctors (20+ years)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {doctors.map(({ id, name, img }) => (
            <div key={id} className="flex flex-col items-center bg-white rounded-lg shadow p-4">
              <img
                className="w-24 h-24 rounded-full object-cover mb-2"
                src={img}
                alt={name}
                loading="lazy"
              />
              <span className="text-center font-semibold text-gray-700">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 rounded-xl p-8">
        <h3 className="text-3xl font-bold mb-8 text-center text-blue-900">
          Why Choose Our Platform
        </h3>
        <ol className="space-y-6 max-w-xl mx-auto text-gray-700 text-lg">
          <li>
            <span className="font-bold text-blue-700">01</span> Register & Consult <br /> Sign up and book an online OP consultation for your health concern
          </li>
          <li>
            <span className="font-bold text-blue-700">02</span> Connect with Doctor <br /> Available doctors nearby receive your request and start video consultation
          </li>
          <li>
            <span className="font-bold text-blue-700">03</span> Get Tests & Analysis <br /> Home testing service collects samples, AI analyzes results with doctor
          </li>
          <li>
            <span className="font-bold text-blue-700">04</span> Receive Treatment <br /> Get prescribed medicines delivered and AI-powered health guidance
          </li>
        </ol>
      </section>
    </div>
  );
};

export default SecondSection;
