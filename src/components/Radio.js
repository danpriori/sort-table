import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioClick: "name"
    };
  }

  onChange = evt => {
    this.setState({ radioClick: evt.target.value });
    this.props.sortBy(evt.target.value);
  };

  render() {
    return (
      <div className="radioButtons">
        <div className="left">
          <input
            name="sort"
            type="radio"
            value="name"
            checked={this.state.radioClick === "name" ? true : false}
            onChange={this.onChange}
          />
          <label>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className="right">
          <input
            name="sort"
            type="radio"
            value="birth"
            checked={this.state.radioClick === "birth" ? true : false}
            onChange={this.onChange}
          />
          <label>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );
  }
}

// Uncomment the snippet below
Radio.propTypes = {
  sortBy: PropTypes.func
};

export default Radio;
