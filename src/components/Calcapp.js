import React, { Component } from "react";
import Courses from "./Courses";


class Calcapp extends Component {

    render() {
        return (
            <div>
                <div className="overflow-auto">
                    <table className="f6 w-100 mw8 center" cellSpacing="0">
                        <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white"> Course Code </th>
                                <th className="fw6 tl pa3 bg-white"> Course </th>
                                <th className="fw6 tl pa3 bg-white"> Credit Hour </th>
                                <th className="fw6 tl pa3 bg-white"> Score  </th>
                                <th className="fw6 tl pa3 bg-white"> Weighted Score  </th>
                                <th className="fw6 tl pa3 bg-white"> Grade  </th>
                            </tr>
                        </thead>
                        <Courses />
                    </table>
                </div>
            </div>
        )
    }
}

export default Calcapp;