import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroupItem, } from 'react-bootstrap';
// import { AUTHORIZATION } from '../hidden/credentials'
import Error from './Error';
import Pending from './Pending';
import useFetch from './useFetch';

/*
    _id       : "5d84937322b7b54d848eb41b", //server generated
    name      : "Diego",
    surname   : "Banovaz",
    email     : "diego@strive.school",
    bio       : "SW ENG",
    title     : "COO @ Strive School",
    area      : "Berlin",
    image     : ..., //server generated on upload
    username  : "admin", //server generated from Auth
    createdAt : "2019-09-20T08:53:07.094Z", //server generated
    updatedAt : "2019-09-20T09:00:46.977Z", //server generated
    __v       : 0 //server generated           : "60e588767273090015d5571f"
*/

const Jumbotron = ({ title }) => {

    const URL = 'https://striveschool-api.herokuapp.com/api/profile'
    const { dataList: userList, isPending, isError } = useFetch( URL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2M4NWNlYWY0ODAwMTVjOTE4NjgiLCJpYXQiOjE2MjY3MDEzNzAsImV4cCI6MTYyNzkxMDk3MH0.IM9cEo_PuSRIB7l1erCyKvf0jtzAUGi2Vr_ARs71CME' )

    return ( 
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <h2> { title } </h2>
                    {   isError && <Error responseStatus={ isError }/>    }
                    {
                        isPending
                            ? <Pending />
                            : userList &&
                                userList
                                    .filter( user => user.name === 'Attila' )
                                    .map( ({ _id, name ,surname ,email }) => 
                                        <ListGroupItem key={ _id }>
                                            From: { name }
                                        </ListGroupItem>
                                    )
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Jumbotron;