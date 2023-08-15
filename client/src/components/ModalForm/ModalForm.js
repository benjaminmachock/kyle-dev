import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import emailjs from "emailjs-com";

function ModalForm() {
  const [show, setShow] = useState(false);

  //JORDAN WILL WORK ON EMAIL.JS integration - test email submission to both of our emails.  devsdeviant@gmail.com

  //formstate
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    requestedDate: "",
    requestedTime: "",
    venueName: "",
    venueAddress: "",
    eventType: "",
    eventName: "",
    estimatedAttendance: "",
  });

  const formRef = useRef();
  //create a handleInputChange function - updating state as the user types in a field we tie this function to an onChange event, in this function capture from e.target the value of the correct input the user is typing in and then update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };
  //create a handleSubmit function - when user submits, make email.js api call to submit info, and then close the modal
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rzlyl75",
        "template_w8y1959",
        formRef.current,
        "LafxfeK-4lofldlZe"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        handleClose();
      })
      .catch((err) => {
        console.log("Email failed to send...", err);
      });
  };
  //function will be responsible for submitting information and closing modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="animatedBorder"
        variant="dark"
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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={contactForm.name}
                name="name"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control
                type="text"
                placeholder="Phone"
                value={contactForm.phone}
                name="phone"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Email"
                value={contactForm.email}
                name="email"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Control
                type="date"
                placeholder="Date"
                value={contactForm.requestedDate}
                name="requestedDate"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTime">
              <Form.Control
                type="time"
                placeholder="Time"
                value={contactForm.requestedTime}
                name="requestedTime"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVenueName">
              <Form.Control
                type="text"
                placeholder="Venue Name"
                value={contactForm.venueName}
                name="venueName"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVenueAddress">
              <Form.Control
                as="textarea"
                placeholder="Venue Address"
                value={contactForm.venueAddress}
                name="venueAddress"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Select className="mb-3" controlId="formBasicVenueType">
              <option>Choose Event Type</option>
              <option value="private">Private Event</option>
              <option value="festival">Festival</option>
              <option value="concert">Concert Venue</option>
              <option value="corporate">Corporate Event</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicVenueName">
              <Form.Control type="text" placeholder="Event Name (Optional)" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVenueAttendance">
              <Form.Control type="number" placeholder="Estimated Attendance" />
            </Form.Group>
            <Button
              type="submit"
              variant="dark"
              className="animatedBorder"
              onClick={handleClose}
            >
              SUBMIT
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;
