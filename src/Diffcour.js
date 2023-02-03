import React from "react";
import { MdEngineering } from "react-icons/md";
import { AiOutlineLaptop } from "react-icons/ai";
import { ImDatabase } from "react-icons/im";
import { RiStarSFill } from "react-icons/ri";
import edu from "./images/ed.jpg";
import {Row,Col} from 'react-bootstrap'

function Diffcour() {
  const data = [
    {
      icons: MdEngineering,
      name: "Introducing to software Engineering",
      fee: "15",
    },
    {
      icons: AiOutlineLaptop,
      name: "UI/UX Development in React js with redux",
      fee: "215",
    },
    {
      icons: ImDatabase,
      name: "Introducing to DataBase and Science",
      fee: "125",
    },
    {
      icons: ImDatabase,
      name: "Introducing to DataBase and Science",
      fee: "125",
    },
  ];
  return (
    <div style={{display:'flex',maxWidth:'90%'}} className="dif">
      {data.map((branch) => {
        return (
          <Row className="dif-1">
            <Col className="dif-2">
              <div className="dif-3" style={{alignItems:'center',textAlign:'center'}}>
                {
                  <branch.icons
                    style={{
                      height: "70px",
                      width: "70px",
                      marginLeft: "5%",
                    }}
                  />
                }
              </div>
              <div className="dif-4">
                <p>{branch.name}</p>
              </div>
              <div className="pac-7">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#1eb2a6",width:'max-content',marginTop:'-5%' }}
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

export default Diffcour;
