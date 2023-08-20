import React from "react";
import Kyle5 from "../../images/kyle5.webp";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaPaypal, FaSpotify, FaAmazon } from "react-icons/fa";
import { BiLogoVenmo } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";
import YouTube from "react-youtube";

const videos = [
  {
    title: "Jesus, Jack Daniels’ & Me",
    videoId: "mq2fPrACx6s",
  },
  {
    title: "Chose To Be A Man",
    videoId: "WXoXQpCvtlw",
  },
  {
    title: "Daydrinkin",
    videoId: "p1ka4Tt_of4",
  },
  {
    title: "Drunk With You",
    videoId: "_VQMdTLBGAs",
  },
  {
    title: "They Don’t Make Love Like That No More",
    videoId: "jJuX7IwgDYM",
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
        <p className="text-center" style={{ color: "#e3e3e3" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit
          eu lectus dapibus dignissim. Nulla facilisi. Vestibulum faucibus erat
          at dapibus gravida. Nullam ac tincidunt urna. Maecenas in neque vel
          justo rhoncus volutpat vel ut arcu. Duis non dolor libero.
        </p>
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
        <Row className="justify-content-center">
          <Col md={12} className="mb-4">
            <h1 className="text-center m-5" style={{ color: "#e3e3e3" }}>
              Stream My Music!{" "}
            </h1>
            <div className="text-center">
              <a
                href="https://open.spotify.com/artist/7xOqDsILYsjDc8Xa7TRDJs"
                target="_blank"
                rel="noopener noreferrer"
                className="m-5"
              >
                <FaSpotify
                  size={50}
                  style={{
                    color: "#e3e3e3",
                  }}
                />
              </a>
              <a
                href="https://www.amazon.com/music/player/artists/B0016614O8/kyle-jennings"
                target="_blank"
                rel="noopener noreferrer"
                className="m-5"
              >
                <FaAmazon
                  size={50}
                  style={{
                    color: "#e3e3e3",
                  }}
                />
              </a>
              <a
                href="https://music.apple.com/us/artist/kyle-jennings/904725986"
                target="_blank"
                rel="noopener noreferrer"
                className="m-5"
              >
                <SiApplemusic
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
        <Row className="justify-content-center">
          <Col md={12} className="mb-4">
            <h1 className="text-center" style={{ color: "#e3e3e3" }}>
              Music Videos
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-around">
          {videos.map((video, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="videoContainerStyle">
                <YouTube videoId={video.videoId} className="videoStyle" />
                <h4 className="text-center mt-3" style={{ color: "#e3e3e3" }}>
                  {video.title}
                </h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Land;
