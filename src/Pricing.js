import React from "react";
import { MdEngineering } from "react-icons/md";
import { AiOutlineLaptop } from "react-icons/ai";
import { ImDatabase } from "react-icons/im";
import { RiStarSFill } from "react-icons/ri";
import edu from "./images/ed.jpg";
import { Row, Col } from "react-bootstrap";

function Pricing() {
  const data = [
    {
      title: "Basic Plan",
      name: "Introducing to software Engineering",
      fee: "${15}",
    },
    {
      title: "Begginer Plan",
      name: "UI/UX Development in React js with redux",
      fee: "${215}",
    },
    {
      title: "Premium Plan",
      name: "Introducing to DataBase and Science",
      fee: "${125}",
    },
    {
      title: "Advanced Plan",
      name: "Introducing to DataBase and Science",
      fee: "${125}",
    },
  ];
  return (
    <div style={{ display: "flex", maxWidth: "90%" }} className="dif">
      {data.map((branch) => {
        return (
          <Row className="dif-1">
            <Col className="dif-2">
              <div
                className="dif-3"
                style={{ alignItems: "center", textAlign: "center",fontWeight:'500' }}
              >
                <p>{branch.title}</p>
              </div>
              <div className="pri">
                <p style={{textAlign:'center'}}>{branch.fee}</p>{}
              </div>
              <div className="dif-4">
                <p>{branch.name}</p>
              </div>
              <div className="pac-7">
                <button
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#1eb2a6",
                    width: "max-content",
                    marginTop: "-5%",
                  }}
                >
                  VISIT COURCES
                </button>
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default Pricing;
