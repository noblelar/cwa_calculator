import React, { Component } from "react";
import CourseData from './CourseData';
import Data from '../data.json';


class Courses extends Component {
    constructor() {
        super();
        this.state = {
            w_score: ""
        }
    }


    onWeigthChange = (event) => {
        this.setState({ w_score: event.target.value })
    }


    render() {
        let T_credit = 0;

        // let w_s = document.querySelectorAll('.sema');
        // console.log(w_s);
        // // let count = 0;
        // Data.forEach((c, i) => {
        //     c.period === "a" ? count += 1 :
        //         count += 0
        // })

        // let All_W_Score = new Array(count);
        // console.log(All_W_Score);

        return (

            <tbody className="lh-copy">
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
                                />
                            )
                        }

                    })
                }

                <tr className="stipe-dark totals">
                    {/* <td className="pa3" colSpan={2} > Semester Totals   </td> */}
                    <td className="pa3" colSpan={2}>Total Credit Hours: {T_credit} </td>
                    <td className="pa3" colSpan={2}> Total Weighted Score:  </td>
                    <td className="pa3" colSpan={2}> Semester Average: </td>
                </tr>
            </tbody>

        );
    }
}

export default Courses;