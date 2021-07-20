import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import '../Assets/Dashboard.css'
import {GiRadarDish} from 'react-icons/gi';

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <div className="Dashboard mt-4 p-3 ">
          <h6>Your Dashboard</h6>
          <small className="text-muted font-italic">Private to you</small>
          <Container>
              <Row className="mt-2 ">
            <Col className="  rounded-left bg-success">3<p>who viewed your profile</p></Col>
            <Col className=" bg-primary">2<p>Post view</p></Col>
            <Col className=" rounded-right bg-success">17<p>Search appreances</p></Col>
        
          </Row>
          <Row className="mt-2 bg-primary rounded">
          <p className="font-weight-bold"><GiRadarDish />Normal weight text.</p>
          </Row>
          
        
          
          
          
          </Container>
          
        </div>
      </Container>
    );
  }
}

export default Dashboard;
