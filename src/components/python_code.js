import React, { Component } from "react";
import tutorialService from "../services/tutorial.service";

export default class PythonCode extends Component {
  constructor(props) {
    super(props);
    this.pythonCodeBack = this.pythonCodeBack.bind(this);
  }


  pythonCodeBack(e){
        console.log('dentro do front');   
        tutorialService.pythonCodeBack().then(response => {
            this.setState({
              tutorials: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    
  }

  render() {
    return (
      <div className="submit-form">
            <button onClick={this.pythonCodeBack} className="btn btn-success">
                Submit
            </button>
      </div>
    );
  }
}
