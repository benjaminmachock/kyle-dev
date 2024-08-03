import { useState } from "react";
import NavLink from "react-bootstrap/esm/NavLink";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Widget from "../Widget/Widget";

const UpcomingShowsModal = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <NavLink
        style={{ color: "white", paddingLeft: "2rem", cursor: "pointer" }}
        onClick={handleShow}
      >
        Upcoming Shows
      </NavLink>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upcoming Shows</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col md="12" lg="12">
            <h1 className="text-center m-3" style={{ color: "#000" }}>
              Upcoming Shows
            </h1>
            <div
              style={{
                border: "10px solid black",
                backgroundColor: "#e0e0e0",
                borderRadius: "10px",
                fontSize: "15px",
                height: "50vh",
                overflow: "auto",
              }}
            >
              <Table striped bordered hover>
                <tbody>
                  <Widget />
                </tbody>
              </Table>
            </div>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpcomingShowsModal;
