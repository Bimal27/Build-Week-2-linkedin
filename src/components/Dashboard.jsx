import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../Assets/Dashboard.css";
import { GiRadarDish } from "react-icons/gi";
import { BsFillPeopleFill, BsBookmarkFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import DashboardBodyItem from "./DashboardBodyItem";
import DashboardTopItem from "./DashboardTopItem";

class Dashboard extends Component {
    render() {
        return (
            <Container>
                <div className="Dashboard mt-4 p-3 ">
                    <h6>Your Dashboard</h6>
                    <small className="text-muted font-italic">Private to you</small>
                    <Container>
                        <Row className="row-1  rounded ">
                        <DashboardTopItem 
                            num="6"
                            text="Who viewed your profile"
                        />
                        <DashboardTopItem 
                            num="20"
                            text="Post views"
                        />
                        <DashboardTopItem 
                            num="19"
                            text="Search appearances"
                        />
                        </Row>
                    </Container>

                    <Container className=" row-1 mt-3 px-3 rounded ">

                        <DashboardBodyItem
                            icon={ <GiRadarDish  /> }
                            title="Creator mode:Off"
                            description="Grow your audience with creator mode"
                        />
                        <DashboardBodyItem
                            icon={ <BsFillPeopleFill /> }
                            title="My Network"
                            description="Manage your connections, events, and interests."
                        />
                        <DashboardBodyItem
                            icon={ <FaRegMoneyBillAlt /> }
                            title="Salary Insights"
                            description="See how your salary compares to others in the community."
                        />
                        <DashboardBodyItem
                            icon={ <BsBookmarkFill /> }
                            title="My items"
                            description="Keep track of your jobs, courses and articles."
                        />
                    
                    </Container>
                </div>
            </Container>
        );
    }
}

export default Dashboard;
