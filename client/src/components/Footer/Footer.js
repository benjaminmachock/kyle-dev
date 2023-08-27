import Image from "react-bootstrap/Image";
import Logo from "../../images/kj_symbol.png";

const Footer = () => {
  return (
    <>
      <footer
        className="fluid footerStyle text-center"
        style={{
          backgroundColor: "#000",
          color: "#e3e3e3",
          height: "100px",
          width: "100%",
          position: "fixed",
          bottom: 0,
        }}
      >
        <p>
          &copy; 2023
          <br />
          <Image
            src={Logo}
            style={{ width: "100px", height: "100px;" }}
            className="d-inline-block align-top"
            alt="Kyle Jennings"
          />
        </p>
      </footer>
    </>
  );
};

export default Footer;
