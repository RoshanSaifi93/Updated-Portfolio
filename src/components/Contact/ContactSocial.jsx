import { motion } from "framer-motion";
import contactData from "../../data/contactData";

function ContactSocial() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        flex
        flex-col
        justify-center
        items-center
        text-center
      "
    >
      <h3 className="text-3xl font-bold">Connect With Me</h3>

      <p className="text-gray-400 mt-5 max-w-md leading-8">
        You can also connect with me through GitHub, LinkedIn or email. I'm
        always open to networking and new opportunities.
      </p>

      <div className="flex gap-6 mt-10">
        {contactData.socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-16
                h-16
                rounded-2xl
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-2xl
                hover:bg-purple-600
                hover:border-purple-500
                hover:shadow-[0_0_30px_rgba(168,85,247,.4)]
                transition-all
                duration-300
              "
            >
              <Icon />
            </motion.a>
          );
        })}
      </div>

      <div
        className="
          mt-10
          px-5
          py-3
          rounded-full
          bg-green-500/20
          border
          border-green-500/30
          text-green-400
          font-medium
        "
      >
        🟢 Available for Opportunities
      </div>
    </motion.div>
  );
}

export default ContactSocial;
