import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import { SiJavascript, SiTailwindcss } from "react-icons/si";

import GlassCard from "../UI/GlassCard";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import Badge from "../UI/Badge";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75"></div>

      {/* Purple Glow */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-700 blur-[180px] opacity-20"></div>

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-purple-700 blur-[170px] opacity-20"></div>

      {/* Main */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-start pt-16">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start w-full">
          {/* LEFT */}

          <div>
            {/* Fake Code */}

            <div
              className="
              font-mono
              text-purple-400/50
              text-sm
              whitespace-pre
              tracking-wide
              leading-6
              mb-6
              select-none
              "
            >
              {`const developer = {

 name: "Roshan Saifi",
 role: "Frontend Developer",
 skills: [
   "HTML",
   "CSS",
   "JavaScript",
   "React",
   "Tailwind CSS",
   "Bootstrap",
   "Git",
   "GitHub"
 ]

};`}
            </div>

            {/* Hero Card */}

            <GlassCard
              className="
              p-8
              max-w-2xl
              hover:shadow-[0_0_80px_rgba(139,92,246,.35)]
              transition-all
              duration-500
              "
            >
              <p className="text-gray-300 text-lg">👋 Hello, I'm</p>

              <h1 className="text-5xl lg:text-7xl font-bold mt-4 leading-tight">
                Roshan
                <span className="text-purple-500"> Saifi</span>
              </h1>

              <h2 className="text-2xl lg:text-4xl text-purple-400 font-semibold mt-6">
                Frontend Developer
              </h2>

              <p className="text-gray-300 leading-9 max-w-lg mt-8">
                I build modern, responsive and user-friendly web applications
                using React, JavaScript, Bootstrap and Tailwind CSS.
              </p>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <PrimaryButton>Download Resume</PrimaryButton>

                <SecondaryButton>Hire Me</SecondaryButton>
              </div>

              {/* Social */}

              <div className="flex gap-6 mt-10 text-3xl">
                <FaGithub
                  className="
                  cursor-pointer
                  hover:text-purple-500
                  hover:scale-125
                  transition-all
                  duration-300
                  "
                />

                <FaLinkedin
                  className="
                  cursor-pointer
                  hover:text-purple-500
                  hover:scale-125
                  transition-all
                  duration-300
                  "
                />

                <FaEnvelope
                  className="
                  cursor-pointer
                  hover:text-purple-500
                  hover:scale-125
                  transition-all
                  duration-300
                  "
                />
              </div>
            </GlassCard>
          </div>

          {/* RIGHT */}

          <div className="space-y-4">
            {/* Clock Card */}

            <GlassCard
              className="
              p-6
              hover:shadow-[0_0_60px_rgba(139,92,246,.25)]
              transition-all
              duration-500
              "
            >
              <h3 className="text-sm text-gray-400">Local Time</h3>

              <p className="text-3xl font-bold mt-3">10:45 PM</p>

              <p className="text-gray-400 mt-2">Ghaziabad 🇮🇳</p>
            </GlassCard>

            {/* Available */}

            <GlassCard
              className="
              p-6
              hover:shadow-[0_0_60px_rgba(139,92,246,.25)]
              transition-all
              duration-500
              "
            >
              <Badge>🟢 Available for Work</Badge>
            </GlassCard>

            {/* Tech Stack */}

            <GlassCard
              className="
                p-6
                hover:shadow-[0_0_60px_rgba(139,92,246,.25)]
                transition-all
                duration-500
                "
            >
              <h3 className="text-purple-400 font-semibold text-lg mb-5">
                Tech Stack
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition">
                  <FaHtml5 className="text-orange-500 text-2xl" />
                  <span>HTML5</span>
                </div>

                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition">
                  <FaCss3Alt className="text-blue-500 text-2xl" />
                  <span>CSS3</span>
                </div>

                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition">
                  <SiJavascript className="text-yellow-400 text-2xl" />
                  <span>JavaScript</span>
                </div>

                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition">
                  <FaReact className="text-cyan-400 text-2xl" />
                  <span>React</span>
                </div>

                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition">
                  <SiTailwindcss className="text-sky-400 text-2xl" />
                  <span>Tailwind CSS</span>
                </div>

                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition">
                  <FaBootstrap className="text-purple-500 text-2xl" />
                  <span>Bootstrap</span>
                </div>

                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition col-span-2">
                  <FaGitAlt className="text-orange-600 text-2xl" />
                  <span>Git & GitHub</span>

                  <FaGithub className="ml-auto text-xl" />
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
