import React, { Component } from "react";
import ScoreBox from "./ScoreBox";



class CourseData extends Component {

    constructor() {
        super();
        this.state = {
            weigthed_score: "",
            score: ""
        }

    }

    onScoreChange = (event) => {
        this.setState({ score: event.target.value })

    }


    render() {


        return (

            < tr className="stripe-dark" >
                <td className="pa3"> {this.props.course_code} </td>
                <td className="pa3"> {this.props.course_name} </td>
                <td className="pa3"> {this.props.c_hours}</td>
                {/* <td className="pa3"> <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="number" max={100} min={0} /> </td>
                 */}
                <ScoreBox wieght={this.onScoreChange} />
                <td className="pa3">
                    {
                        this.state.score > 100 ? " Score Value(0-100)":this.state.score * this.props.c_hours
                        
                    }
                </td>
            </tr>
        );
    }
}


export default CourseData;