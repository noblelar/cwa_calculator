import React, { Component } from "react";
import ToggleSwitch from "./Toggle/toggler";

class CWA extends Component {
    constructor() {
        super();
        this.state = {
            displays: "none"
        }
    }

    displayCWAinput = () => {
        if (this.state.displays === 'none') {
            this.setState({ displays: "inline-block" })
        } else {
            this.setState({ displays: "none" })
        }
    }


    render() {
        return (
            <tr className="stripe-dark cwa">
                <td className="pa3 totals" colSpan={2}>
                    Cummulative Weighted Average
                </td>
                <td className="pa3 totals"> 85 </td>
                <td className="pa3">
                    <input className="input-reset grow ba b--black-20 pa2 mb1 db w-100"
                        type="number"
                        max={100}
                        min={0}
                        style={{ display: this.state.displays }}
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