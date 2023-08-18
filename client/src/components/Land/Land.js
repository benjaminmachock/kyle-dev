import React from "react";
import Kyle5 from "../../images/kyle5.webp";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaPaypal } from "react-icons/fa";
import { BiLogoVenmo } from "react-icons/bi";

const videos = [
  {
    title: "Jesus, Jack Daniels’ & Me",
    url: "https://youtu.be/mq2fPrACx6s",
  },
  {
    title: "Chose To Be A Man",
    url: "https://youtu.be/WXoXQpCvtlw",
  },
  {
    title: "Daydrinkin",
    url: "https://youtu.be/p1ka4Tt_of4",
  },
  {
    title: "Drunk With You",
    url: "https://youtu.be/_VQMdTLBGAs",
  },
  {
    title: "They Don’t Make Love Like That No More",
    url: "https://youtu.be/jJuX7IwgDYM",
  },
];

function Land() {
  return (
    <>
      <Container>
        <div className="my-3 py-3 booking-image-container">
          <Image
            src={Kyle5}
            fluid
            className="img"
            style={{ border: "5px solid white" }}
          />
        </div>
        <hr className="my-5" style={{ color: "#e3e3e3" }} />
        <Row
          className="justify-content-center"
          style={{
            color: "#e3e3e3",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Col md={12} className="mb-4">
            <h1 className="text-center m-5">Virtual Tip Jar!</h1>
            <div className="text-center">
              <a
                href="https://www.paypal.com/paypalme/kylejenningsmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="m-5"
              >
                <FaPaypal
                  size={50}
                  style={{
                    color: "#e3e3e3",
                  }}
                />
              </a>
              <a
                href="https://account.venmo.com/u/KyleJenningsMusic"
                target="_blank"
                rel="noopener noreferrer"
                className="m-5"
              >
                <BiLogoVenmo
                  size={50}
                  style={{
                    color: "#e3e3e3",
                  }}
                />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-5" style={{ color: "#e3e3e3" }} />
        <Row className="justify-content-around">
          {videos.map((video, index) => (
            <Col md={4} key={index} className="mb-4">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
              >
                <div className="rounded-square">{video.title}</div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Land;
