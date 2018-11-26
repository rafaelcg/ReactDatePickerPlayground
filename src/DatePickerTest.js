import React from "react";
import PropTypes from "prop-types";

class DatePickerTest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="example-custom-input" onClick={this.props.onClick}>
        Date: {new Date(this.props.value).getFullYear()} I am changing the test:{" "}
        {new Date(this.props.value).getDate()}
      </button>
    );
  }
}

export default DatePickerTest;
