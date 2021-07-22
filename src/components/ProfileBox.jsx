import { useState, useEffect } from "react";
import {
  Container,
  Card,
  Row,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import "../ProfileBox.css";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";

const ProfileBox = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/me ",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY5MzM4ZTRkYWMyMTAwMTVhYjIyZDIiLCJpYXQiOjE2MjY5NDQzOTksImV4cCI6MTYyODE1Mzk5OX0.gvJzL300N1Cq01mhGvhtX1Che4TQZ6YTnMLY7vQPSt0",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          setProfile(data);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div id='profilebox'>
      <Container>
        {profile && (
          <Row>
            <Card>
              <div className="wrapper rounded-top">
                <Image
                  src={profile.image}
                  roundedCircle
                  className="profile-img"
                />
              </div>
              <Card.Body className="mt-5 text-center">
                <Card.Title>{profile.name} {profile.surname}</Card.Title>
                <Card.Text>{profile.title}</Card.Text>
              </Card.Body>

              <ListGroup className="list-group-flush">
                <ListGroupItem className="hover">
                  <div>
                    <span>Connections</span>
                    <span className="four">4</span>
                  </div>
                  <p className="font-weight-bold">Grow your network</p>
                </ListGroupItem>

                <ListGroupItem className="hover">
                  <RiCheckboxBlankFill className="mr-1" />
                  show all Premium features
                </ListGroupItem>
                <ListGroupItem className="hover">
                  <BsFillBookmarkFill className="mr-1" />
                  My items
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProfileBox;
