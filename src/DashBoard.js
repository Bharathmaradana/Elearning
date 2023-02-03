import React from "react";
import { RiStarSFill } from "react-icons/ri";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Header from "./Header";
import Headerdash from "./Headerdash";
import profile from "./images/Group 147.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BarGraph from './BarGraph'
import Piechart from "./Piechart";
import full from './images/full.png';
import {Link} from 'react-router-dom'

function DashBoard() {
  const value = 0.66;
  return (
    <div>
      <Headerdash />
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
          TechAcademy
        </a>
        <button
          class="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <input
          class="form-control form-control-dark w-100 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">
            <Link to="/"> Sign Out</Link>
            </a>
          </div>
        </div>
      </header>

      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="position-sticky pt-3 sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    <span data-feather="home" class="align-text-bottom"></span>
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span data-feather="file" class="align-text-bottom"></span>
                    Community
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span
                      data-feather="shopping-cart"
                      class="align-text-bottom"
                    ></span>
                    Events
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="users" class="align-text-bottom"></span>
                    Analytics
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span
                      data-feather="bar-chart-2"
                      class="align-text-bottom"
                    ></span>
                    Help Center
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span
                      data-feather="layers"
                      class="align-text-bottom"
                    ></span>
                    Settings
                  </a>
                </li>
              </ul>

              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span>Saved reports</span>
                <a
                  class="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span
                    data-feather="plus-circle"
                    class="align-text-bottom"
                  ></span>
                </a>
              </h6>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span
                    data-feather="calendar"
                    class="align-text-bottom"
                  ></span>
                  This week
                </button>
              </div>
            </div>

            <Row className="charts">
              <Col
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <div
                  className="chart-1"
                  style={{
                    diplay: "flex",
                    flexDirection: "row",
                    marginLeft: "5%",
                  }}
                >
                  <div
                    style={{
                      width: 100,
                      height: 100,

                      marginLeft: "5%",
                    }}
                  >
                    <CircularProgressbar value={36} text={`${value * 100}%`} />
                  </div>
                  <div style={{ marginLeft: "8%" }}>
                    <p style={{ margunLeft: "15%", fontWeight: "800" }}>
                      OverAll Engagement
                    </p>
                    <span
                      style={{
                        margunLeft: "15%",
                        fontSize: "25px",
                        fontWeight: "800",
                      }}
                    >
                      18h/Weekly
                    </span>
                  </div>
                </div>
                <div
                  className="chart-1"
                  style={{
                    diplay: "flex",
                    flexDirection: "row",
                    marginLeft: "5%",
                  }}
                >
                  <div
                    style={{
                      width: 100,
                      height: 100,

                      marginLeft: "5%",
                    }}
                  >
                    <CircularProgressbar
                      value={26}
                      style={{ color: "red" }}
                      text={`${value * 100}%`}
                    />
                  </div>
                  <div style={{ marginLeft: "8%" }}>
                    <p style={{ margunLeft: "15%", fontWeight: "800" }}>
                      Points Score
                    </p>
                    <span
                      style={{
                        margunLeft: "15%",
                        fontSize: "25px",
                        fontWeight: "800",
                      }}
                    >
                      3,430
                    </span>
                  </div>
                </div>
                <div
                  className="chart-1"
                  style={{
                    diplay: "flex",
                    flexDirection: "row",
                    marginLeft: "5%",
                  }}
                >
                  <div
                    style={{
                      width: 100,
                      height: 100,

                      marginLeft: "5%",
                    }}
                  >
                    <CircularProgressbar value={66} text={`${value * 100}%`} />
                  </div>
                  <div style={{ marginLeft: "8%" }}>
                    <p style={{ margunLeft: "15%", fontWeight: "800" }}>
                      Rank Score
                    </p>
                    <span
                      style={{
                        margunLeft: "15%",
                        fontSize: "25px",
                        fontWeight: "800",
                      }}
                    >
                      135
                    </span>
                  </div>
                </div>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <div className="sub-1">
                  <div className="sub-2">
                    <h1>Current Cources</h1>
                    <div className="sub-3">
                      <div className="sub-4" style={{ display: "flex" }}>
                        <img
                          src={full}
                          className="img-fluid"
                          style={{ height: "200px", width: "300px" }}
                        />
                        <div style={{ marginLeft: "10%" }}>
                          <p style={{ fontWeight: "800", fontSize: "16px" }}>
                            {" "}
                            UI/UX FULL STACK Cources
                          </p>
                          <h5>By Dinesh Reddy</h5>
                          <div
                            className="pac-5"
                            style={{
                              display: "flex",
                              textAlign: "center",

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
                          <p style={{ fontWeight: "800", fontSize: "16px" }}>
                            COMPLETED TASK
                          </p>
                          <Box sx={{ width: 200 }}>
                            <Slider
                              disabled
                              defaultValue={60}
                              style={{ color: "#003666" }}
                              aria-label="Disabled slider"
                            />
                          </Box>
                          <p
                            style={{
                              fontWeight: "800",
                              fontSize: "16px",
                              color: "orange",
                            }}
                          >
                            Complete the Course (4/5)
                          </p>
                        </div>
                        <div className="sub-5" style={{ marginLeft: "10%" }}>
                          <p
                            style={{
                              fontWeight: "800",
                              fontSize: "16px",
                              marginLeft: "9%",
                            }}
                          >
                            YOUR CURRENT GRAPH
                          </p>
                          <BarGraph />
                        </div>
                      </div>
                      <div className="sub-4" style={{ display: "flex" }}>
                        <img
                          src={full}
                          className="img-fluid"
                          style={{ height: "200px", width: "300px" }}
                        />
                        <div style={{ marginLeft: "10%" }}>
                          <p style={{ fontWeight: "800", fontSize: "16px" }}>
                            {" "}
                            UI/UX FULL STACK Cources
                          </p>
                          <h5>By Dinesh Reddy</h5>
                          <div
                            className="pac-5"
                            style={{
                              display: "flex",
                              textAlign: "center",

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
                          <p style={{ fontWeight: "800", fontSize: "16px" }}>
                            COMPLETED TASK
                          </p>
                          <Box sx={{ width: 200 }}>
                            <Slider
                              disabled
                              defaultValue={60}
                              style={{ color: "#003666" }}
                              aria-label="Disabled slider"
                            />
                          </Box>
                          <p
                            style={{
                              fontWeight: "800",
                              fontSize: "16px",
                              color: "orange",
                            }}
                          >
                            Complete the Course (4/5)
                          </p>
                        </div>
                        <div className="sub-5" style={{ marginLeft: "10%" }}>
                          <p
                            style={{
                              fontWeight: "800",
                              fontSize: "16px",
                              marginLeft: "9%",
                            }}
                          >
                            YOUR CURRENT GRAPH
                          </p>
                          <BarGraph />
                        </div>
                      </div>
                      <div className="sub-4" style={{ display: "flex" }}>
                        <img
                          src={full}
                          className="img-fluid"
                          style={{ height: "200px", width: "300px" }}
                        />
                        <div style={{ marginLeft: "10%" }}>
                          <p style={{ fontWeight: "800", fontSize: "16px" }}>
                            {" "}
                            UI/UX FULL STACK Cources
                          </p>
                          <h5>By Dinesh Reddy</h5>
                          <div
                            className="pac-5"
                            style={{
                              display: "flex",
                              textAlign: "center",

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
                          <p style={{ fontWeight: "800", fontSize: "16px" }}>
                            COMPLETED TASK
                          </p>
                          <Box sx={{ width: 200 }}>
                            <Slider
                              disabled
                              defaultValue={60}
                              style={{ color: "#003666" }}
                              aria-label="Disabled slider"
                            />
                          </Box>
                          <p
                            style={{
                              fontWeight: "800",
                              fontSize: "16px",
                              color: "orange",
                            }}
                          >
                            Complete the Course (4/5)
                          </p>
                        </div>
                        <div className="sub-5" style={{ marginLeft: "10%" }}>
                          <p
                            style={{
                              fontWeight: "800",
                              fontSize: "16px",
                              marginLeft: "9%",
                            }}
                          >
                            YOUR CURRENT GRAPH
                          </p>
                          <BarGraph />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <h2>Section title</h2>
            <div class="table-responsive">
              <table class="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>text</td>
                    <td>random</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>placeholder</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td>placeholder</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>irrelevant</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>text</td>
                    <td>placeholder</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>visual</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>random</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
