'use client';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div>
      {' '}
      {/* Social Media Links */}
      <div className="flex justify-center gap-6 m-8 p-10 mx-10">
        <a
          href="https://www.facebook.com/shahzadkiyani786?mibextid=JRoKGi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-[#FEBF00] border-2 rounded-full border-gray-400 p-4"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/shahzad-kiani-41719a2b5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-[#FEBF00] border-2 rounded-full border-gray-400 p-4"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://x.com/Shahzadkiani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-[#FEBF00] border-2 rounded-full border-gray-400 p-4"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
