import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import update from './images/Update-pana 1.png'
import { SiBookstack } from "react-icons/si";
import {GrCertificate} from 'react-icons/gr';
import {GrUserExpert} from 'react-icons/gr';
function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="about-1">
              <img src={update} style={{ height: "100%", width: "100%" }} />
            </div>
          </Col>
          <Col style={{ width: "100%" }}>
            <div className="learn">
                <h5>Learn Anything</h5>
            </div>
            <div className="about-2">
              <div className="about-3" style={{ display: "flex" }}>
                <div className="about-4">
                  <SiBookstack style={{ height: "50px", width: "50px" }} />
                </div>
                <div className="about-5">
                  <p>Online Cources</p>
                  <p>
                    You can go through the many professional cources which are
                    really interested and digital{" "}
                  </p>
                </div>
              </div>
              <div className="about-3" style={{ display: "flex" }}>
                <div className="about-4">
                  <GrCertificate style={{ height: "50px", width: "50px" }} />
                </div>
                <div className="about-5">
                  <p>Earn Certificate</p>
                  <p>
                    You can go through the many professional cources which are
                    really interested and digital{" "}
                  </p>
                </div>
              </div>
              <div className="about-3" style={{ display: "flex" }}>
                <div className="about-4">
                  <GrUserExpert style={{ height: "50px", width: "50px" }} />
                </div>
                <div className="about-5">
                  <p>Online Cources</p>
                  <p>
                    You can go through the many professional cources which are
                    really interested and digital{" "}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About