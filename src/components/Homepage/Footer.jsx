import React from "react";
import { HeartPulse } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-white">
                <HeartPulse className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold text-slate-900">MediConnect</span>
            </div>
            <p className="mt-3 text-slate-500">
              Connecting you with quality healthcare, anytime, anywhere.
            </p>
          </div>

          {/* columns */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Features</a></li>
              <li><a href="#" className="hover:text-slate-900">Pricing</a></li>
              <li><a href="#" className="hover:text-slate-900">For Doctors</a></li>
              <li><a href="#" className="hover:text-slate-900">For Patients</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About Us</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
              <li><a href="#" className="hover:text-slate-900">HIPAA Compliance</a></li>
              <li><a href="#" className="hover:text-slate-900">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 h-px bg-slate-200" />

        <div className="py-5 text-center text-sm text-slate-500">
          © 2025 MediConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
