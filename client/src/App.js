import Header from "./components/Header/Header";
import BackgroundVideo from "./images/guitar_-_21328 (Original).mp4";
import Footer from "./components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageSection from "./components/ImageSection";

function App() {
  return (
    <>
      <Header />
      <Container fluid style={{ padding: 0 }}>
        <Row>
          <Col xs={12}>
            <video autoPlay loop muted id="video">
              <source src={BackgroundVideo} type="video/mp4" />
            </video>
          </Col>
        </Row>
      </Container>
      <ImageSection />
      <Footer />
    </>
  );
}

export default App;
