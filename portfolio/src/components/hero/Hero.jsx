import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import {
  FiArrowDown,
  FiDownload,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background Effects */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div className="text-center md:text-left">

          <p className="mb-4 text-lg text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Pranshu
            <span className="text-cyan-400"> Singh</span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-gray-300 sm:text-2xl">
            Electrical Engineering Student
            <span className="text-cyan-400"> | </span>
            Web Developer
            <span className="text-cyan-400"> | </span>
            DSA Enthusiast
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-400 md:mx-0">
            I am a 3rd year Electrical Engineering student at NIT Jamshedpur,
            passionate about building modern web applications and solving
            challenging Data Structures and Algorithms problems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              View Projects
              <FiArrowDown size={18} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Resume
              <FiDownload size={18} />
            </a>

          </div>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center gap-5 md:justify-start">

            <a
              href="https://github.com/codebypranshu"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/pranshusingh727"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin size={21} />
            </a>

            <a
              href="mailto:your-email@gmail.com"
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaEnvelope size={21} />
            </a>

          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-cyan-400/50 bg-white/5 p-2 shadow-2xl shadow-cyan-500/10 sm:h-80 sm:w-80">

              <img
                src="/images/profile.png"
                alt="Pranshu Singh"
                className="h-full w-full rounded-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;