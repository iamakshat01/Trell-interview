import React,{Component} from "react";
import {Link} from "react-router-dom";
import Question from "./Questions";

class Game extends Component {

    constructor() {
        super()
        this.state= {
            questions:[],
            error:"",
            currentIndex: 0,
            correct: 0,
            gameOver: false,
            selected:""
        }

        this.handleClick=this.handleClick.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
    }

    componentDidMount() {

        fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
        .then(response => response.json())
        .then(data => {
            
            this.setState({questions:data.results});
            // console.log(data.results);
        })
        .catch(err => {
            this.setState({error: err})
        })
    }

    handleSelect(e) {
        this.setState({
            selected:e.target.value
        })
    }

    // For Next
    handleClick(e) {

        console.log(e.target.value)
        const index=this.state.currentIndex;

        if(this.state.selected===this.state.questions[index].correct_answer) {
            this.setState((prevState, props) => ({
                correct: prevState.correct + 1,
                currentIndex: prevState.currentIndex+1
            }));
        }
        else {

            this.setState((prevState, props) => ({
                currentIndex: prevState.currentIndex+1
            }));
        }

        if(this.state.currentIndex>=4) {
            this.setState({
                gameOver:true
            })

            // storing the data of current quiz locally
            let history=JSON.parse(localStorage.getItem("quizHistory"));
            if(!history) {
                let currentRes=[];
                currentRes.push(this.state.correct);
                localStorage.setItem("quizHistory",JSON.stringify(currentRes));
            }
            else {

                history.unshift(this.state.correct);
                localStorage.setItem("quizHistory",JSON.stringify(history));
            }
            
        }
    }

    render() {

        const index=this.state.currentIndex;
        // console.log(this.state.questions);
        

        return (
            <div>
                {this.state.questions.length>0 && !this.state.gameOver && 
                        <div>
                            <h1 className="question"> {this.state.questions[index].question} </h1>

                            <div className="options-grp">
                                <button 
                                    className={this.state.selected===this.state.questions[index].correct_answer?"selected":"option"}
                                    value={this.state.questions[index].correct_answer} 
                                    onClick={this.handleSelect}>
                                        {this.state.questions[index].correct_answer}
                                </button>

                                <button 
                                    className={this.state.selected===this.state.questions[index].incorrect_answers[0]?"selected":"option"}
                                    value={this.state.questions[index].incorrect_answers[0]} 
                                    onClick={this.handleSelect}>
                                        {this.state.questions[index].incorrect_answers[0]}
                                </button>

                               
                            </div>
                            <div className="next-div">
                                <button className="next-btn" value="next" onClick={this.handleClick}>Next</button>
                            </div>
                            
                            
                        </div>
                }

                {this.state.gameOver && 
                    
                    <div>
                        <h1> Game Over! </h1>
                        <h1> Correct Answer: {this.state.correct} </h1>
                        <h1> Incorrect Answers: {5-this.state.correct} </h1>
                    </div>
                   
                }
            </div>
        )
    }
}

export default Game;