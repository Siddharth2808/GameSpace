# GameSpace

If you want to see the deployed version of this project, you can check it out by visiting this [link](http://gamespace-app.herokuapp.com/).

## About the project

A game website consisting of 5 games (currently) :<br>

- Chess
- Tic-Tac-Toe
- Sudoku
- 2048
- Minesweeper

There are multiple modes of difficulty within most of the games (namely _Easy_, _Medium_ and _Hard_).

One of the objectives in building this website was to explore algorithms which are used in decision-making and optimization in game theory. The **minimax** algorithm is one such algorithm which has been used in both the chess and tic-tac-toe parts.

## Overview of the website

- Users can **sign-in/sign-up**
- **Player-vs-computer mode** for all games
- **Brief instructions** on how to play each game
- **Multiplayer** functionality for chess
- **Chat box** on the home page can be used to message people who are currently online.
- **Blog section** for posting updates about the website and just about anything in general.

## To do list

- Currently users do not have a personal profile page where they could see their personal stats like their highest score, winning streak etc.
- Personal chat messages to individual users cannot be sent presently.
- Include more games

## How to host the website locally

To run the project locally on your machine you must have a current version of `Nodejs` installed on your machine. Now run the following commands:

```
$ git clone https://github.com/Siddharth2808/GameSpace
$ npm install
$ npm start
```
