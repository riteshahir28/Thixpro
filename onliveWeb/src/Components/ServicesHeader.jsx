import React from "react";

const ServicesHeader = () => {
  return (
    <div className="flex px-40 flex-col md:flex-row items-center justify-between p py-8 px-4 max-w-7xl mx-auto gap-4"
    style={{
        backgroundImage: "url('tech-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
       
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-white">
          Onlive Technologies Services
        </h2>
      </div>

      
      <div>
        <a
          href="https://www.onlivetechnologies.com/contact-us/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-600 transition"
        >
         
           
          <span>Get a query</span>
        </a>
      </div>
    </div>
  );
};

export default ServicesHeader;
