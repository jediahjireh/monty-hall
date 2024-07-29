// import react and component from react library
import React, { Component } from "react";

// import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// import react-icons components
import { FaGift, FaTimes } from "react-icons/fa";

// create MontyHall component
class MontyHall extends Component {
  // initialise state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      winningDoor: null,
      selectedDoor: null,
      revealedDoor: null,
      gameOver: false,
    };

    // bind methods to this
    this.startNewGame = this.startNewGame.bind(this);
    this.handleDoorSelection = this.handleDoorSelection.bind(this);
    this.revealLosingDoor = this.revealLosingDoor.bind(this);
    this.handleFinalChoice = this.handleFinalChoice.bind(this);
  }

  // function to start a new game
  startNewGame() {
    // set states to default values
    this.setState({
      winningDoor: Math.floor(Math.random() * 3),
      selectedDoor: null,
      revealedDoor: null,
      gameOver: false,
    });
  }

  // function for when the component mounts (webpage onLoad)
  componentDidMount() {
    // start a new game
    this.startNewGame();
  }

  // function to handle user's door selection
  handleDoorSelection(doorIndex) {
    // check if no door has been selected yet
    if (this.state.selectedDoor === null) {
      // set the selected door to the doorIndex provided by the user
      this.setState({ selectedDoor: doorIndex });
      // reveal one of the losing doors (that is not the selected door)
      this.revealLosingDoor(doorIndex);
    }
  }

  // function to reveal a losing door
  revealLosingDoor(selectedDoorIndex) {
    // create an array of doors excluding the selected one
    const doors = [0, 1, 2].filter((door) => door !== selectedDoorIndex);
    // check if winning door is among the remaining doors
    if (doors.includes(this.state.winningDoor)) {
      // remove winning door from the array
      doors.splice(doors.indexOf(this.state.winningDoor), 1);
    }
    // set the revealed door to one of the remaining losing doors randomly
    this.setState({
      revealedDoor: doors[Math.floor(Math.random() * doors.length)],
    });
  }

  // function to handle the final choice of the user
  handleFinalChoice(doorIndex) {
    // check if the game is not over yet
    if (!this.state.gameOver) {
      // set the selected door to the final choice and mark the game as over
      this.setState({ selectedDoor: doorIndex, gameOver: true }, () => {
        // determine if the user won or lost
        const won = this.state.winningDoor === doorIndex;
        // notify user of their win or lss
        alert(won ? "Congratulations! You've won!" : "You've lost.");
      });
    }
  }

  // render method to render the MontyHall component
  render() {
    return (
      // container with centered text alignment for the game display
      <div className="container text-center">
        {/* flex container with centered justification for the doors */}
        <div className="d-flex justify-content-center">
          {/* map over array of door indices */}
          {[0, 1, 2].map((doorIndex) => (
            <div
              // create unique key for each door element
              key={doorIndex}
              // dynamic class names based on selected and revealed state
              className={`door ${
                this.state.selectedDoor === doorIndex ? "selected" : ""
              } ${this.state.revealedDoor === doorIndex ? "revealed" : ""}`}
              // click handler for door selection or final choice
              onClick={() =>
                this.state.selectedDoor === null || this.state.gameOver
                  ? this.handleDoorSelection(doorIndex)
                  : this.handleFinalChoice(doorIndex)
              }
            >
              {/* door labels */}
              <span>Door {doorIndex + 1}</span>
              {/* reveal prize behind the door if the game is over */}
              {this.state.gameOver && (
                <div className="prize">
                  {this.state.winningDoor === doorIndex ? (
                    <FaGift />
                  ) : (
                    <FaTimes />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* new game button */}
        <button className="btn btn-primary mt-4" onClick={this.startNewGame}>
          Start New Game
        </button>
      </div>
    );
  }
}

// export MontyHall component
export default MontyHall;
