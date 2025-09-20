export default function Hero() {
  return (
    <section className="w-full bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
         
        <div className="border-l-4 px-4 rounded-xl border-orange-500">
         
          <h2 className="text-orange-500 text-lg font-semibold mb-3">
            Digital Marketing
          </h2>

          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-6">
            Small ideas can <br /> grow into big <br /> realities
          </h2>

           
          <button
            className="
              bg-gradient-to-r from-orange-500 to-blue-500
              text-white font-semibold
              px-8 py-4 rounded-full
              shadow-md
              hover:scale-105 transition-transform duration-300
            "
          >
            Get Started Now
          </button>
        </div>

        
        <div className="flex justify-center">
          <img
            src="7038058-1536x1024.jpg"
            alt="Digital Marketing Illustration"
            className="w-full max-w-xl rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
}
