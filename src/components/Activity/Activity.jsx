import './ActivityStyle.css'
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import ActivityList from './ActivityList'

export default function Activity() {
    return (
        <div id='activity'>
            <Container>
                <Row>
                    <div><h5>Activity</h5></div>
                    <div><p>1,100 followers</p></div>
                </Row>
                <Row className='d-flex'>
                    <ActivityList/>
                    <ActivityList/>
                    <ActivityList/>
                    <ActivityList/>
                </Row>
                <Row>
                    <h2>See all activity</h2>
                </Row>
            </Container>
        </div>
    )
}
