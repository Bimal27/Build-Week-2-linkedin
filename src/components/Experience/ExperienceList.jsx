import React from 'react'
import './Experience.css'
import { Container, Row } from 'react-bootstrap'
import ExperienceListItem from './ExperienceListItem'
import ModalExperience from './ModalExperience'
import { CgMathPlus } from "react-icons/cg";
import { useEffect, useState } from 'react';

export default function ExperienceList(props) {


    const [experience, setExperience] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [userId, setUserId] = useState('')

    useEffect(() => {
        fetchdata()
        experienceID()
    }, [])

    const fetchdata = async (userID,) => {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/60ae3c85ceaf480015c91868/experiences', {
            headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2M4NWNlYWY0ODAwMTVjOTE4NjgiLCJpYXQiOjE2MjY3MDEzNzAsImV4cCI6MTYyNzkxMDk3MH0.IM9cEo_PuSRIB7l1erCyKvf0jtzAUGi2Vr_ARs71CME` }

        })
        const data = await response.json()
        setExperience(data)
        console.log('this is my data', data);
    }

    const experienceID = () => {
        return experience.map(exp => {
            setUserId(exp._id)
        })
    }

    return (
        <div id='experiencelist' className='mb-3'>
            <Container>
                <Row>
                    <h2>Experience</h2>
                    <div><CgMathPlus onClick={() => setModalShow(true)} /></div>
                </Row>
                {
                    experience.map(exp => {
                        return <ExperienceListItem key={exp._id} expId={exp._id} role={exp.role} company={exp.company} startDate={exp.startDate} description={exp.description} area={exp.area} />
                    })
                    
                }
            </Container>
            <ModalExperience
                show={modalShow}
                onHide={() => setModalShow(false)}
                userId={userId}
            />
        </div>
    )
}
