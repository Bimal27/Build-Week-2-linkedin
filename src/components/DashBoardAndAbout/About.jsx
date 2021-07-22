import { useState } from "react";
import { Container, Button, Modal, Form, Row } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import './AboutStyles.css'

const About = () => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState('')



  const handleClose = (e) => {
    setInputValue(e.target.closest('.modal-content').querySelector('.form-control').value)
    setShow(false)
  }

  const handleShow = () => setShow(true);

  return (
    <div id='aboutcomponent' className='mb-3'>
      <Container>
        <Row>
          <h6>About</h6>
          <BiPencil className="btn-pencil" onClick={handleShow} />
        </Row>
        <Row>
          <Form className='d-flex align-items-center'>
            <p>{inputValue}</p>
            {
              inputValue.length > 128 &&  <small>... see more</small>
            }
           </Form>
        </Row>



        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="pt-1" closeButton>
            <Modal.Title className="h6">Edit About</Modal.Title>
          </Modal.Header>
          <Form className="p-3 inputgroup">
            <Form.Group controlId="exampleForm">
              <Form.Label className="text-muted small">Summary</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
            <Button className=" btn-save btn-sm" variant="primary" onClick={(e) => handleClose(e)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default About;
