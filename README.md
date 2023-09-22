This is a copy of this repository: https://github.com/utimur/react-chess

I redid the structure, moved the logic from components to hooks, added
styled components.

We have five components:

1.Game - where the main game events take place, such as restarting the
timer, and which contains all other components.

2. Timer - the timer itself.

3.Board - Where we render the cell components

4.Cell - which takes the states of a cell and draws shapes and displays
whether the cell is selected

5.LostFigures Where we draw the figures that have left the gamectory, you can run:

'npm start' to run.
