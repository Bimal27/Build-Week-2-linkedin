import { Component } from 'react'
import SingleProfileListItem from './SingleProfileListItem'
import { Container, Row } from 'react-bootstrap'


class ViewedProfile extends Component {

    state = {
        profiles: [],
        showValue: false

    }

    componentDidMount = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {

                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1NGRiOTBlZmU3ODAwMTU1YzM0ZDEiLCJpYXQiOjE2MjY2ODg5NTMsImV4cCI6MTYyNzg5ODU1M30.PiLfN7pEIhpWApHctpBEdZ6QO57sOyrXDmvzsojGvKU'
                }
            })
            if (response.ok) {
                const data = await response.json()
                this.setState({
                    profiles: data
                })
                console.log(data);
            }

        } catch (error) {
            console.log('error')

        }
    }

    render() {

        return (

            <div id='viewedprofile' className='mb-3'>
                <Container>
                    <Row>
                        <h2>{this.props.title}</h2>

                        <div>
                            {this.state.showValue ? this.state.profiles.slice(0, 8).map(profile =>
                                <SingleProfileListItem  key={profile._id} name={profile.name} surname={profile.surname} image={profile.image} title={profile.title} />)
                                : this.state.profiles.slice(0, 4).map(profile =>
                                <SingleProfileListItem key={profile._id} name={profile.name} surname={profile.surname} image={profile.image} title={profile.title} />)
                            }
                        </div>
                        <div><hr></hr></div>
                        <footer>
                            <div>
                                <button onClick={() => this.setState({ showValue: !this.state.showValue })}>
                                    {
                                        this.state.showValue
                                            // "Show less"
                                            ? (<span className="mr-2 mb-3 ">Show less<i className="bi bi-chevron-compact-up ml-3 mt-2"></i></span>)
                                            //: 'Show more'
                                            : (<span className="mr-2 mb-3 ">Show more<i className="bi bi-chevron-compact-down ml-3 mt-2"></i></span>)
                                    }
                                </button>
                            </div>
                        </footer>
                    </Row>

                </Container>
            </div>

        )

    }

}
export default ViewedProfile