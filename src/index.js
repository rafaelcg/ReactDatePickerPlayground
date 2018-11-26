import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import DatePickerTest from "./DatePickerTest";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  render() {
    return (
      <div className="App">
        <DatePicker
          customInput={<DatePickerTest />}
          showTimeSelect
          showMonthDropdown
          showYearDropdown
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
          selected={this.state.startDate}
          onChange={e => {
            console.log(e);
            this.setState({
              startDate: e
            });
          }}
        />

        <button
          onClick={() => {
            this.setState({ startDate: new Date("01/01/1989") });
          }}
        >
          Testing
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
