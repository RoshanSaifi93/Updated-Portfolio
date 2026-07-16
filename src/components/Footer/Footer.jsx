import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import contactData from "../../data/contactData";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-700/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">
            Roshan <span className="text-purple-500">Saifi</span>
          </h2>

          <p className="text-gray-400 mt-3">Frontend Developer</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mt-10 text-gray-300">
          <a href="#home" className="hover:text-purple-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>

          <a href="#journey" className="hover:text-purple-400 transition">
            Journey
          </a>

          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
          >
            <FaGithub />
          </a>

          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=saifiroshan88@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {year} Roshan Saifi. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Designed & Developed by Roshan Saifi 
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Built with React • Vite • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
