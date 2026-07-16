import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";

import contactData from "../../data/contactData";

function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-8
        hover:border-purple-500/40
        hover:shadow-[0_0_50px_rgba(168,85,247,.2)]
        transition-all
        duration-500
      "
    >
      <h3 className="text-3xl font-bold">Let's Work Together</h3>

      <p className="text-gray-400 mt-5 leading-8">
        I'm currently looking for Frontend Developer opportunities. If you have
        an opportunity or would like to discuss a project, feel free to contact
        me.
      </p>

      <div className="mt-10 space-y-6">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-purple-400 text-xl" />
          <span>{contactData.email}</span>
        </div>

        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-pink-500 text-xl" />
          <span>{contactData.location}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href={contactData.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-purple-600
            hover:bg-purple-700
            transition
          "
        >
          <FaDownload />
          View Resume
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=saifiroshan88@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            border
            border-purple-500
            hover:bg-purple-600
            transition
          "
        >
          <FaPaperPlane />
          Send Email
        </a>
      </div>
    </motion.div>
  );
}

export default ContactCard;
