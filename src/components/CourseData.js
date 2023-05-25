import React, { Component } from "react";
import ScoreBox from "./ScoreBox";



class CourseData extends Component {
    constructor() {
        super();
        this.state = {
            weigthed_score: 0,
            score: 0,
            grade: ""

        }

    }

    onScoreChange = (event) => {
        this.setState({ score: event.target.value })
        this.setState({
            grade:
                event.target.value > 100 ? "Invalid Score" :
                    event.target.value >= 80 ? "A" :
                        event.target.value >= 70 ? "B" :
                            event.target.value >= 60 ? "C" :
                                event.target.value >= 50 ? "D" :
                                    "F"
        })
        this.setState({
            weigthed_score:
            event.target.value * this.props.c_hours
        })


    }

    render() {
        
        return (

            < tr className="stripe-dark" >
                <td className="pa3"> {this.props.course_code} </td>
                <td className="pa3"> {this.props.course_name} </td>
                <td className="pa3"> {this.props.c_hours}</td>
                <ScoreBox wieght={this.onScoreChange} />
                <td className="pa3">
                    {
                        this.state.weigthed_score
                    }
                    <input type="hidden" className={"sem"+this.props.period} value={this.state.weigthed_score}/>
                </td>
                <td className="pa3">
                    {
                        this.state.grade
                    }
                </td>
            </tr>
        );
    }
}


export default CourseData;