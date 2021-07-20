import './HeaderJumbotron.scss'
import Ract from 'react';
import { Button, Card, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import { MdPhotoCamera     } from 'react-icons/md';

const HeaderJumbotron = ({ user:{ image, } }) =>  
            <Jumbotron className="jumbo">
                    <MdPhotoCamera className="MdPhotoCamera"/>
                    <img
                        className="image"
                        src={ image }
                    />
            </Jumbotron>
 
export default HeaderJumbotron;