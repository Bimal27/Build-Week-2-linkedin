import '../Activity/ActivityStyle.css'
import { Container, Row } from 'react-bootstrap'
import React from 'react'
import InterestList from './InterestList'


export default function Interests() {
    return (
        <div id='activity'>
            <Container>
                <Row>
                    <div><h5>Interests</h5></div>
                </Row>
                <Row className='d-flex'>
                    <InterestList/>
                    <InterestList/>
                    <InterestList/>
                    <InterestList/>
                </Row>
                <Row>
                    <h2>See all</h2>
                </Row>
            </Container>
        </div>
    )
}