import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const contactData = {
  email: "saifiroshan88@gmail.com",

  location: "Ghaziabad, Uttar Pradesh",

  github: "https://github.com/RoshanSaifi93",

  linkedin: "https://www.linkedin.com/in/roshan-saifi-104619382/",

  resume: "/resume/Roshan_Frontend_Resume.pdf",

  socials: [
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/RoshanSaifi93",
    },

    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/roshan-saifi-104619382/",
    },

    {
      name: "Email",
      icon: FaEnvelope,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=saifiroshan88@gmail.com",
    },
  ],
};

export default contactData;
