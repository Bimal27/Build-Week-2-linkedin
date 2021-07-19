import { Component } from "react";
//import { Authorisation } from "./fetchData";
import { Container,Row,Col,Button} from "react-bootstrap";
import PeopleUMayKnow from "./PeopleUMayKnow";

class FetchProfiles extends Component  {

    componentDidMount = async () => {
        try {
                let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/profile/",
                {
                    method : 'Get',
                    headers: {
                    Authorisation:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MjY2ODgyODYsImV4cCI6MTYyNzg5Nzg4Nn0.jLBxcWF9mRozIiytcPZgROozVtCo_yFvR70ccS4WpOw',
                    }
                }
          );
          let profiles = await response.json();
          console.log(profiles);
          
        } 
        catch (error) 
            {
            console.log(error);
            }
      };


    render(){
        return(
            <Container className='mt-5'>
                <Row className='justify-content-end' >
                <Col md={4} xl={3} className='shadow px-2 d-none d-md-block'>
                <h6 className='text-heading-medium mt-2'>
                                <strong>People you may know</strong> 
                            </h6>
                        <PeopleUMayKnow />
                        <PeopleUMayKnow />
                        <PeopleUMayKnow />
                        <PeopleUMayKnow />
                        
                </Col>
                </Row>
            </Container>
        )
    }
}
export default FetchProfiles