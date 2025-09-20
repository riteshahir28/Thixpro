export default function TechSection() {
  const logos = [
    "2-300x297.png",
    "3-300x297.png",
    "4-300x297.png",
    "5-300x297.png",
    "6-300x297.png",
    "wordpress-icoimg.png",
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="flex justify-center">
          <a
            href="https://www.onlivetechnologies.com/wp-content/uploads/2018/12/our-tech-1.jpg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="our-tech-1.jpg"
              alt="Our Technology"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </a>
        </div>

 
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 place-items-center">
          {logos.map((src, idx) => (
            <div
              key={idx}
              className="w-38 h-38 flex items-center justify-center"
            >
              <img src={src} alt={`logo-${idx}`} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
