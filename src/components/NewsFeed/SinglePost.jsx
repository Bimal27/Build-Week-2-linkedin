import React from 'react'
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap'
import './HomePageStyle.css'
import { BiLike, BiCommentMinus } from "react-icons/bi";
import { RiShareForwardLine, RiSendPlaneFill } from "react-icons/ri";

export default function SinglePost(props) {
    return (
        <div id='singlepost' className='mb-3'>
            <Container>
                <Row>
                    <div><img src={props.user.user.image} alt="postprofilephoto" /></div>
                    <div>
                        <h4>{props.user.user.name} {props.user.user.surname}</h4>
                        <p>{props.user.user.title}</p>
                        <p>{props.user.createdAt}</p>
                    </div>
                </Row>
                <Row>
                    <div>
                        <p>{props.user.text}</p>
                    </div>
                </Row>
                <Row>
                    <div>
                        <div>
                            <span><BiLike /></span>
                            <span><h6>Like</h6></span>
                        </div>
                    </div>
                    <div className='mr-3'>
                        <div>
                            <span className='mr-1'><BiCommentMinus /></span>
                            <span><h6>Comment</h6></span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span><RiShareForwardLine /></span>
                            <span><h6>Share</h6></span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span><RiSendPlaneFill /></span>
                            <span><h6>Send</h6></span>
                        </div>
                    </div>
                </Row>
                {/* <Row>
                    <div>
                        <div><img src="https://picsum.photos/200" alt="myprofilepic" /></div>
                        <div>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <span>icon</span>
                            <span>icon</span>
                        </div>
                    </div>
                </Row> */}
            </Container>
        </div>
    )
}
