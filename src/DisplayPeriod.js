import React from 'react';
import './App.css';
import Popup from 'reactjs-popup';
import DatePicker from 'react-datepicker';

class DisplayPeriod extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      startTime: this.props.startTime,
      endTime: this.props.endTime
    }
  }

  handleStartDate(date) {
    this.props.handleStartDate(date);
  }
  handleEndDate(date) {
    this.props.handleEndDate(date);
  }
  handleStartTime(time) {
    this.props.handleStartTime(time);
  }
  handleEndTime(time) {
    this.props.handleEndTime(time);
  }



  render() {
    return (
      <Popup
        modal
        trigger={<a class="ui button">Adjust Display Period</a>}>
        <h4>Pick Start Date: <DatePicker
                              selected={this.props.startDate}
                              onChange={this.handleStartDate.bind(this)} /></h4>
        <h4>Pick End Date:   <DatePicker
                              selected={this.props.endDate}
                              onChange={this.handleEndDate.bind(this)} /></h4>
        <h4>Pick Start Time: <DatePicker
                              selected={this.props.startTime}
                              onChange={this.handleStartTime.bind(this)}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals = {30}
                              timeCaption = "Time"
                              dateFormat = "hh:mm"/></h4>
        <h4>Pick End Time:   <DatePicker
                              selected={this.props.endTime}
                              onChange={this.handleEndTime.bind(this)}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals = {30}
                              timeCaption = "Time"
                              dateFormat = "hh:mm"/></h4>
      </Popup>
    )
  }
}

export default DisplayPeriod;