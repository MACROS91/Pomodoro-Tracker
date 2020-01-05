import React from 'react';
import './App.css';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentTime:moment().format('HH:mm'),
                  pomodoroTime: 0}
  }

  tick() {
    this.interval = setInterval(() => {
      this.setState(prevTime => ({
        pomodoroTime: prevTime.pomodoroTime + 1
      }));
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  clearTimer() {
    this.stopTimer();
    this.setState({pomodoroTime:0})
  }
  render () {
    return (
      <a class="ui button">Timer - {moment({ minute:this.state.pomodoroTime / 60,
                                            second:this.state.pomodoroTime % 60 }).format('m:ss')}</a>   
    )
  }
}

export default Timer;