import React from 'react';
import { Alert } from 'react-bootstrap';

const ClientError500s = ({ statusCode, statusTitle, description }) => 
    <Alert variant="warning">  
        <Alert.Heading> { statusCode } - { statusTitle } </Alert.Heading>
        <hr />
        <p> { description } </p>
    </Alert>
 
export default ClientError500s;