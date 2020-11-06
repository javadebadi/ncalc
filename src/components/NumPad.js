import React from "react";

function NumberSquare(props) {
  return (
    <button className="number-square">
      {props.value}
    </button>
  );
}

class NumPad extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNumberSquare(i){
    if (typeof i  !== "string"){
      return <NumberSquare value={i}/>;
    }
    else {
      return <NumberSquare value={i}/>;
    }
  }

  render() {
    return (
      <div className="numpad">
        <div className="numpad-row">
          {this.renderNumberSquare(1)}
          {this.renderNumberSquare(2)}
          {this.renderNumberSquare(3)}
        </div>
        <div className="numpad-row">
          {this.renderNumberSquare(4)}
          {this.renderNumberSquare(5)}
          {this.renderNumberSquare(6)}
        </div>
        <div className="numpad-row">
          {this.renderNumberSquare(7)}
          {this.renderNumberSquare(8)}
          {this.renderNumberSquare(9)}
        </div>
        <div className="numpad-row">
          {this.renderNumberSquare("+ -")}
          {this.renderNumberSquare(0)}
          {this.renderNumberSquare(".")}
        </div>
      </div>
    );
  }
}


export default NumPad;
