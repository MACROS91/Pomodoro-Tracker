//TODO Fix timer
//TODO Add export/import feature
import React from 'react';
import './App.css';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Popup from 'reactjs-popup';
import { emojiIndex } from 'emoji-mart';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

// Import local components
import CalendarGrid from './CalendarGrid';
import Header from './Header';


const moment = extendMoment(Moment);

class App extends React.Component {
  constructor(props) {
    super(props);
    
    const start = new Date(2019,11,1);
    const end = new Date(2019,11,31);
    const range = moment.range(start,end);
    const dateRange = Array.from(range.by('days'));
    const clockStart = new Date(2019,9,1,0,0)
    const clockEnd = new Date(2019,9,1,23,59)
    const range2 = moment.range(clockStart, clockEnd);
    const timeRange = Array.from(range2.by('minutes', {step:30}));      
    let projects = localStorage.getItem('projects') ?
                   JSON.parse(localStorage.getItem('projects')) :
                   {}; 
                    
    this.state = ({
      startDate: start,
      endDate: end,
      startTime: clockStart,
      endTime: clockEnd,
      dateRange: dateRange,
      timeRange: timeRange,
      projects: projects,
      emoji: emojiIndex.search('fruit'),
      projectName: '',
      projectEmoji: ''
    })
  }
  
  handleStartDate(date) {
    const range = moment.range(date,this.state.endDate);
    const dateRange = Array.from(range.by('days'));
    this.setState({startDate: date,
                   dateRange:dateRange});
  }

  handleEndDate(date) {
    const range = moment.range(this.state.startDate,date);
    const dateRange = Array.from(range.by('days'));
    this.setState({endDate: date,
                   dateRange:dateRange});
  }

  handleStartTime(time) {
    const range2 = moment.range(time, this.state.endTime);
    const timeRange = Array.from(range2.by('minutes', {step:30}));
    this.setState({startTime: time,
                   timeRange: timeRange});
  }

  handleEndTime(time) {
    const range2 = moment.range(this.state.startTime, time);
    const timeRange = Array.from(range2.by('minutes', {step:30}));
    this.setState({endTime: time,
                   timeRange: timeRange});
  }

  handleProjectNameChange(name) {
    this.setState({projectName: name});
  }

  handleProjectEmojiChange(emoji) {
    this.setState({projectEmoji: emoji});
  }

  handleAddProject(project) {
    let tempObj = {}
    tempObj[this.state.projectName] = this.state.projectEmoji;
    this.setState(prevState => ({
      projects: {...prevState.projects,...tempObj}
    }))

    let storageObj = this.state.projects;
    storageObj[this.state.projectName] = this.state.projectEmoji;
    localStorage.setItem("projects",JSON.stringify(storageObj))
  }

  handleDeleteProject(project) {
    var projects = this.state.projects;
    delete projects[project.target.value];
    this.setState({projects:projects})
    localStorage.setItem("projects",JSON.stringify(projects))
  }

  handleFileUpload() {
    this.setState({"projects": localStorage.getItem('projects')})
  }

  render() {

    return (
        <div>
          <div>
            <Header
              startDate = {this.state.startDate}
              endDate = {this.state.endDate}
              startTime = {this.state.startTime}
              endTime = {this.state.endTime}
              dateRange = {this.state.dateRange}
              timeRange = {this.state.timeRange}
              handleStartDate = {this.handleStartDate.bind(this)}
              handleEndDate = {this.handleEndDate.bind(this)}
              handleStartTime = {this.handleStartTime.bind(this)}
              handleEndTime = {this.handleEndTime.bind(this)}
              projects = {this.state.projects}
              emoji = {this.state.emoji}
              handleAddProject = {this.handleAddProject.bind(this)}
              handleProjectNameChange = {this.handleProjectNameChange.bind(this)}
              handleProjectEmojiChange = {this.handleProjectEmojiChange.bind(this)}
              handleDeleteProject = {this.handleDeleteProject.bind(this)}
              handleFileUpload = {this.handleFileUpload.bind(this)}
               />
          </div>
          <div>
            <CalendarGrid
              dateRange = {this.state.dateRange}
              timeRange = {this.state.timeRange}
              />
          </div>
        </div>
    )
  }
}



export default App;
