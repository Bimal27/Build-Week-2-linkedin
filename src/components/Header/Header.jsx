import './Header.scss'
import React from 'react';
import { AUTHORIZATION } from '../../hidden/credentials'
import { Container, } from 'react-bootstrap';
import Error    from '../Error';
import Pending  from '../Pending';
import useFetch from '../useFetch';
import HeaderEditIntro from './HeaderEditIntro';
import HeaderJumbotron from './HeaderJumbotron';

/*
    _id       : "5d84937322b7b54d848eb41b", //server generated
    name      : "Diego",
    surname   : "Banovaz",
    email     : "diego@strive.school",
    bio       : "SW ENG",
    title     : "COO @ Strive School",
    area      : "Berlin",
    image     : ..., //server generated on upload
    username  : "admin", //server generated from Auth
    createdAt : "2019-09-20T08:53:07.094Z", //server generated
    updatedAt : "2019-09-20T09:00:46.977Z", //server generated
    __v       : 0 //server generated           : "60e588767273090015d5571f"
*/

const Header = ({  }) => {

    const URL = 'https://striveschool-api.herokuapp.com/api/profile'
    const { dataList: userList, isPending, isError } = useFetch( URL, AUTHORIZATION )

    return ( 
        <Container>
                    {   isError && <Error responseStatus={ isError }/>    }
                    {
                        isPending
                            ? <Pending />
                            : userList &&
                                userList
                                    .filter( user => user.name === 'Attila' )
                                    .map( ( user ) => 
                                        
                                        <header key={ user._id }>
                                            <HeaderJumbotron user={ user } />
                                            <HeaderEditIntro />
                                        </header>
                                    )
                    }
        </Container>
    );
}

export default Header;