import React from 'react'
import {MdEngineering} from 'react-icons/md';
import {AiOutlineLaptop} from 'react-icons/ai';
import {ImDatabase} from 'react-icons/im';
import {RiStarSFill} from 'react-icons/ri';
import edu from './images/ed.jpg'

function Package() {
    const data = [
      {
        icons: MdEngineering,
        name: "Introducing to software Engineering",
        fee: "15",
      },
      {
        icons: AiOutlineLaptop,
        name: "UI/UX Development in React",
        fee: "215",
      },
      {
        icons: ImDatabase,
        name: "Introducing to DataBase and Science",
        fee: "125",
      },
    ];
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
                    {
                        data.map(branch => {
                            return (
                              <div className="pac-1">
                                <div className="pac-2">
                                  <div
                                    className="pac-3"
                                    style={{ display: "flex", marginTop: "5%" }}
                                  >
                                    {
                                      <branch.icons
                                        style={{
                                          height: "70px",
                                          width: "70px",
                                          marginLeft: "5%",
                                        }}
                                      />
                                    }
                                    <p
                                      className="pac-4 text-center"
                                      style={{ marginTop: "5%" }}
                                    >
                                      {branch.name}
                                    </p>
                                  </div>
                                  <div
                                    className="pac-5"
                                    style={{
                                      display: "flex",
                                      textAlign: "center",
                                      marginLeft: "30%",
                                      marginTop: "5%",
                                    }}
                                  >
                                    <RiStarSFill style={{ color: "#1eb2a6" }} />
                                    <RiStarSFill style={{ color: "#1eb2a6" }} />
                                    <RiStarSFill style={{ color: "#1eb2a6" }} />
                                    <RiStarSFill style={{ color: "#1eb2a6" }} />
                                    <RiStarSFill style={{ color: "#1eb2a6" }} />
                                    <p
                                      style={{
                                        color: "#1eb2a6",
                                        marginTop: "-2%",
                                      }}
                                    >
                                      {" "}
                                      (5.0)
                                    </p>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      textAlign: "center",
                                      marginLeft: "20%",
                                      marginTop: "5%",
                                    }}
                                  >
                                    <img
                                      src={edu}
                                      style={{
                                        height: "50px",
                                        width: "50px",
                                        borderRadius: "50%",
                                      }}
                                    />
                                    <p style={{fontWeight:'500',fontFamily:'INTER',color:'black',marginTop:'5%',marginLeft:'5%'}}>by Dinesh Reddy</p>
                                  </div>
                                  <div className='pac-6'>
                                       <p>Full course at ${branch.fee}</p>
                                    </div>
                                    <div className='pac-7'>
                                        <button className='btn btn-primary' style={{backgroundColor:'#1eb2a6'}}>ENROLL NOW</button>
                                        </div>
                                </div>
                              </div>
                            );
                        })
                    }
    </div>
  )
}

export default Package