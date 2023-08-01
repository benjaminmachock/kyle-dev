import NavBar from "./components/NavBar/NavBar";
import BackgroundVideo from "./images/waves.mp4";
import Footer from "./components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <NavBar />
      <Container fluid style={{ padding: 0 }}>
        <Row>
          <Col xs={12}>
            <video autoPlay loop muted id="video">
              <source src={BackgroundVideo} type="video/mp4" />
            </video>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
