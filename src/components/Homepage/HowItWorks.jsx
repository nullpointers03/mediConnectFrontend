
import {
  LogIn,         // for Register & Consult
  UserCheck,     // for Connect with Doctor
  FlaskConical,  // for Get Tests & Analysis
  Stethoscope    // for Receive Treatment
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Register & Consult",
      desc:
        "Sign up and book an online OP consultation for your health concern",
      Icon: LogIn,
    },
    {
      n: "02",
      title: "Connect with Doctor",
      desc:
        "Available doctors nearby receive your request and start video consultation",
      Icon: UserCheck,
    },
    {
      n: "03",
      title: "Get Tests & Analysis",
      desc:
        "Home testing service collects samples, AI analyzes results with doctor",
      Icon: FlaskConical,
    },
    {
      n: "04",
      title: "Receive Treatment",
      desc:
        "Get prescribed medicines delivered and AI-powered health guidance",
      Icon: Stethoscope,
    },
  ];

  return (
    <section className="bg-slate-50" id="how-it-works">
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          How <span className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent">
            MediConnect
          </span> Works
        </h2>
        <p className="mt-3 text-center text-slate-500">
          Simple steps to get quality healthcare at your doorstep
        </p>

        <div className="relative mt-10">
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-orange-200 hidden md:block" />
          <ul className="space-y-6">
            {steps.map(({ n, title, desc, Icon }, i) => (
              <li key={n} className="relative flex items-start gap-4">
                <div className="shrink-0">
                  <div className="relative">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white font-bold shadow-md">
                      {n}
                    </span>
                    {i !== steps.length - 1 && (
                      <span className="md:hidden absolute left-1/2 top-12 -translate-x-1/2 h-8 w-[2px] bg-slate-200" />
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="rounded-2xl bg-white shadow-sm ring-1 ring-orange-200 px-5 md:px-6 py-5 md:py-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center ring-1 ring-cyan-100">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-extrabold text-slate-900">
                          {title}
                        </h3>
                        <p className="mt-1 text-slate-500">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
