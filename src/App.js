import React from "react";
import "./styles.css";
import Home from "./Home"
import Game from "./Game"
import History from "./History"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/game"> <Game/> </Route>
        <Route exact path="/history"> <History/> </Route>

      </Switch>

    </Router>

    // <div className="App">
    //   <Home/>
    // </div>
  );
}

/**
 * 
 * 
Task title - Build a trivia game. 

A user will land on a page which contains a question and relevant choices. 
The user can log in using email password.

The user can either see his history or play a new game.

If user selects to play a game - 
The user will select a choice and click next. At the end of the quiz, a final score will be displayed.

If user sees his history -
He can see scores of his past games. (Only scores, nothing else required.)

Constraints

It is compulsory to answer each question.
They cannot change any of the previously answered question.


No of questions - 5
Open trivia api - https://opentdb.com/api_config.php
 * 
 */