import React, { Component } from "react";
import Courses from './Courses';
import SemData from '../semdata.json'



class Calcapp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            semCredits: Array(8).fill(0),
            semTotalWeight: Array(8).fill(0),
            semLevelCumWeight: 0,
            semLevelCumCredit: 0
        }
    }

    totalArray = (arr) => {
        const sum = arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return sum;
    }

    totalArrayTo = (arr, position) => {
        let sum = 0;
        for (let i = 0; i <= position; i++) {
            sum += arr[i];
        }
        return sum;
    }

    // ! Semester Total Weight 
    handleSemTotalChange = (STW, SC, semKey) => {
        // console.log(STW);
        // console.log(SC);
        // console.log(semKey);
        this.setState((prevState) => {
            const newArray = [...prevState.semTotalWeight];
            newArray[semKey] = STW;
            this.setState({semLevelCumWeight: this.totalArrayTo(newArray, semKey)})
            return { semTotalWeight: newArray };
        });
        this.setState((prevState) => {
            const newArray = [...prevState.semCredits];
            newArray[semKey] = SC;
            this.setState({semLevelCumCredit: this.totalArrayTo(newArray, semKey)})
            return { semCredits: newArray };
        });

    }

    render() {

        // console.log(this.state.semTotalWeight)
        // console.log(this.state.semLevelCumWeight)
        // console.log(this.state.semCredits)
        // console.log(this.state.semLevelCumCredit)
        
        return (
            <div>
                <div className="overflow-auto">

                    <table className="f6 w-100 mw8 center" cellSpacing="0" >
                        <thead id="tab_head">
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white"> Course Code </th>
                                <th className="fw6 tl pa3 bg-white"> Course </th>
                                <th className="fw6 tl pa3 bg-white"> Credit Hour </th>
                                <th className="fw6 tl pa3 bg-white"> Score  </th>
                                <th className="fw6 tl pa3 bg-white"> Weighted Score  </th>
                                <th className="fw6 tl pa3 bg-white"> Grade  </th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy">

                            {
                                SemData.map((sems, ss) => {
                                    return (
                                        <Courses
                                            key={ss}
                                            sem={sems.semester}
                                            name={sems.name}
                                            onSemTotalChange={this.handleSemTotalChange}
                                            indexReset={0}
                                            semIndex={ss}

                                            cwaScore={this.state.semLevelCumWeight}
                                            cwaCredit={this.state.semLevelCumCredit}

                                        />
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}

export default Calcapp;