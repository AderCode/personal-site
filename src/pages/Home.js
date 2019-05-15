import React from 'react';
import { Container, Row, Col, Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const Home = (props) => {
  return (
        <Container className="h-75 mt-5">
            <Row className="h-100">
                <Col className="align-self-center" sm="11" md={{ size: 5, offset: 3 }}>
                    <Card className="border-bottom-0 border-right-0 mx-auto">
                        <CardBody>
                        <CardTitle className="text-right">Full Stack Developer <i className="fas fa-laptop-code" /></CardTitle>
                        <hr />
                        <CardSubtitle tag="h1" className="text-center font-weight-bold h-100">Matthew Aderhold</CardSubtitle>
                        <hr />
                        <CardText className="text-right">Clanton, AL <i className="fas fa-globe-americas" /></CardText>
                        {/* <Button>Button</Button> */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
  );
};

export default Home;