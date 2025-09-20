import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white ">
  
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
      
        <div>
          <h3 className="text-lg font-semibold mb-4">Web Design</h3>
          <ul className="space-y-2">
            <li><a href="https://www.onlivetechnologies.com/small-business-website-designing/" className="hover:underline">Small Business Website</a></li>
            <li><a href="https://www.onlivetechnologies.com/corporate-website-designing/" className="hover:underline">Corporate Website</a></li>
            <li><a href="https://www.onlivetechnologies.com/ecommerce-website-designing/" className="hover:underline">eCommerce Website</a></li>
            <li><a href="https://www.onlivetechnologies.com/web-designing-company-delhi/" className="hover:underline">Web Designing Company in Delhi</a></li>
            <li><a href="https://www.onlivetechnologies.com/web-designing-company/" className="hover:underline">Web Designing Company</a></li>
          </ul>
        </div>

         
        <div>
          <h3 className="text-lg font-semibold mb-4">Digital Marketing</h3>
          <ul className="space-y-2">
            <li><a href="https://www.onlivetechnologies.com/search-engine-optimization-seo/" className="hover:underline">Search Engine Optimization</a></li>
            <li><a href="https://www.onlivetechnologies.com/social-media-marketing/" className="hover:underline">Social Media Marketing</a></li>
            <li><a href="https://www.onlivetechnologies.com/ppc-management/" className="hover:underline">PPC Management</a></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-4">Web Hosting</h3>
          <ul className="space-y-2">
            <li><a href="https://www.onlivetechnologies.com/linux-web-hosting/" className="hover:underline">Linux Web Hosting</a></li>
            <li><a href="https://www.onlivetechnologies.com/windows-web-hosting/" className="hover:underline">Windows Web Hosting</a></li>
            <li><a href="https://www.onlivetechnologies.com/wordpress-web-hosting/" className="hover:underline">WordPress Web Hosting</a></li>
            <li><a href="https://www.onlivetechnologies.com/reseller-web-hosting/" className="hover:underline">Reseller Hosting</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-4">Software Development</h3>
          <ul className="space-y-2">
            <li><a href="https://www.onlivetechnologies.com/asp-net-mvc-development/" className="hover:underline">ASP.Net MVC Development</a></li>
            <li><a href="https://www.onlivetechnologies.com/nodejs-application-development/" className="hover:underline">NodeJS Development</a></li>
            <li><a href="https://www.onlivetechnologies.com/soa-based-application-development/" className="hover:underline">SOA Based Development</a></li>
            <li><a href="https://www.onlivetechnologies.com/wpf-based-application-development/" className="hover:underline">WPF Based Development</a></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-4">Apps Development</h3>
          <ul className="space-y-2">
            <li><a href="https://www.onlivetechnologies.com/android-apps-development/" className="hover:underline">Android Apps Development</a></li>
            <li><a href="https://www.onlivetechnologies.com/iphone-ios-apps-development/" className="hover:underline">iPhone iOS Apps Development</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-4">Hire us</h3>
          <ul className="space-y-2">
            <li><a href="https://www.onlivetechnologies.com/hire-php-developer/" className="hover:underline">Hire PHP Developer</a></li>
            <li><a href="https://www.onlivetechnologies.com/hire-wordpress-developer/" className="hover:underline">Hire WordPress Developer</a></li>
            <li><a href="https://www.onlivetechnologies.com/hire-seo-executive/" className="hover:underline">Hire SEO Webmaster</a></li>
            <li><a href="https://www.onlivetechnologies.com/hire-magento-developer/" className="hover:underline">Hire Magento Developer</a></li>
            <li><a href="https://www.onlivetechnologies.com/hire-asp-net-developer/" className="hover:underline">Hire ASP.net Developer</a></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="/about-us" className="hover:underline">About us</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Email</h3>
          <p><a href="mailto:info@onlivetechnologies.com" className="hover:underline">info@onlivetechnologies.com</a></p>

          <h3 className="text-lg font-semibold mt-6 mb-4">Call/WhatsApp</h3>
          <p className="space-y-1">
            +91 9235372909<br />
            +91 9170858013<br />
            +91 6387659722<br />
            +91 7905756988<br />
            +91 9990507737<br />
            +91 9794568136
          </p>
        </div>
      </div>

     
      <div className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p>© 2025 Onlive Technologies - All Rights Reserved</p>

          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/onlivetechnologies/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </a>
            <a href="https://twitter.com/onlivetechno" target="_blank" rel="noopener noreferrer" className="hover:underline">
              X
            </a>
            <a href="https://www.instagram.com/onlivetechnologies/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
