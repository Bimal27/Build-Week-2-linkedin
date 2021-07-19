import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Activity from './Activity/Activity'
import Jumbotron from './Jumbotron'
import SidebarOptionalMenue from './SidebarOptionalMenue'
import Interests from './Interests/Interests.jsx'

export default function ProfilePage() {
    return (
        <Container id='profilepage' className='mt-5'>
            <Row>
                <Col className='col-md-8 ordder-md-1 pr-2'>
                    <Jumbotron />
                    <Activity/>
                    <Interests/>
                </Col>
                <Col className='col-md-4 ordder-md-2 pl-3'>
                    <SidebarOptionalMenue/>
                </Col>
            </Row>
        </Container>
    )
}
