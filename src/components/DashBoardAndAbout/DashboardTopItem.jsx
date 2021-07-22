import {Col } from "react-bootstrap";

const DashboardTopItem = ({ num, text }) => (
    <Col className="columns">
        <h3>{ num }</h3>
        <p> { text } </p>
    </Col>
)

export default DashboardTopItem