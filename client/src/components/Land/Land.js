import React, { useState, useEffect } from "react";
import Kyle5 from "../../images/kyle5_compressed_resized.webp";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaPaypal, FaSpotify, FaAmazon } from "react-icons/fa";
import { BiLogoVenmo } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";
import { SocialIcon } from "react-social-icons";
import Table from "react-bootstrap/Table";
import Widget from "../Widget/Widget";
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

const bioTexts = [
  "American country singer/songwriter Kyle Jennings’ has built his brand around authentic storytelling and charismatic, engaging live performances. Originally from southwest Michigan, Jennings’ first love was ice hockey. After a brief competitive career, he transitioned his passion for hockey into music and relocated to Nashville to focus on the development of his writing and performance . . .",
  "Primarily a country traditionalist, Jennings’ music is actually quite diverse. A rootsy foundation of edge-infused traditional country music, mixed with blues, folk, and rock influences, have provided him a broad-spectrum musical platform. His small-town stories and affection for the American way of life are a signature of his work . . .",
  "Jennings has relased 4 independent records on his own label, Dark Horse Records, and currently performs solo acoustic and full band shows throughout the U.S.",
];

function Land() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === bioTexts.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12" lg="6">
            <div className="my-3 py-3 ">
              <Image
                src={Kyle5}
                fluid
                className="img"
                style={{ border: "5px solid white" }}
              />
            </div>
          </Col>
          <Col md="12" lg="6">
            <Table
              style={{ border: "10px solid black", fontSize: "15px" }}
              striped
              bordered
              hover
            >
              <tbody>
                <Widget />
              </tbody>
            </Table>
          </Col>
        </Row>
        <p
          style={{
            fontSize: "2rem",
            textAlign: "center",
            backgroundColor: "#e0e0e0",
            border: "2px solid black",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        >
          {bioTexts[currentIndex]}
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
                    color: "#3b7bbf",
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
                    color: "#82bce8",
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
                    color: "#1db954",
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
                    color: "#FF9900",
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
                    color: "#fa57c1",
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
        <hr className="my-5" style={{ color: "#e3e3e3" }} />
        <h1 style={{ color: "white", textAlign: "center" }}>SOCIAL</h1>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
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
    </>
  );
}

export default Land;
