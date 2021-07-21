import { Component } from "react";
import { Container, Card,Row, ListGroup, ListGroupItem,Image } from "react-bootstrap";
import '../ProfileBox.css'
import {RiCheckboxBlankFill} from 'react-icons/ri'
import {BsFillBookmarkFill} from 'react-icons/bs'

class ProfileBox extends Component {
  render() {
      
    return (
      <Container>
          <Row>
        <Card className="mt-4 ml-2 " >
            <div className="wrapper">
        <Image  src="https://picsum.photos/100" roundedCircle className="profile-img" />
         </div>
          <Card.Body className="mt-5 text-center">
            <Card.Title>Sarath Kumar</Card.Title>
            <Card.Text>Im a Strive school student</Card.Text>
          </Card.Body>

          <ListGroup className="list-group-flush">
            <ListGroupItem className="hover">Connections <span className="four" >4</span>
                <p className="font-weight-bold">Grow your network</p>
            </ListGroupItem>
            
            <ListGroupItem  className="hover"><RiCheckboxBlankFill className="mr-1" />show all Premium features</ListGroupItem>
            <ListGroupItem className="hover"><BsFillBookmarkFill className="mr-1"/>My items</ListGroupItem>
          </ListGroup>
        </Card>
        </Row>
      </Container>
    );
  }
}

export default ProfileBox;
