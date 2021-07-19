import React from 'react';
import { Alert } from 'react-bootstrap';

const ClientError400s = ({ statusCode, statusTitle, description, }) => 
    <Alert variant="danger">  
        <Alert.Heading> { statusCode } - { statusTitle } </Alert.Heading>
        <hr />
        <p> { description } </p>
    </Alert>
 
export default ClientError400s;