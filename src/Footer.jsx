import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineContactMail } from "react-icons/md";
import ViewCounter from './viewcounter';


const Footer = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between px-6 py-6 text-white"
      style={{ backgroundColor: "oklch(20.8% 0.042 265.755)" }}
    >
      {/* Left: Contact Details */}
      <div className="flex flex-col items-start gap-3 mx-4">
        <div className="flex items-center gap-2">
          <MdOutlineContactMail className="w-4 h-4 text-cyan-400" />
          <p className="text-lg font-semibold text-gray-300">Contact Details:</p>
        </div>
        <div className="flex items-center gap-2 mx-5">
          <PhoneIcon className="w-4 h-4 text-cyan-400" />
          <p className="text-gray-400 font-serif">+91 7032760271</p>
        </div>
        <div className="flex items-center gap-2 mx-5">
          <MdOutlineMail className="w-4 h-4 text-cyan-400" />
          <p className="text-gray-400 font-serif">durgalaxmi417@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 mx-5">
          <FaRegCircleUser className="w-4 h-4 text-cyan-400" />
          <p className="text-gray-400 italic">Durga Lakshmi</p>
        </div>
      </div>

      {/* Right: Social Links */}
      <div className="flex items-center gap-4 mt-6 md:mt-0">
        <a
          href="https://www.instagram.com/im_manoj_06/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-5 w-5 hover:text-pink-400" />
        </a>
        <a
          href="mailto:kandhulamanojkumar663@gmail.com"
          aria-label="Send Email"
          title="Send Email"
          className="inline-flex items-center"
        >
          <EnvelopeIcon className="h-5 w-5 text-gray-400 hover:text-blue-300" />
        </a>
        <a
          href="https://github.com/manojcoders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-5 w-5 hover:text-gray-400" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="h-5 w-5 hover:text-blue-300" />
        </a>
        <ViewCounter />
      </div>
    </div>
  );
};

export default Footer;
