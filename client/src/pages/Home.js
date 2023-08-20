import KyleCarousel from "../components/Carousel/Carousel";
import Button from "react-bootstrap/Button";

import Image from "react-bootstrap/Image";

import Kyle3 from "../images/kyle3.jpg";

import ModalForm from "../components/ModalForm/ModalForm";

import Kyle7 from "../images/kyle7.JPG";

import Kyle11 from "../images/IMG_0596.JPG";

const Home = () => {
  //Hooks

  // const [isButtonScrolling, setIsButtonScrolling] = useState(false);
  // const [scrollPercentage, setScrollPercentage] = useState(0);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   const scrollHeight = document.body.scrollHeight - window.innerHeight;
  //   const newScrollPercentage = (scrollY / scrollHeight) * 100;
  //   setScrollPercentage(newScrollPercentage);

  //   if (isButtonScrolling) {
  //     window.scrollTo({
  //       left: (newScrollPercentage * scrollHeight) / 100,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isButtonScrolling]);

  //Functions

  return (
    <>
      <KyleCarousel />
      <main>
        <div className="position-relative overflow-hidden p-1 p-md-3 m-md-1 text-center">
          <div className="col-md-6 p-lg-5 mx-auto">
            <a
              href="https://www.ticketmaster.com/event/08005EF8E7E0386E?fbclid=IwAR0D3NnRy73sVkRbNLYPBMB1UO9zVGwcYzAa8dGUTfk9vYqiJujrs1uuEbY"
              target="no_blank"
            >
              <Button
                variant="dark"
                size="lg"
                className="animatedBorder"
                style={{ fontSize: 40, color: "#e3e3e3" }}
              >
                BUY TICKETS
              </Button>
            </a>
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3 booking-image-container">
              <Image
                src={Kyle3}
                fluid
                className="img"
                style={{ border: "5px solid white" }}
              />
            </div>
          </div>
          <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3 booking-image-container">
              <Image
                src={Kyle7}
                fluid
                className="img"
                style={{ border: "5px solid white" }}
              />
            </div>
          </div>
          <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3 booking-image-container">
              <Image
                src={Kyle11}
                fluid
                className="img"
                style={{ border: "5px solid white" }}
              />
            </div>
          </div>
        </div>

        <div className="position-relative overflow-hidden p-1 p-md-3 m-md-1 text-center">
          <div
            className="col-md-6 p-lg-5 mx-auto my-2 modalContainer"
            // style={{ right: `${-100 + scrollPercentage}%` }}
          >
            <ModalForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
