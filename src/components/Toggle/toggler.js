import React, { Component } from 'react';
import './toggle.css'


class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  handleToggle = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }));
    // Perform any additional logic or actions based on the toggle switch state change
    if (this.props.onChange) {
      this.props.onChange();
    }
  };

  render() {
    const { isChecked } = this.state;

    return (
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={this.handleToggle}
        />
        <span className="toggle-slider" />
      </label>
    );
  }
}

export default ToggleSwitch;

