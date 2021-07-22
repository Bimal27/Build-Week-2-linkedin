import React, { Component } from 'react'
import { Container, Col, Row } from "react-bootstrap";

const DashboardBodyItem = ({ icon, title, description }) => (
    <Row className="bodyrows">
        <div className="icons"> {icon} </div>
        <div className='cells'>
            <h5 className="font-weight-bold">
                {title}
            </h5>
            <p> {description} </p>
        </div>
    </Row>
)

export default DashboardBodyItem
