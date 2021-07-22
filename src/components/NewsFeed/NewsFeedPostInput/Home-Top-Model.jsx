import { Modal, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { GiMeshBall } from 'react-icons/gi'
import { BiCaretDown } from 'react-icons/bi'
import {BsImage} from 'react-icons/bs'

function HomeTopModel() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button id='modalbutton' onClick={handleShow}> Start a post </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex'>
                        <img style={{ borderRadius: '52px', width: '52px' }} src='https://picsum.photos/200' height='50' alt="" />
                        <div className='ml-4'>
                            <h6>Sai Krishna Goka</h6>
                            <Button style={{}}
                                style={{
                                    padding: '0 0.4rem',
                                    borderColor: 'black',
                                    borderRadius: '50px',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',

                                }}
                                variant='transparent'
                            >
                                <GiMeshBall /> Anyone <BiCaretDown /></Button>
                        </div>
                    </div>
                    <Form className='mt-2'>
                        <Form.Group controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea" rows={3} placeholder='What do you want to write?'
                                style={{ border: 'none' }} />
                        </Form.Group>
                    </Form>



                </Modal.Body>
                <Modal.Footer style={{justifyContent:'space-between'}} className='d-flex'>
                   
                <BsImage style={{fontSize:'1.5rem',color:'skyblue'}}/>
                    <Button
                        style={{ borderRadius: '50px', padding: '5px 12px' }} variant="primary" onClick={handleClose}>
                        Post
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default HomeTopModel
