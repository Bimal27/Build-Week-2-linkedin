import { Modal, Button, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'


export default function ModalExperience(props) {

  const url = props.expId ? `https://striveschool-api.herokuapp.com/api/profile/${props._id}/experiences/` + props.expId : `https://striveschool-api.herokuapp.com/api/profile/${props._id}/experiences`
  const method = props.expId ? 'PUT' : 'POST'

  const [datatoPost, setDatatoPost] = useState({
    role: '',
    company: '',
    area: '',
    startDate: '',
    endDate: '',
    description: '',
  })

  useEffect(() => {
    fetchPutData(props)

  }, [])

  const fetchPutData = async (props) => {
    if (props.expId) {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2M4NWNlYWY0ODAwMTVjOTE4NjgiLCJpYXQiOjE2MjY3MDEzNzAsImV4cCI6MTYyNzkxMDk3MH0.IM9cEo_PuSRIB7l1erCyKvf0jtzAUGi2Vr_ARs71CME`
        }
      })
      const data = await response.json()

      setDatatoPost({
        ...datatoPost,
        role: data.role,
        company: data.company,
        area: data.area,
        startDate: data.startDate.split('.')[0],
        endDate: data.endDate.split('.')[0],
        description: data.description,

      })

    }
  }

  const deleteExperience = async (props) => {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2M4NWNlYWY0ODAwMTVjOTE4NjgiLCJpYXQiOjE2MjY3MDEzNzAsImV4cCI6MTYyNzkxMDk3MH0.IM9cEo_PuSRIB7l1erCyKvf0jtzAUGi2Vr_ARs71CME`
        }
      })
      if (response.ok) {
        alert('The Event is Deleted Successfully')
        props.fetchdata()
        props.onHide()
      } else {
        alert('there was an issue with the deletion')
      }

    } catch (error) {
      console.log(error);
    }

  }



  const fetchPostAndPutData = async (e, props) => {
    e.preventDefault()

    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(datatoPost),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2M4NWNlYWY0ODAwMTVjOTE4NjgiLCJpYXQiOjE2MjY3MDEzNzAsImV4cCI6MTYyNzkxMDk3MH0.IM9cEo_PuSRIB7l1erCyKvf0jtzAUGi2Vr_ARs71CME`
        }
      })
      if (response.ok) {
        alert('value is added!')
        setDatatoPost({
          role: '',
          company: '',
          area: '',
          startDate: '',
          endDate: '',
          description: '',
        })
        props.fetchdata()
        props.onHide()

      }
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Add experience</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={fetchPostAndPutData}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Role *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Retail Sales Manager"
              value={datatoPost.role}
              onChange={(e) => {
                setDatatoPost({
                  ...datatoPost,
                  role: e.target.value
                })
              }}
            />
          </Form.Group>
          <Form.Group >
            <Form.Label>Company *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ex: Microsoft"
              value={datatoPost.company}
              onChange={(e) => {
                setDatatoPost({
                  ...datatoPost,
                  company: e.target.value
                })
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Location *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ex: London, United Kingdom"
              value={datatoPost.area}
              onChange={(e) => {
                setDatatoPost({
                  ...datatoPost,
                  area: e.target.value
                })
              }}
            />
          </Form.Group>
          <div className='d-flex justify-content-between '>
            <Form.Group>
              <Form.Label>Start Date *</Form.Label>
              <Form.Control
                type="datetime-local"
                value={datatoPost.startDate}
                onChange={(e) => {
                  setDatatoPost({
                    ...datatoPost,
                    startDate: e.target.value
                  })
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Date *</Form.Label>
              <Form.Control
                type="datetime-local"
                value={datatoPost.endDate}
                onChange={(e) => {
                  setDatatoPost({
                    ...datatoPost,
                    endDate: e.target.value
                  })
                }}
              />
            </Form.Group>
          </div>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={datatoPost.description}
              onChange={(e) => {
                setDatatoPost({
                  ...datatoPost,
                  description: e.target.value
                })
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      {
        props.expId ?
          <Modal.Footer className='d-flex justify-content-between'>
            <Button  className='modalbuttons' onClick={deleteExperience}>Delete</Button>
            <Button className='modalbuttons' onClick={fetchPostAndPutData}>Edit</Button>
          </Modal.Footer>
          :
          <Modal.Footer>
            <Button className='modalbuttons' onClick={fetchPostAndPutData}>Save</Button>
          </Modal.Footer>
      }
    </Modal>
  );
}