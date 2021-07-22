import { useState, useEffect } from "react";
import { Button, Modal, Form, Col, Container } from "react-bootstrap";




const EditandDelete = () => {
    const [show     , setShow     ] = useState();
    const [expobjArr, setExpobjArr] = useState('note')

    //console.log('Heyy!!', expobjArr );
    //console.log(expobjArr[0])

useEffect( () => 
     fetch('https://striveschool-api.herokuapp.com/api/profile/', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MjY2ODgyODYsImV4cCI6MTYyNzg5Nzg4Nn0.jLBxcWF9mRozIiytcPZgROozVtCo_yFvR70ccS4WpOw',
                    }
                })
   
    .then(response => response.json())
    .then(data =>  setExpobjArr( data ))
          
    .catch((error) => {
    console.error('Error:', error);

}), [ ])


    const handleButton = () => setShow(!show);
    const handleClose = () => setShow(false);

    return (
      
      <Container className='mt-5'>
        <Button variant="primary" onClick={handleButton}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleButton}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Educational Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {/* form in model*/}
         
          <Form>
  
    <Form.Group as={Col} controlId="school">
      <Form.Label>School</Form.Label>
      <Form.Control type="text" placeholder="School/Company" />
    </Form.Group>

    <Form.Group as={Col} controlId="role">
      <Form.Label>Role</Form.Label>
      <Form.Control type="text" placeholder="Role" />
    </Form.Group>

    <Form.Group as={Col} controlId="area">
      <Form.Label>Area</Form.Label>
      <Form.Control type="text" placeholder="Area" />
    </Form.Group>

    

    <Form.Group as={Col} controlId="start-date">
    <Form.Label>Start-date</Form.Label> 
    <Form.Control type="date" id='start-date' />
    </Form.Group>

    <Form.Group as={Col} controlId="end-date">
    <Form.Label>End-date</Form.Label> 
    <Form.Control type="date" id='end-date' />
    </Form.Group>

    <Form.Group style={{margin:'14px'}} controlId="description">
    <Form.Label>Description</Form.Label>
    <Form.Control as='textarea' placeholder="Anything" rows={3} />
  </Form.Group>

  
  <Form.Group style={{margin:'14px'}} id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  
</Form>
          </Modal.Body>
          <Modal.Footer className='justify-content-between'>
              
            <Button variant="danger" >
              Delete
            </Button>
            <Button variant="primary" >
              Save Changes
            </Button>
            
          </Modal.Footer>
        </Modal>
        </Container>
    );
}

export default EditandDelete


    // useEffect(() => GetFetch(), [])

    // const GetFetch = async() =>{
    //     try {
    //             let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-type': 'application/json',
    //                     Authorization:
    //                         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MjY2ODgyODYsImV4cCI6MTYyNzg5Nzg4Nn0.jLBxcWF9mRozIiytcPZgROozVtCo_yFvR70ccS4WpOw',
    //                 }
    //             })
                
    //             console.log(response)
    //             if(response.ok){
    //                 let profile = await response.json()
    //                 setExpobjArr( profile ) 
    //                 console.log(profile)
    //             }
        
    //     } catch (error) {
    //         console.log('error')
    //     }
    // }