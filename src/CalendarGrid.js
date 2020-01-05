import React from 'react';
import './App.css';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

import "react-datepicker/dist/react-datepicker.css";
import WorkInterval from './WorkInterval';

const moment = extendMoment(Moment);

class CalendarGrid extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
       return (
        <table class="ui celled definition compact large table">
          <thead>
            <th>Date</th>
            {this.props.timeRange.map((item) => { 
              const timestamp = moment(item).format('HH:mm');
            return(
            <th>{timestamp}</th>)})}
          </thead>
          <tbody>
            {this.props.dateRange.map((m) => {
                return (
                <tr>  
                  <td id="row">{m.format('MM/DD')}</td>
                  {this.props.timeRange.map((item) => {
                    const timestamp = moment(item).format('HH:mm');
                    return (
                      <td class="selectable">
                        <WorkInterval 
                            datestamp={m.format('MM/DD')}
                            timestamp={timestamp}
                            dateRange = {this.props.dateRange} 
                            />
                      </td>                  
                      )
                    })} 
                </tr>
                )
              })} 
          </tbody>
        </table>
  
      )
    }
  }

  export default CalendarGrid;