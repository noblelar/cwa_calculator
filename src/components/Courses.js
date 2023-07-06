import React, { Component } from "react";
import CourseData from './CourseData';
import Data from '../data.json';
import CWA from "./cwa";
import SemData from "../semdata.json"


const courseNumber = Data.map((cn, n) => {
    if (Data[n].period === 'b') {
        return n;
    }
}).filter(Number);
console.log(courseNumber.length)


const CreditArray = (sem) => {
    let credits = [];
    let p = 0;
    Data.forEach((course, i) => {
        if (Data[i].period === sem) {
            credits[p] = Number(course.c_hours);
            p++;
        }
    })
    return credits;
}

const divide = (dividend, divisor) => {
    let ans = 0;
    if (dividend / divisor) {
        ans = dividend / divisor;
    } else {
        ans = 0;
    }
    return ans;
}

let theKey = 0;



class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: "table",
            isOpen: false,
            courses: Array(CreditArray(this.props.sem).length).fill(0),
            credits: CreditArray(this.props.sem),
            weigthed_scores: Array(CreditArray(this.props.sem).length).fill(0),
            totalWeight: 0,
            // cwa: 0,
            sem: this.props.sem,

        }
    }

    totalArray = (arr) => {
        const sum = arr.reduce((accumulator, currentValue) => {
            return Number(accumulator) + Number(currentValue);
        }, 0);
        return sum;
    }

    //console.log(CreditArray(this.props.sem).length);

    onWeigthChange = (score, index, credit) => {

        this.setState((prevState) => {
            const newArray = [...prevState.courses];
            newArray[index] = score;
            return { courses: newArray };
        });
        this.setState((prevState) => {
            const newWeightArray = [...prevState.weigthed_scores];
            newWeightArray[index] = score * credit;
            this.setState({ totalWeight: this.totalArray(newWeightArray) })
            this.props.onSemTotalChange(this.totalArray(newWeightArray), this.totalArray(this.state.credits), this.props.semIndex)
            return { weigthed_scores: newWeightArray };
        });

        // this.setState({ cwaScore: this.props.cwaScore })
        // this.setState({ cwaCredit: this.props.cwaCredit })
        // this.setState({ cwa: this.props.cwaScore / this.props.cwaCredit })
        // console.log(this.props.cwaScore)


    }



    setStateValue = (para, value) => {
        this.setState({para: value})
    }


    onChangeCWAinput = (cwa, sem) => {
        // this.setState((prevState) => {
        //     const newArray = [...prevState.courses];
        //     newArray.forEach((marks, i) => {
        //         newArray[i] = cwa;
        //     })
        //     return { courses: newArray };
        // })
        // this.setState((prevState) => {
        //     const newWeightArray = [...prevState.weigthed_scores];
        //     newWeightArray.forEach((weight, w) => {
        //         newWeightArray[w] = this.state.creditHours[w] * cwa;
        //     })
        //     return { weigthed_scores: newWeightArray };
        // })

        // this.setCWA()
        console.log(sem)
        let totalCredit = 0;
        const semester = SemData.filter(obj => obj.semester === sem);
        console.log(semester)
        for (let i = Number(semester[0].id) - 1; i >= 0; i--) {
            Data.forEach((course, c) => {
                console.log(SemData[i].semester)
                if (course.period === SemData[i].semester) {
                    totalCredit += Number(course.c_hours);
                }
            })
        }
        SemData.forEach((sems, s) => {

        })
        // console.log(totalCredit)

        // console.log(this.state.cwa)
    }



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
        // console.log(this.state.totalWeight)
        // console.log(this.state.credits);

        // console.log(this.state.creditHours)
        // console.log(this.state.courses)
        // console.log(this.state.weigthed_scores)
        console.log(this.props.cwaCredit)
        console.log(this.props.cwaScore)
        

        // console.log(this.state.totalWeight)
        theKey = this.props.indexReset;

        return (

            <div className="lh-copy">

                <tr onClick={this.handleCollapse} className="pa3 sem_head totals pointer toggle-button b" colSpan={2} > {this.props.name} <span className={`arrow ${isOpen ? 'flipped' : ''} `}> &#9662;
                </span>
                </tr>


                {

                    Data.map((course, i) => {
                        if (Data[i].period === this.props.sem) {
                            T_credit += Number(course.c_hours);
                            theKey++;
                            //console.log(theKey-1);
                            return (
                                <CourseData
                                    key={i}
                                    course_code={course.course_code}
                                    course_name={course.course_name}
                                    c_hours={course.c_hours}
                                    period={course.period}
                                    classed={this.state.collapse}
                                    tdId={theKey - 1}
                                    onWeigthChange={this.onWeigthChange}

                                />
                            );
                        }

                    })
                }


                <tr className="stipe-dark totals" style={{ display: this.state.collapse }}>
                    {/* <td className="pa3" colSpan={2} > Semester Totals   </td> */}
                    <td className="pa3" colSpan={2}>Total Credit Hours: {T_credit} </td>
                    <td className="pa3" colSpan={2}> Total Weighted Score: {this.state.totalWeight} </td>
                    <td className="pa3" colSpan={2}> Semester Average: {(this.state.totalWeight / T_credit).toFixed(3)} </td>
                </tr>

                <CWA
                    onChangeCWA={this.onChangeCWAinput}
                    sem={this.props.semester}

                    cwaScore={this.props.cwaScore}
                    cwaCredit={this.props.cwaCredit}
                    cwa={this.props.cwaScore / this.props.cwaCredit}


                />

            </div>

        );
    }
}

export default Courses;