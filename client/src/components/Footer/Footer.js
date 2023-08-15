import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        className="fluid footerStyle text-center"
        style={{ backgroundColor: "#63605F", color: "#e3e3e3" }}
      >
        <p>
          &copy; 2023 Kyle Jennings
          <br />
          <a
            className="footerLinks"
            style={{ color: "#e3e3e3" }}
            href="https://instagram.com/kylejennings13"
            target="no_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="footerLinks"
            style={{ color: "#e3e3e3" }}
            href="https://twitter.com/kylejennings13"
            target="no_blank"
          >
            <FaTwitter />
          </a>
          <a
            className="footerLinks"
            style={{ color: "#e3e3e3" }}
            href="https://facebook.com/kylejenningsmusic"
            target="no_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="footerLinks"
            style={{ color: "#e3e3e3" }}
            href="https://youtube.com/kylejenningsmusiconline"
            target="no_blank"
          >
            <FaYoutube />
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
