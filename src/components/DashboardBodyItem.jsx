import React, { Component } from 'react'
import { Container, Col, Row } from "react-bootstrap";

const DashboardBodyItem = ({ icon, title, description }) => (
    <Row className="flex-nowrap">
        <div className="iconsp mt- ml-3"> { icon } </div>
        <div className=" cells ml-3 mt-2 w-100 ">
            <h5 className="font-weight-bold">
                
                { title }
            </h5>
            <p> { description } </p>
        </div>
    </Row>
)

export default DashboardBodyItem
