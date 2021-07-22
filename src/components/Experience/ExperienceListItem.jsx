import React from 'react'
import './Experience.css'
import { Row,} from 'react-bootstrap'
import { BiPencil } from "react-icons/bi";
import { useState } from 'react';
import ModalExperience from './ModalExperience';

export default function ExperienceListItem(props) {

    const [modalShow, setModalShow] = useState(false);

    

    return (
        <Row id='experiencelistitem'>
            <div className='experiencelineheader'>
                {
                props.image?
                <img src={props.image} alt="companylogo" />
                :<img src='https://picsum.photos/200' alt="companylogo" />
                }
            </div>
            <div className='experiencelinebody'>   
                <h5>{props.role}</h5>
                <h6>{props.company}</h6>
                <p>{props.startDate}</p>
                <p>{props.area}</p>
                <p>{props.description}</p>
            </div>
            <div id='editbutton'>
                <div><BiPencil onClick={() => setModalShow(true)}/></div>
            </div>
            <ModalExperience
            show={modalShow}
            onHide={() => setModalShow(false)}
            expId={props.expId}/>
        </Row>
    )
}
