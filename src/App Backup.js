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

class WorkInterval extends React.Component {
  constructor(props) {
    super(props)
    let key = this.props.datestamp + ' - ' + this.props.timestamp;
    if (localStorage.getItem(key) == null) {
      this.state = {isWorked: false,
                    taskComment: ' ',
                    project: ' '};
      }
    else {
      let work_obj = JSON.parse(localStorage.getItem(key));
      this.state = {
        isWorked:true,
        taskComment: work_obj['comment'],
        project: work_obj['project']
        }
      }
    }    
  
  handleClick(event) {
    this.setState({isWorked: !this.state.isWorked});
  }

  handleCommentChange (event) {
    this.setState({taskComment: event.target.value}, () => {
    const timestamp = this.props.datestamp + ' - ' + this.props.timestamp
    const work_obj = {
      comment: this.state.taskComment,
      project: this.state.project
    }
    localStorage.setItem(timestamp,JSON.stringify(work_obj))
    })
  }

  handleDeleteClick(event) {
    const key = this.props.datestamp + ' - ' + this.props.timestamp;
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
    this.setState({
      isWorked: false,
      taskComment: " "
    })
  }

  handleProjectChange(event) {
    this.setState({project:event.target.value.split('-')[1]})
  }

  handleSaveClick (event) {
    const timestamp = this.props.datestamp + ' - ' + this.props.timestamp
    const work_obj = {
      comment: this.state.taskComment,
      project: this.state.project
    }
    localStorage.setItem(timestamp,JSON.stringify(work_obj))
    
  }

  render() {
    let projectList = JSON.parse(localStorage.getItem("projects"));
    let key = this.props.datestamp + ' - ' + this.props.timestamp; 
    let project = localStorage.getItem(key) ? 
                  JSON.parse(localStorage.getItem(key))["project"] :
                  ' '
    return (
        <Popup 
            trigger={<a href="#" style={{textAlign: "center"}}>{project}</a>} 
            position="top left"
            closeOnDocumentClick>
            <h2>{this.props.datestamp} - {this.props.timestamp}</h2>    
            <h3>Select Project:</h3>

            <select onChange={this.handleProjectChange.bind(this)}>
            {
              Object.entries(projectList).map((key) => {
                return (<option>{key[0]} - {key[1]}</option>)
              })
            }
            </select>
              <h3>Enter comment:</h3>
              <input 
                type="text" 
                name="comment" 
                value={this.state.taskComment}
                onChange={this.handleCommentChange.bind(this)}>
              </input>
            <button type="submit" onClick={this.handleDeleteClick.bind(this)}>Delete</button></Popup>
      )
    }
}

class TimeSheet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDownloadTimeSheet() {
    // From https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
    let exportObj = localStorage;
    let exportName = "timesheet"
    var dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".csv");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  render() {
    let projects = Object.entries(localStorage).filter((key) => key[0] != "projects");
    return (
      <Popup
       trigger={<a className="ui button">View Timesheet</a>}
      >
      <h4><a type="submit" href="#" onClick={this.handleDownloadTimeSheet.bind(this)}>Download TimeSheet</a></h4>
      <h1>Timesheet</h1> 
      {projects.map((item) => {
        const projectTime = item[0];
        const projectData = JSON.parse(item[1]);
        return(
          <div>
            <h4>{projectTime} - {projectData["comment"]} {projectData["project"]}</h4>
          </div>
        )
      })
        })
        })} 
       </Popup>
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div class="ui huge message page grid">
          <h1 class="ui huge header">Pomodoro Time Tracker</h1>
          <p>A simple WebApp allowing tracking of time against projects using the Pomodoro method.</p>
          <p>Time is stored locally in the browser with no account needed.</p>
          <p>To get started, enter a project and choose an Emoji to use in the grid:</p>
          
          <AddProject 
            projects = {this.props.projects}
            emoji = {this.props.emoji}
            handleAddProject = {this.props.handleAddProject}
            handleProjectNameChange = {this.props.handleProjectNameChange}
            handleProjectEmojiChange = {this.props.handleProjectEmojiChange} 
          />
          <p>Add projects using the "Manage Projects" Button and log time by click a cell below</p>     
        <div class="ui buttons">
          <DisplayPeriod
              startDate = {this.props.startDate}
              endDate = {this.props.endDate}
              startTime = {this.props.startTime}
              endTime = {this.props.endTime}
              dateRange = {this.props.dateRange}
              timeRange = {this.props.timeRange}
              handleStartDate = {this.props.handleStartDate}
              handleEndDate = {this.props.handleEndDate}
              handleStartTime = {this.props.handleStartTime}
              handleEndTime = {this.props.handleEndTime}
            />
        </div>

        <div class="ui buttons">
          <ManageProjects 
            projects={this.props.projects}
            handleDeleteProject={this.props.handleDeleteProject}
         />
        </div>

        <div class="ui buttons">
          <TimeSheet />
        </div>

        <div class="ui buttons">   
            <Timer />
        </div>
          </div>
    </div>
    )
  }

}

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

class ManageProjects extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Popup
        trigger={<a className="ui button">Manage Projects</a>}
        position="bottom left"
        modal>
        <h2>Manage Projects</h2>
        {Object.entries(this.props.projects).map((key, index) => {
          return (
            <div>
              <h3>{key[1]}  {key[0]}  <button type="submit" value={key[0]} onClick={this.props.handleDeleteProject}>Delete</button></h3>
            </div>)
        })}
      </Popup>
    )
  }
}

class AddProject extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNameChange (event) {
    this.props.handleProjectNameChange(event.target.value);
  }

  handleEmojiChange (event) {
    this.props.handleProjectEmojiChange(event.target.value);
  }
  render() {
    return (      
        <>
        <div class="ui input">
          <input class="ui input" type="text" name="projectName" onChange={this.handleNameChange.bind(this)}></input>
        </div>
        <select onChange={this.handleEmojiChange.bind(this)}>
          {this.props.emoji.map((item) => {
            return(
              <option>{item.native}</option>
            )
          })}
        </select>
        <p> </p>
        <button class="ui button" onClick={this.props.handleAddProject}>Add Project</button>
        
    </>
    )
  }
}

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
