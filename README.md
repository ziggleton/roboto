# roboto
Front-end toy robot challenge
# Getting Started with the Roboto Application

This project was created using react as requested by Iress inter view staff.
# Description and requirements:
The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no
other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented
from falling to destruction. Any movement that would result in the robot falling from the table must be prevented,
however further valid movement commands must still be allowed

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Project workings

The imput box takes one command at a time, you have the following list of commands at your disposal.

- MOVE
- RIGHT
- LEFT
- REPORT
- PLACE 0,0,SOUTH (places the robot on provided x,y and bearing values provided in the command)

### Example input and outputs.
a)----------------
- PLACE 0,0,NORTH
- MOVE
- REPORT
- Output: 0,1,NORTH

> to start the game, enter a single command
- eg. PLACE 0,0,NORTH

> To move the robot (1 space) enter the following command
- MOVE/move

> To rotate the robot enter  the following command
- RIGHT/LEFT

> To Display the robots current location enter the following command
- REPORT

