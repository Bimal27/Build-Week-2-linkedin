import React from 'react';
import { Button, Col, Row, } from 'react-bootstrap';
import { HiDotsHorizontal  } from 'react-icons/hi';

const HeaderButtons = (  ) => {
    return ( 
        <Row border="0" className="p-0 m-0 ml-5" >
            <Col   className="d-flex p-0 m-0" xs={12} md={6} >
                <Button className="rounded-pill font-weight-boldd-flex flex-grow-1"> Opent to </Button>
                <Button className="rounded-pill bg-white text-black-50 font-weight-bold ml-2 flex-grow-1"> Add section </Button>
                <Button className="rounded-pill bg-white text-black-50 font-weight-bold ml-2 flex-grow-2"> {  window.innerWidth < 576 ? <HiDotsHorizontal /> : 'More'} </Button>
            </Col>
        </Row>
     );
}
 
export default HeaderButtons;