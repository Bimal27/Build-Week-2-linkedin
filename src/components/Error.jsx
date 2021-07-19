import React from 'react';
import Error404 from './Error404';

const Error = ({ responseStatus }) => responseStatus === 404 
                                        ? <Error404 />
                                        : 'Other kind of error'

export default Error;