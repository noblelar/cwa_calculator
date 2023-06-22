import React, { Component } from "react";
import CourseData from './CourseData';
import Data from '../data.json';
import CWA from "./cwa";


const courseNumber = Data.map((cn, n) => {
    if (Data[n].period === 'b') {
        return n;
    }
}).filter(Number);
console.log(courseNumber.length)

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: "table",
            isOpen: false,
            courses: Array(courseNumber.length).fill(0),
            weigthed_scores: Array(courseNumber.length).fill(0),
            totalWeight: 0
        }
    }



    totalArray = (arr) => {
        const sum = arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return sum;
    }

    onWeigthChange = (score, key, credit) => {

        this.setState((prevState) => {
            const newArray = [...prevState.courses];
            newArray[key] = score;
            return { courses: newArray };
        });
        this.setState((prevState) => {
            const newWeightArray = [...prevState.weigthed_scores];
            newWeightArray[key] = score * credit;
            this.setState({ totalWeight: this.totalArray(newWeightArray) })
            return { weigthed_scores: newWeightArray };
        });
        //this.onSCChange();
    }
    // onSCChange = () =>{
    //     setTimeout(this.totalArray(this.state.courses), 1500)
    //     this.setState({ totalWeight: this.totalArray(this.state.weigthed_scores) })
    // }


    handleCollapse = () => {
        if (this.state.collapse === 'none') {
            this.setState({ collapse: "table" })
        } else {
            this.setState({ collapse: "none" })
        }

        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    };


    render() {
        let T_credit = 0;
        const { isOpen } = this.state;
        console.log(this.state.courses)
        console.log(this.state.weigthed_scores)

        console.log(this.state.totalWeight)

        return (

            <tbody className="lh-copy">
                <tr onClick={this.handleCollapse} className="pa3 sem_head totals pointer toggle-button b" colSpan={2} > Year 1 Semester 1 <span className={`arrow ${isOpen ? 'flipped' : ''} `}> &#9662; </span> </tr>


                {

                    Data.map((course, i) => {
                        if (Data[i].period === 'a') {
                            T_credit += Number(course.c_hours);
                            return (
                                <CourseData
                                    key={i}
                                    course_code={course.course_code}
                                    course_name={course.course_name}
                                    c_hours={course.c_hours}
                                    period={course.period}
                                    classed={this.state.collapse}
                                    tdId={i}
                                    onWeigthChange={this.onWeigthChange}
                                />
                            )
                        }

                    })
                }


                <tr className="stipe-dark totals">
                    {/* <td className="pa3" colSpan={2} > Semester Totals   </td> */}
                    <td className="pa3" colSpan={2}>Total Credit Hours: {T_credit} </td>
                    <td className="pa3" colSpan={2}> Total Weighted Score: {this.state.totalWeight} </td>
                    <td className="pa3" colSpan={2}> Semester Average: {(this.state.totalWeight / T_credit).toFixed(3)} </td>
                </tr>

                <CWA />

            </tbody>

        );
    }
}

export default Courses;