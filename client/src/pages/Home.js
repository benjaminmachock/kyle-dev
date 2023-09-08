import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KyleCarousel from "../components/KyleCarousel/KyleCarousel";
import { SocialIcon } from "react-social-icons";
import ModalForm from "../components/ModalForm/ModalForm";

const Home = () => {
  return (
    <>
      <KyleCarousel />
      <main>
        <div className="position-relative overflow-hidden p-1 p-md-3 m-md-1 text-center">
          <div className="col-md-6 p-lg-5 mx-auto">
            <ModalForm />
          </div>
        </div>
        <hr className="my-5" style={{ color: "#e3e3e3" }} />
        <h3 style={{ color: "white", textAlign: "center" }}>SOCIAL</h3>
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <SocialIcon
                style={{ margin: ".5rem" }}
                url="https://instagram.com/kylejennings13"
                network="instagram"
                fgColor="white"
                target="_blank"
              />
              <SocialIcon
                style={{ margin: ".5rem" }}
                url="https://twitter.com/kylejennings13"
                network="twitter"
                fgColor="white"
                target="_blank"
              />
              <SocialIcon
                style={{ margin: ".5rem" }}
                url="https://facebook.com/kylejenningsmusic"
                network="facebook"
                fgColor="white"
                target="_blank"
              />
              <SocialIcon
                style={{ margin: ".5rem" }}
                url="https://youtube.com/kylejenningsmusiconline"
                network="youtube"
                fgColor="white"
                target="_blank"
              />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Home;
