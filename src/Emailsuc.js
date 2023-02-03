import React from 'react'
import ellipse from './images/Ellipse 3.png'
import email from './images/Email campaign-pana (1) 1.png'
import './App.css'
import logo from './images/logo1 1.png'
import {Row,Col} from 'react-bootstrap'

import Rectangle from './images/Rectangle 11.png'

function Emailsuc() {
  return (
    <div className="email-suc">
      <Row style={{ marginTop: "1%" }}>
        <Col xd={12}>
          {" "}
          <p className="rec-logo">TechAcademy</p>
        </Col>
      </Row>
      <Row xd={12}>
        <Col className="text-center">
          <h2 className="text-center" style={{ color: "white" }}>
            Your Email has Verified Successfully !{" "}
          </h2>
          <br />
          <p className="text-center" style={{ color: "white" }}>
            {" "}
            By Verifying this, you agree to our <span>Terms</span> &{" "}
            <span>Conditions</span> and <span>Privacy Policy</span>
          </p>
        </Col>
      </Row>
      <Row xd={12}>
        <Col style={{ marginLeft: "32%" }}>
          <img
            src={email}
            className="img-fluid text-center"
            style={{
              height: "25rem",
              width: "35rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Emailsuc