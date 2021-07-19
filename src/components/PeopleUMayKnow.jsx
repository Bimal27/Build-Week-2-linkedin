import { Component } from "react";
import {Button} from "react-bootstrap";
import sampleimg from './sampleimg.jpeg'

const PeopleUMayKnow = ( props ) => {
        return(
            
                        <section className='pt-1'>
                            
                            <ul style={{paddingLeft:'0'}}>
                                <li className='d-flex' style={{listStyle:'none'}}>
                                <div><a href="#"><img style={{borderRadius:'52px',width:'52px'}} src={sampleimg} height='50' alt="" /></a></div>
                                <div style={{paddingLeft:'1rem'}}>
                                    <a href="#"><h6 style={{marginBottom:'0px',fontSize:'1rem'}}>Sai Krishna Reddy Goka</h6></a>
                                    <p className='text-muted' style={{marginBottom:'5px',fontSize:'0.8rem'}}>Open for Opportunities | stamp 1G | Web Developer</p>
                                    <div><Button style={{borderRadius:'1.5rem'}} variant="outline-dark">connect</Button></div>
                                </div>
                                </li>
                                
                                
                            </ul>
                        </section>
                        
                    
        )
}
export default PeopleUMayKnow