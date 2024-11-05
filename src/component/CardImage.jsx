import React from 'react'
import { Card, Container, Row,Col} from 'react-bootstrap';
import './CardImage.css'; 
//import 'bootstrap/dist/css/bootstrap.min.css';




const CardImage = () => {
  return (
    <Container className=" container-custom-size d-flex justify-content-center align-items-center" >
      <Row>
        <Col xs={6} md={4}>
          <Card style={{ width: '50rem' }} className="bg-primary text-white" >
            <Card.Body >
            
              <Card.Title>Hi, I'm Roshni Full Stack Developer</Card.Title>
              <Card.Text style={{ fontSize: '18px', fontStyle: 'italic' }}>
                I am a passionate Full Stack Developer with extensive experience in coding and web creation.
                Crafting Seamless Web Experiences with React and Bootstrap.
              </Card.Text>
              <img src="photo.jpeg" alt="image" className="rounded-circle" />
              

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardImage
