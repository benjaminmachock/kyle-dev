//Imports
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";

const ModalForm1 = () => {
  const [show, setShow] = useState(false);

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
  //Hooks

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  //Functions

  const formRef = useRef();

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log("i am clicked");

    console.log(contactForm);

    emailjs
      .sendForm(
        "service_453ue7f",
        "template_di7glwk",
        formRef.current,
        "tGy6qzgS-hxxlQet-"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        handleClose();
      })
      .catch((err) => {
        console.log("Email failed to send...", err);
      });
  };

  return (
    <>
      <Button
        variant="dark"
        onClick={handleShow}
        size="lg"
        style={{
          fontSize: 40,
          color: "#fff",
          backgroundColor: "#000",
          border: "none",
        }}
      >
        BOOK EVENT
      </Button>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={show} onHide={handleClose}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Ready to Rock? Let's Book It!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form ref={formRef}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicName.ControlName1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={contactForm.name}
                    name="name"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicPhone.ControlPhone1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    value={contactForm.phone}
                    name="phone"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail.ControlEmail1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={contactForm.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicDate.ControlDate1"
                >
                  <Form.Control
                    type="date"
                    placeholder="Date"
                    value={contactForm.requestedDate}
                    name="requestedDate"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicTime.ControlTimearea1"
                >
                  <Form.Control
                    type="time"
                    placeholder="Time"
                    value={contactForm.requestedTime}
                    name="requestedTime"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicVenueName.ControlVenueName1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Venue Name"
                    value={contactForm.venueName}
                    name="venueName"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicVenueName.ControlVenueName1"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Venue Address"
                    value={contactForm.venueAddress}
                    name="venueAddress"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className="mb-3"
                    controlId="formBasicVenueType.ControlVenueType1"
                    as="select"
                    name="eventType"
                    value={contactForm.eventType}
                    onChange={handleInputChange}
                  >
                    <option>Choose Event Type</option>
                    <option value="private">Private Event</option>
                    <option value="festival">Festival</option>
                    <option value="concert">Concert Venue</option>
                    <option value="corporate">Corporate Event</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicEventName.ControlEventName1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Event Name (Optional)"
                    value={contactForm.eventName}
                    name="eventName"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicVenueAttendance.ControlEventName1"
                >
                  <Form.Control
                    type="number"
                    placeholder="Estimated Attendance"
                    value={contactForm.estimatedAttendance}
                    name="estimatedAttendance"
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={handleSubmit} variant="secondary">
                Book
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    </>
  );
};

export default ModalForm1;
