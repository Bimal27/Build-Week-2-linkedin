import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../Assets/Dashboard.css";
import { GiRadarDish } from "react-icons/gi";
import { BsFillPeopleFill, BsBookmarkFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <div className="Dashboard mt-4 p-3 ">
          <h6>Your Dashboard</h6>
          <small className="text-muted font-italic">Private to you</small>
          <Container>
            <Row className="row-1 mt-2 rounded ">
              <Col className=" border-right rounded-left ">
                3<p>who viewed your profile</p>
              </Col>
              <Col className="border-right">
                2<p>Post view</p>
              </Col>
              <Col className=" rounded-right ">
                17<p>Search appreances</p>
              </Col>
            </Row>

            <div className=" row-1 mt-3 rounded ">
            <Row>
              <div className="ml-3 mt-2 ">
                <h5 className="font-weight-bold">
                  <GiRadarDish className="icons mr-2" />
                  Creator mode:Off
                </h5>
                <p>Grow your audience and</p>
              </div>
            </Row>

            <Row>
              <div className="ml-3 mt-2 ">
                <h5 className="font-weight-bold">
                  <BsFillPeopleFill className="icons mr-2" />
                  Creator mode:Off
                </h5>
                <p>Grow your audience and</p>
              </div>
            </Row>

            <Row>
              <div className="ml-3 mt-2 ">
                <h5 className="font-weight-bold">
                  <BsBookmarkFill className="icons mr-2" />
                  Creator mode:Off
                </h5>
                <p>Grow your audience and</p>
              </div>
            </Row>

            <Row>
              <div className="ml-3 mt-2 ">
                <h5 className="font-weight-bold">
                  <FaRegMoneyBillAlt className="icons mr-2" />
                  Creator mode:Off
                </h5>
                <p>Grow your audience and</p>
              </div>
            </Row>
            </div>
          </Container>
        </div>
      </Container>
    );
  }
}

export default Dashboard;
