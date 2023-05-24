import React, { Component } from "react";
import CourseData from './CourseData';
import Data from '../data.json';


class Courses extends Component {


    render() {
        return (
            <div className="overflow-auto">
                <table className="f6 w-100 mw8 center" cellSpacing="0">
                    <thead>
                        <tr className="stripe-dark">
                            <th className="fw6 tl pa3 bg-white"> Course Code </th>
                            <th className="fw6 tl pa3 bg-white"> Course </th>
                            <th className="fw6 tl pa3 bg-white"> Credit Hour </th>
                            <th className="fw6 tl pa3 bg-white"> Score  </th>
                            <th className="fw6 tl pa3 bg-white"> Weighted Score  </th>
                        </tr>
                    </thead>
                    <tbody className="lh-copy">
                        {
                            Data.map((course, i) => {
                                if (Data[i].period === 'a') {
                                    return (
                                        <CourseData
                                            key={i}
                                            course_code={course.course_code}
                                            course_name={course.course_name}
                                            c_hours={course.c_hours}
                                        />
                                    )
                                }

                            })
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Courses;