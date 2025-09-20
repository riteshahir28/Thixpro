import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const clientImages = [
  "tab_hand-2.png",
  "tab_hand-3.png",
  "tab_hand-4.png",
  "tab_hand-5.png",
  "tab_hand-6.png",
];

const OurClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="py-16 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
  <div className="flex items-center justify-center gap-8">
  
   <div className="bg-orange-500 w-60 h-60 flex-shrink-0 flex items-center justify-center">
  <h3 className="transform -rotate-90 text-white   font-bold text-3xl">
    Our Clients
  </h3>
</div>

    
    <div className="w-80 flex-1 bg-gray-200 p-8">
      <Slider {...settings}>
        {clientImages.map((img, index) => (
          <div key={index} className="px-4">
            <img 
              src={img} 
              alt={`Client ${index + 1}`} 
              className="w-4/5 mx-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>

  );
};

export default OurClients;
