import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

import aboutData from "../../data/aboutData";
import AboutCard from "./AboutCard";
import AboutStats from "./AboutStats";

function About() {
  return (
    <section
      id="about"
      className="
       relative 
       py-28 
       bg-[#050505] 
       overflow-hidden"
    >
      <div
        className="
         absolute 
         top-0 
         right-0
         w-[450px]
         h-[450px]
         bg-purple-700
         opacity-10
         blur-[180px]
         rounded-full"
      ></div>

      <div 
        className="
          absolute
          bottom-0 
          left-0 
          w-[350px] 
          h-[350px] 
          bg-purple-700 
          opacity-10 
          blur-[170px] 
          rounded-full">
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[430px_1fr] gap-24 items-center">

          <AboutCard />

          <div>
            <p className="text-purple-400 uppercase tracking-[6px] text-sm font-semibold">
              ABOUT ME
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              Get to Know <span className="text-purple-500">Me</span>
            </h2>

            <h3 className="text-3xl font-semibold text-gray-100 mt-10">
              {aboutData.role}
            </h3>

            <p className="text-gray-300 mt-8 leading-9 max-w-2xl text-lg">
              {aboutData.description}
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition duration-300">
                <FaGraduationCap className="text-purple-500 text-xl" />

                <span>{aboutData.education}</span>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition duration-300">
                <FaMapMarkerAlt className="text-pink-500 text-xl" />

                <span>{aboutData.location}</span>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition duration-300">
                <FaBriefcase className="text-green-500 text-xl" />

                <span>Open to Frontend Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <AboutStats />
        </div>
      </div>
    </section>
  );
}

export default About;
