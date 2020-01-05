import React from 'react';
import './App.css';
import Popup from 'reactjs-popup';


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

export default ManageProjects;