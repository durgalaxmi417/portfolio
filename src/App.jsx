import React, { useEffect, useState } from 'react';
import { HandThumbDownIcon } from "@heroicons/react/24/outline";
import { HandRaisedIcon } from '@heroicons/react/24/outline';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import './App.css';
import profileImage from './1711643214041.jpg';
import profile from './profile.png';
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
import Backend from './backenddeveloper.png';
import Fullstack from './fullstack.webp';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = ["Manoj Kandhula", "Full Stack Developer"];
  const [index, setIndex] = useState(0);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const [prevHours, setPrevHours] = useState("00");
  const [prevMinutes, setPrevMinutes] = useState("00");
  // const [istTime, setIstTime] = useState(new Date());
  // console.log("About Me visibility:", isVisible);
  useEffect(() => {
    // 1. Trigger animation after 1 second
    const animationTimeout = setTimeout(() => setIsVisible(true), 1000);

    // 2. Session Timer
    const updateTime = () => {

      const now = new Date();
      const hr = String(now.getHours()).padStart(2, "0");
      const min = String(now.getMinutes()).padStart(2, "0");
      const sec = String(now.getSeconds()).padStart(2, "0");

      if (min !== minutes) setPrevMinutes(minutes);
      if (hr !== hours) setPrevHours(hours);

      setHours(hr);
      setMinutes(min);
      setSeconds(sec);
    };


    // 3. Role Rotator
    const roleInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    // 4. Live IST Time

    // updateIST(); // initial call
    // const istInterval = setInterval(updateIST, 1000);

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [hours, minutes]);


  return (
    //  <div className="overflow-x-hidden min-h-screen">

    <>
      <div className="overflow-x-hidden">
        <>
          <div className="scroll-smooth">

            <Navbar />
            <Layout />
            <DotCursor />

          </div>
        </><section className="min-h-screen px-6 md:px-16 bg-[#0a0a23] py-10">
          <section id="home">
            {/* 👤 Hero Section */}
            <div className="w-full max-w-7xl mx-auto bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-20 flex flex-col md:flex-row gap-10 shadow-2xl overflow-hidden relative mt-20">

              {/* Left Column: Text */}
              <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-2xl md:text-2xl font-bold text-white mb-4">
                  Hi, I’m{" "}
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent animate-flip-clean  transition-all duration-1000"
                  >
                    {roles[index]}
                  </span>
                  <HandRaisedIcon className="w-9 h-8 text-cyan-400 inline-block wave origin-[70%_70%] ml-2" />
                </h1>


                <p className="text-white/70 text-base md:text-md mb-4 leading-relaxed font-serif ">
                  Im a full-stack web developer who builds responsive and scalable applications.
                  I specialize in JavaScript, React for the frontend, and Node.js for backend development.
                  With Tailwind CSS, I bring modern UI ideas to life and keep my codebase clean and efficient`.
                </p>
                <button
                  onClick={() => window.open('https://manoj-resume.vercel.app/', '_blank')}
                  className="bg-white/10 text-white text-sm border border-white/20 rounded-full px-4 py-2 backdrop-blur-md hover:bg-white/20 transition duration-200 w-fit"
                >
                  View Resume App
                </button>


                <div className="flex-1 flex flex-row flex-wrap space-x-4 mt-4">
                  <a href="https://www.instagram.com/im_manoj_06/" target="_blank" rel="noopener noreferrer"> <FaInstagram className="w-6 h-7 text-cyan-400" /></a>
                  <a href="https://www.linkedin.com/in/kandhula-manoj-kumar/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-6 h-7 text-cyan-400" /> </a>

                  <a href="https://github.com/manojcoders" target="_blank" rel="noopener noreferrer"> <FaGithubSquare className="w-6 h-7 text-cyan-400" /></a>
                  <a href="mailto:kandhulamanojkumar663@gmail.com" aria-label="Send Email" title="Send Email" className="inline-flex items-center"><HiOutlineMailOpen className="w-6 h-7 text-cyan-400 wave" /></a>
                  <a href="tel:+91 9491779518"><MdPhoneMissed className="w-6 h-7 text-cyan-400" /></a>
                </div>

              </div>

              {/* Right Column: Profile Image */}
              <div className="flex-1 hidden md:flex items-center justify-center relative">
                <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-500 opacity-30 blur-[120px] z-0"></div>
                <div className="relative z-10 w-44 h-44 rounded-full p-[6px] bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-300">
                  <img
                    src={profileImage}
                    alt="Manoj"
                    className="w-full h-full rounded-full object-cover border-2 border-white/10 shadow-inner" />
                </div>
              </div>
            </div>
          </section>
          <div className="w-full max-w-7xl mx-auto mt-20 px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 👈 Resume - Left Column */}
            <div className="flex flex-col items-start mt-8 mx-8 gap-3">

              {/* Title with Hand Icon */}
              <h3 className="text-white text-lg font-semibold flex items-center gap-2">
                Resume
                <HandThumbDownIcon className="w-3 h-4 text-cyan-400 wave" />
              </h3>

              {/* Buttons Row */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 text-white text-sm border border-white/20 rounded-full px-5 py-2 backdrop-blur-md hover:bg-white/20 transition"
                >
                  View Resume
                  <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-cyan-400" />
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 bg-white/10 text-white text-sm border border-white/20 rounded-full px-5 py-2 backdrop-blur-md hover:bg-white/20 transition"
                >
                  Download Resume
                  <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-cyan-400" />
                </a>
              </div>

            </div>

            {/* 👉 Skill Set Card - Right Column */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl">
              <h3 className="text-white text-md font-semibold mb-4">Skill Set</h3>
              <div className="flex flex-wrap gap-3">
                {["HTML", "Tailwind", "ReactJS", "Node.js", "MongoDB", "MySQL", "Spfx", "PHP", "CSS",].map((skill) => (
                  <span
                    key={skill}
                    className="text-white text-xs md:text-sm px-4 py-1.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <section id="about">
            <div className="w-full max-w-7xl mx-auto mt-40 px-6 md:px-0 flex flex-col md:flex-row items-center md:items-start gap-8">

              {/* 👈 Left: Image aligned to the left inside its flex column */}
              <div className="flex justify-start md:w-1/2 mx-8">
                <div className="inline-flex bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
                  <img
                    src={profile}
                    alt="Manoj"
                    className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-cover rounded-2xl"
                  />

                </div>
              </div>

              {/* 👉 Right: About Me section */}
              <div className="md:w-1/2">
                <h2 className="text-green-300 text-2xl font-semibold mb-4">About Me</h2>
                <p
                  className={`text-white/70 text-md leading-relaxed font-serif space-y-2 transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                I'm a passionate full-stack web developer focused on building responsive, user-friendly applications.<br />
                I work extensively with React for the frontend and Node.js for the backend.<br />
                My strength lies in creating clean, intuitive UI/UX using Tailwind CSS and modern web standards.<br />
                I enjoy solving real-world problems with scalable and maintainable code.<br />
                I believe in writing readable, reusable, and efficient code.<br />
                Currently, I'm exploring cloud deployment and performance optimization across the stack.

                </p>
              </div>
            </div>
          </section>



          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center gap-6">
            <AnimatedLine />
          </div>


          <div className="min-h-screen text-black px-4 py-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6">
              {/* Timer Card */}
              <div className="w-full md:w-1/2 backdrop-blur-lg border border-gray-300 rounded-2xl shadow-xl p-6">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">🕓 Timer</h2>
                <div className="flex gap-4 flex-wrap justify-center font-serif">
                  <FlipCard value={hours} label="Hours" animate={hours !== prevHours} />
                  <FlipCard value={minutes} label="Minutes" animate={minutes !== prevMinutes} />
                  <FlipCard value={seconds} label="Seconds" animate={false} />
                </div>
              </div>

              {/* Paragraph Section */}
              <div className="w-full md:w-1/2 bg-white bg-opacity-10 text-white p-6 rounded-2xl shadow-xl">
                <h1 className="font-bold text-xl text-green-300">Summary</h1>
                <p ClassName="font-serif">
                  Full-stack developer with professional experience at <strong>VulcanTechs</strong>,
                  specializing in building modern web applications using <strong>React</strong>, <strong>Node.js</strong>,
                  <strong>MongoDB</strong>, and <strong>MySQL</strong>. Proficient in developing and customizing
                  <strong> SharePoint</strong> solutions using <strong>PnP JS</strong>, with a focus on scalable architecture,
                  API integration, and seamless user experience.
                </p>
              </div>
            </div>
          </div>
          <section id="career">
            <div className="w-full max-w-7xl mx-auto  px-6 md:px-0 flex flex-col items-center gap-10">
              {/* Section Heading */}
              <h2 className="text-3xl font-bold text-center text-green-300">Career</h2>

              {/* Cards Container */}
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">

                {/* Card 1 - Frontend Developer */}
                <div className="relative group w-full md:w-1/3 h-72 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                  <img src={Frentend} alt="Frontend Developer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Frontend Developer</h3>
                    <p className="text-white text-center font-serif ">Specialized in React, Tailwind,Frameworks and UI/UX designs for modern web apps.</p>
                  </div>
                </div>

                {/* Card 2 - Backend Developer */}
                <div className="relative group w-full md:w-1/3 h-72 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                  <img src={Backend} alt="Backend Developer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Backend Developer</h3>
                    <p className="text-white text-center font-serif ">Expert in Node.js, Laravel, RESTful APIs,Php and database design.</p>
                  </div>
                </div>

                {/* Card 3 - Full Stack Developer */}
                <div className="relative group w-full md:w-1/3 h-72 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                  <img src={Fullstack} alt="Full Stack Developer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Full Stack Developer</h3>
                    <p className="text-white text-center font-serif ">Builds full applications using React, Node.js, APIs, and MySQL, MongoDB.</p>
                  </div>
                </div>

              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4 mx-4 text-green-300">Projects</h2>
            <div className="w-full max-w-7xl mx-auto mt-20 px-6 md:px-0 flex flex-col items-center gap-10">
              {/* Cards Container */}
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">

                {/* Card 1 - Competency Skills (Ford) */}
                <div className="group w-full md:w-1/3 min-h-[300px] p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">Competency Skills (Ford Company)</h3>
                  <p className="text-white/90 text-sm leading-relaxed max-h-40 overflow-y-auto scrollbar-thin font-serif ">
                    Developed SPFx solutions at Ford to enhance SharePoint-based competency assessments and internal workflows.
                    Integrated dynamic list handling and modern React components for improved usability and efficiency.
                  </p>
                </div>

                {/* Card 2 - H360 Project */}
                <div className="group w-full md:w-1/3 min-h-[300px] p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                    H360 (In Patient & Outpatient)
                  </h3>
                  <p className="scrollbar-hover text-white/90 text-sm leading-relaxed max-h-40 overflow-y-auto font-serif transition-all duration-300">
                    H360 is a comprehensive hospital management system designed to streamline patient care, appointments, billing, and reporting.
                    It integrates various modules like inpatient, outpatient, diagnostics, and pharmacy for seamless healthcare operations.
                    The system supports dynamic file uploads (PDF/images), digital signatures, and printable medical summaries.
                    Built using PHP, jQuery, and MySQL, H360 improves hospital efficiency and enhances patient experience.
                  </p>
                </div>

                {/* Card 3 - Testing: ReferNext & HRMS */}
                <div className="group w-full md:w-1/3 min-h-[300px] p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">Testing: ReferNext & HRMS</h3>
                  <p className="text-white/90 text-sm leading-relaxed max-h-40 overflow-y-auto scrollbar-thin font-serif ">
                    Worked on manual and functional testing for ReferNext and HRMS modules.
                    Created and executed test cases, reported bugs, and collaborated with developers for faster issue resolution.
                    Ensured accurate data flow, tested login roles, and finalized pre-release quality checks.
                  </p>
                </div>

              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4 mx-4 text-green-300">Education</h2>

            <div className="w-full max-w-7xl mx-auto mt-20 px-6 md:px-0 flex justify-center">
              <div className="rounded-xl p-6 w-full max-w-md text-center shadow-lg">
                <h3 className="text-2xl font-semibold text-white font-serif">
                  Rajah RSRK Ranga Rao College
                </h3>
                <p className="text-gray-400 mt-2 font-serif">
                  Mathematics, Statistics, Computer Applications(B.s.c)
                </p>
                <p className="mt-4 text-green-300 font-medium font-serif">Grade: 7.00</p>
                <p className="text-gray-500 mt-1 font-serif">Bobbili</p>
              </div>
            </div>

          </section>
          <section id="experience">
            <h2 className="text-2xl font-bold mt-4 mx-4 text-green-300">Experience</h2>

            <div className="w-full max-w-7xl mx-auto mt-20 px-6 md:px-0 flex flex-col md:flex-row items-center justify-center gap-10">

              {/* Internship Card */}
              <div className="group border border-gray-700 rounded-xl p-6 w-full max-w-md text-center shadow-lg h-[200px] flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                  Internship
                </h3>
                <div className="text-gray-300 text-sm leading-relaxed overflow-y-auto font-serif transition-all duration-300 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent flex-1">
                  <p className="text-gray-400">June (2024) – December (2024) (7 months)</p>
                  <p className="mt-2 text-green-300 font-medium">VulcanTechs (Goprayan)</p>
                  <p className="mt-4">
                    Worked on web development using HTML, CSS, PHP, MySQL, and JavaScript.
                  </p>
                </div>
              </div>

              {/* Regular Employment Card */}
              <div className="group border border-gray-700 rounded-xl p-6 w-full max-w-md text-center shadow-lg h-[200px] flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                  Regular Employee
                </h3>
                <div className="text-gray-300 text-sm leading-relaxed overflow-y-auto font-serif transition-all duration-300 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent flex-1">
                  <p className="text-gray-400">January (2025)– July (2025) (7 months)</p>
                  <p className="mt-2 text-green-300 font-medium">VulcanTechs (Goprayan)</p>
                  <p className="mt-4">
                    <strong>Project:</strong> Ford Company (assisting in Ford projects) – React projects
                  </p>
                  <p className="mt-2">
                    H360 Project (March – July), testing and development.
                  </p>
                </div>
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
