import React from 'react';
import { Card, } from 'react-bootstrap';
import { ImPencil          } from 'react-icons/im';

const HeaderOpenToWork = ({  }) => {
    return ( 
        <Card border="0" style={{ backgroundColor: "#e9e5df" }} className="p-3 m-0 mt-4 ml-5 w-50" >
            <Card.Body   className="p-0 m-0 position-relative">
                <ImPencil 
                    className="p-0 m-0 position-absolute float-right" 
                    style={{ left: "90%" }}
                />
                <Card.Title className="border-0 m-0" as="h6"                          > Open to work               </Card.Title>
                <Card.Text  className=     "p-0 m-0"                                  > Junior Web Developer roles </Card.Text>
                <Card.Link  className="text-primary m-0 p-0 font-weight-bold" href="#">See details                 </Card.Link>
            </Card.Body>
        </Card>
     );
}
 
export default HeaderOpenToWork;