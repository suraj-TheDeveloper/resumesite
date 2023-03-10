import React from "react";

// reactstrap components
import { Container, Row, Col, Table } from "reactstrap";  

class Qualifications extends React.Component {
    render() {
        return (
            <>
                <div id="qualification" className="section section-components pb-0">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12">
                                <h2 className="mb-5">Qualifications</h2>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Course</th>
                                            <th>Name of the institution</th>
                                            <th>Year of study</th>
                                            <th>Percentage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>B.Sc - Computer Science(Security System Specialization)</td>
                                            <td>Subbalakshmi lakshmipathy college of science</td>
                                            <td>2018 - 2021</td>
                                            <td>67.5</td>
                                        </tr>
                                        <tr>
                                            <td>HSS</td>
                                            <td>Mahatma Montessori Matriculation Hr sec school</td>
                                            <td>2017 - 2018</td>
                                            <td>67.41</td>
                                        </tr>
                                        <tr>
                                            <td>Matriculation</td>
                                            <td>Mahatma Montessori Matriculation Hr sec school</td>
                                            <td>2015 - 2016</td>
                                            <td>91.5</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default Qualifications