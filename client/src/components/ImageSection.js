//Imports
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Kyle1 from "../images/kyle1alt.jpg";
import Kyle3 from "../images/kyle3.jpg";
import Kyle2 from "../images/kyle2.jpg";

const ImageSection = () => {
  //Hooks

  //Functions

  return (
    <>
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Kyle Jennings</h1>
            <button>BOOK KYLE</button>
            <div className="d-flex gap-3 justify-content-center lead fw-normal"></div>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <Image src={Kyle1} rounded fluid />
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-body-tertiary shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0",
              }}
            ></div>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <Image src={Kyle3} rounded fluid />
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0",
              }}
            ></div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">PIC HERE</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0",
              }}
            ></div>
          </div>
          <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">PIC HERE</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-body-tertiary shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0",
              }}
            ></div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-body shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0",
              }}
            ></div>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-body shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0",
              }}
            ></div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-body shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0",
              }}
            ></div>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-body shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0 0",
              }}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ImageSection;
