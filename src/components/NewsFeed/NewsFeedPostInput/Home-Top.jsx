import { Container, Row, Button } from "react-bootstrap";
import { Component } from "react";
import { BsImage } from 'react-icons/bs'
import { IoLogoYoutube } from 'react-icons/io'
import { MdEventNote } from 'react-icons/md'
import { RiArticleLine } from 'react-icons/ri'
import './Home-Top.css'
import HomeTopModel from "./Home-Top-Model";

class HomeTop extends Component {



    render() {
        return (
            <div id='newsfeedposter'>
                <Container>
                    <Row>
                        <div><img style={{ borderRadius: '52px', width: '56px' }} src='https://picsum.photos/100' height='56' alt="" /></div>
                        <HomeTopModel />
                    </Row>
                    <Row>
                        <div>
                            <span className='sup d-flex' style={{ justifyContent: 'space-around', marginTop: '6px' }}>
                                <BsImage style={{ fontSize: '1.5rem', color: 'skyblue' }} />
                                <h6 style={{ marginTop: '4px', marginLeft: '10px' }}>Photo</h6>
                            </span>
                        </div>
                        <div>
                            <span className='sup d-flex' style={{ justifyContent: 'space-around', marginTop: '6px' }}>
                                <IoLogoYoutube style={{ fontSize: '1.5rem', color: 'green' }} />
                                <h6 style={{ marginTop: '4px', marginLeft: '10px' }}>Video</h6>
                            </span>
                        </div>
                        <div>
                            <span className='sup d-flex' style={{ justifyContent: 'space-around', marginTop: '6px' }}>
                                <MdEventNote style={{ fontSize: '1.5rem', color: 'orange' }} />
                                <h6 style={{ marginTop: '4px', marginLeft: '10px' }}>Event</h6>
                            </span>
                        </div>
                        <div>
                            <span className='sup d-flex' style={{ justifyContent: 'space-around', marginTop: '6px' }}>
                                <RiArticleLine style={{ fontSize: '1.5rem', color: 'pink' }} />
                                <h6 style={{ marginTop: '4px', marginLeft: '10px' }}>Write Article</h6>
                            </span>
                        </div>
                    </Row>
                </Container>
            </div>

        )
    }
}
export default HomeTop
