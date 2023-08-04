//Imports
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
// import Image from "../../images/kj_symbol.png";

const Footer = () => {
  //Hooks

  //Functions

  return (
    <>
      <footer
        className="container-fluid bg-dark"
        style={{ color: "white", height: 100 }}
      >
        <p class="float-end">
          <a href="/home">Back to top</a>
        </p>
        <p>
          &copy; 2023 Kyle Jennings
          <a href="https://instagram.com/kylejennings13" target="no_blank">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/kylejennings13" target="no_blank">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/kylejenningsmusic" target="no_blank">
            <FaFacebook />
          </a>
          <a
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
