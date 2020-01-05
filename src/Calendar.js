import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

const MyCalendar = props => (
    <div>
        <Calendar
            localizer={localizer}
            events={props.myEventsList}
            startAccessor="start"
            endAccessort="end"
        />
    </div>

)

export default MyCalendar;