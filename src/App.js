import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharDisplayComponent from './CharDisplayComponent/CharDisplayComponent';

class App extends Component {

  state = {
    displayText: "Initial display text"
  }

  inputChanged = (event) => {
    const newText = event.target.value;
    this.setState({displayText: newText})
  }

  deleteItemHandler = (index) => {
    const displayText = [...this.state.displayText];
    displayText.splice(index, 1);
    const updatedText = displayText.join('');
    this.setState({displayText: updatedText});
  }

  render() {
    const text = this.state.displayText;
    let charDisplayComponentList = (
      <div>
        {text.split("").map((x, index) => {
          return <CharDisplayComponent
            char={x}
            key={index}
            onClick={() => this.deleteItemHandler(index)}
          />
        })} 
      </div>
    ) 

    return (
      <div className="App">
      <input type="text" onChange={(event) => this.inputChanged(event)} value={this.state.displayText} />
      <p>{this.state.displayText}</p>
      <ValidationComponent displayText={this.state.displayText} />
      {charDisplayComponentList}
      </div>
    );
  }
}

export default App;
