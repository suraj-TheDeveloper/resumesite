import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";  

class Qualifications extends React.Component {
    render() {
        return (
            <>
                <div id="experience" className="section section-components pb-0">
                    <Container>
                        <h2 className="mb-5">Experience</h2>
                        <Row className="py-3 align-items-center">
                            <Col sm="3">
                                <small className="text-muted font-weight-bold">
                                    Intern at DigitechRG
                                </small>
                            </Col>
                            <Col sm="9">
                                <p>
                                    <span className="text-muted font-weigth-bold">From</span> - Jan'2021
                                    <span className="ml-2 text-muted font-weigth-bold">To</span> - Apr'2021
                                </p>
                                <p>Key responsibilities</p>
                                <ul>
                                    <li><p>Developing the final year project for college</p></li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="py-3 align-items-center">
                            <Col sm="3">
                                <small className="text-muted font-weight-bold">
                                    Junior Node JS Developer at The Petal Automations
                                </small>
                            </Col>
                            <Col sm="9">
                                <p>
                                    <span className="text-muted font-weigth-bold">From</span> - Jun'2022
                                    <span className="ml-2 text-muted font-weigth-bold">To</span> - Feb'2023
                                </p>
                                <p>Key responsibilities</p>
                                <ul>
                                    <li><p>Gathering the project requirements</p></li>
                                    <li><p>Planning and developing the project from scratch</p></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default Qualifications