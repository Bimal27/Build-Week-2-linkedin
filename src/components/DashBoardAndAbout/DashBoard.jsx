import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./DashboardStyles.css";
import { GiRadarDish } from "react-icons/gi";
import { BsFillPeopleFill, BsBookmarkFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import DashboardBodyItem from "./DashboardBodyItem";
import DashboardTopItem from "./DashboardTopItem";

class Dashboard extends Component {
    render() {
        return (
            <div id="Dashboard" className='mb-3'>
                <Container>
                    <Row>
                        <h6>Your Dashboard</h6>
                        <small className="text-muted font-italic">Private to you</small>
                    </Row>
                    <Row>
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
                    <Row>
                        <DashboardBodyItem
                            icon={<GiRadarDish />}
                            title="Creator mode:Off"
                            description="Grow your audience with creator mode"
                        />
                        <DashboardBodyItem
                            icon={<BsFillPeopleFill />}
                            title="My Network"
                            description="Manage your connections, events, and interests."
                        />
                        <DashboardBodyItem
                            icon={<FaRegMoneyBillAlt />}
                            title="Salary Insights"
                            description="See how your salary compares to others in the community."
                        />
                        <DashboardBodyItem
                            icon={<BsBookmarkFill />}
                            title="My items"
                            description="Keep track of your jobs, courses and articles."
                        />

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Dashboard;
