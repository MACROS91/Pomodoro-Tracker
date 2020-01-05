import React from 'react';
import './App.css';
import { callbackify } from 'util';

class LoadTimeSheet extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFileUpload (event) {
        console.log(event.target.value)
        const reader = new FileReader()
        reader.onload = function(file) {
            var result = JSON.parse(reader.result)
            console.log(result)
            Object.entries(result).map((key) => {
                console.log(key)
                localStorage.setItem(key[0], key[1]); 
            })  
            
        }
        reader.readAsText(event.target.files[0])
    }

    render () {
        return (
            <input type="file" onChange={this.handleFileUpload.bind(this)} />
        )
    }
}

export default LoadTimeSheet;