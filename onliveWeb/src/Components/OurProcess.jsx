import React from "react";

export default function OurProcess() {
  const steps = [
    "MEET",
    "PLAN",
    "DESIGN",
    "DEVELOP",
    "TESTING",
    "LAUNCH",
  ];

  return (
    <section id="newslatter" className="py-16 " style={{
        backgroundImage: "url('tech-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
       
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Process
        </h2>

 
        <h3 className="text-xl text-white mb-12">
          When we work on a project, the mention below process we follow
        </h3>

         
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((label, index) => (
            <div key={index} className="flex flex-col items-center">
               
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-2xl font-bold mb-3">
                {index + 1}
              </div>
               
              <p className="text-white font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
