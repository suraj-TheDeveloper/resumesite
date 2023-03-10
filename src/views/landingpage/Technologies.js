import React from "react";
import classnames from "classnames";

// reactstrap components
import { 
    Container, 
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col,
    ListGroup, 
    ListGroupItem } from "reactstrap";  

class Technologies extends React.Component {
    state = {
        iconTabs: 1,
        plainTabs: 1
    };
    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };
    render() {
        return (
            <>
                <div id="technologies" className="section section-components pb-0">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12">
                                <h2 className="mb-5">Technologies</h2>
                                <div className="nav-wrapper">
                                    <Nav
                                        className="nav-fill flex-column flex-md-row"
                                        id="tabs-icons-text"
                                        pills
                                        role="tablist"
                                    >
                                        <NavItem>
                                            <NavLink
                                                aria-selected={this.state.iconTabs === 1}
                                                className={classnames("mb-sm-3 mb-md-0", {
                                                active: this.state.iconTabs === 1
                                                })}
                                                onClick={(e) => this.toggleNavs(e, "iconTabs", 1)}
                                                href="#pablo"
                                                role="tab"
                                            >
                                                <i className="fa fa-desktop mr-2" />
                                                Frontend
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                aria-selected={this.state.iconTabs === 2}
                                                className={classnames("mb-sm-3 mb-md-0", {
                                                active: this.state.iconTabs === 2
                                                })}
                                                onClick={(e) => this.toggleNavs(e, "iconTabs", 2)}
                                                href="#pablo"
                                                role="tab"
                                            >
                                                <i className="fa fa-server mr-2" />
                                                Backend
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                aria-selected={this.state.iconTabs === 3}
                                                className={classnames("mb-sm-3 mb-md-0", {
                                                active: this.state.iconTabs === 3
                                                })}
                                                onClick={(e) => this.toggleNavs(e, "iconTabs", 3)}
                                                href="#pablo"
                                                role="tab"
                                            >
                                                <i className="fa fa-database mr-2" />
                                                Database
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                                <Card className="shadow">
                                    <CardBody>
                                        <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                                            <TabPane tabId="iconTabs1">
                                                <ListGroup>
                                                    <ListGroupItem>HTML</ListGroupItem>
                                                    <ListGroupItem>CSS</ListGroupItem>
                                                    <ListGroupItem>JavaScript</ListGroupItem>
                                                    <ListGroupItem>React Js (JavaScript Library)</ListGroupItem>
                                                    <ListGroupItem>Bootstrap (CSS Framework)</ListGroupItem>
                                                </ListGroup>
                                            </TabPane>
                                            <TabPane tabId="iconTabs2">
                                                <ListGroup>
                                                    <ListGroupItem>PHP</ListGroupItem>
                                                    <ListGroupItem>Laravel (PHP Framework)</ListGroupItem>
                                                    <ListGroupItem>Node JS (Javascript Runtime Environment)</ListGroupItem>
                                                    <ListGroupItem>Express Js (Node JS Framework)</ListGroupItem>
                                                </ListGroup>
                                            </TabPane>
                                            <TabPane tabId="iconTabs3">
                                                <ListGroup>
                                                    <ListGroupItem>Mysql</ListGroupItem>
                                                    <ListGroupItem>MongoDB</ListGroupItem>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default Technologies