import React from "react";
import { Star, Stethoscope } from "lucide-react";

const doctors = [
  {
    name: "Dr. Arjun Mehta",
    role: "Cardiologist",
    reviews: 238,
    experience: "15+ years experience",
    img: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
  },
  {
    name: "Dr. Neha Kulkarni",
    role: "Dermatologist",
    reviews: 172,
    experience: "9+ years experience",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Rohan Iyer",
    role: "Pediatrician",
    reviews: 405,
    experience: "11+ years experience",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
  }
];


export default function ExpertDoctors() {
  return (
    <section className="bg-white" id="doctors">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 ">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Our Expert Doctors
        </h2>
        <p className="mt-3 text-center text-slate-500 text-lg">
          Verified and experienced healthcare professionals ready to help
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, idx) => (
            <DoctorCard key={idx} {...doc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorCard({ name, role, reviews, experience, img }) {
  return (
    <div className="group rounded-2xl bg-white p-5 md:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-orange-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.15)]">
      {/* Image */}
      <div className="rounded-2xl bg-slate-50 overflow-hidden">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
          {name}
        </h3>
        <p className="mt-1 text-slate-500">{role}</p>

        {/* Stars + reviews */}
        <div className="mt-3 flex items-center gap-2">
          <Stars count={5} />
          <span className="text-slate-500 text-sm">({reviews} reviews)</span>
        </div>

        {/* Experience */}
        <div className="mt-3 flex items-center gap-2 text-slate-600">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-orange-500 ring-1 ring-orange-100">
            <Stethoscope className="h-4 w-4" />
          </span>
          <span className="text-sm">{experience}</span>
        </div>

        {/* CTA */}
        <button
          className="mt-5 w-full rounded-xl bg-orange-500 px-5 py-3 text-white font-semibold shadow-sm transition-colors duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          type="button"
        >
          Consult Now
        </button>
      </div>
    </div>
  );
}

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-green-500 text-green-500"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
