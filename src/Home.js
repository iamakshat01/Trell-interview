import React,{Component} from "react";
import {Link} from "react-router-dom";


class Home extends Component {

    constructor() {
        super()
    }

    // viewHistory(e)
    // {
    //     e.preventDefault();
    //     alert("Hist");
    // }

    // playGame(e) {
    //     e.preventDefault();
    //     alert("Play");
    // }

    render() {

        return (
            <div>
                <h1 className="welcome">Welcome to Trivia</h1>

                <div className="front-links">
                    <Link to="/game" className="home-link"> Play Game!</Link>
                    <Link to="/history" className="home-link"> View history </Link>
                </div>
                
            </div>
            
        )
    }
}

export default Home;