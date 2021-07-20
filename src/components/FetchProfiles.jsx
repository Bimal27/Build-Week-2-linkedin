import { Component } from "react";
//import { Authorisation } from "./fetchData";
import { Container,Row,Col,Button} from "react-bootstrap";
import PeopleUMayKnow from "./PeopleUMayKnow";
import {MdUnfoldLess} from 'react-icons/md'

      
        
    


class fetching extends Component {
        
    state={
        data : [],
        showlessormore : false
        }
        componentDidMount = async () =>{
            try {
                const response = await fetch(
                    "https://striveschool-api.herokuapp.com/api/profile/",
                    {
                        method : 'Get',
                        headers: {
                        Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MjY2ODgyODYsImV4cCI6MTYyNzg5Nzg4Nn0.jLBxcWF9mRozIiytcPZgROozVtCo_yFvR70ccS4WpOw',
                        }
                    }
              );
              
    const profiles = await response.json();
        console.log(profiles);
        if(response.ok){
        this.setState({data: profiles, showlessormore: true});
        }
        else{
            console.log('failed')
            }
        } 
        catch (error) 
            {
            console.log(error);
            }
        }
    
render(){
    return(
    <Container className='mt-5'>
    <Row className='justify-content-end' >
    <Col style={{border : '1px solid gainsboro',borderRadius:'8px'}} md={4} xl={3} className='shadow px-2 d-none d-md-block'>
    <h6 className='text-heading-medium mt-2'><strong>People you may know</strong></h6>
        {this.state.showlessormore ? this.state.data.slice(0,5).map(e => <PeopleUMayKnow dataobj={e}/>)
            : this.state.data.slice(0,9).map(e => <PeopleUMayKnow dataobj={e}/>)}        
               <hr style={{border: '1px solid gainsboro',marginBottom:'0'}}/>

             <div className='d-flex justify-content-center'> <Button style={{border:'1px white',fontWeight:'800'}} onClick={() => {this.setState({showlessormore: !this.state.showlessormore})}} variant='outline-secondary'>
        { this.state.showlessormore ? 'Show more'
                                    : 'Show less'}
                             </Button>< MdUnfoldLess /></div>
            </Col>        
            </Row>
            </Container>
              )
            }
        }          
                                                 
                                        
                                        
                                      
                                    
                           
              
            
     

export default fetching