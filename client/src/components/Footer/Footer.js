import Image from "react-bootstrap/Image";
import Logo from "../../images/kj_symbol.png";

const Footer = () => {
  return (
    <>
      <footer
        className="fluid footerStyle text-center fixed-bottom"
        style={{
          backgroundColor: "#000",
          color: "#e3e3e3",
        }}
      >
        <p>
          &copy; <h3 style={{ display: "inline" }}>2023</h3>
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
