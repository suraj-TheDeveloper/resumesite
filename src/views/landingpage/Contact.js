
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section id="contact" className="section section-lg section-shaped">
          <div className="shape shape-style-1 shape-default">
            
          </div>
          <Container className="py-md">
            <Row className="row-grid justify-content-center align-items-center">
              <Col className="mb-lg-auto" lg="5">
                <div className="">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-2">
                      <div className="text-muted text-center mb-3">
                        <small>Contact Form</small>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form role="form">
                      <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.nameFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-user" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Name"
                              type="text"
                              onFocus={(e) =>
                                this.setState({ nameFocused: true })
                              }
                              onBlur={(e) =>
                                this.setState({ nameFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.emailFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="email"
                              onFocus={(e) =>
                                this.setState({ emailFocused: true })
                              }
                              onBlur={(e) =>
                                this.setState({ emailFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.emailFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-phone" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Phone"
                              type="tel"
                              onFocus={(e) =>
                                this.setState({ emailFocused: true })
                              }
                              onBlur={(e) =>
                                this.setState({ emailFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames({
                            focused: this.state.messageFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-comment" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Enter Message"
                              type="textarea"
                              rows="5"
                              autoComplete="off"
                              onFocus={(e) =>
                                this.setState({ messageFocused: true })
                              }
                              onBlur={(e) =>
                                this.setState({ messageFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                          >
                            Send
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Login;
