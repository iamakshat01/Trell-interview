import React,{Component} from "react";
import {Link} from "react-router-dom";

class History extends Component {

    constructor() {
        super()
    }

    render() {

        let localHistory = JSON.parse(localStorage.getItem("quizHistory"));
        const listItems = localHistory.map((item)=> {
            return <li>Correct: {item}   Incorrect: {5-item}</li>
        })
        return (

            <div>
                <h1 className="history-head">History</h1>
                <div className="history-list">
                    {listItems}
                </div>
            </div>
            
        )
    }
}

export default History;