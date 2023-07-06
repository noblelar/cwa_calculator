import React, { Component } from "react";
import ToggleSwitch from "./Toggle/toggler";

class CWA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displays: "none",
            cwa: 0
        }
    }

    displayCWAinput = () => {
        if (this.state.displays === 'none') {
            this.setState({ displays: "inline-block" })
        } else {
            this.setState({ displays: "none" })
        }
    }

    handleCWAchange = (event) => {
        this.setState({ cwa: event.target.value })
        // Perform any additional logic or actions based on the toggle switch state change
        if (this.props.onChangeCWA) {
            this.props.onChangeCWA(event.target.value, this.props.sem);
            //console.log(event.target.value)
        }
    };


    render() {

        
        return (
            <tr className="stripe-dark cwa">
                <td className="pa3 totals" colSpan={2}>
                    Cummulative Weighted Average
                </td>
                <td className="pa3 totals"> {this.props.cwaScore / this.props.cwaCredit} </td>
                <td className="pa3">
                    <input className="input-reset grow ba b--black-20 pa2 mb1 db w-100"
                        type="number"
                        max={100}
                        min={0}
                        style={{ display: this.state.displays }}
                        onChange={this.handleCWAchange}
                    />

                </td>
                <td className="pa3 fr">
                    <ToggleSwitch onChange={this.displayCWAinput} />
                </td>
            </tr>
        )
    }
}

export default CWA;