import Image from "react-bootstrap/Image";
import Logo from "../../images/kylejennings logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <footer
        fixed="bottom"
        className="fluid footerStyle text-center "
        style={{
          backgroundColor: "#000",
          color: "#e3e3e3",
          height: "200px",
        }}
      >
        <p>
          &copy; <h3 style={{ display: "inline" }}>{currentYear}</h3>
          <br />
          <Image
            src={Logo}
            className="d-inline-block align-top"
            alt="Kyle Jennings"
          />
        </p>
      </footer>
    </>
  );
};

export default Footer;
