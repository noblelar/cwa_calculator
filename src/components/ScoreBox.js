import React from "react";

const ScoreBox = ({ score, wieght }) => {
    return (
        <td className="pa3">
            <input className="input-reset grow ba b--black-20 pa2 mb2 db w-100" 
            type="number" 
            max={100} 
            min={0}
            onChange={wieght}

            />
        </td>
    )
}

export default ScoreBox;