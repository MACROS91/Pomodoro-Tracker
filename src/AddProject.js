import React from 'react';
import './App.css';

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

export default AddProject;