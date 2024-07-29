// import react and component from react library
import React, { Component } from "react";

// import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// import Bootstrap components
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";

// import react-icons components
import { FaBookOpen, FaPlay } from "react-icons/fa";

// import other components from their respective files
import MontyHall from "./MontyHall";

// create main App component
class App extends Component {
  // render method to render the component
  render() {
    return (
      <div className="App">
        {/* tabs for Monty Hall problem demonstration game navigation */}
        <Tabs
          defaultActiveKey="instructions"
          id="game-information-tabs"
          className="mb-3"
        >
          <Tab
            eventKey="instructions"
            title={
              <span>
                <FaBookOpen /> Instructions
              </span>
            }
          >
            <Container className="fluid">
              <Card className="d-flex justify-content-center align-items-center">
                <Card.Title>How To Play The Monty Hall Game</Card.Title>
                <Card.Body>
                  <Card.Text>
                    {/* Monty Hall game instructions */}
                    <ol>
                      <li>
                        Pick a door.
                        <br />
                        <i>(Probability of correct selection: 1/3)</i>
                      </li>
                      <li>
                        Another door will open up and reveal an incorrect door.
                      </li>
                      <li>
                        Select the door you think is the winner:
                        <br />
                        Either your initial choice or the other unrevealed door.
                        <br />
                        <i>
                          Hint: You have a higher chance (2/3) of getting the
                          door right if you switch.
                        </i>
                      </li>
                    </ol>
                    <hr />

                    {/* door colour key box */}
                    <Row className="justify-content-end">
                      <Col xs="auto">
                        <div className="key-box">
                          <h6 className="text-center">Key</h6>
                          <hr />
                          <ul>
                            <li>
                              <div
                                className="square"
                                style={{
                                  backgroundColor: "orange",
                                }}
                              ></div>{" "}
                              Selected Door
                            </li>
                            <li>
                              <div
                                className="square"
                                style={{
                                  backgroundColor: "red",
                                }}
                              ></div>{" "}
                              Incorrect Door
                            </li>
                            <li>
                              <div
                                className="square"
                                style={{
                                  backgroundColor: "lightblue",
                                }}
                              ></div>{" "}
                              Unselected Door
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Tab>
          <Tab
            eventKey="game"
            title={
              <span>
                <FaPlay /> Game
              </span>
            }
          >
            <Card>
              {/* section title */}
              <Card.Title>Monty Hall Problem</Card.Title>
              <Card.Body>
                {/* display Monty Hall component */}
                <MontyHall />
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

// export App component
export default App;
