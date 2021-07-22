import React from 'react';
import ClientError400s from './responseStatus/ClientError400s';
import ClientError500s from './responseStatus/ClientError500s';

const Error = ({ responseStatus }) => {
    
    if( responseStatus === 400 )
        return (
            <ClientError400s
                statusCode  = '400 '
                statusTitle = 'Bad Request'
                description = 'The server could not understand the request due to invalid syntax.'
            />
        )
    else if( responseStatus === 401 )
        return (
            <ClientError400s
                statusCode  = '401 '
                statusTitle = 'Unauthorized'
                description = 'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'
            />
        )
    else if( responseStatus === 402 )
        return (
            <ClientError400s
                statusCode  = '402'
                statusTitle = 'Payment Required'
                description = 'This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists'
            />
        )
    else if( responseStatus === 403 )
        return (
            <ClientError400s
                statusCode  = '403'
                statusTitle = 'Forbidden'
                description = "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server."
            />
        )
    else if( responseStatus === 404 )
        return (
            <ClientError400s
                statusCode  = '404'
                statusTitle = 'Not Found'
                description = 'The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.'
            />
        )
    else if( responseStatus === 405 )
        return (
            <ClientError400s
                statusCode  = '405'
                statusTitle = 'Method Not Allowed'
                description = 'The request method is known by the server but is not supported by the target resource. For example, an API may forbid DELETE-ing a resource.'
            />
        )
    else if( responseStatus === 406 )
        return (
            <ClientError400s
                statusCode  = '406'
                statusTitle = 'Not Acceptable'
                description = "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent."
            />
        )
    else if( responseStatus === 407 )
        return (
            <ClientError400s
                statusCode  = '407'
                statusTitle = 'Proxy Authentication Required'
                description = 'This is similar to 401 but authentication is needed to be done by a proxy.'
            />
        )
    else if ( responseStatus === 500 )
        return (
            <ClientError500s
                statusCode = '500'
                statusTitle = 'Internal Server Error'
                description = "The server has encountered a situation it doesn't know how to handle."
            />
        )
    else if ( responseStatus === 501 )
        return (
            <ClientError500s
                statusCode  = '501'
                statusTitle = 'Not Implemented'
                description = 'The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.'
            />
        )
    else if ( responseStatus === 502 )
        return (
            <ClientError500s
                statusCode  = '502'
                statusTitle = 'Bad Gateway'
                description = 'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.'
            />
        )
    else if ( responseStatus === 503 )
        return (
            <ClientError500s
                statusCode  = '503'
                statusTitle = 'Service Unavailable'
                description = 'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.'
            />
        )
    else if ( responseStatus === 504 )
        return (
            <ClientError500s
                statusCode  = '504'
                statusTitle = 'Gateway Timeout'
                description = 'This error response is given when the server is acting as a gateway and cannot get a response in time.'
            />
        )
    else if ( responseStatus === 505 )
        return (
            <ClientError500s
                statusCode  = '505'
                statusTitle = 'HTTP Version Not Supported'
                description = 'The HTTP version used in the request is not supported by the server.'
            />
        )
    else if ( responseStatus === 506 )
        return (
            <ClientError500s
                statusCode  = '506'
                statusTitle = 'Variant Also Negotiates'
                description = 'The server has an internal 507 configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.'
            />
        )
    else if ( responseStatus === 507)    
        return (
            <ClientError500s 
                statusCode  = '507' 
                statusTitle = 'Insufficient Storage (WebDAV)'
                description = 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.'
            />
        )
    else if ( responseStatus === 508 )
        return (
            <ClientError500s
                statusCode  = '508'
                statusTitle = 'Loop Detected (WebDAV)'
                description = 'The server detected an infinite loop while processing the request.'
            />
        )
    else if ( responseStatus === 510 )
        return (
            <ClientError500s
                statusCode  = '510'
                statusTitle = 'Not Extended'
                description = 'Further extensions to the request are required for the server to fulfill it.'
            />
        )
    else if ( responseStatus === 511 )
        return (
            <ClientError500s
                statusCode  = '511'
                statusTitle = 'Network Authentication Required'
                description = 'The 511 status code indicates that the client needs to authenticate to gain network access.'
            />
        )
}
export default Error;