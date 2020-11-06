import React from 'react';
import "./App.css";
import NumPad from "./components/NumPad";


class App extends React.Component {
  constructor(props){
      super(props);
      this.state={
        numberInput: null,
      }
  }

  render() {
    return (
      <div className="App">
        <NumPad />
      </div>
    );
  }
}


export default App;
