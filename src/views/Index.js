/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import DemoNavbar from "./landingpage/Navbar";

// index page sections
import Home from "./landingpage/Home";
import About from "./landingpage/About";
import Qualifications from "./landingpage/Qualifications";
import Experience from './landingpage/Experience';
import Projects from "./landingpage/Projects";
import Technologies from "./landingpage/Technologies";
import Contact from "./landingpage/Contact";
import Footer from './landingpage/Footer';

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Home />
          <About />
          <Qualifications />
          <Experience /> 
          <Projects />
          <section className="section">
            <Container>
              <Technologies />
            </Container>
          </section>
          <Contact />
        </main>
        <Footer />
      </>
    );
  }
}

export default Index;
