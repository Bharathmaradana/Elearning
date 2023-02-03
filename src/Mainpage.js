import React from 'react'
import Header from './Header'
import {Row,Col, Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import logingif from "./images/hiring-manager-quantumhunts 1.gif";
import { Typewriter } from "react-simple-typewriter";
import {BsGoogle} from 'react-icons/bs'
import {SiUdemy} from 'react-icons/si'
import {BsApple} from 'react-icons/bs'
import {ImFinder} from 'react-icons/im'
import {FaDribbble} from 'react-icons/fa'
import About from './About';
import Package from './Package';
import Diffcour from './Diffcour';
import Testimonal from './Testimonal';
import Blogs from './Blogs';
import Pricing from './Pricing';
import Footer from './Footer';

function Mainpage() {
  return (
    <div>
      <Header />
      <Container>
        <Row className="main">
          <Col
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h1 className="tag">
              <p style={{ fontWeight: "100", fontSize: "24px" }}>
                {" "}
                Welcome to TechAcademy
              </p>
              Learn AnyWhere AnyTime Infront of your <span> Hand</span>
            </h1>

            <p className="tag-1">
              Here we are to spread the information and Bring the content to
              your place
            </p>

            <Button variant="primary" className="pri-btn">
              Get Certified
            </Button>
            <Button
              variant="primary"
              className="pri-btn"
              style={{ marginLeft: "3%" }}
            >
              View Cources
            </Button>
          </Col>
          <Col>
            <img src={logingif} className="img-fluid img-1" />
          </Col>
        </Row>
        <Row style={{ marginLeft: "8%", marginTop: "5%" }}>
          <Col lg="2" md="3">
            <h2
              style={{ color: "#003666" }}
              className="d-flex align-items-center gap-1"
            >
              <BsGoogle style={{ color: "orange" }} />
              GOOGLE
            </h2>
          </Col>
          <Col lg="2" md="3">
            <h2
              style={{ color: "#003666" }}
              className="d-flex align-items-center gap-1"
            >
              <SiUdemy style={{ color: "orange" }} />
              UDEMY
            </h2>
          </Col>
          <Col lg="2" md="3">
            <h2
              style={{ color: "#003666" }}
              className="d-flex align-items-center gap-1"
            >
              <BsApple style={{ color: "orange" }} />
              APPLE
            </h2>
          </Col>
          <Col lg="2" md="3">
            <h2
              style={{ color: "#003666" }}
              className="d-flex align-items-center gap-1"
            >
              <ImFinder style={{ color: "orange" }} />
              FINDER
            </h2>
          </Col>
          <Col lg="2" md="3">
            <h2
              style={{ color: "#003666" }}
              className="d-flex align-items-center gap-1"
            >
              <FaDribbble style={{ color: "orange" }} />
              Dribbble
            </h2>
          </Col>
        </Row>
        <About />
        <Row>
          <Col className="text-center">
            <h1 className="explore">Explore our Online Cources</h1>
          </Col>
        </Row>
        <Package />
        <Row>
          <Col className="text-center">
            <h1 className="explore" style={{ color: "orange" }}>
              Themes In our Cources
            </h1>
          </Col>
        </Row>
        <Diffcour />
        <Diffcour />
        <Row>
          <Col className="text-center">
            <h1 className="explore" style={{ color: "orange" }}>
              Our Successful Stories
            </h1>
          </Col>
        </Row>
        <Testimonal />
        <Row>
          <Col className="text-center">
            <h1 className="explore" style={{ color: "orange" }}>
              Our Successful Stories
            </h1>
          </Col>
        </Row>
        <Blogs />
        <Row>
          <Col className="text-center">
            <h1 className="explore" style={{ color: "orange" }}>
              Pick Our Premiums
            </h1>
          </Col>
        </Row>
        <Pricing />
      </Container>
      <Footer />
    </div>
  );
}

export default Mainpage