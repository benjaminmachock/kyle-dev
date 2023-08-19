import Carousel from "react-bootstrap/Carousel";
import Kyle1 from "../../images/kyle1alt.jpg";
import Kyle2 from "../../images/kyel2_res.jpg";
// import Kyle2 from "../images/kyle2_res.webp";
import Kyle3 from "../../images/kyle3.jpg";
import Kyle4 from "../../images/kyle4.jpg";
import Kyle5 from "../../images/kyle5.jpg";
import Kyle6 from "../../images/kyle6.jpg";
import Kyle7 from "../../images/kyle7.JPG";
// import Kyle3 from "../images/kyle3.jpg";
// import Kyle5 from "../images/kyle5.webp";
// import ModalForm from "../components/ModalForm/ModalForm";
// import Kyle4b from "../images/kyle4.jpg";
// import Kyle7 from "../images/kyle7.JPG";
// import Kyle3a from "../images/kyle3a.webp";
// import Kyle10 from "../images/IMG_0593.JPG";
// import Kyle11 from "../images/IMG_0596.JPG";
// import Kyle12 from "../images/IMG_7170.JPG";
// import Concert from "../images/KJ_Kalamazoo Social Media Post.png";

function KyleCarousel() {
  return (
    <>
      <h1>Hello</h1>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={Kyle1} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Kyle2} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Kyle3} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Kyle4} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Kyle5} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Kyle6} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Kyle7} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default KyleCarousel;
