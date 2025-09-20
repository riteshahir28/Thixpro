import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaMobileAlt,
  FaDesktop,
  FaAppStore,
  FaCode,
  FaPen,
  FaGlobe,
  FaBullhorn,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    { icon: <FaDesktop />, label: "Website Design", sub: ["Small Business", "Corporate", "eCommerce"] },
    { icon: <FaAppStore />, label: "Apps Development", sub: ["Android Apps", "iOS Apps"] },
    { icon: <FaCode />, label: "Software Development", sub: ["Custom Software", "ERP Solutions"] },
    { icon: <FaPen />, label: "Graphic Design", sub: ["Logo Design", "Banner Design"] },
    { icon: <FaGlobe />, label: "Web Hosting", sub: ["Shared Hosting", "Dedicated Servers"] },
    { icon: <FaBullhorn />, label: "Digital Marketing", sub: ["SEO Services", "Social Media"] },
    { icon: null, label: "Privacy Policy", sub: [] },
    { icon: null, label: "Hire Us", sub: [] },
  ];

  return (
    <header className="w-full">
 
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
       
          <img
            src="infotech-01.png"
            alt="Logo"
            className="h-12"
          />

           
          <div className="flex items-center gap-6 text-gray-700 text-sm">
            {[ "+91 6387659722", "+91 7905756988", "+91 9170858013" ].map((ph) => (
              <a key={ph} href={`tel:${ph.replace(/ /g,"")}`} className="flex items-center gap-1 hover:text-orange-500">
                <FaMobileAlt className="text-cyan-700" /> {ph}
              </a>
            ))}

            <div className="flex gap-3 text-lg">
              <a href="https://www.facebook.com/onlivetechnologies/" className="hover:text-blue-600"><FaFacebookF /></a>
              <a href="https://twitter.com/onlivetechno" className="hover:text-sky-500"><FaTwitter /></a>
              <a href="https://www.instagram.com/onlivetechnologies/" className="hover:text-pink-600"><FaInstagram /></a>
              <button className="hover:text-gray-900"><FaSearch /></button>
            </div>

            
            <button onClick={()=>setMobileOpen(!mobileOpen)} className="lg:hidden text-2xl">
              <FaBars />
            </button>
          </div>
        </div>
      </div>

 
      <nav className="bg-black text-white font-medium">
        <ul className="hidden lg:flex max-w-5x1 mx-auto px-4">
          {menu.map((m) => (
            <li key={m.label} className="relative group">
              <button className="flex items-center gap-2 px-4 py-4 hover:bg-gray-800 text-sm">
                {m.icon} {m.label} {m.sub.length>0}
              </button>
              {m.sub.length>0 && (
                <ul className="absolute left-0 mt-1 bg-white text-gray-700 shadow-md rounded hidden group-hover:block">
                  {m.sub.map((s) => (
                    <li key={s}>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">{s}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

         
        {mobileOpen && (
          <ul className="lg:hidden flex flex-col px-4 py-2 space-y-2">
            {menu.map((m) => (
              <li key={m.label}>
                <div className="font-semibold flex items-center gap-2">{m.icon} {m.label}</div>
                {m.sub.length>0 && (
                  <ul className="pl-6 mt-1 text-sm text-gray-300 space-y-1">
                    {m.sub.map((s) => <li key={s}><a href="#" className="hover:text-orange-400">{s}</a></li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
