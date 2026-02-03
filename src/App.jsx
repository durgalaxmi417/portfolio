import React, { useEffect, useState } from 'react';
import { HandThumbDownIcon, HandRaisedIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import './App.css';

import profileImage from './mymainimage.jpeg';
import profile from './myimages2.png';
import AnimatedLine from './AnimatedLine';

import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdPhoneMissed } from "react-icons/md";

import Navbar from "./Navbar";
import Layout from './Layout';
import FlipCard from "./Flipcard";
import Footer from "./Footer";
import DotCursor from './DotCrusor';

import Frentend from './frentend.jpg';
import Backend from './Backend-Development.png';
import Fullstack from './full-stack-web-development.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const roles = ["B. Durga Lakshmi", "Full Stack Developer"];

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Updated roles with your real name
  
  const [index, setIndex] = useState(0);

  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const [prevHours, setPrevHours] = useState("00");
  const [prevMinutes, setPrevMinutes] = useState("00");

  // Timer + Animation
      useEffect(() => {
      const animationTimeout = setTimeout(() => setIsVisible(true), 1000);

      const updateTime = () => {
        const now = new Date();
        const hr = String(now.getHours()).padStart(2, "0");
        const min = String(now.getMinutes()).padStart(2, "0");
        const sec = String(now.getSeconds()).padStart(2, "0");

        setPrevMinutes((prev) => (min !== prev ? prev : prev));
        setPrevHours((prev) => (hr !== prev ? prev : prev));

        setHours(hr);
        setMinutes(min);
        setSeconds(sec);
      };

      const roleInterval = setInterval(() => {
        setIndex((prev) => (prev + 1) % roles.length);
      }, 5000);

      updateTime();
      const interval = setInterval(updateTime, 20000);

      return () => {
        clearInterval(interval);
        clearInterval(roleInterval);
        clearTimeout(animationTimeout);
      };
    }, []);


  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Layout />
        <DotCursor />

        {/* HERO SECTION */}
        <section id="home" className="min-h-screen px-6 md:px-16 bg-[#1b394d] py-10">
          <div className="w-full max-w-7xl mx-auto bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-20 flex flex-col md:flex-row gap-10 shadow-2xl overflow-hidden relative mt-20">

            {/* LEFT TEXT SECTION */}
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-2xl md:text-2xl font-bold text-white mb-4">
                Hi, I’m{" "}
                <span
                  key={index}
                  className="inline-block bg-gradient-to-r from-[#0fe2f2] to-[#3d7be080] bg-clip-text text-transparent animate-flip-clean transition-all duration-1000"
                >
                  {roles[index]}
                </span>
                <HandRaisedIcon className="w-9 h-8 text-[#0fe2f2] inline-block wave ml-2" />
              </h1>

              <p className="text-white/70 text-base md:text-md mb-4 leading-relaxed font-serif">
                I am a passionate Full Stack Developer with strong experience in building responsive,
                user-friendly, and scalable web applications. Skilled in React JS, JavaScript, PHP,
                MySQL, SharePoint (PnP JS), and Tailwind CSS. I love solving real-world problems,
                improving workflow efficiency, and delivering clean, maintainable code.
              </p>

              {/* <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="bg-white/10 text-white text-sm border border-white/20 rounded-full px-4 py-2 backdrop-blur-md hover:bg-white/20 transition duration-200 w-fit"
              >
                View Resume
              </button> */}

              {/* SOCIAL ICONS */}
              <div className="flex-1 flex flex-row flex-wrap space-x-4 mt-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener"><FaInstagram className="w-6 h-7 text-[#0fe2f2]" /></a>
                <a href="https://www.linkedin.com/in/b-durga-lakshmi-ba743860" target="_blank" rel="noopener"><FaLinkedin className="w-6 h-7 text-[#0fe2f2]" /></a>
                <a href="https://github.com/Durgalakshmivulcan" target="_blank" rel="noopener"><FaGithubSquare className="w-6 h-7 text-[#0fe2f2]" /></a>
                <a href="mailto:durgalaxmi417@gmail.com"><HiOutlineMailOpen className="w-6 h-7 text-[#0fe2f2]" /></a>
                <a href="tel:+917032760271"><MdPhoneMissed className="w-6 h-7 text-[#0fe2f2]" /></a>
              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="flex-1 hidden md:flex items-center justify-center relative">
              <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-500 opacity-30 blur-[120px] z-0"></div>
              <div className="relative z-10 w-44 h-44 rounded-full p-[6px] bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition-transform">
                <img
                  src={profileImage}
                  alt="Durga"
                  className="w-full h-full rounded-full object-cover shadow-inner"
                />
              </div>
            </div>
          </div>

          {/* SKILLS + RESUME */}
          <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-start mt-8 mx-8 gap-3">
              <h3 className="text-white text-lg font-semibold flex items-center gap-2">Resume <HandThumbDownIcon className="w-3 h-4 text-[#0fe2f2]" /></h3>

              <div className="flex flex-wrap gap-4">
                <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-white/10 text-white text-sm border border-white/20 rounded-full px-5 py-2 hover:bg-white/20 transition"
