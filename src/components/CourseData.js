import React, { Component } from "react";
import ScoreBox from "./ScoreBox";



class CourseData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weigthed_score: 0,
            score: 0,
            grade: "",

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
                                    event.target.value < 0 ? "Invalid Score" :
                                        "F"
        })
        this.setState({
            weigthed_score:
                event.target.value > 100 || event.target.value < 0 ? "Score Range(0-100)" :
                    (event.target.value * this.props.c_hours).toFixed(2)
        })
        if (this.props.onWeigthChange) {
            this.props.onWeigthChange(event.target.value, this.props.tdId, this.props.c_hours)
        }

    }


    render() {
        return (

            <tr className={"stripe-dark"} style={{ display: this.props.classed }} >
                <td className="pa3"> {this.props.course_code} </td>
                <td className="pa3"> {this.props.course_name} </td>
                <td className="pa3"> {this.props.c_hours}</td>
                <ScoreBox wieght={this.onScoreChange} />
                <td className="pa3">
                    {
                        this.state.weigthed_score
                    }
                    <input type="hidden" className={"sem" + this.props.period} value={this.state.weigthed_score} />
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