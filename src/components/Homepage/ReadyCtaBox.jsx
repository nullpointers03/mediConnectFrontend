import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ReadyCtaBox() {
  const navigate = useNavigate();
  return (
    
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-14 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
          {/* gradient background */}
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(1200px_600px_at_0%_0%,#0ea5e9_0%,transparent_60%),radial-gradient(1200px_600px_at_100%_100%,#10b981_0%,transparent_60%)]" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-700/90 via-blue-500/90 to-orange-500/90" />
          {/* content */}
          <div className="relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-cyan-50/90">
              Join thousands of satisfied patients who trust MediConnect for their
              healthcare needs. Start your journey to better health today—completely
              free.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={() => navigate("/signup")}
                className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-sm transition-colors hover:bg-slate-100"
              >
                Create Free Account
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-lg border border-white/60 bg-transparent px-5 py-3 text-sm font-semibold text-white/95 backdrop-blur transition hover:bg-white/10">
                Talk to Sales
              </button>
            </div>

            {/* divider */}
            <div className="mx-auto mt-8 h-px w-3/4 bg-white/20" />

            {/* logos row (text placeholders) */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center text-white/80 text-sm">
              <span className="opacity-90">HealthFirst</span>
              <span className="opacity-90">CarePlus</span>
              <span className="opacity-90">MedTech</span>
              <span className="opacity-90">WellCare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
