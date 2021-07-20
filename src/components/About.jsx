import {  useState } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import '../Assets/About.css'

const About = () => {
  const [show, setShow] = useState(false);
  
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Form className="form mt-3 pl-3 pt-3">
          
        <BiPencil className="btn-pencil  " onClick={handleShow} />
        <h6>About</h6>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris elit, eleifend sit amet ex non, pharetra pharetra diam. Phasellus vel mauris lectus. Nam scelerisque, nulla eget blandit hendrerit, velit sem egestas orci, et efficitur ipsum sem ut odio... <small className="text-primary">see more</small></p>
      </Form>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="pt-1" closeButton>
          <Modal.Title className="h6">Edit About</Modal.Title>
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
