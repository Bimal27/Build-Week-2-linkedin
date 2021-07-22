import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SinglePost from './SinglePost'
import { useState, useEffect } from 'react'
import ProfileBox from '../ProfileBox'
import NewsFeedPoster from '../NewsFeed/NewsFeedPostInput/Home-Top'


export default function HomePage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
        console.log('this is it',posts);
        
    }, [])


    const fetchPosts = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
                headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2M4NWNlYWY0ODAwMTVjOTE4NjgiLCJpYXQiOjE2MjY3MDEzNzAsImV4cCI6MTYyNzkxMDk3MH0.IM9cEo_PuSRIB7l1erCyKvf0jtzAUGi2Vr_ARs71CME` }
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                setPosts(data)
            }

        } catch (error) {

        }
    }


    return (
        <Container id='profilepage' className='mt-5'>
            <Row>
                <Col className='col-md-3 ordder-md-1 pr-5 ml-5'>
                    <ProfileBox/>
                </Col>
                <Col className='col-md-6 ordder-md-2 px-2'>
                    <NewsFeedPoster/>
                    {posts && posts.slice(0, 5).map((post) => {
                       return  < SinglePost user={post}/>
                        })
                    }
                </Col>
                <Col className='col-md-3 ordder-md-3 pl-3 mr-5'>
                    <h1>part three</h1>
                </Col>
            </Row>
        </Container>
    )
}
