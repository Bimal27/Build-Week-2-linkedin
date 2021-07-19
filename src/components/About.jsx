import { Component, useState } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import '../Assets/About.css'

const About = () => {
  const [show, setShow] = useState(false);
  
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="bg-light mt-5 pt-2">
      <Form className="form ">
          <Button className="btn-pencil" onClick={handleShow}>
        <BiPencil onClick={handleShow} />
      </Button>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>About</Form.Label>
          <Form.Control className="mt-3" as="textarea" rows={3} />
        </Form.Group>
      </Form>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit About</Modal.Title>
        </Modal.Header>
        <Form className="p-3">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-muted small">Summary</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button className=" btn-save btn-sm" variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default About;
