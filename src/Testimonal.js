import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import rec from './images/ed.jpg'

function Testimonal() {
  return (
    <div>
      <div className="test-1" >
        <div className="test-2">
          <div className="test-3" style={{ display: "flex" }}>
            <img
              src={rec}
              style={{ borderRadius: "50%", height: "70px", width: "70px" }}
            />
            <p>TONLY STARK</p>
          </div>
          <div className="test-4">
            <p>
              This website is quite good than the other here we can see many
              other things to learn
            </p>
          </div>
        </div>
        <div className="test-2" >
          <div className="test-3" style={{ display: "flex" }}>
            <img
              src={rec}
              style={{ borderRadius: "50%", height: "70px", width: "70px" }}
            />
            <p>TONLY STARK</p>
          </div>
          <div className="test-4">
            <p>
              This website is quite good than the other here we can see many
              other things to learn
            </p>
          </div>
        </div>
        <div className="test-2">
          <div className="test-3" style={{ display: "flex" }}>
            <img
              src={rec}
              style={{ borderRadius: "50%", height: "70px", width: "70px" }}
            />
            <p>TONLY STARK</p>
          </div>
          <div className="test-4">
            <p>
              This website is quite good than the other here we can see many
              other things to learn
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Testimonal