>

                  View Resume <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-[#0fe2f2]" />
                </a>

                <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-white/10 text-white text-sm border border-white/20 rounded-full px-5 py-2 hover:bg-white/20 transition"
>

                  Download Resume <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-[#0fe2f2]" />
                </a>
              </div>
            </div>

            {/* SKILL SET */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl">
              <h3 className="text-white text-md font-semibold mb-4">Skill Set</h3>

              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "Tailwind", "ReactJS", "JavaScript", "PHP", "MySQL", "jQuery", "SharePoint (PnP JS)"].map((skill) => (
                  <span key={skill} className="text-white text-xs md:text-sm px-4 py-1.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <section id="about">
            <div className="w-full max-w-7xl mx-auto mt-40 flex flex-col md:flex-row items-center gap-8">

              {/* LEFT IMAGE */}
              <div className="flex justify-start md:w-1/2 mx-8">
                <div className="inline-flex bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
                  <img src={profile} alt="Durga" className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-2xl object-cover" />
                </div>
              </div>

              {/* RIGHT ABOUT TEXT */}
              <div className="md:w-1/2">
                <h2 className="text-[#0fe2f2] text-2xl font-semibold mb-4">About Me</h2>

                <p className={`text-white/70 text-md leading-relaxed font-serif transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  I’m a dedicated Full Stack Developer with hands-on experience in building scalable,
                  user-friendly applications using React, JavaScript, PHP, MySQL, jQuery, and SharePoint.
                  I enjoy writing clean, maintainable code and designing smooth user experiences.
                  I’m always learning new technologies to improve efficiency and productivity.
                </p>
              </div>
            </div>
          </section>

          {/* ANIMATED LINE */}
          <div className="w-full max-w-7xl mx-auto px-6 md:px-0 flex flex-col items-center">
            <AnimatedLine />
          </div>

          {/* TIMER + SUMMARY */}
          <div className="min-h-screen text-black px-4 py-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6">

              {/* TIMER */}
              <div className="w-full md:w-1/2 backdrop-blur-lg border border-gray-300 rounded-2xl shadow-xl p-6">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">🕓 Timer</h2>
                <div className="flex gap-4 flex-wrap justify-center font-serif">
                  <FlipCard value={hours} label="Hours" animate={hours !== prevHours} />
                  <FlipCard value={minutes} label="Minutes" animate={minutes !== prevMinutes} />
                  <FlipCard value={seconds} label="Seconds" animate={false} />
                </div>
              </div>

              {/* SUMMARY SECTION */}
              <div className="w-full md:w-1/2 bg-white bg-opacity-10 text-white p-6 rounded-2xl shadow-xl">
                <h1 className="font-bold text-xl text-[#0fe2f2]">Summary</h1>
                <p className="font-serif">
                  Full Stack Developer with professional experience at VulcanTechs (Visakhapatnam).
                  Skilled in React JS, JavaScript, PHP, MySQL, SharePoint (PnP JS), Tailwind CSS, and jQuery.
                  Contributed to HRMS systems, educational portals, organizational charts, inventory trackers,
                  and capacity calculation tools for large-scale organizations.
                </p>
              </div>
            </div>
          </div>

          {/* CAREER SECTION */}
          <section id="career">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-0 flex flex-col items-center gap-10">
              <h2 className="text-3xl font-bold text-center text-[#0fe2f2]">Career</h2>

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">

                {/* FRONTEND DEVELOPER CARD */}
                <div className="relative group w-full md:w-1/3 h-72 rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-lg">
                  <img src={Frentend} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Frontend Developer</h3>
                    <p className="text-white text-center font-serif">Experienced in React, Tailwind CSS, UI/UX design, and modern interactive web interfaces.</p>
                  </div>
                </div>

                {/* BACKEND CARD */}
                <div className="relative group w-full md:w-1/3 h-72 rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-lg">
                  <img src={Backend} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Backend Developer</h3>
                    <p className="text-white text-center font-serif">Experienced in PHP, MySQL, RESTful APIs, and database design.</p>
                  </div>
                </div>

                {/* FULL STACK CARD */}
                <div className="relative group w-full md:w-1/3 h-72 rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-lg">
                  <img src={Fullstack} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Full Stack Developer</h3>
                    <p className="text-white text-center font-serif ">Builds full applications using React, JavaScript, PHP, MySQL, jQuery, and SharePoint development.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* PROJECTS SECTION */}
            <h2 className="text-2xl font-bold mt-4 mx-4 text-[#0fe2f2]">Projects</h2>

            <div className="w-full max-w-7xl mx-auto mt-10 px-6 md:px-0">

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {/* ARROW PROJECT */}
                <SwiperSlide>
                  <div className="group min-h-[300px] p-6 rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">H360 Project</h3>
                    <p className="text-white/90 text-sm leading-relaxed font-serif">
                      H360 is a hospital outpatient management system that handles patient records, appointment bookings, doctor availability/time slots, and overall outpatient workflow automation.
                    </p>
                  </div>
                </SwiperSlide>

                {/* EDUCATION MANAGEMENT SYSTEM */}
                <SwiperSlide>
                  <div className="group min-h-[300px] p-6 rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Education Management System</h3>
                    <p className="text-white/90 text-sm leading-relaxed font-serif">
                      Student examination portal including question paper creation, online exams,
                      evaluation, correction, and automated results.
                    </p>
                  </div>
                </SwiperSlide>

                {/* GMTS ORGANIZATIONAL CHART */}
                <SwiperSlide>
                  <div className="group min-h-[300px] p-6 rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">GMTS Organizational Chart</h3>
                    <p className="text-white/90 text-sm leading-relaxed font-serif">
                      Dynamic SharePoint organizational chart with role-based visibility,
                      expand/collapse structure, and employee search.
                    </p>
                  </div>
                </SwiperSlide>

                {/* INVENTORY MANAGEMENT SPARES TRACKER */}
                <SwiperSlide>
                  <div className="group min-h-[300px] p-6 rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Inventory Management Spares Tracker</h3>
                    <p className="text-white/90 text-sm leading-relaxed font-serif">
                      Tracks and manages spare parts quotes with enhanced user interaction,
                      efficient data handling, updates, and communication tools.
                    </p>
                  </div>
                </SwiperSlide>

                {/* GLOBAL CMM CAPACITY CALCULATOR */}
                <SwiperSlide>
                  <div className="group min-h-[300px] p-6 rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Global CMM Capacity Calculator</h3>
                    <p className="text-white/90 text-sm leading-relaxed font-serif">
                      SharePoint tool allowing users to download sample sheets, create new records,
                      edit forms, retrieve information, and correct data easily.
                    </p>
                  </div>
                </SwiperSlide>

                {/* VIRTUAL COMMISSIONING PROJECT TRACKER */}
                <SwiperSlide>
                  <div className="group min-h-[300px] p-6 rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Virtual Commissioning Project Tracker</h3>
                    <p className="text-white/90 text-sm leading-relaxed font-serif">
                      Secure SharePoint-based tracker enabling controlled access, employee data
                      protection, and efficient project management workflows.
                    </p>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>

            {/* EDUCATION */}
            <h2 className="text-2xl font-bold mt-4 mx-4 text-[#0fe2f2]">Education</h2>

            <div className="w-full max-w-7xl mx-auto mt-20 px-6 md:px-0">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">

                {/* B.Tech */}
                <div className="rounded-xl p-6 w-full md:w-1/3 text-center shadow-lg bg-white/10 backdrop-blur-lg border border-white/20">
                  <h3 className="text-2xl font-semibold text-white font-serif">
                    Sri Prakash College of Engineering
                  </h3>
                  <p className="text-gray-300 mt-2 font-serif">
                    B.Tech – Electronics & Communication Engineering
                  </p>
                  <p className="mt-4 text-white font-medium font-serif">
                    Percentage: 75%
                  </p>
                  <p className="text-white mt-1 font-serif">2008 – 2012</p>
                </div>

                {/* Intermediate */}
                <div className="rounded-xl p-6 w-full md:w-1/3 text-center shadow-lg bg-white/10 backdrop-blur-lg border border-white/20">
                  <h3 className="text-2xl font-semibold text-white font-serif">
                    Government Junior College
                  </h3>
                  <p className="text-gray-300 mt-2 font-serif">
                    Intermediate (MPC Stream)
                  </p>
                  <p className="mt-4 text-white font-medium font-serif">
                    Percentage: 84%
                  </p>
                  <p className="text-white mt-1 font-serif">2006 – 2008</p>
                </div>

                {/* SSC */}
                <div className="rounded-xl p-6 w-full md:w-1/3 text-center shadow-lg bg-white/10 backdrop-blur-lg border border-white/20">
                  <h3 className="text-2xl font-semibold text-white font-serif">
                    Vivekananda Model High School
                  </h3>
                  <p className="text-gray-300 mt-2 font-serif">
                    Secondary School Certificate (SSC)
                  </p>
                  <p className="mt-4 text-white font-medium font-serif">
                    Percentage: 81%
                  </p>
                  <p className="text-white mt-1 font-serif">2005 – 2006</p>
                </div>

              </div>
            </div>


          </section>

          {/* EXPERIENCE */}
          <section id="experience">
            <h2 className="text-2xl font-bold mt-4 mx-4 text-[#0fe2f2]">Experience</h2>

            <div className="w-full max-w-7xl mx-auto mt-20 px-6 md:px-0 flex flex-col md:flex-row items-center justify-center gap-10">

              {/* SENIOR DEVELOPER */}
              <div className="group border border-gray-700 rounded-xl p-6 w-full max-w-md text-center shadow-lg flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Senior Developer</h3>
                <p className="text-gray-300 text-sm">VulcanTechs, Visakhapatnam</p>
                <p className="text-gray-400 text-sm">(Aug 2022 – Present)</p>
                <p className="mt-2 text-gray-300 font-serif overflow-y-auto">
                  Working as a full stack and SharePoint developer contributing to HR systems,
                  education portals, organizational charts, and capacity trackers.
                </p>
              </div>

              {/* TEACHING EXPERIENCE */}
              <div className="group border border-gray-700 rounded-xl p-6 w-full max-w-md text-center shadow-lg flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Mathematics Teacher</h3>
                <p className="text-gray-300 text-sm">Sri Chaitanya EM School, Visakhapatnam</p>
                <p className="text-gray-400 text-sm">(2015 – 2022)</p>
                <p className="mt-2 text-gray-300 font-serif overflow-y-auto">
                  Worked as a Mathematics faculty for 7 years teaching students and handling academic responsibilities.
                </p>
              </div>

              {/* CONSULTANT */}
              <div className="group border border-gray-700 rounded-xl p-6 w-full max-w-md text-center shadow-lg flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Consultant</h3>
                <p className="text-gray-300 text-sm">Universal Financials, Hyderabad</p>
                <p className="text-gray-400 text-sm">(2012 – 2013)</p>
                <p className="mt-2 text-gray-300 font-serif overflow-y-auto">
                  Assisted USA-based clients with taxation guidance and filing procedures.
                </p>
              </div>

            </div>
          </section>

        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
