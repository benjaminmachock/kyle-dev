import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Kyle1 from "../images/kyle1alt.jpg";
import Kyle6 from "../images/kyle6.jpg";
import Kyle2 from "../images/kyle2_res.webp";
import Kyle3 from "../images/kyle3.jpg";
import Kyle5 from "../images/kyle5.jpg";
import Modal from "../components/Modal/Modal";
import Kyle4 from "../images/kyle4 (3).jpg";
import Kyle4b from "../images/kyle4.jpg";
import Kyle7 from "../images/kyle7.JPG";

const Home = () => {
  //Hooks

  //Functions

  return (
    <>
      <main>
        <Container>
          <Row>
            <Col xs={12}>
              <Image src={Kyle2} fluid />
            </Col>
          </Row>
        </Container>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
            <Modal />
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <Image src={Kyle3} fluid />
            </div>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <Image src={Kyle3} fluid />
            </div>
          </div>
        </div>

        <Container fluid>
          <Row>
            <Col xs={4}>
              <Image src={Kyle5} fluid rounded />
              <Image src={Kyle4} fluid rounded />
            </Col>
            <Col xs={4}>
              <Image src={Kyle1} fluid rounded />
            </Col>
            <Col xs={4}>
              <Image src={Kyle4b} fluid rounded />
              <Image src={Kyle7} fluid rounded />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Home;
