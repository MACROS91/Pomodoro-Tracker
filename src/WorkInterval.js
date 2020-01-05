import React from 'react';
import './App.css';
import Popup from 'reactjs-popup';

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
      let projectList = localStorage.getItem("projects") ? 
                        JSON.parse(localStorage.getItem("projects")) :
                        {};
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

export default WorkInterval;