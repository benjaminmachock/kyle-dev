import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        className="container-fluid bg-dark text-center"
        style={{ color: "white", height: 150 }}
      >
        <p>
          &copy; 2023 Kyle Jennings
          <br />
          <a
            style={{ margin: "10px", color: "white" }}
            href="https://instagram.com/kylejennings13"
            target="no_blank"
          >
            <FaInstagram />
          </a>
          <a
            style={{ margin: "10px", color: "white" }}
            href="https://twitter.com/kylejennings13"
            target="no_blank"
          >
            <FaTwitter />
          </a>
          <a
            style={{ margin: "10px", color: "white" }}
            href="https://facebook.com/kylejenningsmusic"
            target="no_blank"
          >
            <FaFacebook />
          </a>
          <a
            style={{ margin: "10px", color: "white" }}
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
