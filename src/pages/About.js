import React from 'react';
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardImg, CardSubtitle, Badge } from 'reactstrap';
import { ToonHeadshot } from '../assets/images/index';

const About = props => {
    return (
        <Container className="mt-5">
            <Row>
            <Col sm="12" md={{ size: 3 }}>
                    <Card className="border-0 mx-auto">
                        <CardBody>
                        <CardImg className="" top width="100%" src={ToonHeadshot} alt="Cartoon Headshot" />
                        <CardTitle className="text-center font-weight-bold">Matthew Aderhold</CardTitle>
                        <hr />
                        <CardSubtitle className="text-center"><i className="fas fa-laptop-code" /> Full Stack Developer</CardSubtitle>
                        <CardText className="text-center">
                        <i className="fas fa-globe-americas" /> Clanton, AL
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md={{ size: 6 }}>
                    <Card className="border-0 mx-auto">
                        <CardBody>
                        <CardTitle tag="h1" className="text-center font-weight-bold h-100">About Me...</CardTitle>
                        <hr />
                        <CardText className="text-justify">
                                Hi, my name is Matthew Aderhold, I am a Full Stack Developer 
                                and Software Engineer with a background and education in 
                                Psychology/Sociology. I am originally from Milwaukee, Wisconsin, 
                                but moved to Alabama in late 2001 where I later discovered a love 
                                for computer, programming, and development in middle school. Later 
                                in high school took some basic computer classes on BASIC and Web 
                                Design, as well as help start my schools robotics team.
                        </CardText>
                        <CardText className="text-justify">
                                After high school I did industrial machine operations where I 
                                had opportunities to help setup machine programs, as well as reprogram 
                                production machines where I was able to not only improve product output quality 
                                but also increase said output by 20%. I later had gone back to college 
                                to pursue a degree in Psychology at my local community college, since they were 
                                not offering computer centered classes at the time. I had a 3.8 gpa 
                                but, due to the limited classes offered and inability to travel at the time since 
                                I was caring for my father who had fallen ill, was not able to complete 
                                my full degree. Even without my degree I was still able to secure a job 
                                as a Mental Health Technician for Alabama's Chilton/Shelby Mental Health. 
                                I later worked as a Chemistry Quality Control Technician in a Metallurgical 
                                lab in an Iron Foundry running Spectrometer tests and maintaining databases 
                                on information used in production processes and quality audits.
                        </CardText>
                        <CardText className="text-justify">
                                After layoffs I had discovered a Cyber Security Bootcamp in Denver, CO. 
                                I traveled out there and attended several of their free training seminars 
                                and meetups for several months before discovering a Full Stack Development 
                                Bootcamp back home in Alabama, Covalence. I emailed them to apply and after 
                                several phone and in person interviews, I was in. After a few more months of 
                                online tutorials, seminars, and meetups, I started my 10 week intense training 
                                to my passion and dream of becoming a developer.
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md={{ size: 3 }}>
                    <Card className="border-0 mx-auto">
                        <CardBody>
                        <CardTitle tag="h1" className="text-center font-weight-bold h-100">My Tech</CardTitle>
                        <hr />
                        <CardText className="text-justify">
                            Currently using:
                            <br />
                            <Badge color="warning">Javascript</Badge>
                            <Badge color="info">React</Badge>
                            <Badge color="danger">NodeJS</Badge>
                            <Badge color="primary">PHP</Badge>
                            <Badge color="info">MySQL</Badge>
                            <Badge color="warning">HTML</Badge>
                            <Badge color="primary">CSS</Badge>
                            <Badge color="warning">jQuery</Badge>
                            <br /> <br />
                            Interested in learning:
                            <br />
                            <Badge color="secondary">C#</Badge>
                            <Badge color="danger">Ruby</Badge>
                            <Badge color="success">GO</Badge>
                            <Badge color="danger">Ruby on Rails</Badge>
                            <Badge color="secondary">GraphQL/D3</Badge>
                            <Badge color="info">.NET</Badge>
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default About;