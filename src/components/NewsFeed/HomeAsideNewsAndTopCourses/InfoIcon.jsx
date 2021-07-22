import React, {useState} from 'react';
import { TiInfoLarge   } from 'react-icons/ti';
import { Alert         } from 'react-bootstrap';

const InfoIcon = ({ infoIcon }) => {

    const [show, setShow] = useState(true);

    return ( 
        <>
             <Alert
                className={show ? "d-none" : "info-alert"}
                variant="white" 
                onClose={() => setShow(!show)} 
                dismissible
            >
                <p> { infoIcon } </p>
            </Alert>
            
            <TiInfoLarge 
                className="float-right bg-secondary text-white m-2 rounded" 
                onClick={ () => setShow(!show) }
            />
        </>
    );
}
 
export default InfoIcon;