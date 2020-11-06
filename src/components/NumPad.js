import React from "react";



function NumberSquare(props) {
  return (
    <button className="number-square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class NumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: "",
      inputNumberDecimal: false,
    }
  }

  handleClick(i) {
    let prev = this.state.inputNumber;
    let new_digit = i
    if (i === "." && this.state.inputNumberDecimal === true){
      return;
    }
    if (i === ".") {
      this.setState({inputNumberDecimal: true});
      new_digit = ".";
    }
    let current = prev + new_digit;
    this.setState(
      {inputNumber: current},
    )
    console.log(this.state.inputNumber);
  }

  renderNumberSquare(i){
    if (typeof i  !== "string"){
      return <NumberSquare value={i} onClick={() => this.handleClick(i)}/>;
    }
    else {
      return <NumberSquare value={i} onClick={() => this.handleClick(i)}/>;
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
