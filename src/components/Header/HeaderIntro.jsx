import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HeaderIntro = ({ user: { title, name, surname, area } }) => {
    return ( 
            <Card border="0 ml-4" >
                <Card.Body>
                    <Row>
                        <Col xs={12} md={6}>
                            <Card.Title className="bg-white border-0 m-0" as="h3">{ name  }  { surname }</Card.Title>
                            <Card.Subtitle className="text-dark my-1 font-weight-normal">{ title }</Card.Subtitle>
                        </Col>
                        <Col xs={12} md={6}>
                            <Card.Text className="text-black-50 mb-0"> company </Card.Text>
                            <Card.Text className="text-black-50 mb-0"> Study </Card.Text>
                        </Col>
                    </Row>
                    <Card.Text className="text-black-50 mb-0"> { area } </Card.Text>
                    <Card.Link className="text-primary my-1 font-weight-bold" href="#">Contact Info</Card.Link>
                    <br/>
                    <Card.Link className="text-primary my-1 font-weight-bold" href="#"> 47 connections</Card.Link>
                </Card.Body>
            </Card>
     );
}
 
export default HeaderIntro;