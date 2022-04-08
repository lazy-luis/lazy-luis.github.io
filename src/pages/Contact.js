import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contactPage">
      <a href="https://wa.link/7lz47d" target="_blank">
        <FaWhatsapp />
      </a>
      <a href="https://twitter.com/lazy_blackLuis" target="_blank">
        <FiTwitter />
      </a>
      <a href="https://www.instagram.com/lazy_blackLuis/" target="_blank">
        <FiInstagram />
      </a>
      <br />
      <a href="https://www.linkedin.com/in/divinegiftadesiyan/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/lazy-luis" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default Contact;
