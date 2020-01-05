import React from 'react';
import './App.css';

import AddProject from './AddProject';
import DisplayPeriod from './DisplayPeriod';
import ManageProjects from './ManageProjects';
import TimeSheet from './TimeSheet';
import Timer from './Timer';
import LoadTimeSheet from './LoadTimeSheet'

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
          <p>Or load an existing timesheet file: <LoadTimeSheet handleFileUpload={this.props.handleFileUpload.bind(this)} /></p>
        
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

export default Header;