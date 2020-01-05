//TODO Fix timer
//TODO Add export/import feature
import React from 'react';
import './App.css';
import Popup from 'reactjs-popup';

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

    handleUploadTimeSheet() {

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

  export default TimeSheet;