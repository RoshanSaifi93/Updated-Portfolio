import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import ContactSocial from "./ContactSocial";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#050505] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-700 opacity-10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-700 opacity-10 blur-[170px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-purple-400 text-sm font-semibold">
            CONTACT
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Let's <span className="text-purple-500">Connect</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Looking for a Frontend Developer? I'm always open to discussing
            exciting opportunities, collaborations, and new ideas.
          </p>
        </motion.div>

        {/* Contact Content */}

        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">
          <ContactCard />
          <ContactSocial />
        </div>
      </div>
    </section>
  );
}

export default Contact;
