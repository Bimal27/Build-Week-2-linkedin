import React from 'react'
import {Col } from 'react-bootstrap'

export default function ActivityList() {
    return (
        <Col>
            <div id='activityList'>
                <img src="https://picsum.photos/200" alt="cover" />
                <div>
                    <h3>Some topic that you commented!</h3>
                    <p>You replied to a comment</p>
                </div>
            </div>
        </Col>
    )
}
