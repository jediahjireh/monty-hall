# Monty Hall

Monty Hall is a web application built with React that simulates the classic Monty Hall problem, a probability puzzle based on a popular television game show. This interactive game helps users understand the concepts of probability and decision-making in an engaging way. It is styled using React-Bootstrap and custom CSS for a modern, dark-themed user interface.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [How to Play](#how-to-play)
5. [Screenshots](#screenshots)
6. [Code Structure](#code-structure)
7. [Acknowledgements](#acknowledgements)
8. [Contributing](#contributing)
9. [Credits](#credits)

## Features

- **Interactive Game**: Users can select doors and decide whether to switch or stick with their initial choice after a losing door is revealed.
- **React Icons**: Visual indicators using icons for winning and losing doors.
- **Responsive Design**: Styled with Bootstrap for a responsive and visually appealing interface.
- **Instructions**: Clear instructions on how to play the game and understand the Monty Hall problem.
- **Dark Theme**: Custom dark theme for a sleek and modern look.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Bootstrap**: CSS framework for responsive design.
- **React Icons**: Icon library for easily customizable icons.
- **Custom CSS**: Additional styling for custom components and themes.

## Getting Started

To get started with the Monty Hall game locally, follow these steps:

1. **Clone the repository**:

   ```
   git clone https://github.com/jediahjireh/monty-hall.git
   ```

2. **Navigate to the project directory**:

   ```
   cd monty-hall
   ```

3. **Install dependencies**:

   ```
   npm install
   ```

4. **Start the development server**:

   ```
   npm start
   ```

5. Open your browser and go to the [default port](http://localhost:5173/) to view the application.

## How to Play

1. **Select a Door**: Click on one of the three doors.
2. **Reveal a Losing Door**: The game will reveal one of the losing doors that you didn't pick.
3. **Make Your Final Choice**: Decide whether to stick with your initial choice or switch to the other unopened door.
4. **Win or Lose**: The game will reveal whether you've won or lost based on your final choice.

## Screenshots

- **Game Start**

  ![Game Start](/docs/screenshots/game-start.png)

- **Door Selected**

  ![Door Selected](/docs/screenshots/door-selected.png)

- **You've Lost - Alert**

  ![You've Lost - Alert](/docs/screenshots/you-lost-alert.png)

- **You've Won - Alert**

  ![You've Won - Alert](/docs/screenshots/you-won-alert.png)

- **You've Lost - Result**

  ![You've Lost - Result](/docs/screenshots/you-lost-result.png)

- **You've Won - Result**

  ![You've Won - Result](/docs/screenshots/you-won-result.png)

- **Game Instructions**

  ![Game Instructions](/docs/screenshots/game-instructions.png)

## Code Structure

- `src/components/App.jsx`: Main application component containing game instructions and game tabs.
- `src/components/MontyHall.jsx`: Monty Hall game component with game logic and UI.
- `src/index.jsx`: Entry point for rendering the app.
- `src/custom.css`: Custom styles for the dark theme and specific components.

## Acknowledgements

- The Monty Hall problem explanation and inspiration.
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/).

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to open an issue or submit a pull request.

## Credits

Project created by: [Jediah Jireh Naicker](https://github.com/jediahjireh)
Happy Coding!
