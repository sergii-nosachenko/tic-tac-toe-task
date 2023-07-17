### Live-coding: Tic Tac Toe game

Your task is to create a small game - Tic Tac Toe, using React and MaterialUI.

## Technology stack

- React
- TypeScript
- MaterialUI [(documentation)](https://mui.com/material-ui/)

## Installation

Clone the repo and run `npm install`

## Start

After the successfull installation of the packages: 
- start development server: `npm run dev`
- start tests in watch mode: `npm run test:watch`

## Working demo

[Video](https://www.loom.com/share/466e248531184f3b956f4959e3f354d0?sid=5c1923ed-52d3-4920-b1fa-dbdbcf603949)

## Task acceptance criteria

1. Write all game-related code in `components/Game.tsx` component.

2. The game must include an element that indicates the current player's turn. Add `data-testid="current-player"` and `data-test-value=""` attributes to that element. Acceptable values for `data-test-value` are `X` or `O`. Example:
```jsx
<div data-testid="current-player" data-test-value="X">Next turn: X</div>
```

You can use any form of representation (symbols, icons, images, etc.) to indicate the players.

**Please note, the game always commences with the "O" player.**

3. The game board should be composed of 9 square cells, each possessing the `data-testid="game-cell"` and `data-test-value=""` attributes. **`data-test-value=""` is an empty string by default for every cell.**

4. Upon user interaction with a cell, it should be updated to display the current player's symbol. In addition, you need to set `data-test-value=""` to `X` or `O` for that cell.

5. In the event the board presents a horizontal, vertical, or diagonal line of 3 identical symbols, a modal should appear announcing the winner of the game, for example, "Player X wins!". Add `data-testid="game-winner-modal"` and `data-test-value="X"` attributes to the modal. In case nobody is a winner set `data-test-value="draw"` and display a correct message.

6. The modal must include an "OK" button with `data-testid="game-winner-modal-ok"` attribute. If the user clicks on it or closes the modal, the game should reset.

7. Integrate a "Reset" button into the game. Once this button is clicked, all fields should be cleared. Add the `data-testid="reset-game"` attribute to the button. Reset button must be disabled if no moves were made.

8. Track and display game statistics including the total number of games, number of wins by each player, and number of draws. The statistics should be displayed in a sidebar and should update in real-time as the games are played. Add data-testid attributes for each statistic as follows: `data-testid="total-games"`, `data-testid="x-wins-count"`, `data-testid="o-wins-count"` and `data-testid="draws-count"`. The secondary text in the ListItemText component will display the current count of the respective statistic.
