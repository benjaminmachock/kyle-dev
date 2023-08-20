import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/carousel1.jpg";
import image2 from "../../images/carousel2.JPG";
import image3 from "../../images/carousel3.jpg";
import image4 from "../../images/carousel4.jpg";
import image5 from "../../images/carousel5.png";

function KyleCarousel() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Carousel data-bs-theme="dark" fade>
              <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image4} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image5} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default KyleCarousel;
