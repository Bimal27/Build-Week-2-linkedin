import React, { Component } from 'react'
import { Container, Col, Row } from "react-bootstrap";

const DashboardTopItem = ({ num, text }) => (
    <Col className=" border-right rounded-left pt-2">
        { num }
        <p> { text } </p>
    </Col>
)

export default DashboardTopItem