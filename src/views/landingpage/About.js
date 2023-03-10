import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";   

class About extends React.Component {
    render() {
        return (
            <>
                <div id="about" className="section section-components pb-0">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12">
                                <h2 className="mb-5">About Myself</h2>
                                <small className="text-muted">
                                    Hi! I am suraj kumar from madurai. basically I am 
                                    interested in programming languages and using them to 
                                    build a product. I learnt programming languages from ACE 
                                    TRAINING, Udemy and self learning and i love to explore 
                                    the internet and new technologies.To make more and more 
                                    products that will reach the worldwide. To develop a 
                                    product which will be more useful that will increase the 
                                    company standard. To implement the concepts that I have 
                                    learned and prove my skills to the world.
                                </small>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default About