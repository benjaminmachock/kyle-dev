import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  //formstate
  // const [contactForm, setContactForm] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   requestedData: "",
  //   requestedTime: "",
  //   venueName: "",
  //   venueAddress: "",
  //   eventType: "",
  //   eventName: "",
  //   estimatedAttendance: "",
  // });

  //function will be responsible for submitting information and closing modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="danger"
        onClick={handleShow}
        size="lg"
        style={{ fontSize: 40, color: "#e3e3e3" }}
      >
        BOOK KYLE
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>We Will Contact You ASAP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Control type="date" placeholder="Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTime">
              <Form.Control type="time" placeholder="Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVenueAddress">
              <Form.Control type="text" placeholder="Venue Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVenueName">
              <Form.Control as="textarea" placeholder="Venue Address" />
            </Form.Group>
            <Form.Select className="mb-3" controlId="formBasicVenueType">
              <option>Choose Event Type</option>
              <option value="private">Private Event</option>
              <option value="festival">Festival</option>
              <option value="concert">Concert Venue</option>
              <option value="corporate">Corporate Event</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicVenueAddress">
              <Form.Control type="text" placeholder="Event Name (Optional)" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVenueAddress">
              <Form.Control type="number" placeholder="Estimated Attendance" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
