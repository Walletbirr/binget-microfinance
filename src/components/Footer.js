import { useRouter } from 'next/router';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaChevronUp, FaPhoneAlt, FaMapMarkerAlt, FaDownload, FaHashtag, FaAddressBook, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const router = useRouter()
  return (
    <footer className="bg-[#f7d708] text-white pt-16 relative z-10">
      {/* Top Icons */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 pb-12 border-b border-orange-500">
        {[
            // { icon: <FaAddressBook />, label: 'OPEN AN ACCOUNT' },
          { icon: <FaMapMarkerAlt />, label: 'BRANCHES' },
          { icon: <FaDownload />, label: 'DOWNLOAD Binget Birr' },
          { icon: <FaHashtag />, label: 'DIAL *626#' },
          { icon: <FaPhoneAlt />, label: 'CONTACT US' }].map(({ icon, label }, i) => (
          <div key={i} className="text-center space-y-2 place-items-center">
            <div className="text-4xl text-blue-900">{icon}</div>
            <p className="font-semibold text-blue-900">{label}</p>
          </div>
        ))}
      </div> */}

      {/* Middle Info */}
      {/* Call to Action */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 py-10 text-sm">
        <div>
          <h5 onClick={()=>router.push('/about')} className="cursor-pointer text-orange-500 font-bold mb-2">ABOUT US</h5>
        </div>
        <div>
          <h5 className="text-orange-500 font-bold mb-2">PRODUCTS & SERVICES</h5>
          <ul className="space-y-1">
            <li onClick={()=>router.push('/products/credit_products')} className="cursor-pointer ">Credit Products</li>
            <li onClick={()=>router.push('/products/saving_products')} className="cursor-pointer">Saving Products</li>
          </ul>
        </div>
        <div>
          <h5 className="text-orange-500 font-bold mb-2">Fin-Tech</h5>
          <ul className="space-y-1">
            <li  onClick={()=>router.push('/products/mobile_money')} className="cursor-pointer ">Mobile Money</li>
          </ul>
        </div>
        <div>
          <h5 className="text-orange-500 font-bold mb-2">CONTACT US</h5>
          <p>Bole Road, Around Japan Embacy, Rang Building 11th Floor</p>
          <p>info@bmf.com</p>
          <p>+251-12-345-6789</p>
        </div>
      </div>

      {/* Visitor Counter & Social */}


      {/* Bottom bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-orange-500">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2">
            {/* <FaGlobe className="text-xl" />
            <button className="bg-gray-100 text-black text-xs px-3 py-1 rounded-full">LIGHT</button> */}
          </div>
          <p className="mt-2 md:mt-0">© {new Date().getFullYear()} Copyright BINGET Microfinance. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Developed By</span>
            <div className="flex items-center gap-1">
              {/* <div className="w-6 h-6 bg-red-600 rotate-45"></div> */}
              <span>BINGET Tech</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <div onClick={() => router.push('#')} className="fixed bottom-6 right-6 bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
        <FaChevronUp className="text-white" />
      </div>
    </footer>
  );
};

export default Footer;
